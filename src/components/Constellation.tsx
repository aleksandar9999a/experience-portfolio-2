import ExF, { Component, CustomElement, Ref } from 'exf-ts';
import constellation_config from '../config/constellationConfig';
import { IConstellationConfig } from '../interfaces/interfaces';
import Star from './Star';

function createStar(context: CanvasRenderingContext2D, width: number, height: number) {
	return new Star(context, width, height);
}

@CustomElement({
	selector: 'exf-constellation'
})
export class Constellation extends Component {
	@Ref({ id: 'constellation' }) canvas!: HTMLCanvasElement;
	private context!: CanvasRenderingContext2D | null;
	private constellation_config!: IConstellationConfig;

	onCreate() {
		this.context = this.canvas.getContext("2d");
		this.constellation_config = constellation_config;
		this.canvas.width = this.constellation_config.width;
		this.canvas.height = this.constellation_config.height;

		this.init();
	}

	private setContext() {
		this.context!.fillStyle = this.constellation_config.star.color;
		this.context!.strokeStyle = this.constellation_config.line.color;
		this.context!.lineWidth = this.constellation_config.line.width;
	};

	private loop(callback: Function) {
		callback()
		requestAnimationFrame(this.loop.bind(this, callback));
	};

	private subscribeForResize(star: Star) {
		window.addEventListener('resize', () => {
			this.canvas.width = window.innerWidth;
			this.canvas.height = window.innerHeight;
			this.setContext();
			star.setWindowSize(window.innerWidth, window.innerHeight);
		})
	}

	init() {
		this.setContext();
		const star = createStar(this.context as CanvasRenderingContext2D, this.canvas.width, this.canvas.height);
		this.subscribeForResize(star);
		this.loop(star.animate.bind(star));
	};

	render() {
		return <canvas id="constellation"></canvas>
	}
}