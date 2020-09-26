import ExF, { Component, CustomElement, Prop } from 'exf-ts';
import { ISocials } from '../interfaces/interfaces';

@CustomElement({
    selector: 'exf-socials'
})
export class Socials extends Component {
    @Prop('state') contacts: ISocials[] = [];

    stylize() {
        return (
            <style>
                .socials {
                    {
                        'a': {
                            'img': {
                                'height': '40px',
                                'transition': 'transform .15s'
                            }
                        },

                        'a:hover': {
                            'img': {
                                'transform': 'scale(1.1)'
                            }
                        },

                        'a + a': {
                            'margin-left': '20px'
                        }
                    }
                }
            </style>
        )
    }

    render() {

        return (
            <div className="socials">
                {this.contacts.map(({ link, image, name }) => {
                    return (
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <img src={image} alt={name}/>
                        </a>
                    )
                })}
            </div>
        )
    }
}