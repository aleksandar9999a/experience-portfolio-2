import ExF, { Component, CustomElement, Prop, State } from 'exf-ts';
import { IUploadedImage } from '../interfaces/interfaces';


@CustomElement({
    selector: 'exf-carousel'
})
export class Carousel extends Component {
    @Prop('state') images: IUploadedImage[] = [];
    @State('state') index: number = 0;

    handleNext = () => {
        if (this.index + 1 > this.images.length - 1) {
            this.index = 0;
            return;
        }

        this.index++;
    }

    handleBack = () => {
        if (this.index - 1 < 0) {
            this.index = this.images.length - 1;
            return;
        }

        this.index--;
    }

    render() {
        return (
            <div class="carousel">
                <div className="carousel__images">
                    {this.images.map((img, index) => {
                        const isCurrImage = index === this.index;

                        return (
                            <div
                                className="carousel__image"
                                style={{
                                    opacity: isCurrImage ? '1' : '0',
                                }}
                            >
                                <img src={img.url} alt="" />
                            </div>
                        )
                    })}
                </div>

                <div className="carouser__actions">
                    <button class="left-btn" onClick={this.handleBack}>
                        <i class="arrow"></i>
                    </button>

                    <button class="right-btn" onClick={this.handleNext}>
                        <i class="arrow"></i>
                    </button>
                </div>
            </div>
        )
    }

    stylize() {
        return (
            <style>
                .carousel {
                    {
                        'width': '500px',
                        'height': '500px',
                        'display': 'flex',
                        'position': 'relative',
                        'justify-content': 'center',

                        '.carouser__actions': {
                            'position': 'absolute',
                            'top': '45%',
                            'left': '-35px',
                            'right': '-35px',
                            'display': 'flex',
                            'justify-content': 'space-between'
                        },

                        '.carousel__images': {
                            'position': 'relative',

                            '.carousel__image': {
                                'position': 'absolute',
                                'top': '0',
                                'left': '0',
                                'right': '0',
                                'opacity': '0',
                                'transition': 'opacity 1s',
                                'display': 'flex',
                                'justify-content': 'center'
                            },

                            'img': {
                                'height': '500px',
                                'object-fit': 'contain',
                            },
                        },

                        'button': {
                            'height': '10%',
                            'border': 'none',
                            'outline': 'none',
                            'background': 'rgba(0, 0, 0, 0.5)',
                            'cursor': 'pointer',
                            'padding': '1em',
                            'display': 'flex',
                            'transition': 'opacity .3s',

                            '.arrow': {
                                'border': 'solid #fff',
                                'border-width': '0 4px 4px 0',
                                'display': 'inline-block',
                                'padding': '10px',
                                'transition': 'transform 0.3s ease-out',
                                'outline': 'none',
                            }
                        },

                        'button:hover': {
                            'opacity': '0.7'
                        },

                        '.right-btn': {
                            '.arrow': {
                                'transform': 'rotate(-45deg)'
                            }
                        },

                        '.left-btn': {
                            '.arrow': {
                                'transform': 'rotate(135deg)'
                            }
                        }
                    }
                }

                @media screen and (max-width: 1300px) {
                    {
                        '.carousel': {
                            'height': '300px',
                            'width': '380px',

                            '.carousel__images .carousel__image img': {
                                'height': '300px'
                            }
                        }
                    }
                }

                @media screen and (max-width: 700px) {
                    {
                        '.carousel': {
                            'height': '200px',
                            'width': '280px',

                            '.carouser__actions': {
                                'left': '0',
                                'right': '0'
                            },

                            '.carousel__images .carousel__image img': {
                                'height': '200px'
                            }
                        }
                    }
                }
            </style>
        )
    }
}