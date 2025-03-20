import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MonsterType } from '../../utils/monster.utils';
import { PlayingCardComponent } from "../../components/playing-card/playing-card.component";
import { Monster } from '../../models/monster.model';
import { MonsterService } from '../../services/monster/monster-service';

@Component({
  selector: 'app-monster',
  imports: [ReactiveFormsModule, PlayingCardComponent],
  templateUrl: './monster.component.html',
  styleUrl: './monster.component.css'
})
export class MonsterComponent implements OnInit, OnDestroy{
  
  private _route = inject(ActivatedRoute); // pour récupérer les infos de la route
  private _router = inject(Router); // Pour naviger entre les pages
  private _monsterService = inject(MonsterService); //Pour accéder aux méthodes du service

  // public monsterId = signal< number | undefined>(undefined);
  public monsterId = -1;
  private _routeSubscription : Subscription | null = null;
  private _formValueSubscription : Subscription |null = null;

  public monsterTypes = Object.values(MonsterType);
    
  //Form Builder
  private fb = inject(FormBuilder);
  //On remplace new FormGroup par this.fb.group. On lui passe un dictionnaire en paramètre:
  formGroup = this.fb.group({
    name: ['', [Validators.required]],
    hp : [0, [Validators.required, Validators.max(200), Validators.min(0)]],
    image : ['', [Validators.required]],
    type : [MonsterType.ELECTRIC,[Validators.required]],
    figureCaption : ['', [Validators.required]],
    attackName : ['', [Validators.required]],
    attackStrength: [0, [Validators.required, Validators.max(200), Validators.min(0)]],
    attackDescription: ['', [Validators.required]],
  });

  public monster : Monster = Object.assign(new Monster(), this.formGroup.value)
  //Form group
  // formGroup = new FormGroup({
  //   name: new FormControl('', [Validators.required]),
  //   hp : new FormControl(0, [Validators.required, Validators.max(200), Validators.min(0)]),
  //   image : new FormControl('', [Validators.required]),
  //   type : new FormControl(MonsterType.ELECTRIC,[Validators.required]),
  //   figureCaption : new FormControl('', [Validators.required]),
  //   attackName : new FormControl('', [Validators.required]),
  //   attackStrength: new FormControl(0, [Validators.required, Validators.max(200), Validators.min(0)]),
  //   attackDescription: new FormControl('', [Validators.required]),
  // });
  
  
  //Form fields
  // public name = new FormControl('', [Validators.required]);

  // public hp = new FormControl(0,[
  //     Validators.required,
  //     Validators.min(1),
  //     Validators.max(200)
  // ]);

  public submit(event : Event): void{
    event.preventDefault();
    console.log(this.formGroup.value);
    // console.log(this.name.value);
    // console.log(this.hp.value);
    if(this.monsterId === -1){
      this._monsterService.add(this.monster)
    }
    else{
      this.monster.id = this.monsterId;
      this._monsterService.update(this.monster);
    }
    this.navigateBack();
  }

  public isFieldValid(fieldName : string): boolean | undefined{
    const formControl = this.formGroup.get(fieldName);
    return formControl?.invalid && (formControl?.dirty || formControl?.touched)
  }

  public onFileChange(event: any): void{
    const reader = new FileReader();
    if(event.target.files && event.target.files.length){
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = ()=>{
        this.formGroup.patchValue({
          image:reader.result as string,
        })
      }
    }
  }

  // public setChanged(){
  //   this.name.setValue('Changed'); // to set it in the input field
  // }


  //MEthods

  ngOnInit(): void {
    //const params = this._route.snapshot.params; // récupère les paramètres de la route attention en marche pas pour la navigation de page en page

    this._formValueSubscription = this.formGroup.valueChanges.subscribe(data =>{
      this.monster = Object.assign(new Monster(), data)
    })

    //Before using monsterService
    // this._routeSubscription = this._route.params.subscribe(params =>{
    //   this.monsterId.set(params['id'] ? parseInt(params['id']): undefined) // l'assigne au signal
    // });
    console.log(this._route.params);
    this._routeSubscription = this._route.params.subscribe(params =>{
      if(params['id']){
        this.monsterId = parseInt(params['id']);
        const monsterFound = this._monsterService.getById(this.monsterId)
        if(monsterFound){
          this.monster  = monsterFound;
          this.formGroup.patchValue(this.monster)
        }
      }      
    })
  }

  ngOnDestroy(): void {
    this._formValueSubscription?.unsubscribe();
    this._routeSubscription?.unsubscribe();
  }

  // public nextMonster(){
  //   let nextId = this.monsterId || 0;
  //   nextId++;
  //   this.router.navigate(['/monster/'+ nextId])
  // }
  public navigateBack():void {
    this._router.navigate(['/home']);
  }


}
