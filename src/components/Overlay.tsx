import ExF, { Component, CustomElement, Inject, State } from 'exf-ts';
import { AnyAction, CombinedState, Store, Unsubscribe } from 'redux';
import { IStore } from '../interfaces/interfaces';
import { Routes } from '../services/routes';

@CustomElement({
	selector: 'exf-overlay',
	dependencyInjection: true
})
export class Overlay extends Component {
	@State('state') isAuth: boolean = false;
	@Inject() store!: Store<CombinedState<IStore>, AnyAction>;

	unsubscribe!: Unsubscribe;

	constructor (private routes: Routes) {
		super();
	}
	
	onCreate() {
		this.unsubscribe = this.store.subscribe(() => {
			this.isAuth = !!this.store.getState().user;
		})
	}

	onDestroy() {
		this.unsubscribe()
	}

	stylize() {
		return (
			<style>
				.overlay {
					{
						'position': 'relative',

						'.container': {
							'min-height': '86vh',
							'max-width': '80vw',
							'margin': '0 auto'
						}
					}
				}

				@media screen and (max-width: 1300px) {
					{
						'.overlay': {
							'.container': {
								'max-width': '90vw'
							}
						}
					}
				}

				@media screen and (max-width: 700px) {
					{
						'.overlay': {
							'.container': {
								'max-width': '95vw'
							}
						}
					}
				}
			</style>
		)
	}

	render() {
		return (
			<div className="overlay">
				<exf-navbar isAuth={this.isAuth} />

				<div className="container">
					<exf-router routes={this.routes.routes} />
				</div>

				<exf-footer />
			</div>
		)
	}
}