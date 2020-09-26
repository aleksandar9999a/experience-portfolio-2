import ExF, { Component, CustomElement, Prop, State } from 'exf-ts';


@CustomElement({
    selector: 'exf-slideshow'
})
export class Slideshow extends Component {
    @Prop('state') images!: string[];
    @State('state') index: number = 0;
    @State('style') isShowModal: boolean = false;

    handleChange(index: number) {
        this.index = index;
    }

    handleOpenCloseModal = () => {
        this.isShowModal = !this.isShowModal;
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
                            'justify-content': 'center',
                            'margin': '0 auto',
                            'max-width': '500px',
                            'overflow': 'hidden',
                            'overflow-x': 'auto'
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

                        '.slideshow__modal': {
                            'position': 'absolute',
                            'display': this.isShowModal ? 'block' : 'none',
                            'top': '0',
                            'bottom': '0',
                            'left': '0',
                            'right': '0',
                            'background': 'rgba(0,0,0,0.8)',

                            '.slideshow__modal-image': {
                                'position': 'relative',
                                'width': '700px',
                                'height': '700px',
                                'margin': '5% auto 0'
                            },

                            'span': {
                                'display': 'inline-block',
                                'position': 'absolute',
                                'top': '2%',
                                'right': '2%',
                                'cursor': 'pointer'
                            }
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
        const currImage = this.images[this.index];

        return (
            <div className="slideshow">
                <div className="slideshow__image" onClick={this.handleOpenCloseModal}>
                    {!!currImage ? <img src={currImage} alt="Slideshow image" /> : null}
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

                <div className="slideshow__modal">
                    <div className="slideshow__modal-image">
                        <img src={currImage} alt="Modal image" />
                    </div>

                    <span onClick={this.handleOpenCloseModal}>&times;</span>
                </div>
            </div>
        )
    }
}