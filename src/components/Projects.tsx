import ExF, { Component, CustomElement, State } from 'exf-ts';
import img from './../assets/exf.png';

const p: any[] = [
    {
        id: '1',
        title: 'ExF-TS',
        description: 'Web Components on Steroids. This is a small Web Components compiler that allows you to easily create reusable, dynamic, and easy-to-use components.',
        link: 'https://github.com/aleksandar9999a/exf-ts',
        creatorId: '',
        cover: img,
        images: []
    },

    {
        id: '1',
        title: 'ExF-TS',
        description: 'Web Components on Steroids. This is a small Web Components compiler that allows you to easily create reusable, dynamic, and easy-to-use components.',
        link: 'https://github.com/aleksandar9999a/exf-ts',
        creatorId: '',
        cover: img,
        images: []
    },
    {
        id: '1',
        title: 'ExF-TS',
        description: 'Web Components on Steroids. This is a small Web Components compiler that allows you to easily create reusable, dynamic, and easy-to-use components.',
        link: 'https://github.com/aleksandar9999a/exf-ts',
        creatorId: '',
        cover: img,
        images: []
    },
    {
        id: '1',
        title: 'ExF-TS',
        description: 'Web Components on Steroids. This is a small Web Components compiler that allows you to easily create reusable, dynamic, and easy-to-use components.',
        link: 'https://github.com/aleksandar9999a/exf-ts',
        creatorId: '',
        cover: img,
        images: []
    },
    {
        id: '1',
        title: 'ExF-TS',
        description: 'Web Components on Steroids. This is a small Web Components compiler that allows you to easily create reusable, dynamic, and easy-to-use components.',
        link: 'https://github.com/aleksandar9999a/exf-ts',
        creatorId: '',
        cover: img,
        images: []
    },
];

@CustomElement({
    selector: 'exf-projects'
})
export class Projects extends Component {
    @State('state') projects: any[] = [];

    stylize() {
        return (
            <style>
                .projects {
                    {
                        'display': 'flex',
                        'justify-content': 'center',
                        'text-align': 'center',

                        'h2': {
                            'font-size': '40px',
                            'color': '#08fdd8'
                        },

                        '.projects__inner': {
                            'margin-top': '50px'
                        },

                        '.projects__head': {
                            'max-width': '1200px',
                            'margin': '0 auto 80px',
                            'color': '#fff'
                        },

                        '.projects__body': {
                            'display': 'flex',
                            'flex-wrap': 'wrap',
                            'width': '1200px',
                            'margin': '0 -10px',

                            '.projects__item': {
                                'flex': '0 0 calc(25% - 20px)',
                                'margin': '20px 10px'
                            }
                        }
                    }
                }
            </style>
        )
    }

    render() {
        return (
            <div className="projects">
                <div className="projects__inner">
                    <div className="projects__head">
                        <h2>Projects</h2>
                    </div>

                    <div className="projects__body">
                        {this.projects.map(project => {
                            return (
                                <div className="projects__item">
                                    <exf-router-link route={`/details/${project.id}`}>
                                        <exf-project details={project}/>
                                    </exf-router-link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}