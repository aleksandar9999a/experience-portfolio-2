import ExF, { Component, CustomElement, State } from 'exf-ts';
import { Unsubscribe } from 'redux';
import { INotification } from '../interfaces/interfaces';
import { store } from '../redux/store';
import { remove_notification } from '../redux/symbols';


@CustomElement({
	selector: 'exf-notifications'
})
export class Notifications extends Component {
	@State('state') notifications: INotification[] = [];

	unsubscribe!: Unsubscribe;
	
	onCreate() {
		this.unsubscribe = store.subscribe(() => {
			const { notifications } = store.getState();
			this.notifications = notifications;
		})
	}

	onDestroy() {
		this.unsubscribe()
	}

	handleRemove(id: string) {
		store.dispatch({ type: remove_notification, payload: id })
	}

	stylize() {
		return (
			<style>
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