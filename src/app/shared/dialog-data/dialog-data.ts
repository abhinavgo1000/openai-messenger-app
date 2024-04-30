import { ProfileUpdateComponent } from '../../components/profile-update/profile-update.component';
import { UserUpdateComponent } from '../../components/user-update/user-update.component';
import { DialogData } from '../interfaces/dialog-data.interface';

export const DialogRenderData: DialogData[] = [
    {
        title: 'Welcome to the Website!',
        description: 'We hope that you like the exciting service we have to offer!',
        component: undefined,
        acceptLabel: 'OK',
        closeLabel: 'Cancel',
    },
    {
        title: 'Check your account now',
        description: 'Visit your account or profile to view or update any account or profile details.',
        component: undefined,
        acceptLabel: 'OK',
        closeLabel: 'Cancel'
    },
    {
        title: 'Profile',
        description: 'Your profile details',
        component: ProfileUpdateComponent,
        acceptLabel: 'OK',
        closeLabel: 'Cancel'
    },
    {
        title: 'My account',
        description: 'Your account details',
        component: UserUpdateComponent,
        acceptLabel: 'Ok',
        closeLabel: 'Cancel'
    }
]
