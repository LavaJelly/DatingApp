import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';

// EL orden en los path es importante, ya que se compara desde el primer path hasta el ultimo para ver si hay coincidencias.
// Si el path '**' ( wildcard o comodín ) estuviera primero, ninguno de los otros path seria accesible.
export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    {
        path: '', // el string de path en ese caso, es concatenado con el path de sus children. ej: '' + 'members'
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'members', component: MemberListComponent},
            { path: 'messages', component: MessagesComponent},
            { path: 'lists', component: ListsComponent},
        ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full'},
];
