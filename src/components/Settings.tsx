import ExF, { Component, CustomElement, State } from 'exf-ts';
import { IEmail, IProject, ISocials, ITimelineItems } from '../interfaces/interfaces';
import { store } from '../redux/store';
import { update_mydata } from '../redux/symbols';


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

        if(!!store.getState().user) {
            store.dispatch({ type: 'GET_MY_DATA' });
        }
    }

    handleInput(e: any, type: 'firstName' | 'lastName' | 'devType' | 'about' | 'skills') {
        store.dispatch({ type: update_mydata, payload: { [type]: e.target.value }});
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

    stylize() {
        return (
            <style>
                .settings {
                    {
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
                            'min-width': '500px',

                            '.form__control': {
                                'position': 'relative',
                                'padding': '10px 0'
                            },

                            '.form__row + .form__row': {
                                'margin-top': '20px'
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
                            },

                            'button:hover': {
                                'box-shadow': '1px 1px 20px #08fdd841'
                            },

                            '.form__actions': {
                                'margin-top': '55px'
                            }
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

                        'label': {
                            'position': 'absolute',
                            'top': '27px',
                            'left': '21px',
                            'color': '#fff',
                            'transition': 'top .1s, left .1s, color .1s'
                        },
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
                                        <div className="form__control">
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
                                        <div className="form__control">
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
                                        <div className="form__control">
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
                                        <div className="form__control">
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
                                        <div className="form__control">
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
                            <h2>Skills</h2>
                        </div>

                        <div className="settings__form">
                            <div className="form__body">
                                <div className="form__row">
                                    <exf-timeline items={this.skillsTimeline} />
                                </div>
                            </div>

                            <div className="form__actions">
                                <button>Update</button>
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
                                    <exf-timeline items={this.aboutTimeline} />
                                </div>
                            </div>

                            <div className="form__actions">
                                <button>Update</button>
                            </div>
                        </div>
                    </div>

                    <div className="settings__section">
                        <div className="settings__head">
                            <h2>Contacts</h2>
                        </div>

                        <div className="settings__form">
                            <exf-contacts-list items={this.contacts} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}