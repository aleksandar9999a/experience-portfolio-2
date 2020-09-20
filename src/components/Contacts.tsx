import ExF, { Component, CustomElement } from 'exf-ts';


@CustomElement({
	selector: 'exf-contacts'
})
export class Contacts extends Component {

	stylize() {
		return (
			<style>
				.contacts {
					{
						position: 'relative'
					}
				}
			</style>
		)
	}

	render() {
		return (
			<div className="contacts">
				contacts
			</div>
		)
	}
}