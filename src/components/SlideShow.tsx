import ExF, { Component, CustomElement, Prop, State } from 'exf-ts';


@CustomElement({
    selector: 'exf-slideshow'
})
export class Slideshow extends Component {
    @Prop('state') images!: string[];
    @State('state') index: number = 0;
    @State('state') isShowModal: boolean = false;

    handleChange(index: number) {
        this.index = index;
    }

    stylize() {
        return (
            <style>
                .slideshow {
                    {
                        'text-align': 'center',

                        '.slideshow__image': {
                            'width': '400px',
                            'height': '400px',
                            'margin': '0 auto',
                            'transition': 'transform .1s',
                            'cursor': 'pointer'
                        },

                        '.slideshow__image:hover': {
                            'transform': 'scale(1.02)'
                        },

                        '.slideshow__tiles': {
                            'display': 'flex',
                            'justify-content': 'center'
                        },

                        '.slideshow__tile': {
                            'width': '150px',
                            'height': '150px',
                            'cursor': 'pointer',
                            'transition': 'transform .1s',
                        },

                        '.slideshow__tile:hover': {
                            'transform': 'scale(1.02)'
                        },

                        'img': {
                            'width': '100%',
                            'height': '100%',
                            'object-fit': 'cover',
                        }
                    }
                }
            </style>
        )
    }

    render() {
        const currImage = this.images[this.index]

        return (
            <div className="slideshow">
                <div className="slideshow__image">
                    <img src={currImage} alt="Slideshow image" />
                </div>

                <div className="slideshow__tiles">
                    {this.images.map((img, i) => {
                        return (
                            <div className="slideshow__tile" onClick={() => this.handleChange(i)}>
                                <img src={img} alt="Slideshow tile" />
                            </div>
                        )
                    })}
                </div>

                {
                    this.isShowModal
                        ? (
                            <div className="slideshow__modal">
                                <div className="slideshow__modal-image">
                                    <img src={currImage} alt="Modal image" />
                                </div>

                                <span>&times;</span>
                            </div>
                        )
                        : null
                }
            </div>
        )
    }
}