import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { StockManageComponent } from "./stock/stock-manage/stock-manage.component";

export const appRoutes:Routes = [
    {
        path: '',
        component: StockManageComponent
    }
]

@NgModule({
    imports:[ RouterModule.forRoot(appRoutes) ],
    exports: [RouterModule]
})

export class appRoutingModule{}