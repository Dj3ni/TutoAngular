import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-monster',
  imports: [ReactiveFormsModule],
  templateUrl: './monster.component.html',
  styleUrl: './monster.component.css'
})
export class MonsterComponent implements OnInit, OnDestroy{
  
  private _route = inject(ActivatedRoute); // pour récupérer les infos de la route
  private router = inject(Router); // Pour naviger entre les pages

  public monsterId = signal< number | undefined>(undefined);
  public routeSubscription : Subscription | null = null;
  
  //Form fields
  public name = new FormControl('', [Validators.required]);

  public hp = new FormControl(0,[
      Validators.required,
      Validators.min(1),
      Validators.max(200)
  ]);

  public submit(event : Event){
    event.preventDefault();
    console.log(this.name.value);
    console.log(this.hp.value);
  }

  // public setChanged(){
  //   this.name.setValue('Changed'); // to set it in the input field
  // }


  //MEthods

  ngOnInit(): void {
    //const params = this._route.snapshot.params; // récupère les paramètres de la route attention en marche pas pour la navigation de page en page

    this.routeSubscription = this._route.params.subscribe(params =>{
      this.monsterId.set(params['id'] ? parseInt(params['id']): undefined) // l'assigne au signal
    });    
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }

  public nextMonster(){
    let nextId = this.monsterId() || 0;
    nextId++;
    this.router.navigate(['/monster/'+ nextId])
  }



}
