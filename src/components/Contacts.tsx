import ExF, { Component, CustomElement } from 'exf-ts';


@CustomElement({
	selector: 'exf-contacts'
})
export class Contacts extends Component {

	stylize() {
		return (
			<style>
				.contacts-form {
					{
						'padding': '50px 0 10px',
						'text-align': 'center',
						'min-height': '80vh',
						'h2': {
							'font-size': '40px'
						},

						'.form__inner': {
							'max-width': '500px',
							'margin': '0 auto'
						},

						'.form__controls': {
							'position': 'relative',
							'padding': '10px 0'
						},

						'.form__row + .form__row': {
							'margin-top': '20px'
						},

						'.field': {
							'display': 'flex',
							'border': '1px solid transparent',
							'background': '#2b2b2b',
							'color': 'white',
							'width': '100%',
							'font-size': '16px',
							'padding': '20px',
							'transition': 'border-color .15s',
							'outline': 'none',
						},

						'.field--textarea': {
							'height': '150px',
							'padding': '20px 20px'
						},

						'.field:focus': {
							'border-color': '#08fdd8'
						},

						'.field:focus ~ label': {
							'top': '-15px',
							'left': '10px',
							'color': '#08fdd8'
						},

						'label': {
							'position': 'absolute',
							'top': '27px',
							'left': '21px',
							'color': '#fff',
							'transition': 'top .1s, left .1s, color .1s'
						},

						'button': {
							'height': '50px',
							'color': '#08fdd8',
							'font-size': '11px',
							'letter-spacing': '3px',
							'border': '1px solid #08fdd8',
							'border-radius': '4px',
							'background': 'transparent',
							'text-transform': 'uppercase',
							'padding': '15px 35px',
							'transition': 'box-shadow .15s',
						},

						'button:hover': {
							'box-shadow': '1px 1px 20px #08fdd841'
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
					<form>
						<div className="form__head">
							<h2>Contact with me!</h2>
						</div>

						<div className="form__body">
							<div className="form__row">
								<div className="form__controls">
									<input id="name" type="text" className="field" />

									<label htmlFor="name">Name</label>
								</div>
							</div>

							<div className="form__row">
								<div className="form__controls">
									<input id="email" type="email" className="field" />

									<label htmlFor="email">Email</label>
								</div>
							</div>

							<div className="form__row">
								<div className="form__controls">
									<input id="subject" type="text" className="field" />

									<label htmlFor="subject">Subject</label>
								</div>
							</div>

							<div className="form__row">
								<div className="form__controls">
									<textarea id="message" className="field field--textarea" />

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