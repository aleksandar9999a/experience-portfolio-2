import ExF, { Component, CustomElement } from 'exf-ts';
import './App.css';

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
                        'min-height': '100vh'
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
			</div>
		)
	}
}