import ExF, { Component, CustomElement, Prop } from 'exf-ts';
import { INotification } from '../interfaces/interfaces';
import { store } from '../redux/store';
import { remove_notification } from '../redux/symbols';


@CustomElement({
    selector: 'exf-notification'
})
export class Notification extends Component {
    @Prop('state') data: INotification = {
        id: '',
        message: '',
        type: 'success'
    };
    @Prop('style') index: number = 0;

    handleRemove = () => {
        store.dispatch({ type: remove_notification, payload: this.data.id })
    }

    stylize() {
        return (
            <style>
                {`@keyframes on-create {        
					from {
						opacity : 0;
						right : -7%;
					}
					to {
						opacity : 1;
						right : 0;
					}      
				}`}

				li {
                    {
                        'position': 'absolute',
                        'right': '0',
                        'bottom': `${this.index * 65}px`,
                        'display': 'flex',
                        'justify-content': 'space-between',
                        'align-items': 'center',
                        'padding': '13px',
                        'background': '#181818',
                        'min-width': '250px',
                        'box-shadow': '0px 0px 7px #08fdd841',
                        'border-left': '2px solid #fff',
                        'border-right': '2px solid #fff',
                        'border-radius': '10px',
                        'cursor': 'pointer',
                        'transition': 'transform .1s',
                        'font-size': '15px',
                        'animation': 'on-create .5s ease'
                    }
                }

                li:hover {
                    { 'transform': 'scale(1.03)' }
                }

                .warning {
                    { 'border-color': '#FFD700' }
                }

                .error {
                    { 'border-color': '#AF0505' }
                }

                .success {
                    { 'border-color': '#2BFE72' }
                }
            </style>
        )
    }

    render() {
        const { type, message } = this.data;

        return (
            <li className={type} onClick={this.handleRemove} >
                <span>{message}</span>
            </li>
        )
    }
}