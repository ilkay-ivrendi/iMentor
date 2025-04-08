import { Routes } from "@angular/router";
import { ClassesComponent } from "../pages/classes/classes.component";
import { DashboardComponent } from "../pages/dashboard/dashboard.component";

export default [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'classes', component: ClassesComponent },
] as Routes;