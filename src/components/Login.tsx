import ExF, { Component, CustomElement, State } from 'exf-ts';
import { store } from '../redux/store';


@CustomElement({
    selector: 'exf-login'
})
export class Login extends Component {
    @State('state') email: string = '';
    @State('state') password: string = '';

    handleEmail = (e: any) => {
        this.email = e.target.value;
    }

    handlePassword = (e: any) => {
        this.password = e.target.value;
    }

    handleSubmit = (e: any) => {
        e.preventDefault();

        store.dispatch({ type: 'USER_LOGIN', payload: { email: this.email, password: this.password }});

        this.email = '';
        this.password = '';
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
                        'text-align': 'center',
                        'padding': '50px 0',

                        '.login__inner': {
                            'max-width': '600px',
                            'margin': '0 auto'
                        },

                        '.form__actions': {
                            'margin': '25px 0'
                        },

                        'h2': {
                            'font-size': '40px',
                        },

                        'p': {
                            'margin': '0',
                            'font-size': '16px'
                        },

                        'button': {
                            'height': '50px',
                            'color': '#08fdd8',
                            'font-size': '11px',
                            'letter-spacing': '3px',
                            'border': '1px solid #08fdd8',
                            'border-radius': '4px',
                            'background': 'transparent',
                            'text-transform': 'uppercase',
                            'padding': '15px 35px',
                            'transition': 'box-shadow .15s',
                            'cursor': 'pointer'
                        },

                        'button:hover': {
                            'box-shadow': '1px 1px 20px #08fdd841'
                        },

                        '.form__controls': {
							'position': 'relative',
							'padding': '10px 0'
						},

						'.form__row + .form__row': {
							'margin-top': '20px'
						},

						'.field': {
							'display': 'flex',
							'border': '1px solid transparent',
							'background': '#2b2b2b',
							'color': 'white',
							'width': '100%',
							'font-size': '16px',
							'padding': '20px',
							'transition': 'border-color .15s',
							'outline': 'none',
						},

						'.field:focus': {
							'border-color': '#08fdd8'
						},

						'.field:focus ~ label': {
							'top': '-15px',
							'left': '10px',
							'color': '#08fdd8'
						},

						'label': {
							'position': 'absolute',
							'top': '27px',
							'left': '21px',
							'color': '#fff',
							'transition': 'top .1s, left .1s, color .1s'
						},
                    }
                }
            </style>
        )
    }
}