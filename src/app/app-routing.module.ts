import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MusicaComponent } from './musica/musica.component';
import { MusicasComponent } from './musicas/musicas.component';
import { ArtistaComponent } from './artista/artista.component';
import { GeneroComponent } from "./genero/genero.component"
import { PesquisarComponent } from './pesquisar/pesquisar.component'

const routes: Routes = [
  { path: 'artistas/:id', component: ArtistaComponent },
  { path: 'musicas', component: MusicasComponent },
  { path: 'musicas/:id', component: MusicaComponent },
  { path: 'generos/:id', component: GeneroComponent },
  { path: 'pesquisar', component: PesquisarComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
