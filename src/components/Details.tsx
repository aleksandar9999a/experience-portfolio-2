import ExF, { Component, CustomElement, State } from 'exf-ts';
import img from './../assets/exf.png';


@CustomElement({
    selector: 'exf-details'
})
export class Details extends Component {
    @State('state') projects = {
        id: '1',
        title: 'ExF-TS',
        description: 'Web Components on Steroids. This is a small Web Components compiler that allows you to easily create reusable, dynamic, and easy-to-use components.',
        link: 'https://github.com/aleksandar9999a/exf-ts',
        creatorId: '',
        cover: img,
        images: []
    }

    stylize() {
        return (
            <style>
                .details {
                    {
                        'display': 'flex',
                        'justify-content': 'center',
                        'text-align': 'center',

                        'h3': {
                            'font-size': '25px',
                            'color': '#08fdd8'
                        },
                    }
                }
            </style>
        )
    }

    render() {
        return (
            <div className="details">
                <div className="details__inner">
                    <div className="details__image">

                    </div>

                    <div className="details__head">
                        <h3>Details</h3>
                    </div>

                    <div className="details__link">
                        
                    </div>

                    <div className="details__actions">
                        
                    </div>
                </div>
            </div>
        )
    }
}