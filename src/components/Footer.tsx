import ExF, { Component, CustomElement } from 'exf-ts';

@CustomElement({
    selector: 'exf-footer'
})
export class Footer extends Component {

    stylize() {
        return (
            <style>
                .footer {
                    {
                        'display': 'flex',
                        'background': '#181818',
                        'position': 'relative',

                        '.footer__logo': {
                            'position': 'absolute',
                            'top': '0',
                            'left': '0'
                        },

                        '.footer__content': {
                            'margin': 'auto',
                            'color': 'white',
                            'padding': '12px 0',
                            'font-size': '14px'
                        }
                    }
                }
            </style>
        )
    }

    render() {
        return (
            <div className="footer">
                <div className="footer__logo">
                    <exf-logo />
                </div>

                <div className="footer__content">
                  <p>© 2020 A. Todorov. All rights reserved.</p>
                </div>
            </div>
        )
    }
}