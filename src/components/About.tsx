import ExF, { Component, CustomElement, State } from 'exf-ts';
import { ITimelineItems } from '../interfaces/interfaces';
import { store } from '../redux/store';
import { sectionPrimary } from './../mixins/sections-primary';


@CustomElement({
    selector: 'exf-about'
})
export class About extends Component {
    @State('state') timeline: ITimelineItems[] = [];
    @State('state') description: string = '';

    sectionPrimary: object;

    constructor() {
        super();

        this.sectionPrimary = sectionPrimary;
    }

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
                .section {this.sectionPrimary}
            </style>
        )
    }

    render() {
        return (
            <div className="section">
                <div className="section__inner">
                    <div className="section__head">
                        <h2>About</h2>

                        <p>{this.description}</p>
                    </div>

                    <div className="section__body">
                        <exf-timeline items={this.timeline} />
                    </div>
                </div>
            </div>
        )
    }
}