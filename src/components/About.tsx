import ExF, { Component, CustomElement, State } from 'exf-ts';
import { ITimelineItems } from '../interfaces/interfaces';

const descDemo = 'Hello, My name is Alexander Velichkov Todorov. I am a native of Ruse, Bulgaria, 22 years old. I have loved computer technology since I was a child and for this reason I am involved in programming. I graduated in computer engineering and technology at PGEE Apostol Arnaudov in Ruse, and now I study programming at SoftUni, Sofia. So far I have one second place and two first places in applied electronics competitions, as well as a few certificates, which you can see below. There will be many more in the future!';

const timelineDemo = [
    {
        id: 1,
        title: 'Programming Basics',
        desc: 'The Programming Basics with C# course, giving basic programming skills',
        link: 'https://softuni.bg/certificates/details/66066/7576994f',
        start: '09/03/2019',
        end: '22/04/2019'
    },
    {
        id: 2,
        title: 'JS Fundamentals',
        desc: 'The Programming Fundamentals course expands the acquired basic skills for writing program code and introduces basic techniques and tools.',
        link: 'https://softuni.bg/certificates/details/69128/95352670',
        start: '13/05/2019',
        end: '04/08/2019'
    },
    {
        id: 3,
        title: 'JS Advanced',
        desc: 'The course studies more complex concepts such as function context, explicit binding, event loop, develops algorithmic thinking, DOM tree. The functional and OOP approaches to JavaScript programming are considered. Concepts such as inheritance, object composition and prototype chain are studied.',
        link: 'https://softuni.bg/certificates/details/72313/f49edb7e',
        start: '16/09/2019',
        end: '28/10/2019'
    },
    {
        id: 4,
        title: 'JS Applications',
        desc: 'The course studies HTTP requests, REST Services, what are databases and how to work with them, what is asynchronous code, Templating and Routing.',
        link: 'https://softuni.bg/certificates/details/75080/da70578e',
        start: '28/10/2019',
        end: '08/12/2019'
    },
    {
        id: 5,
        title: 'Angular',
        desc: 'The course teaches and TypeScript, also Architectural templates for SPA applications, components, directives, etc.',
        link: 'https://softuni.bg/certificates/details/77680/b0c21034',
        start: '14/01/2020',
        end: '15/04/2020'
    },
    {
        id: 6,
        title: 'VueJS',
        desc: 'Building Single Page Applications with VueJS technology.',
        link: 'https://softuni.bg/certificates/details/80666/7093bcca',
        start: '06/03/2020',
        end: '17/04/2020'
    },
]

@CustomElement({
    selector: 'exf-about'
})
export class About extends Component {
    @State('state') timeline: ITimelineItems[] = timelineDemo;
    @State('state') description: string = descDemo;

    stylize() {
        return (
            <style>
                .about {
                    {
                        'display': 'flex',
                        'justify-content': 'center',
                        'text-align': 'center',
                        'min-height': '85vh',

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