import ExF, { Component, CustomElement, Prop, State } from 'exf-ts';
import img from './../assets/exf.png';


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
        images: [img, img, img]
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
                        'padding': '50px 0 10px',

                        'h2': {
                            'font-size': '40px',
                        },
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
                        <a href={link}>Link</a>
                    </div>

                    <div className="details__actions">
                        <exf-router-link>Edit</exf-router-link>

                        <button>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}