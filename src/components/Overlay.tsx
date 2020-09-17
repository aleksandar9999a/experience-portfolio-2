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
						position: 'relative'
					}
				}
			</style>
		)
	}

	render() {
		return (
			<div className="overlay">
				<exf-navbar />

                <exf-router>
                    <exf-route route="/">
                      <exf-hero />
                    </exf-route>
                </exf-router>

                <exf-footer />
			</div>
		)
	}
}