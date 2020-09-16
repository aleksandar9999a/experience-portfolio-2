import 'core-js';
import './interfaces/interfaces';
import { ExFModule } from 'exf-ts';
import { App } from './App';
import { Navbar } from './components/Navbar';
import { Overlay } from './components/Overlay';
import { Constellation } from './components/Constellation';
import { NavbarTab } from './components/NavTab';
import { Logo } from './components/Logo';


ExFModule({
	components: [
		Overlay,
		App,
		Navbar,
		Constellation,
        NavbarTab,
        Logo
	],
	bootstraps: [
		App
	],
	root: 'root'
})
