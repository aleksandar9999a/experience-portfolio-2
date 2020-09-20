import ExF, { Component, CustomElement } from 'exf-ts';
import contacts from '../config/contacts';
import icons from '../config/icons';

@CustomElement({
    selector: 'exf-socials'
})
export class Socials extends Component {
    stylize() {
        return (
            <style>
                .socials {
                    {
                        a: {
                            img: {
                                'height': '40px',
                                'transition': 'transform .15s'
                            }
                        },

                        'a:hover': {
                            img: {
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
                {contacts.map(({ alt, icon, href }) => {
                    return (
                        <a href={href} target="_blank" rel="noopener noreferrer">
                            <img src={icons[icon]} alt={alt}/>
                        </a>
                    )
                })}
            </div>
        )
    }
}