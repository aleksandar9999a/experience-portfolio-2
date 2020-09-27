import ExF, { Component, CustomElement, State } from 'exf-ts';
import { ITimelineItems } from '../interfaces/interfaces';
import { store } from '../redux/store';


@CustomElement({
    selector: 'exf-about'
})
export class About extends Component {
    @State('state') timeline: ITimelineItems[] = [];
    @State('state') description: string = '';

    onCreate() {
        store.subscribe(() => {
            const { about, aboutTimeline } = store.getState().mainInfo;
            this.description = about;
            this.timeline = aboutTimeline;
        })

        store.dispatch({ type: 'GET_MAININFO' });
    }

    stylize() {
        return (
            <style>
                .about {
                    {
                        'display': 'flex',
                        'justify-content': 'center',
                        'text-align': 'center',

                        'h2': {
                            'font-size': '40px',
                            'color': '#08fdd8'
                        },

                        '.about__inner': {
                            'margin-top': '50px'
                        },

                        '.about__head': {
                            'max-width': '1200px',
                            'margin': '0 auto 80px',
                            'color': '#fff'
                        },
                    }
                }
            </style>
        )
    }

    render() {
        return (
            <div className="about">
                <div className="about__inner">
                    <div className="about__head">
                        <h2>About</h2>

                        <p>{this.description}</p>
                    </div>

                    <div className="about__body">
                        <exf-timeline items={this.timeline} />
                    </div>
                </div>
            </div>
        )
    }
}