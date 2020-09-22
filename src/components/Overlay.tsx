import ExF, { Component, CustomElement } from 'exf-ts';


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
					<exf-router>
						<exf-route route="/">
							<exf-hero />
						</exf-route>

						<exf-route route="/skills">
							<exf-skills />
						</exf-route>

						<exf-route route="/about">
							<exf-about />
						</exf-route>

						<exf-route route="/contacts">
							<exf-contacts />
						</exf-route>

						<exf-route route="/projects">
							<exf-projects />
						</exf-route>
					</exf-router>
				</div>

				<exf-footer />
			</div>
		)
	}
}