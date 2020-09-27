import ExF, { Component, CustomElement, Prop } from 'exf-ts';

@CustomElement({
    selector: 'exf-navbar-tab'
})
export class NavbarTab extends Component {
    @Prop('state') name!: string;
    @Prop('state') image!: string;

    stylize() {
        return (
            <style>
                div {
                    {
                        'color': '#08fdd8',
                        'text-decoration': 'none',
                        'font-size': '15px',
                        'width': '60px',
                        'position': 'relative',

                        'p': {
                            'opacity': '0',
                            'display': 'block',
                            'position': 'absolute',
                            'text-align': 'center',
                            'top': '-11px',
                            'left': '0',
                            'right': '0',
                            'transition': 'opacity 0.15s',
                        },

                        'img': {
                            'display': 'flex',
                            'width': '25px',
                            'margin': 'auto',
                            'transition': 'opacity 0.15s',
                        }
                    }
                }

                div:hover {
                    {
                        'p': {
                            'opacity': '1'
                        },

                        'img': {
                            'opacity': '0'
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

                <img src={this.image} alt="settings" />
            </div>
        )
    }
}