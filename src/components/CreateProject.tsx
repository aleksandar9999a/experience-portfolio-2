import ExF, { Component, CustomElement, Prop, State } from 'exf-ts';
import { IUploadedImage } from '../interfaces/interfaces';
import { store } from '../redux/store';
import { uploadImages } from '../utils/storage';
import Styles from '../services/styles';

import {
    add_images_create_project,
    clear_create_project,
    remove_images_create_project,
    set_cover_create_project,
    update_create_project
} from '../redux/symbols';


@CustomElement({
    selector: 'exf-create-project',
    dependencyInjection: true
})
export class CreateProject extends Component {
    @Prop('state') id: string = '';
    @Prop('state') creatorId: string = '';
    @State('state') title: string = '';
    @State('state') description: string = '';
    @State('state') link: string = '';
    @State('state') images: IUploadedImage[] = [];

    constructor(private styles: Styles) {
        super();
    }

    onCreate() {
        store.subscribe(() => {
            const { title, description, link, images } = store.getState().createProject;
            this.title = title;
            this.description = description;
            this.link = link;
            this.images = images;
        })

        store.dispatch({ type: clear_create_project });

        if (this.id !== '') {
            store.dispatch({
                type: 'LOAD_CREATE_PROJECT',
                payload: {
                    creatorId: this.creatorId,
                    id: this.id
                }
            });
        }
    }

    handleInput(e: any, type: 'title' | 'description' | 'link') {
        store.dispatch({ type: update_create_project, payload: { [type]: e.target.value } });
    }

    handleSubmit = (e: any) => {
        e.preventDefault();

        const payload = store.getState().createProject;
        store.dispatch({ type: 'SUBMIT_PROJECT', payload });
    }

    handleAddImage = (e: any) => {
        const files = Array.from(e.target.files) as File[];

        uploadImages(files)
            .then(images => {
                store.dispatch({ type: add_images_create_project, payload: images });
            })
            .catch(err => {
                store.dispatch({ type: 'ADD_ERROR_NOTIFICATION', payload: err.message })
            })
    }

    handleRemoveImage = (id: string) => {
        store.dispatch({ type: remove_images_create_project, payload: id });
    }

    handleSetCover = (id: string) => {
        store.dispatch({ type: set_cover_create_project, payload: id });
    }

    render() {
        return (
            <div className="create-project">
                <div className="create-project__inner">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form__head">
                            <h2>Create Project</h2>
                        </div>

                        <div className="form__body">
                            <div className="form__row">
                                <div className="form__controls">
                                    <input
                                        id="project-title"
                                        type="text"
                                        className="field"
                                        value={this.title}
                                        onInput={(e: any) => this.handleInput(e, 'title')}
                                        required
                                    />

                                    <label htmlFor="project-title">Title</label>
                                </div>
                            </div>

                            <div className="form__row">
                                <div className="form__controls">
                                    <textarea
                                        id="project-description"
                                        type="text"
                                        className="field field--textarea"
                                        value={this.description}
                                        onInput={(e: any) => this.handleInput(e, 'description')}
                                        required
                                    />

                                    <label htmlFor="project-description">Description</label>
                                </div>
                            </div>

                            <div className="form__row">
                                <div className="form__controls">
                                    <input
                                        id="project-link"
                                        type="text"
                                        className="field"
                                        value={this.link}
                                        onInput={(e: any) => this.handleInput(e, 'link')}
                                        required
                                    />

                                    <label htmlFor="project-link">Link</label>
                                </div>
                            </div>

                            <div className="form__row">
                                <div className="form__images">
                                    {this.images.map(({ id, url }) => {
                                        return (
                                            <div id={id} className="form__tile">
                                                <div className="form__image">
                                                    <img src={url} alt="image" />
                                                </div>

                                                <div className="form__image-actions">
                                                    <button
                                                        type="button"
                                                        onClick={() => this.handleSetCover(id)}
                                                    >
                                                        Set Cover
                                                    </button>

                                                    <button
                                                        type="button"
                                                        onClick={() => this.handleRemoveImage(id)}
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="form__row">
                                <div className="form__controls">
                                    <input
                                        id="project-add-image"
                                        className="file-field"
                                        type="file"
                                        onInput={this.handleAddImage}
                                        multiple={true}
                                    />

                                    <label htmlFor="project-add-image">Add Images</label>
                                </div>
                            </div>
                        </div>

                        <div className="form__actions">
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    stylize() {
        return (
            <style>
                .create-project {
                    {
                        ...this.styles.buttons,
						...this.styles.fields,
						...this.styles.forms,

                        'padding': '50px 0 10px',
                        'text-align': 'center',

                        'h2': {
                            'font-size': '40px'
                        },

                        '.create-project__inner': {
                            'max-width': '500px',
                            'margin': '0 auto'
                        }
                    }
                }
            </style>
        )
    }
}