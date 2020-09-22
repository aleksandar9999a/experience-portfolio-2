import ExF, { Component, CustomElement } from 'exf-ts';


@CustomElement({
    selector: 'exf-settings'
})
export class Settings extends Component {

    stylize() {
        return (
            <style>
                .settings {
                    {
                        'display': 'flex',
                        'justify-content': 'center',
                        'text-align': 'center',

                        'h2': {
                            'font-size': '40px',
                            'color': '#08fdd8'
                        },

                        '.about__inner': {
                            'margin-top': '50px'
                        },

                        '.about__head': {
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
            <div className="settings">
                settings
            </div>
        )
    }
}