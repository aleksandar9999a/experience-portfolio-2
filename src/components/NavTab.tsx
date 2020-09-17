import ExF, { Component, CustomElement, Prop, State } from 'exf-ts';
import tabsConfig from '../config/navbar';
import ITab from '../interfaces/interfaces';

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

                        'span': {
                            'opacity': '0',
                            'position': 'absolute',
                            'top': '5px',
                            'left': '-6px',
                            'transition': 'opacity 0.15s',
                        },

                        'img': {
                            'width': '25px',
                            'transition': 'opacity 0.15s',
                        }
                    }
                }

                div:hover {
                    {
                        'span': {
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
                <span>{this.name}</span>

                <img src={this.image} alt="settings" />
            </div>
        )
    }
}