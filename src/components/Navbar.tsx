import ExF, { Component, CustomElement, Prop } from 'exf-ts';
import tabsConfig from '../config/navbar';
import { store } from '../redux/store';
import arrow from './../assets/arrow-bar-right.png'


@CustomElement({
    selector: 'exf-navbar'
})
export class Navbar extends Component {
    @Prop('state') isAuth: boolean = false;

    handleLogOut = () => {
        store.dispatch({ type: 'USER_LOGOUT' });
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
                            'margin-left': '50px'
                        },

                        '.navbar__logout': {
                            'position': 'absolute',
                            'top': '20px',
                            'right': '6px',
                            'min-width': '60px',
                            'cursor': 'pointer'
                        }
                    }
                }
            </style>
        )
    }

    render() {
        const tabs = this.isAuth
            ? tabsConfig
            : tabsConfig.filter(tab => !tab.auth)

        return (
            <div className="navbar">
                <exf-logo />

                <ul>
                    {tabs.map(({ route, name, icon }) => {
                        return (
                            <li>
                                <exf-router-link route={route}>
                                    <exf-navbar-tab name={name} image={icon} />
                                </exf-router-link>
                            </li>
                        )
                    })}
                </ul>

                {
                    this.isAuth
                        ? (
                            <div className="navbar__logout" onClick={this.handleLogOut}>
                                <exf-navbar-tab name={'Log Out'} image={arrow} />
                            </div>
                        )
                        : null
                }
            </div>
        )
    }
}