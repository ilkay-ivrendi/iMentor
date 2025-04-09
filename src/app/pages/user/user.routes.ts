import { Routes } from "@angular/router";
import { AccountSettingsComponent } from "./account-settings/account-settings.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";

export default [
    {
        path: 'user-profile',
        component: UserProfileComponent,
    },
    {
        path: 'user-profile/edit',
        component: EditProfileComponent,
    },
    {
        path: 'account-settings',
        component: AccountSettingsComponent,
    },
] as Routes;