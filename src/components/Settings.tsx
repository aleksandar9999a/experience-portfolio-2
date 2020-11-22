import ExF, { Component, CustomElement, State } from 'exf-ts';
import { IEmail, IProject, ISocials, ITimelineItems, IAuthUser } from '../interfaces/interfaces';
import { store } from '../redux/store';
import { update_about_timeline, update_mydata, update_skills_timeline } from '../redux/symbols';
import { fields } from '../mixins/fields';
import { buttons } from './../mixins/buttons';
import { forms } from './../mixins/forms';


@CustomElement({
    selector: 'exf-settings'
})
export class Settings extends Component {
    @State('state') firstName: string = '';
    @State('state') lastName: string = '';
    @State('state') devType: string = '';
    @State('state') about: string = '';
    @State('state') skills: string = '';
    @State('state') socials: ISocials[] = [];
    @State('state') projects: IProject[] = [];
    @State('state') skillsTimeline: ITimelineItems[] = [];
    @State('state') aboutTimeline: ITimelineItems[] = [];
    @State('state') contacts: IEmail[] = [];

    @State('state') mainData: IAuthUser = {
        firstName: '',
        lastName: '',
        devType: '',
        about: '',
        skills: '',
        socials: [],
        aboutTimeline: [],
        skillsTimeline: [],
        projects: [],
        contacts: []
    }

    fields: object;
    buttons: object;
    forms: object;

    constructor() {
        super();

        this.fields = fields;
        this.buttons = buttons;
        this.forms = forms;
    }

    onCreate() {
        store.subscribe(() => {
            this.mainData = store.getState().myData;
        })

        if (!!store.getState().user) {
            store.dispatch({ type: 'GET_MY_DATA' });
        }
    }

    handleInput(e: any, type: 'firstName' | 'lastName' | 'devType' | 'about' | 'skills') {
        store.dispatch({ type: update_mydata, payload: { [type]: e.target.value } });
    }

    handleSubmit = (e: any) => {
        e.preventDefault();

        const payload = {
            firstName: this.firstName,
            lastName: this.lastName,
            devType: this.devType,
            about: this.about,
            skills: this.skills
        }

        store.dispatch({ type: 'SUBMIT_USERDATA', payload });
    }

    handleSkillsChange = (data: ITimelineItems[]) => {
        store.dispatch({ type: update_skills_timeline, payload: data });
    }

    handleAboutChange = (data: ITimelineItems[]) => {
        store.dispatch({ type: update_about_timeline, payload: data });
    }

    handleSkillsSubmit = () => {
        store.dispatch({ type: 'SKILLS_TIMELINE_SUBMIT', payload: this.skillsTimeline });
    }

    handleAboutSubmit = () => {
        store.dispatch({ type: 'ABOUT_TIMELINE_SUBMIT', payload: this.aboutTimeline });
    }

    handleContactsChange = (contact: object) => {
        store.dispatch({ type: 'UPDATE_CONTACT', payload: contact });
    }

    handleContactRemove = (id: string) => {
        store.dispatch({ type: 'REMOVE_CONTACT', payload: id });
    }

    stylize() {
        const flex = this.projects.length !== 1 ? '0 0 calc(25% - 20px)' : '0';

        return (
            <style>
                .settings {
                    {
                        ...this.buttons,
                        ...this.fields,
                        ...this.forms,

                        'display': 'flex',
                        'justify-content': 'center',
                        'text-align': 'center',

                        'h2': {
                            'font-size': '40px',
                            'color': '#08fdd8'
                        },

                        '.settings__inner': {
                            'margin-top': '50px',
                            'margin': '0 auto',
                            'width': '100%',
                            'height': '100%'
                        },

                        '.settings__section': {
                            'margin': '0 10px 65px'
                        },

                        '.settings__section + .settings__section': {
                            'border-top': '1px solid #08fdd8',
                        },

                        '.settings__head': {
                            'max-width': '1200px',
                            'margin': '0 auto 80px',
                            'color': '#fff'
                        },

                        '.settings__form': {
                            'width': '500px',
                            'margin': 'auto'
                        },

                        '.width-1': {
                            'width': '60%'
                        },

                        '.flex-body': {
                            'display': 'flex',
                            'justify-content': 'center',
                            'flex-wrap': 'wrap',

                            '.projects__item': {
                                'flex': flex,
                                'margin': '20px 10px'
                            }
                        },

                        '.settings__flex': {
                            'display': 'flex',
                            'justify-content': 'center'
                        }
                    }
                }

                @media screen and (max-width: 700px) {
                    {
                        '.settings': {
                            '.settings__flex': {
                                'flex-direction': 'column'
                            }
                        }
                    }
                }
            </style>
        )
    }

