import ExF, { Component, CustomElement, Prop, State } from 'exf-ts';
import { ITimelineItems } from '../interfaces/interfaces';


@CustomElement({
    selector: 'exf-timeline'
})
export class Timeline extends Component {
    @Prop('state') items: ITimelineItems[] = [];
    @State('state') isEditable: boolean = false;

    stylize() {
        return (
            <style>
                .timeline {
                    {
                        'list-style-type': 'none',
                        'padding': '20px',
                        'overflow-x': 'auto',

                        'li': {
                            'position': 'relative',
                            'display': 'inline-block',
                            'padding-bottom': '60px',

                            '.timeline__badge': {
                                'width': '30px',
                                'height': '30px',
                                'position': 'absolute',
                                'background-color': '#08fdd8',
                                'border-radius': '50%',
                                'bottom': '10px',
                                'left': 'calc(50% - 15px)',
                            },

                            '.timeline__badge:before': {
                                'position': 'absolute',
                                'content': '""',
                                'background-color': '#eeeeee',
                                'height': '2px',
                                'width': '235px',
                                'bottom': '50%',
                                'right': '30px',
                            },

                            '.timeline__panel': {
                                'position': 'relative',
                                'background': '#181818',
                                'border-radius': '20px',
                                'width': '200px',
                                'padding': '15px 15px 55px',
                                'box-shadow': '1px 1px 6px #08fdd841',
                                'transition': 'box-shadow .15s'
                            },

                            '.timeline__panel:hover': {
                                'box-shadow': '1px 1px 20px #08fdd841'
                            },

                            '.timeline__foot': {
                                'position': 'absolute',
                                'display': 'flex',
                                'justify-content': 'space-between',
                                'bottom': '10px',
                                'left': '15px',
                                'right': '15px'
                            },

                            'h4': {
                                'font-size': '20px'
                            },

                            'a': {
                                'text-decoration': 'none',
                                'color': 'inherit'
                            },

                            'p': {
                                'color': '#fff',
                                'font-size': '14px'
                            }
                        },

                        'li:first-child .timeline__badge:before': {
                            'display': 'none'
                        },

                        'li + li': {
                            'margin-left': '35px'
                        }
                    }
                }

                .timeline::-webkit-scrollbar {
                    { height: '8px' }
                }

                .timeline::-webkit-scrollbar-track {
                    { 'border-radius': '10px' }
                }

                .timeline::-webkit-scrollbar-thumb {
                    {
                        'border-radius': '10px',
                        'background-color': '#08fdd8'
                    }
                }
            </style>
        )
    }

    render() {
        return (
            <ul className="timeline">
                {this.items.map(({ link, title, desc, start, end }: ITimelineItems) => {
                    return (
                        <li>
                            <div className="timeline__badge"></div>

                            <div className="timeline__panel">
                                <h4>
                                    <a href={link} target="_blank">{title}</a>
                                </h4>

                                <p>{desc}</p>

                                <div className="timeline__foot">
                                    <p>Start: <span>{start}</span></p>

                                    <p>End: <span>{end}</span></p>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}