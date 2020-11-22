import ExF, { Component, CustomElement, State } from 'exf-ts';
import { store } from '../redux/store';
import Styles from '../services/styles';


@CustomElement({
    selector: 'exf-login',
    dependencyInjection: true
})
export class Login extends Component {
    @State('state') email: string = '';
    @State('state') password: string = '';

    constructor(private styles: Styles) {
        super();
    }

    handleEmail = (e: any) => {
        this.email = e.target.value;
    }

    handlePassword = (e: any) => {
        this.password = e.target.value;
    }

    handleSubmit = (e: any) => {
        e.preventDefault();

        store.dispatch({ type: 'USER_LOGIN', payload: { email: this.email, password: this.password }});
    }

    render() {
        return (
            <div className="login">
                <div className="login__inner">
                    <div className="login__head">
                        <h2>Login</h2>
                    </div>

                    <div className="login-form">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form__body">
                                <div className="form__row">
                                    <div className="form__controls">
                                        <input 
                                            id="email" 
                                            type="email" 
                                            className="field" 
                                            value={this.email}
                                            onInput={this.handleEmail}
                                            required
                                        />

                                        <label htmlFor="email">Email</label>
                                    </div>
                                </div>
                                <div className="form__row">
                                    <div className="form__controls">
                                        <input 
                                            id="password" 
                                            type="password" 
                                            className="field" 
                                            value={this.password}
                                            onInput={this.handlePassword}
                                            required
                                        />

                                        <label htmlFor="password">Password</label>
                                    </div>
                                </div>
                            </div>

                            <div className="form__actions">
                                <button>Submit</button>
                            </div>
                        </form>
                    </div>

                    <div className="login__message">
                        <p>Wondering why there is a login page?</p>

                        <p>Our site also has an administrative part, which is available after logging in. Only the owner of this site has access to it.</p>
                    </div>
                </div>
            </div>
        )
    }

    stylize() {
        return (
            <style>
                .login {
                    {
                        ...this.styles.buttons,
						...this.styles.fields,
						...this.styles.forms,

                        'text-align': 'center',
                        'padding': '50px 0',

                        '.login__inner': {
                            'max-width': '600px',
                            'margin': '0 auto'
                        },

                        'h2': {
                            'font-size': '40px',
                        },

                        'p': {
                            'margin': '0',
                            'font-size': '16px'
                        }
                    }
                }
            </style>
        )
    }
}