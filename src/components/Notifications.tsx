import ExF, { Component, CustomElement, State } from 'exf-ts';
import { INotification } from '../interfaces/interfaces';


@CustomElement({
	selector: 'exf-notifications'
})
export class Notifications extends Component {
	@State('state') notifications: INotification[] = [];

	stylize() {
		return (
			<style>
				.notifications {
                    
				}
			</style>
		)
	}

	render() {
		return (
			<div className="notifications">
                Notifications
			</div>
		)
	}
}