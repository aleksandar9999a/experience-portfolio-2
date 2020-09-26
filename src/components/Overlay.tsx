import ExF, { Component, CustomElement, State } from 'exf-ts';
import { store } from '../redux/store';

const routes = [
	{ component: 'exf-hero', path: '/' },
	{ component: 'exf-skills', path: '/skills' },
	{ component: 'exf-about', path: '/about' },
	{ component: 'exf-contacts', path: '/contacts' },
	{ component: 'exf-projects', path: '/projects' },
	{ component: 'exf-settings', path: '/settings' },
	{ component: 'exf-login', path: '/login' },
	{ component: 'exf-details', path: '/details/:id' },
	{ component: 'exf-create-project', path: '/create-project' }
]


@CustomElement({
	selector: 'exf-overlay'
})
export class Overlay extends Component {
	@State('state') isAuth: boolean = false;

	onCreate() {
		store.subscribe(() => {
			this.isAuth = !!store.getState().user;
		})
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
					<exf-router routes={routes} />
				</div>

				<exf-footer />
			</div>
		)
	}
}