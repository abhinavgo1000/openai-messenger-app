import { DialogData } from '../interfaces/dialog-data.interface';

export const DialogRenderData: DialogData[] = [
    {
        title: 'Welcome to the Website!',
        description: 'We hope that you like the exciting service we have to offer!',
        component: '',
        acceptLabel: 'OK',
        closeLabel: 'Cancel',
    },
    {
        title: 'Check your account now',
        description: 'Visit your account or profile to view or update any account or profile details.',
        component: '',
        acceptLabel: 'OK',
        closeLabel: 'Cancel'
    },
    {
        title: 'Profile',
        description: 'Your profile details',
        component: 'profile-update',
        acceptLabel: 'OK',
        closeLabel: 'Cancel'
    },
    {
        title: 'My account',
        description: 'Your account details',
        component: 'user-update',
        acceptLabel: 'Ok',
        closeLabel: 'Cancel'
    }
]
