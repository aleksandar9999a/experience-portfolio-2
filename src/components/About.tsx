import ExF, { Component, CustomElement, State } from 'exf-ts';
import { ITimelineItems } from '../interfaces/interfaces';
import { store } from '../redux/store';
import Styles from '../services/styles';


@CustomElement({
    selector: 'exf-about',
    dependencyInjection: true
})
export class About extends Component {
    @State('state') timeline: ITimelineItems[] = [];
    @State('state') description: string = '';

    constructor(private styles: Styles) {
        super();
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
                .section {this.styles.sectionPrimary}
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