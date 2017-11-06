import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from './dashboard/dashboard.component';
import { StockManageComponent } from "./stock/stock-manage/stock-manage.component";

export const appRoutes:Routes = [
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path: 'home',
        component: DashboardComponent
    },
    {
        path: 'stock',
        component: StockManageComponent
    },
    {
        path: '**',
        component: DashboardComponent
    }
]

@NgModule({
    imports:[ RouterModule.forRoot(appRoutes) ],
    exports: [RouterModule]
})

export class appRoutingModule{}