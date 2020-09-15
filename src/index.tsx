import 'core-js';
import { ExFModule } from 'exf-ts';
import { App } from './App';

ExFModule({
	components: [
		App
	],
	bootstraps: [
		App
	],
	root: 'root'
})

