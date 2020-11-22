import ExF, { Component, CustomElement, State } from 'exf-ts';
import { Unsubscribe } from 'redux';
import { IProject } from '../interfaces/interfaces';
import { store } from '../redux/store';

@CustomElement({
    selector: 'exf-projects'
})
export class Projects extends Component {
    @State() projects: IProject[] = [];

    unsubscribe!: Unsubscribe;

    onCreate() {
        this.unsubscribe = store.subscribe(() => {
            const { mainInfo } = store.getState();
            this.projects = mainInfo.projects;
        })

        store.dispatch({ type: 'GET_MAININFO' })
    }

    onDestroy() {
        this.unsubscribe()
    }

    stylize() {
        const flex = this.projects.length !== 1 ? '0 0 calc(25% - 20px)' : '0';

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
                            'justify-content': 'center',
                            'margin': '0 -10px 30px',

                            '.projects__item': {
                                'flex': flex,
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
                                    <exf-router-link route={`/details/${project.creatorId}/${project.id}`}>
                                        <exf-project details={project} />
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