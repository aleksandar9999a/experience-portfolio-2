import 'core-js';
import './interfaces/interfaces';
import { ExFModule } from 'exf-ts';
import { App } from './App';
import { Navbar } from './components/Navbar';
import { Overlay } from './components/Overlay';
import { Constellation } from './components/Constellation';
import { NavbarTab } from './components/NavTab';
import { Logo } from './components/Logo';
import { Hero } from './components/Home';
import { Footer } from './components/Footer';
import { Route } from './Router/Route';
import { RouterLink } from './Router/RouterLink';
import { Router } from './Router/Router';


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
        Router
    ],
    bootstraps: [
        App
    ],
    root: 'root'
})
