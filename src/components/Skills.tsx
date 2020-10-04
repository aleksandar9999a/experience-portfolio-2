import ExF, { Component, CustomElement, State } from 'exf-ts';
import { ITimelineItems } from '../interfaces/interfaces';
import { store } from '../redux/store';
import { sectionPrimary } from './../mixins/sections-primary';


@CustomElement({
    selector: 'exf-skills'
})
export class Skills extends Component {
    @State('state') timeline: ITimelineItems[] = [];
    @State('state') description: string = '';

    sectionPrimary: object;

    constructor() {
        super();

        this.sectionPrimary = sectionPrimary;
    }

    onCreate() {
        store.subscribe(() => {
            const { skills, skillsTimeline } = store.getState().mainInfo;
            this.description = skills;
            this.timeline = skillsTimeline;
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
                        <h2>Skills</h2>

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