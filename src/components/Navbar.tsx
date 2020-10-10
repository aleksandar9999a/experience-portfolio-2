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
                            top: 80px;
                            left: -28px;
                            width: 80px;
                            z-index: 5;
                        }

                        .navbar ul li {
                            background-color: #181818;
                            padding: 5px 0;
                            display: flex;
                            justify-content: center;
                            border-radius: 50%;
                            box-shadow: 0px 0px 1px 0px #08fdd841;
                        }

                        .navbar ul li + li {
							margin: 10px 0 0;
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
                            <li>
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