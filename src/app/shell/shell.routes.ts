import { Routes } from "@angular/router";
import { ClassesComponent } from "../pages/classes/classes.component";
import { DashboardComponent } from "../pages/dashboard/dashboard.component";
import { IMentorComponent } from "../pages/i-mentor/i-mentor.component";
import { ClassroomComponent } from "../pages/classroom/classroom.component";

export default [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'imentor', component: IMentorComponent },
    { path: 'classes', component: ClassesComponent },
    { path: 'classroom', component: ClassroomComponent },
] as Routes;