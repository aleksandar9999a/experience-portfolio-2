import ExF, { Component, CustomElement, Inject, State } from 'exf-ts';
import { Store, CombinedState, AnyAction } from 'redux';
import { IStore } from '../interfaces/interfaces';
import Styles from '../services/styles';


@CustomElement({
	selector: 'exf-contacts',
	dependencyInjection: true
})
export class Contacts extends Component {
	@State('state') name: string = '';
	@State('state') email: string = '';
	@State('state') subject: string = '';
	@State('state') message: string = '';
	@Inject() store!: Store<CombinedState<IStore>, AnyAction>;

	constructor(private styles: Styles) {
		super();
	}

	handleInput(e: any, type: 'name' | 'email' | 'subject' | 'message') {
		(this as any)[type] = e.target.value;
	}

	handleSubmit = (e: any) => {
		e.preventDefault();

		const payload = {
			email: this.email,
			name: this.email,
			subject: this.subject,
			message: this.message
		}

		this.store.dispatch({ type: 'SEND_EMAIL', payload });
	}

	stylize() {
		return (
			<style>
				.contacts-form {
					{
						...this.styles.buttons,
						...this.styles.fields,
						...this.styles.forms,

						'padding': '50px 0 10px',
						'text-align': 'center',

						'h2': {
							'font-size': '40px'
						}
					}
				}
			</style>
		)
	}

	render() {
		return (
			<div className="contacts-form">
				<div className="form__inner">
					<form onSubmit={this.handleSubmit}>
						<div className="form__head">
							<h2>Contact with me!</h2>
						</div>

						<div className="form__body">
							<div className="form__row">
								<div className="form__controls">
									<input
										id="name"
										type="text"
										className="field"
										value={this.name}
										onInput={(e: any) => this.handleInput(e, 'name')}
										required
									/>

									<label htmlFor="name">Name</label>
								</div>
							</div>

							<div className="form__row">
								<div className="form__controls">
									<input
										id="email"
										type="email"
										className="field"
										value={this.email}
										onInput={(e: any) => this.handleInput(e, 'email')}
										required
									/>

									<label htmlFor="email">Email</label>
								</div>
							</div>

							<div className="form__row">
								<div className="form__controls">
									<input
										id="subject"
										type="text"
										className="field"
										value={this.subject}
										onInput={(e: any) => this.handleInput(e, 'subject')}
										required
									/>

									<label htmlFor="subject">Subject</label>
								</div>
							</div>

							<div className="form__row">
								<div className="form__controls">
									<textarea
										id="message"
										className="field field--textarea"
										value={this.message}
										onInput={(e: any) => this.handleInput(e, 'message')}
										required
									/>

									<label htmlFor="message">Message</label>
								</div>
							</div>
						</div>

						<div className="form__actions">
							<button>Send</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}