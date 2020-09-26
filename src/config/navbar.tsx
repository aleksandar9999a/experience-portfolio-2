import { ITab } from '../interfaces/interfaces';
import chat from './../assets/chat.png';
import code from './../assets/code-slash.png';
import column from './../assets/column-gap.png';
import gear from './../assets/gear.png';
import house from './../assets/house.png';
import person from './../assets/person.png';


const tabsConfig: ITab[] = [
    { id: 1, name: 'Projects', route: '/projects', icon: column },
    { id: 2, name: 'Skills', route: '/skills', icon: code },
    { id: 3, name: 'Home', route: '/', icon: house },
    { id: 4, name: 'About', route: '/about', icon: person },
    { id: 5, name: 'Contacts', route: '/contacts', icon: chat },
    { id: 6, name: 'Settings', route: '/settings', auth: true, icon: gear }
]

export default tabsConfig;