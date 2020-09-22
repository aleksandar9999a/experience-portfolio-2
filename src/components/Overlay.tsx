import ExF, { Component, CustomElement } from 'exf-ts';

const routes = [
	{ component: 'exf-hero', path: '/' },
	{ component: 'exf-skills', path: '/skills' },
	{ component: 'exf-about', path: '/about' },
	{ component: 'exf-contacts', path: '/contacts' },
	{ component: 'exf-projects', path: '/projects' },
	{ component: 'exf-settings', path: '/settings' },
	{ component: 'exf-login', path: '/login' },
	{ component: 'exf-details', path: '/details/:id' },
]


@CustomElement({
	selector: 'exf-overlay'
})
export class Overlay extends Component {

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
				<exf-navbar />

				<div className="container">
					<exf-router routes={routes} />
				</div>

				<exf-footer />
			</div>
		)
	}
}