    render() {
        const {
            firstName,
            lastName,
            devType,
            about,
            skills,
            socials,
            aboutTimeline,
            skillsTimeline,
            projects,
            contacts
        } = this.mainData

        console.log('in')

        return (
            <div className="settings">
                <div className="settings__inner">
                    <div className="settings__flex">
                        <div className="settings__section">
                            <div className="settings__head">
                                <h2>Main Info</h2>
                            </div>

                            <div className="settings__form">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form__body">
                                        <div className="form__row">
                                            <div className="form__controls">
                                                <input
                                                    type="text"
                                                    id="firstName"
                                                    className="field"
                                                    required
                                                    value={firstName}
                                                    onInput={(e: any) => this.handleInput(e, 'firstName')}
                                                />

                                                <label htmlFor="firstName">First Name</label>
                                            </div>
                                        </div>

                                        <div className="form__row">
                                            <div className="form__controls">
                                                <input
                                                    type="text"
                                                    id="lastName"
                                                    className="field"
                                                    required
                                                    value={lastName}
                                                    onInput={(e: any) => this.handleInput(e, 'lastName')}
                                                />

                                                <label htmlFor="lastName">Last Name</label>
                                            </div>
                                        </div>

                                        <div className="form__row">
                                            <div className="form__controls">
                                                <input
                                                    type="text"
                                                    id="devType"
                                                    className="field"
                                                    required
                                                    value={devType}
                                                    onInput={(e: any) => this.handleInput(e, 'devType')}
                                                />

                                                <label htmlFor="devType">Developer Type</label>
                                            </div>
                                        </div>

                                        <div className="form__row">
                                            <div className="form__controls">
                                                <textarea
                                                    id="about"
                                                    className="field field--textarea"
                                                    required
                                                    value={about}
                                                    onInput={(e: any) => this.handleInput(e, 'about')}
                                                >
                                                </textarea>

                                                <label htmlFor="about">About</label>
                                            </div>
                                        </div>

                                        <div className="form__row">
                                            <div className="form__controls">
                                                <textarea
                                                    id="skills"
                                                    className="field field--textarea"
                                                    required
                                                    value={skills}
                                                    onInput={(e: any) => this.handleInput(e, 'skills')}
                                                >
                                                </textarea>

                                                <label htmlFor="skills">Skills</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form__actions">
                                        <button>Update</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="settings__section">
                            <div className="settings__head">
                                <h2>Contacts</h2>
                            </div>

                            <div className="settings__form">
                                <exf-contacts-list
                                    items={contacts}
                                    onChange={this.handleContactsChange}
                                    onRemove={this.handleContactRemove}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="settings__section">
                        <div className="settings__head">
                            <h2>Skills Timeline</h2>
                        </div>

                        <div className="settings__form width-1">
                            <div className="form__body">
                                <div className="form__row">
                                    <exf-timeline
                                        items={skillsTimeline}
                                        editable={true}
                                        onChange={this.handleSkillsChange}
                                    />
                                </div>
                            </div>

                            <div className="form__actions">
                                <button onClick={this.handleSkillsSubmit}>Update</button>
                            </div>
                        </div>
                    </div>

                    <div className="settings__section">
                        <div className="settings__head">
                            <h2>About</h2>
                        </div>

                        <div className="settings__form width-1">
                            <div className="form__body">
                                <div className="form__row">
                                    <exf-timeline
                                        items={aboutTimeline}
                                        editable={true}
                                        onChange={this.handleAboutChange}
                                    />
                                </div>
                            </div>

                            <div className="form__actions">
                                <button onClick={this.handleAboutSubmit}>Update</button>
                            </div>
                        </div>
                    </div>

                    <div className="settings__section">
                        <div className="settings__head">
                            <h2>Projects</h2>
                        </div>

                        <div className="form__body flex-body">
                            {projects.map(project => {
                                return (
                                    <div className="projects__item">
                                        <exf-router-link route={`/details/${project.creatorId}/${project.id}`}>
                                            <exf-project details={project} />
                                        </exf-router-link>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="form__actions">
                            <div className="link">
                                <exf-router-link route="/create-project" >Create Project</exf-router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}