import ExF, { Component, CustomElement, State } from 'exf-ts';
import { INotification } from '../interfaces/interfaces';
import { store } from '../redux/store';
import { remove_notification } from '../redux/symbols';


@CustomElement({
	selector: 'exf-notifications'
})
export class Notifications extends Component {
	@State('state') notifications: INotification[] = [];

	onCreate() {
		store.subscribe(() => {
			const { notifications } = store.getState();
			this.notifications = notifications;
		})
	}

	handleRemove(id: string) {
		store.dispatch({ type: remove_notification, payload: id })
	}

	stylize() {
		return (
			<style>
				{`@keyframes on-create {        
					from {
						opacity : 0;
						right : -500px;
					}
					to {
						opacity : 1;
						right : 0;
					}      
				}`}

				.notifications {
					{
						'ul': {
							'list-style-type': 'none',
							'position': 'relative'
						},
					}
				}
			</style>
		)
	}

	render() {
		return (
			<div className="notifications">
				<ul>
					{this.notifications.map((data, index) => {
						return <exf-notification id={data.id} index={index} data={data} />
					})}
				</ul>
			</div>
		)
	}
}