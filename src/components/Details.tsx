import ExF, { Component, CustomElement, Prop, State } from 'exf-ts';
import { IProject } from '../interfaces/interfaces';
import { store } from '../redux/store';
import { buttons } from './../mixins/buttons';


@CustomElement({
    selector: 'exf-details'
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
    buttons: object = {};

    constructor() {
        super();

        this.buttons = buttons;
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
                        ...this.buttons,

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
                            'margin': '15px 0'
                        },

                        '.details__slideshow': {
                            'margin': '10px 0'
                        },

                        'h2': {
                            'font-size': '40px',
                        },

                        'macro-carousel': {
                            'height': '350px'
                        },

                        '.slide': {
                            'display': 'flex',
                            'align-items': 'center',
                            'justify-content': 'center',
                            'box-shadow': 'inset 0px 0px 20px 0px rgba(0, 0, 0, .05)'
                        }
                    }
                }

                {`
					@media screen and (max-width: 1300px) {
						.details macro-carousel {
							height: 300px;
						}
					}

					@media screen and (max-width: 700px) {
						.details macro-carousel {
							height: 200px;
						}
					}
				`}
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
                        <macro-carousel pagination>
                            {images.map(img => {
                                return <article id={img.id} class="slide"><img src={img.url} alt="" /></article>
                            })}
                        </macro-carousel>
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