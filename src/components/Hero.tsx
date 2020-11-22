import ExF, { Component, CustomElement, State } from 'exf-ts';
import { Unsubscribe } from 'redux';
import { IHeroContent } from '../interfaces/interfaces';
import { store } from '../redux/store';


@CustomElement({
    selector: 'exf-hero'
})
export class Hero extends Component {
    @State('state') user: IHeroContent = {
        firstName: '',
        lastName: '',
        devType: '',
        socials: []
    };

    unsubscribe!: Unsubscribe;

    onCreate() {
        this.unsubscribe = store.subscribe(() => {
            const { firstName, lastName, devType, socials } = store.getState().mainInfo;
            this.user = { firstName, lastName, devType, socials };
        })

        store.dispatch({ type: 'GET_MAININFO' });
    }

    onDestroy() {
        this.unsubscribe()
    }

    stylize() {
        return (
            <style>
                .hero {
                    {
                        'display': 'flex',
                        'justify-content': 'center',
                        'text-align': 'center',
                        'align-items': 'center',
                        'padding': '5rem 0',

                        'h1': {
                            'color': '#fff',
                            'font-size': '50px',
                            'font-weight': '400'
                        },

                        'hr': {
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
                                'z-index': '2'
                            }
                        }
                    }
                }

                @media screen and (max-width: 1300px) {
                    {
                        '.hero': {
                            'padding': '80px 0',

                            'h1': {
                                'font-size': '45px'
                            }
                        }
                    }
                }

                @media screen and (max-width: 800px) {
                    {
                        '.hero': {
                            'padding': '50px 0',

                            'h1': {
                                'font-size': '40px'
                            }
                        }
                    }
                }
            </style>
        )
    }

    render() {
        const { firstName, lastName, devType, socials } = this.user;

        return (
            <div className="hero">
                <div className="hero__inner">
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
                        <exf-socials contacts={socials} />
                    </div>
                </div>
            </div>
        )
    }
}