import ExF, { Component, CustomElement, State } from 'exf-ts';

interface IUser {
    firstName: string,
    lastName: string,
    devType: string
}


@CustomElement({
    selector: 'exf-hero'
})
export class Hero extends Component {
    @State('state') user: IUser = { firstName: 'Alexander', lastName: 'Todorov', devType: 'Web Developer' };

    stylize() {
        return (
            <style>
                .hero {
                    {
                        'display': 'flex',
                        'justify-content': 'center',
                        'text-align': 'center',
                        'align-items': 'center',
                        'min-height': '85vh',

                        h1: {
                            'color': '#fff'
                        },

                        hr: {
                            'background': '#08fdd8',
                            'height': '1px',
                            'border': '0',
                        },

                        '.hero__headline': {
                            'position': 'relative',

                            'p': {
                                'transition': 'opacity 0.15s'
                            },

                            'exf-router-link': {
                                'pointer-events': 'none',
                                'position': 'absolute',
                                'top': '-20px',
                                'left': '0',
                                'width': '100%',
                                'opacity': '0',
                                'transition': 'opacity 0.15s'
                            }
                        },

                        '.hero__headline:hover': {
                            'p': {
                                'opacity': '0'
                            },

                            'exf-router-link': {
                                'opacity': '100%',
                                'pointer-events': 'auto',
                                'z-index': 2
                            }
                        }
                    }
                }
            </style>
        )
    }

    render() {
        const { firstName, lastName, devType } = this.user;

        return (
            <div className="hero">
                <div className="shell">
                    <div className="hero__inner">
                        <div className="hero__content">
                            <h1>
                                Hello friends,<br />
                                My name is {firstName} {lastName}.
                            </h1>

                            <hr />

                            <div className="hero__headline">
                                <p>{devType}</p>

                                <exf-router-link route="/login">
                                    <p>Are you my owner?</p>
                                </exf-router-link>
                            </div>

                            <div className="hero__socials">
                                <exf-socials />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}