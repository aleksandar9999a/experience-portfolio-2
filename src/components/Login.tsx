import ExF, { Component, CustomElement } from 'exf-ts';


@CustomElement({
    selector: 'exf-login'
})
export class Login extends Component {
    stylize() {
        return (
            <style>
                .login {
                    {
                        'display': 'flex',
                        'justify-content': 'center',
                        'text-align': 'center',
                        'align-items': 'center',
                        'padding': '50px 0',

                        h2: {
                            'font-size': '30px',
                        },

                    }
                }
            </style>
        )
    }

    render() {
        return (
            <div className="login">
                
            </div>
        )
    }
}