import ExF, { Component, CustomElement, State } from 'exf-ts';
import { routes } from '../config/routes';
import { store } from '../redux/store';
import { IRoute } from '../Router/interfaces';

@CustomElement({
	selector: 'exf-overlay'
})
export class Overlay extends Component {
	@State('state') isAuth: boolean = false;
	@State('state') routes: IRoute[] = []

	onCreate() {
		store.subscribe(() => {
			this.isAuth = !!store.getState().user;
		})

		this.routes = routes;
	}

	stylize() {
		return (
			<style>
				.overlay {
					{
						position: 'relative',

						'.container': {
							'min-height': '86vh'
						}
					}
				}
			</style>
		)
	}

	render() {
		return (
			<div className="overlay">
				<exf-navbar isAuth={this.isAuth} />

				<div className="container">
					<exf-router routes={this.routes} />
				</div>

				<exf-footer />
			</div>
		)
	}
}