import ExF, { Component, CustomElement, Prop, State } from 'exf-ts';
import tabsConfig from '../config/navbar';
import { store } from '../redux/store';


@CustomElement({
    selector: 'exf-navbar'
})
export class Navbar extends Component {
    @Prop() isAuth: boolean = false;
    @State('style') isOpen: boolean = false;

    handleLogOut = () => {
        store.dispatch({ type: 'USER_LOGOUT' });
    }

    handleMenuOpen = () => {
        this.isOpen = !this.isOpen;
    }

    stylize() {
        return (
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

                {`
					@media screen and (max-width: 1300px) {
						.navbar ul li + li {
							margin-left: 26px;
                        }
					}

					@media screen and (max-width: 800px) {
                        .navbar .navbar__mobile {
                            display: block;
                        }

						.navbar ul {
                            display: ${this.isOpen ? 'block' : 'none'};
                            position: relative;
                            top: 0;
                            left: -28px;
                            z-index: 5;
                        }

                        .navbar ul li {
                            background-color: #181818;
                            padding: 0;
                            display: flex;
                            justify-content: center;
                            position: relative;
                            border-top: 1px solid #08fdd8;
                            border-bottom: 1px solid #08fdd8;
                        }

                        .navbar ul li + li {
                            margin: 0;
                        }
					}
				`}
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