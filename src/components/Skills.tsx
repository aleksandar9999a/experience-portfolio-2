import ExF, { Component, CustomElement, State } from 'exf-ts';
import { Unsubscribe } from 'redux';
import { ITimelineItems } from '../interfaces/interfaces';
import { store } from '../redux/store';
import Styles from '../services/styles';


@CustomElement({
    selector: 'exf-skills',
    dependencyInjection: true
})
export class Skills extends Component {
    @State('state') timeline: ITimelineItems[] = [];
    @State('state') description: string = '';

    unsubscribe!: Unsubscribe;

    constructor(private styles: Styles) {
        super();
    }

    onCreate() {
        this.unsubscribe = store.subscribe(() => {
            const { skills, skillsTimeline } = store.getState().mainInfo;
            this.description = skills;
            this.timeline = skillsTimeline;
        })

        store.dispatch({ type: 'GET_MAININFO' });
    }

    onDestroy() {
        this.unsubscribe()
    }

    stylize() {
        return (
            <style>
                .section {this.styles.sectionPrimary}
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