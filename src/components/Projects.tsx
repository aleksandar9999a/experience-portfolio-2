import ExF, { Component, CustomElement, State } from 'exf-ts';
import { IProject } from '../interfaces/interfaces';
import { store } from '../redux/store';

@CustomElement({
    selector: 'exf-projects'
})
export class Projects extends Component {
    @State('state') projects: any[] = [];

    onCreate() {
        store.subscribe(() => {
            const projects = store.getState().projects;

            const arr = Object.keys(projects).reduce((acc: IProject[], key) => {
                return [...acc, projects[key]];
            }, [])

            this.projects = arr;
        })

        store.dispatch({ type: 'GET_PROJECTS' })
    }

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