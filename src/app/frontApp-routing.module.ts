import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterFrameComponent } from './components/common/master-frame/master-frame.component';
import { LoginV1Component } from './pages/login-v1/login-v1.component';
import { LoginV2Component } from './pages/login-v2/login-v2.component';

const routes: Routes = [
  { path: '', component: MasterFrameComponent },
  { path: 'login', component: LoginV1Component },
  { path: 'loginv2', component: LoginV2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FrontAppRoutingModule { }
