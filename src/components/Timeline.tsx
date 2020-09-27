import ExF, { Component, CustomElement, Prop } from 'exf-ts';
import { ITimelineItems } from '../interfaces/interfaces';
import uid from 'uid';

@CustomElement({
    selector: 'exf-timeline'
})
export class Timeline extends Component {
    @Prop('state') items: ITimelineItems[] = [];
    @Prop('state') editable: boolean = false;
    @Prop('state') onChange!: (data: ITimelineItems[]) => void;

    addItem = () => {
        const item = {
            id: uid(),
            title: '',
            description: '',
            link: '',
            start: '',
            end: ''
        }

        this.onChange([...this.items, item]);
    }

    removeItem = (id: string) => {
        const items = this.items.filter(item => {
            return item.id !== id;
        })

        this.onChange(items);
    }

    handleTextChange(e: any, id: string, type: string) {
        const index = this.items.findIndex(item => item.id === id);
        const newItem = { ...(this.items as any)[index], [type]: e.target.value }
        this.onChange([...this.items.slice(0, index), newItem, ...this.items.slice(index + 1)]);
    }

    stylize() {
        return (
            <style>
                .timeline {
                    {
                        'list-style-type': 'none',
                        'padding': '20px',
                        'overflow-x': 'auto',

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

                        '.timeline__actions': {
                            'margin': '30px 0 50px'
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

                        'li': {
                            'position': 'relative',
                            'display': 'inline-block',
                            'padding-bottom': '60px',

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
                        },

                        '.timeline__body': {
                            'margin': '10px 0 35px'
                        },

                        '.field': {
                            'display': 'flex',
                            'border': '1px solid transparent',
                            'background': '#2b2b2b',
                            'color': 'white',
                            'width': '90%',
                            'font-size': '14px',
                            'padding': '8px',
                            'transition': 'border-color .15s',
                            'outline': 'none',
                        },

                        '.field--textarea': {
                            'height': '120px',
                        },

                        '.field--small': {
                            'width': '78%',
                            'margin-top': '5px'
                        },

                        '.field:focus': {
                            'border-color': '#08fdd8'
                        },
                    }
                }

                .timeline::-webkit-scrollbar {
                    { 'height': '8px' }
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

                .timeline-wrapper {
                    {
                        'position': 'relative',
                        'min-height': '300px',

                        '.timeline__add': {
                            'position': 'absolute',
                            'display': 'flex',
                            'justify-content': 'center',
                            'align-items': 'center',
                            'top': '120px',
                            'right': '-164px',
                            'width': '100px',
                            'height': '100px',
                            'background': '#000',
                            'border-radius': '20px',
                            'box-shadow': '1px 1px 6px #08fdd841',
                            'transition': 'box-shadow .15s',
                            'cursor': 'pointer'
                        },

                        '.timeline__add:hover': {
                            'box-shadow': '1px 1px 20px #08fdd841'
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
                            'cursor': 'pointer'
                        },

                        'button:hover': {
                            'box-shadow': '1px 1px 20px #08fdd841'
                        },
                    }
                }
            </style>
        )
    }

    render() {
        return (
            <div className="timeline-wrapper">
                <ul className="timeline">
                    {this.items.map(({ id, link, title, description, start, end }: ITimelineItems) => {
                        return (
                            <li>
                                <div className="timeline__badge"></div>

                                {this.editable
                                    ? (
                                        <div className="timeline__panel">
                                            <h4>
                                                <input
                                                    className="field"
                                                    value={title}
                                                    onInput={(e: any) => this.handleTextChange(e, id, 'title')}
                                                />
                                            </h4>

                                            <div className="timeline__body">
                                                <textarea
                                                    className="field field--textarea"
                                                    onInput={(e: any) => this.handleTextChange(e, id, 'description')}
                                                >
                                                    {description}
                                                </textarea>
                                            </div>

                                            <div className="timeline__body">
                                                <input
                                                    className="field"
                                                    value={link}
                                                    onInput={(e: any) => this.handleTextChange(e, id, 'link')}
                                                />
                                            </div>

                                            <div className="timeline__foot">
                                                <p>Start:
                                                    <input
                                                        className="field field--small"
                                                        value={start}
                                                        onInput={(e: any) => this.handleTextChange(e, id, 'start')}
                                                    />
                                                </p>

                                                <p>End:
                                                    <input
                                                        className="field field--small"
                                                        value={end}
                                                        onInput={(e: any) => this.handleTextChange(e, id, 'end')}
                                                    />
                                                </p>
                                            </div>

                                            <div className="timeline__actions">
                                                <button onClick={() => this.removeItem(id)}>Remove</button>
                                            </div>
                                        </div>
                                    )
                                    : (
                                        <div className="timeline__panel">
                                            <h4>
                                                <a href={link} target="_blank">{title}</a>
                                            </h4>

                                            <p>{description}</p>

                                            <div className="timeline__foot">
                                                <p>Start: <span>{start}</span></p>

                                                <p>End: <span>{end}</span></p>
                                            </div>
                                        </div >
                                    )
                                }
                            </li>
                        )
                    })}
                </ul>

                <div>
                    {this.editable
                        ? <div className="timeline__add" onClick={this.addItem}>+</div>
                        : null}
                </div>
            </div>
        )
    }
}