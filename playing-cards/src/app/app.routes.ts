import { Routes } from '@angular/router';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { MonsterListComponent } from './pages/monster-list/monster-list.component';
import { MonsterComponent } from './pages/monster/monster.component';
import { MonsterNotFoundComponent } from './pages/monster-not-found/monster-not-found.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'home', component : MonsterListComponent},
    {path:"login", component: LoginComponent},
    {path : 'monster', children : [
        {path:'', component : MonsterComponent,},
        {path:':id', component : MonsterComponent},
    ]},

    // routes avec paramètres
    //{path:'monster/:id', component : MonsterComponent},

    //Toutes routes non identifiées doivent être redirigées vers page NotFound:
    {path : '**', component : MonsterNotFoundComponent}, 

];
