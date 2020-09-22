import ExF, { Component, CustomElement, State } from 'exf-ts';
import { ITimelineItems } from '../interfaces/interfaces';


@CustomElement({
    selector: 'exf-skills'
})
export class Skills extends Component {
    @State('state') timeline: ITimelineItems[] = [];
    @State('state') description: string = '';

    stylize() {
        return (
            <style>
                .skills {
                    {
                        'display': 'flex',
                        'justify-content': 'center',
                        'text-align': 'center',

                        'h2': {
                            'font-size': '40px',
                            'color': '#08fdd8'
						},

                        '.skills__inner': {
                            'margin-top': '50px'
                        },

                        '.skills__head': {
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
            <div className="skills">
                <div className="skills__inner">
                    <div className="skills__head">
                        <h2>Skills</h2>

                        <p>{this.description}</p>  
                    </div>
                    
                    <div className="skills__body">
                        <exf-timeline items={this.timeline} />
                    </div>
                </div>
            </div>
        )
    }
}