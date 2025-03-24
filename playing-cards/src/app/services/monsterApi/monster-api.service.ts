import { inject, Injectable } from '@angular/core';
import { Monster } from '../../models/monster.model'
import { HttpClient } from '@angular/common/http';
import { IMonster } from '../../interfaces/monster.interface';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MonsterApiService {

  private _htpp = inject(HttpClient);
  private BASE_URL = 'http://localhost:8000/monsters/';

  public getAll(): Observable<Monster[]> {
      return this._htpp.get<IMonster[]>(this.BASE_URL).pipe(
        map(monsterJsonArray => {
          return monsterJsonArray.map<Monster>(
            monsterJson => Monster.fromJson(monsterJson)
          )        
        }
      ))
  }
  
  public getById(id: number) : Observable<Monster> {
    return this._htpp.get<IMonster>(this.BASE_URL).pipe(
      map(monsterJson => Monster.fromJson(monsterJson)
    ))
  }

  public add(monster : Monster): Observable<Monster>  {
    return this._htpp.post<IMonster>(this.BASE_URL, monster.toJson()).pipe(
      map(monsterJson => Monster.fromJson(monsterJson)
    ))
  }

  public update(monster : Monster) : Observable<Monster> {
    return this._htpp.put<IMonster>(this.BASE_URL + monster.id + '/', monster.toJson()).pipe(
      map(monsterJson => Monster.fromJson(monsterJson)
    ))
  }

  public delete (id: number): Observable<void> {
    return this._htpp.delete<void>(this.BASE_URL + id + '/')
  }
}
