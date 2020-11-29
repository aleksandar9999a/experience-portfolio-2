import ExF, { Component, CustomElement, Inject, Prop, State } from 'exf-ts';
import { Store, CombinedState, AnyAction } from 'redux';
import { IStore } from '../interfaces/interfaces';
import { Routes } from '../services/routes';


@CustomElement({
    selector: 'exf-navbar',
    dependencyInjection: true
})
export class Navbar extends Component {
    @Prop() isAuth: boolean = false;
    @State('style') isOpen: boolean = false;
    @Inject() store!: Store<CombinedState<IStore>, AnyAction>;

    constructor (private routes: Routes) {
        super();
    }

    handleLogOut = () => {
        this.store.dispatch({ type: 'USER_LOGOUT' });
    }

    handleMenuOpen = () => {
        this.isOpen = !this.isOpen;
    }
    
    stylize() {
        return (
            <styles>
                <style>
                    .navbar {
                        {
                            'position': 'relative',
                            'background-color': '#181818',

                            '.navbar__mobile': {
                                'display': 'none',
                                'position': 'absolute',
                                'top': '10px',
                                'left': this.isAuth ? '100px' : 'calc(100% - 50px)'
                            },

                            'ul': {
                                'display': 'flex',
                                'position': 'absolute',
                                'left': '0',
                                'top': '10px',
                                'right': '0',
                                'list-style-type': 'none',
                                'justify-content': 'center',
                                'margin': '0',

                                'li': {
                                    'position': 'relative',
                                    'min-width': '60px'
                                }
                            },

                            'li + li': {
                                'margin-left': '50px'
                            },

                            '.navbar__logout': {
                                'position': 'absolute',
                                'top': '10px',
                                'right': '6px',
                                'min-width': '60px',
                                'cursor': 'pointer'
                            }
                        }
                    }
                </style>

                <style>
                    @media screen and (max-width: 1300px) {
                        {
                            '.navbar': {
                                'ul': {
                                    'li + li': {
                                        'margin-left': '26px'
                                    }
                                }
                            }
                        }
                    }
                </style>

                <style>
                    @media screen and (max-width: 800px) {
                        {
                            '.navbar': {
                                '.navbar__mobile': {
                                    'display': 'block'
                                },

                                'ul': {
                                    'display': this.isOpen ? 'block' : 'none',
                                    'position': 'relative',
                                    'top': '0',
                                    'left': '-28px',
                                    'z-index': '5',

                                    'li': {
                                        'background - color': '#181818',
                                        'padding': '0',
                                        'display': 'flex',
                                        'justify-content': 'center',
                                        'position': 'relative',
                                        'border-top': '1px solid #08fdd8',
                                        'border-bottom': '1px solid #08fdd8',
                                    },

                                    'li + li': {
                                        'margin': '0'
                                    }
                                }
                            }
                        }
                    }
                </style>
            </styles>
        )
    }

    render() {
        const tabs = this.isAuth
            ? this.routes.tabs
            : this.routes.tabs.filter(tab => !tab.auth)

        return (
            <div className="navbar">
                <exf-logo />

                <div className="navbar__mobile" onClick={this.handleMenuOpen}>
                    <exf-navbar-tab name="Menu" />
                </div>

                <ul>
                    {tabs.map(({ route, name }) => {
                        return (
                            <li onClick={this.handleMenuOpen}>
                                <exf-router-link route={route}>
                                    <exf-navbar-tab name={name} />
                                </exf-router-link>
                            </li>
                        )
                    })}
                </ul>

                {this.isAuth
                    ? (
                        <div className="navbar__logout" onClick={this.handleLogOut}>
                            <exf-navbar-tab name="Log Out" />
                        </div>
                    )
                    : null}
            </div>
        )
    }
}