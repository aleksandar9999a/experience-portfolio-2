import ExF, { Component, CustomElement } from 'exf-ts';


@CustomElement({
	selector: 'exf-projects'
})
export class Projects extends Component {

	stylize() {
		return (
			<style>
                .projects {
                    {
                        'display': 'flex',
                        'justify-content': 'center',
                        'text-align': 'center',

                        'h2': {
                            'font-size': '40px',
                            'color': '#08fdd8'
						},

                        '.skills__inner': {
                            'margin-top': '50px'
                        },

                        '.skills__head': {
                            'max-width': '1200px',
                            'margin': '0 auto 80px',
                            'color': '#fff'
                        },
                    }
                }
			</style>
		)
	}

	render() {
		return (
			<div className="projects">
                
			</div>
		)
	}
}