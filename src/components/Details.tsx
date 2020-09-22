import ExF, { Component, CustomElement, Prop, State } from 'exf-ts';
import img from './../assets/exf.png';
import img2 from './../assets/chat.png';


@CustomElement({
    selector: 'exf-details'
})
export class Details extends Component {
    @Prop('id') id!: string;
    @State('state') project = {
        id: '1',
        title: 'ExF-TS',
        description: 'Web Components on Steroids. This is a small Web Components compiler that allows you to easily create reusable, dynamic, and easy-to-use components.',
        link: 'https://github.com/aleksandar9999a/exf-ts',
        creatorId: '',
        cover: img,
        images: [img2, img2, img]
    }

    onCreate() {
    }

    stylize() {
        return (
            <style>
                .details {
                    {
                        'display': 'flex',
                        'justify-content': 'center',
                        'text-align': 'center',
                        'padding': '50px 0',

                        '.details__inner': {
                            'max-width': '1000px'
                        },

                        '.details__body': {
                            'color': '#fff'
                        },

                        '.details__link': {
                            'margin': '15px 0'
                        },

                        '.details__slideshow': {
                            'margin': '10px 0'
                        },

                        'h2': {
                            'font-size': '40px',
                        },

                        'a': {
                            'color': 'inherit',
                            'font-size': '16px',
                            'transition': 'opacity .1s'
                        },

                        'a:hover': {
                            'opacity': '0.8'
                        },

                        '.details__btn-link': {
                            'padding': '15px 35px',
                            'transition': 'transform .15s',
                            'font-size': '11px',
                            'margin-right': '25px',
                            'text-transform': 'uppercase',
                            'display': 'inline-block'
                        },

                        '.details__btn-link:hover': {
                            'transform': 'scale(1.03)',
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
                        }
                    }
                }
            </style>
        )
    }

    render() {
        const { title, description, link, cover, images } = this.project;

        return (
            <div className="details">
                <div className="details__inner">
                    <div className="details__head">
                        <h2>{title}</h2>
                    </div>

                    <div className="details__slideshow">
                        <exf-slideshow images={[cover, ...images]} />
                    </div>

                    <div className="details__body">
                        <p>{description}</p>
                    </div>

                    <div className="details__link">
                        <a href={link}>{link}</a>
                    </div>

                    <div className="details__actions">
                        <div className="details__btn-link">
                            <exf-router-link>Edit</exf-router-link>
                        </div>

                        <button>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}