import ExF, { Component, CustomElement, Prop } from 'exf-ts';

@CustomElement({
    selector: 'exf-create-project-tile'
})
export class CreateProjectTile extends Component {
    @Prop('state') onClick!: () => void;

    handleClick = () => {
        if(!!this.onClick) {
            this.onClick();
        }
    }

    stylize() {
        return (
            <style>
                .tile {
                    {
                        'background': '#181818',
                        'border-radius': '20px',
                        'padding': '15px 15px 25px',
                        'width': '200px',
                        'box-shadow': '1px 1px 6px #08fdd841',
                        'transition': 'box-shadow .15s, transform .05s',
                        'text-align': 'center',
                    }
                }

                .tile:hover {
                    {
                        'box-shadow': '1px 1px 20px #08fdd841',
                        'transform': 'scale(1.01)'
                    }
                }
            </style>
        )
    }

    render() {

        return (
            <div className="tile">
                <span>+</span>
            </div>
        )
    }
}