import ExF, { Component, CustomElement, Prop } from 'exf-ts';

@CustomElement({
    selector: 'exf-navbar-tab'
})
export class NavbarTab extends Component {
    @Prop('state') name!: string;

    stylize() {
        return (
            <style>
                div {
                    {
                        'color': '#08fdd8',
                        'text-decoration': 'none',
                        'font-size': '15px',

                        'p': {
                            'display': 'block',
                            'text-align': 'center',
                            'transition': 'opacity 0.15s',
                        },

                        'p:hover': {
                            'opacity': '.7'
                        }
                    }
                }
            </style>
        )
    }

    render() {
        return (
            <div>
                <p>{this.name}</p>
            </div>
        )
    }
}