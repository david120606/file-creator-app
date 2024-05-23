import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileCreatorComponent } from './Components/file-creator/file-creator.component';
import { GreetComponent } from './Components/greet/greet.component';

const routes: Routes = [
  { path: 'greet', component: GreetComponent },
  { path: 'file-creator', component: FileCreatorComponent },
  { path: '', redirectTo: '/greet', pathMatch: 'full' },
  { path: '**', redirectTo: '/greet' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
