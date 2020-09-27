import ExF, { Component, CustomElement, Prop, State } from 'exf-ts';
import { IUploadedImage } from '../interfaces/interfaces';
import { store } from '../redux/store';
import { clear_create_project, remove_images_create_project, set_cover_create_project, update_create_project } from '../redux/symbols';


@CustomElement({
    selector: 'exf-create-project'
})
export class CreateProject extends Component {
    @Prop('state') id: string = '';
    @State('state') title: string = '';
    @State('state') description: string = '';
    @State('state') link: string = '';
    @State('state') images: IUploadedImage[] = [];

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
            store.dispatch({ type: 'LOAD_CREATE_PROJECT', payload: this.id });
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
        const files = Array.from(e.target.files);

        store.dispatch({ type: 'UPLOAD_IMAGES', payload: files });
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
                        'padding': '50px 0 10px',
                        'text-align': 'center',
                        'h2': {
                            'font-size': '40px'
                        },

                        '.create-project__inner': {
                            'max-width': '500px',
                            'margin': '0 auto'
                        },

                        '.form__controls': {
                            'position': 'relative',
                            'padding': '10px 0'
                        },

                        '.form__row + .form__row': {
                            'margin-top': '20px'
                        },

                        '.field': {
                            'display': 'flex',
                            'border': '1px solid transparent',
                            'background': '#2b2b2b',
                            'color': 'white',
                            'width': '100%',
                            'font-size': '16px',
                            'padding': '20px',
                            'transition': 'border-color .15s',
                            'outline': 'none',
                        },

                        '.field--textarea': {
                            'height': '150px',
                            'padding': '20px 20px'
                        },

                        '.field:focus': {
                            'border-color': '#08fdd8'
                        },

                        '.field:focus ~ label, .field:valid ~ label': {
                            'top': '-15px',
                            'left': '10px',
                            'color': '#08fdd8'
                        },

                        '.file-field': {
                            'position': 'absolute',
                            'top': '0',
                            'left': '30%',
                            'width': '202px',
                            'height': '45px',
                            'opacity': '0',
                            'cursor': 'pointer',
                            'z-index': '1'
                        },

                        '.file-field ~ label': {
                            'position': 'absolute',
                            'top': '0',
                            'left': '30%',
                            'height': '13px',
                            'width': '130px',
                            'cursor': 'pointer',
                            'z-index': '0',
                            'color': '#08fdd8',
                            'font-size': '11px',
                            'letter-spacing': '3px',
                            'border': '1px solid #08fdd8',
                            'border-radius': '4px',
                            'background': 'transparent',
                            'text-transform': 'uppercase',
                            'padding': '15px 35px',
                            'transition': 'box-shadow .15s',
                        },

                        '.file-field:hover ~ label': {
                            'box-shadow': '1px 1px 20px #08fdd841'
                        },

                        'label': {
                            'position': 'absolute',
                            'top': '27px',
                            'left': '21px',
                            'color': '#fff',
                            'transition': 'top .1s, left .1s, color .1s'
                        },

                        'button': {
                            'height': '50px',
                            'color': '#08fdd8',
                            'font-size': '11px',
                            'letter-spacing': '3px',
                            'border': '1px solid #08fdd8',
                            'border-radius': '4px',
                            'background': 'transparent',
                            'text-transform': 'uppercase',
                            'padding': '15px 35px',
                            'transition': 'box-shadow .15s',
                            'cursor': 'pointer'
                        },

                        'button:hover': {
                            'box-shadow': '1px 1px 20px #08fdd841'
                        },

                        '.form__actions': {
                            'margin': '40px 0'
                        },

                        '.form__images': {
                            'display': 'flex',
                            'flex-wrap': 'wrap',
                            'justify-content': 'center',
                        },

                        '.form__tile': {
                            'width': '140px',
                            'height': '140px',
                            'position': 'relative',

                            'img': {
                                'height': '100%',
                                'width': '100%',
                                'object-fit': 'cover'
                            },

                            '.form__image': {
                                'position': 'absolute',
                                'top': '0',
                                'left': '0',
                                'right': '0',
                                'bottom': '0',
                                'z-index': '2',
                                'transition': 'opacity .1s',
                            },

                            '.form__image-actions': {
                                'position': 'absolute',
                                'top': '0',
                                'left': '0',
                                'right': '0',
                                'bottom': '0',
                                'z-index': '1',
                                'transition': 'opacity .1s, z-index .1s',
                                'opacity': '0',

                                'button': {
                                    'margin': '20px 0 0',
                                    'padding': '15px',
                                    'height': '40px',
                                }
                            }
                        },

                        '.form__tile:hover': {
                            '.form__image-actions': {
                                'z-index': '3',
                                'opacity': '1'
                            },

                            '.form__image': {
                                'opacity': '0.5'
                            },
                        }
                    }
                }
            </style>
        )
    }
}