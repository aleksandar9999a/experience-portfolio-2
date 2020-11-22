import 'core-js';
import './interfaces/interfaces';
import './firebase';

import './index.css';

import { ExFModule } from 'exf-ts';
import { Router, RouterLink } from 'exf-router';

import { App } from './App';
import { Navbar } from './components/Navbar';
import { Overlay } from './components/Overlay';
import { Constellation } from './components/Constellation';
import { NavbarTab } from './components/NavTab';
import { Logo } from './components/Logo';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { Skills } from './components/Skills';
import { Timeline } from './components/Timeline';
import { About } from './components/About';
import { Contacts } from './components/Contacts';
import { Projects } from './components/Projects';
import { Settings } from './components/Settings';
import { Project } from './components/Project';
import { ContactsList } from './components/ContactsList';
import { Details } from './components/Details';
import { Login } from './components/Login';
import { Load } from './components/Load';
import { Notifications } from './components/Notifications';
import { Notification } from './components/Notification';
import { CreateProjectTile } from './components/CreateProjectTile';
import { CreateProject } from './components/CreateProject';
import { store } from './redux/store';
import { Carousel } from './components/Carousel';


store.dispatch({ type: 'AUTH_CHANGE' });


ExFModule({
    components: [
        Overlay,
        App,
        Navbar,
        Constellation,
        NavbarTab,
        Logo,
        Hero,
        Footer,
        RouterLink,
        Router,
        Skills,
        Timeline,
        About,
        Contacts,
        Projects,
        Settings,
        Project,
        ContactsList,
        Details,
        Login,
        Load,
        Notifications,
        Notification,
        CreateProjectTile,
        CreateProject,
        Carousel
    ],
    bootstraps: [
        App
    ],
    root: 'root'
})
