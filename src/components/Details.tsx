import ExF, { Component, CustomElement, Prop, State } from 'exf-ts';
import { IProject } from '../interfaces/interfaces';
import { store } from '../redux/store';
import Styles from '../services/styles';


@CustomElement({
    selector: 'exf-details',
    dependencyInjection: true
})
export class Details extends Component {
    @Prop('state') id!: string;
    @Prop('state') creatorId!: string;
    @State('state') currentUser: any = null;
    @State('state') project: IProject = {
        id: '',
        title: '',
        description: '',
        link: '',
        creatorId: '',
        cover: '',
        images: []
    }

    constructor(private styles: Styles) {
        super();
    }

    onCreate() {
        store.subscribe(() => {
            const { currentProject, user } = store.getState();
            this.project = currentProject;
            this.currentUser = user;
        })

        store.dispatch({ type: 'GET_PROJECT', payload: { creatorId: this.creatorId, id: this.id } })
    }

    handleDelete = () => {
        store.dispatch({
            type: 'DELETE_PROJECT',
            payload: {
                creatorId: this.project.creatorId,
                id: this.project.id
            }
        })
    }

    stylize() {
        return (
            <style>
                .details {
                    {
                        ...this.styles.buttons,

                        'display': 'flex',
                        'justify-content': 'center',
                        'text-align': 'center',
                        'padding': '50px 0',

                        '.details__inner': {
                            'max-width': '1000px'
                        },

                        '.details__body': {
                            'color': '#fff'
                        },

                        '.details__link': {
                            'margin': '15px 0',

                            'a': {
                                'font-size': '15px'
                            }
                        },

                        '.details__slideshow': {
                            'margin': '10px 0',
                            'display': 'flex',
                            'justify-content': 'center'
                        },

                        'h2': {
                            'font-size': '40px',
                        }
                    }
                }

                @media screen and (max-width: 700px) {
                    {
                        '.details': {
                            '.details__inner': {
                                'max-width': '350px',
                                'font-size': '15px'
                            },

                            'h2': {
                                'font-size': '30px'
                            },

                            '.details__link a': {
                                'font-size': '13px'
                            }
                        }
                    }
                }
            </style>
        )
    }

    render() {
        const { title, description, link, images } = this.project;

        return (
            <div className="details">
                <div className="details__inner">
                    <div className="details__head">
                        <h2>{title}</h2>
                    </div>

                    <div className="details__slideshow">
                        <exf-carousel images={images} />
                    </div>

                    <div className="details__body">
                        <p>{description}</p>
                    </div>

                    <div className="details__link">
                        <a href={link}>{link}</a>
                    </div>

                    {!!this.currentUser && this.currentUser.uid === this.project.creatorId
                        ? (
                            <div className="details__actions">
                                <div className="link">
                                    <exf-router-link route={`/create-project/${this.project.creatorId}/${this.project.id}`}>Edit</exf-router-link>
                                </div>

                                <button onClick={this.handleDelete}>Delete</button>
                            </div>
                        )
                        : null}
                </div>
            </div>
        )
    }
}