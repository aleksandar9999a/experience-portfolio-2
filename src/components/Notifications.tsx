import ExF, { Component, CustomElement, ModuleInjected, State } from 'exf-ts';
import { AnyAction, CombinedState, Store, Unsubscribe } from 'redux';
import { INotification, IStore } from '../interfaces/interfaces';
import { remove_notification } from '../redux/symbols';


@CustomElement({
	selector: 'exf-notifications'
})
export class Notifications extends Component {
	@State('state') notifications: INotification[] = [];
	@ModuleInjected() store!: Store<CombinedState<IStore>, AnyAction>;

	unsubscribe!: Unsubscribe;
	
	onCreate() {
		this.unsubscribe = this.store.subscribe(() => {
			const { notifications } = this.store.getState();
			this.notifications = notifications;
		})
	}

	onDestroy() {
		this.unsubscribe()
	}

	handleRemove(id: string) {
		this.store.dispatch({ type: remove_notification, payload: id })
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