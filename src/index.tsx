import 'core-js';
import './interfaces/interfaces';

import './index.css';

import { ExFModule } from 'exf-ts';
import { App } from './App';
import { Navbar } from './components/Navbar';
import { Overlay } from './components/Overlay';
import { Constellation } from './components/Constellation';
import { NavbarTab } from './components/NavTab';
import { Logo } from './components/Logo';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { Route } from './Router/Route';
import { RouterLink } from './Router/RouterLink';
import { Router } from './Router/Router';
import { Socials } from './components/Socials';
import { Skills } from './components/Skills';
import { Timeline } from './components/Timeline';


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
        Route,
        RouterLink,
        Router,
        Socials,
        Skills,
        Timeline
    ],
    bootstraps: [
        App
    ],
    root: 'root'
})
