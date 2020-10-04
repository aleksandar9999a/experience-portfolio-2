import ExF, { Component, CustomElement, State } from 'exf-ts';
import { IEmail, IProject, ISocials, ITimelineItems } from '../interfaces/interfaces';
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
            } = store.getState().myData;

            this.firstName = firstName;
            this.lastName = lastName;
            this.devType = devType;
            this.about = about;
            this.skills = skills;
            this.socials = socials;
            this.aboutTimeline = aboutTimeline;
            this.skillsTimeline = skillsTimeline;
            this.projects = projects;
            this.contacts = contacts;
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
                            'margin': '0 auto'
                        },

                        '.settings__section': {
                            'margin-bottom': '65px'
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
                            'min-width': '500px'
                        }
                    }
                }
            </style>
        )
    }

    render() {
        return (
            <div className="settings">
                <div className="setting__inner">
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
                                                value={this.firstName}
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
                                                value={this.lastName}
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
                                                value={this.devType}
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
                                                value={this.about}
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
                                                value={this.skills}
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
                            <h2>Skills Timeline</h2>
                        </div>

                        <div className="settings__form">
                            <div className="form__body">
                                <div className="form__row">
                                    <exf-timeline
                                        items={this.skillsTimeline}
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

                        <div className="settings__form">
                            <div className="form__body">
                                <div className="form__row">
                                    <exf-timeline
                                        items={this.aboutTimeline}
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
                            <h2>Contacts</h2>
                        </div>

                        <div className="settings__form">
                            <exf-contacts-list
                                items={this.contacts}
                                onChange={this.handleContactsChange}
                                onRemove={this.handleContactRemove}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}