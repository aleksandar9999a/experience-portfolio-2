import ExF, { Component, CustomElement, Prop } from 'exf-ts';
import { IEmail } from '../interfaces/interfaces';

@CustomElement({
    selector: 'exf-contacts-list'
})
export class ContactsList extends Component {
    @Prop('state') items: IEmail[] = [];

    stylize() {
        return (
            <style>
                .contacts-list {
                    {
                        'details': {
                            'background': '#202020',
                            'color': '#fff'
                        },

                        'summary': {
                            'background': '#181818',
                            'text-align': 'left',
                            'cursor': 'pointer',
                            'padding': '10px'
                        },

                        '.list__head': {
                            'padding': '20px 0'
                        },

                        '.list__actions': {
                            'padding': '20px 0'
                        },

                        'p': {
                            'margin': '0 0 5px'
                        },

                        'span': {
                            'color': '#08fdd8'
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
                            'cursor': 'pointer',
                            'transition': 'box-shadow .15s',
                        },

                        'button:hover': {
                            'box-shadow': '1px 1px 20px #08fdd841'
                        },

                        'button + button': {
                            'margin-left': '20px'
                        }
                    }
                }
            </style>
        )
    }

    render() {
        return (
            <div className="contacts-list">
                {this.items.map(({ subject, message, email, name, isAnswered }) => {
                    return (
                        <details>
                            <summary>{subject}</summary>

                            <div className="list__content">
                                <div className="list__head">
                                    <p>Email: <span>{email}</span></p>

                                    <p>Name: <span>{name}</span></p>
                                </div>

                                <div className="list__body">
                                    <p>{message}</p>

                                    <p>Is Answered: <span>{isAnswered}</span></p>
                                </div>

                                <div className="list__actions">
                                    <button>Answered</button>

                                    <button>Delete</button>
                                </div>
                            </div>
                        </details>
                    )
                })}
            </div>
        )
    }
}