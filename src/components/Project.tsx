import ExF, { Component, CustomElement, Prop } from 'exf-ts';
import { IProject } from '../interfaces/interfaces';

@CustomElement({
    selector: 'exf-project'
})
export class Project extends Component {
    @Prop('state') details: IProject = {
        id: '',
        title: '',
        description: '',
        link: '',
        creatorId: '',
        cover: '',
        images: []
    }

    stylize() {
        return (
            <style>
                .project {
                    {
                        'background': '#181818',
                        'border-radius': '20px',
                        'padding': '15px 15px 25px',
                        'width': '200px',
                        'box-shadow': '1px 1px 6px #08fdd841',
                        'transition': 'box-shadow .15s, transform .05s',
                        'text-align': 'center',

                        'h3': {
                            'font-size': '25px',
                            'margin': '5px'
                        },

                        '.project__image': {
                            'width': '100%',
                            'height': '130px',
                            'display': 'flex',

                            'img': {
                                'width': '150px',
                                'height': '100%',
                                'object-fit': 'cover',
                                'margin': 'auto'
                            }
                        },

                        '.project__head': {
                            'font-size': '14px',
                            'color': '#fff'
                        },
                    }
                }

                .project:hover {
                    {
                        'box-shadow': '1px 1px 20px #08fdd841',
                        'transform': 'scale(1.01)'
                    }
                }
            </style>
        )
    }

    render() {
        const { cover, title, description, images } = this.details;
        const slicedDesc = description.split(' ').slice(0, 11).join(' ');
        const desc = `${slicedDesc}${slicedDesc.length < description.length ? '...' : ''}`

        return (
            <div className="project">
                <div className="project__image">
                    <img src={cover || images[0].url} alt="" />
                </div>

                <div className="project__head">
                    <h3>{title}</h3>

                    <p>{desc}</p>
                </div>
            </div>
        )
    }
}