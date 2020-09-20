import ExF, { Component, CustomElement, State } from 'exf-ts';
import tabsConfig from '../config/navbar';
import { ITab } from '../interfaces/interfaces';


@CustomElement({
    selector: 'exf-navbar'
})
export class Navbar extends Component {
    @State('state') tabs: ITab[] = [];

    onCreate() {
        this.tabs = tabsConfig;
    }

    stylize() {
        return (
            <style>
                .navbar {
                    {
                        'position': 'relative',
                        'display': 'flex',
                        'background-color': '#181818',

                        ul: {
                            'display': 'flex',
                            'position': 'absolute',
                            'left': '0',
                            'top': '0',
                            'right': '0',
                            'list-style-type': 'none',
                            'justify-content': 'center',

                            li: {
                                'position': 'relative',
                                'min-width': '60px'
                            }
                        },

                        'li + li': {
                            'margin-left': '30px'
                        }
                    }
                }
            </style>
        )
    }

    render() {
        return (
            <div className="navbar">
                <exf-logo />

                <ul>
                    {this.tabs.map(({ route, name, icon }) => {
                        return (
                            <li>
                                <exf-router-link route={route}>
                                    <exf-navbar-tab name={name} image={icon} />
                                </exf-router-link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}