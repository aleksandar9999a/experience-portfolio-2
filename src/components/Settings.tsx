import ExF, { Component, CustomElement, State } from 'exf-ts';
import { IEmail, ITimelineItems } from '../interfaces/interfaces';


@CustomElement({
    selector: 'exf-settings'
})
export class Settings extends Component {
    @State('state') skillsTimeline: ITimelineItems[] = [];
    @State('state') aboutTimeline: ITimelineItems[] = [];
    @State('state') contacts: IEmail[] = [];

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

                            '.field:focus ~ label': {
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
                            <form>
                                <div className="form__body">
                                    <div className="form__row">
                                        <div className="form__control">
                                            <input type="text" id="firstName" className="field" />

                                            <label htmlFor="firstName">First Name</label>
                                        </div>
                                    </div>

                                    <div className="form__row">
                                        <div className="form__control">
                                            <input type="text" id="lastName" className="field" />

                                            <label htmlFor="lastName">Last Name</label>
                                        </div>
                                    </div>

                                    <div className="form__row">
                                        <div className="form__control">
                                            <input type="text" id="devType" className="field" />

                                            <label htmlFor="devType">Developer Type</label>
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
                            <form>
                                <div className="form__body">
                                    <div className="form__row">
                                        <div className="form__control">
                                            <textarea id="skills" className="field field--textarea"></textarea>

                                            <label htmlFor="skills">Skills text</label>
                                        </div>
                                    </div>

                                    <div className="form__row">
                                        <exf-timeline items={this.skillsTimeline} />
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
                            <h2>About</h2>
                        </div>

                        <div className="settings__form">
                            <form>
                                <div className="form__body">
                                    <div className="form__row">
                                        <div className="form__control">
                                            <textarea id="about" className="field field--textarea"></textarea>

                                            <label htmlFor="about">About text</label>
                                        </div>
                                    </div>

                                    <div className="form__row">
                                        <exf-timeline items={this.aboutTimeline} />
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
                            <exf-contacts-list items={this.contacts} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}