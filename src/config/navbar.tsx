import { ITab } from '../interfaces/interfaces';


const tabsConfig: ITab[] = [
    { id: 1, name: 'Projects', route: '/projects' },
    { id: 2, name: 'Skills', route: '/skills' },
    { id: 3, name: 'Home', route: '/' },
    { id: 4, name: 'About', route: '/about' },
    { id: 5, name: 'Contacts', route: '/contacts' },
    { id: 6, name: 'Settings', route: '/settings', auth: true }
]

export default tabsConfig;