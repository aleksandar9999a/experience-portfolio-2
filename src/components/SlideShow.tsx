import ExF, { Component, CustomElement, Prop, State } from 'exf-ts';


@CustomElement({
    selector: 'exf-slideshow'
})
export class Slideshow extends Component {
    @Prop('state') images!: string[];
    @State('state') index: number = 0;

    stylize() {
        return (
            <style>
                .slideshow {
                    {
                        
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
                    <img src={currImage} alt="Slideshow image"/>
                </div>

                <div className="slideshow__tiles">
                    {this.images.map(img => {
                        return (
                            <div className="slideshow__tile">
                                <img src={img} alt="Slideshow tile"/>
                            </div>
                        )
                    })}
                </div>

                <div className="slideshow__modal">
                    <div className="slideshow__modal-image">
                        <img src={currImage} alt="Modal image"/>
                    </div>

                    <span>&times;</span>
                </div>
            </div>
        )
    }
}