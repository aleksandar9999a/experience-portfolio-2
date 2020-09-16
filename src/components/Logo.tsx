import ExF, { Component, CustomElement } from 'exf-ts';

@CustomElement({
	selector: 'exf-logo'
})
export class Logo extends Component {
	render() {
		return (
			<a className="logo" href="/">
				<p>A</p>

				<span>Alexandar</span>
			</a>
		)
	}

	stylize() {
		return (
			<style>
				.logo {
					{
						'text-decoration': 'none',
						'display': 'inline-block',
						'text-align': 'center',
						'color': '#08fdd8',
						'background': 'black',
						'padding': '10px',
						'font-size': '20px',
						'transition': 'transform .1s',

						p: {
							'margin-block-start': '0',
							'margin-block-end': '0',
							'margin-inline-start': '0',
							'margin-inline-end': '0',
						},

						span: {
							'display': 'inline-block',
							'font-size': '10px',
						}
					}
				}

				.logo:hover {
					{
						'transform': 'scale(1.1)'
					}
				}
			</style>
		)
	}
}