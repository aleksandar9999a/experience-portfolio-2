import ExF, { Component, CustomElement, State } from 'exf-ts';
import { INotification } from './interfaces/interfaces';
import { store } from './redux/store';

@CustomElement({
	selector: 'exf-app'
})
export class App extends Component {
	@State('state') isLoading: boolean = false;
	@State('state') notifications: INotification[] = [];

	onCreate() {
		store.dispatch({ type: 'AUTH_CHANGE' });
		
        store.subscribe(() => {
			const { load, notifications } = store.getState();
			this.isLoading = load;
			this.notifications = notifications;
        })
    }

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
							'position': 'absolute',
							'top': '0',
							'left': '0',
							'height': '100vh',
							'right': '0'
						},

						'exf-notifications': {
							'position': 'absolute',
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

				{ this.isLoading ? <exf-load /> : null }

				<exf-notifications notifications={this.notifications} />
			</div>
		)
	}
}