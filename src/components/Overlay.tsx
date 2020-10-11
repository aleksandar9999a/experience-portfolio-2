import { IRoute } from 'exf-router/lib/interfaces/interfaces';
import ExF, { Component, CustomElement, State } from 'exf-ts';
import { routes } from '../config/routes';
import { store } from '../redux/store';

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
						'position': 'relative',

						'.container': {
							'min-height': '86vh',
							'max-width': '80vw',
							'margin': '0 auto'
						}
					}
				}

				@media screen and (max-width: 1300px) {
					{
						'.overlay': {
							'.container': {
								'max-width': '90vw'
							}
						}
					}
				}

				@media screen and (max-width: 700px) {
					{
						'.overlay': {
							'.container': {
								'max-width': '95vw'
							}
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