import ExF, { Component, CustomElement, State } from 'exf-ts';
import { IUser } from '../interfaces/interfaces';
import { store } from '../redux/store';


@CustomElement({
    selector: 'exf-hero'
})
export class Hero extends Component {
    @State('state') user: IUser = { firstName: '', lastName: '', devType: '', socials: [] };

    onCreate() {
        store.subscribe(() => {
            this.user = store.getState().mainInfo;
        })

        store.dispatch({ type: 'GET_MAININFO' });
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
                        'padding': '200px 0',

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