import ExF, { Component, CustomElement, State } from 'exf-ts';
import { ITimelineItems } from '../interfaces/interfaces';

const descDemo = 'My field of work is in Full-Stack Development. I have experience in developing small and medium projects with the help of Angular, React, VueJS, NodeJS, Express, MongoDB, Mongoose, Bootstrap, Material Design and etc. I also have experience with Vanilla JS.';

const timelineDemo = [
    {
        id: 1,
        title: 'Montupet Bulgaria',
        desc: 'Casting of engine heads.',
        link: 'https://montupet.bg/',
        start: '2017',
        end: '2018'
    },
    {
        id: 2,
        title: 'Time Assistants',
        desc: 'Time Assistant is a Sales Representative of Econt. We made deliveries of postal, courier and cargo shipments.',
        link: '',
        start: '20178',
        end: '2020'
    }
]

@CustomElement({
    selector: 'exf-skills'
})
export class Skills extends Component {
    @State('state') timeline: ITimelineItems[] = timelineDemo;
    @State('state') description: string = descDemo;

    stylize() {
        return (
            <style>
                .skills {
                    {
                        'display': 'flex',
                        'justify-content': 'center',
                        'text-align': 'center',
                        'min-height': '85vh',

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
                        <h1>Skills</h1>

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