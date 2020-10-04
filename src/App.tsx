import ExF, { Component, CustomElement } from 'exf-ts';

@CustomElement({
	selector: 'exf-app'
})
export class App extends Component {
	stylize() {
		return (
			<style>
				.wrapper {
					{
						'background-position': 'center',
						'background-repeat': 'no-repeat',
						'background-size': 'cover',
						'background-color': '#1d1d1d',
						'position': 'relative',
						'min-height': '100vh',

						'exf-load': {
							'position': 'fixed',
							'top': '0',
							'left': '0',
							'right': '0'
						},

						'exf-constellation': {
							'position': 'fixed',
							'left': '0',
							'top': '0',
						},

						'exf-notifications': {
							'position': 'fixed',
							'bottom': '10%',
							'right': '2%'
						}
					}
				}
			</style>
		)
	}

	render() {
		return (
			<div className="wrapper">
				<exf-constellation />

				<exf-overlay />

				<exf-load />

				<exf-notifications />
			</div>
		)
	}
}