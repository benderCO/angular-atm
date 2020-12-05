import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLandingComponent } from 'src/app/wwwroot/admin/admin-landing/admin-landing.component';
import { LoginComponent } from 'src/app/wwwroot/login/login.component';
import { OverviewComponent } from 'src/app/wwwroot/admin/overview/overview.component';
import { RestockComponent } from 'src/app/wwwroot/admin/restock/restock.component';
import { PageNotFoundComponent } from 'src/app/wwwroot/shared/page-not-found/page-not-found.component'
import { WithdrawComponent } from 'src/app/wwwroot/user/withdraw/withdraw.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'admin-landing',
        component: AdminLandingComponent,
    },
    {
        path: 'overview',
        component: OverviewComponent,
    },
    {
        path: 'restock',
        component: RestockComponent,
    },
    {
        path: 'withdraw',
        component: WithdrawComponent,
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
