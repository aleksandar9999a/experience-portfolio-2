import ExF, { Component, CustomElement } from 'exf-ts';


@CustomElement({
    selector: 'exf-load'
})
export class Load extends Component {
    stylize() {
        return (
            <style>
                {`@keyframes ring {
                    0% { 
                        transform: rotate(0deg); 
                    }
                    100% { 
                        transform: rotate(360deg); 
                    }
                }`}

                .load {
                    {
                        'height': '100vh',
                        'display': 'flex',
                        'background': 'rgba(0,0,0,0.5)',

                        '.load__inner': {
                            'margin': 'auto',

                            'span': {
                                'display': 'inline-block',
                                'width': '80px',
                                'height': '80px',
                                'border-radius': '50%',
                                'border': '6px solid #08fdd8',
                                'border-color': '#08fdd8 transparent #08fdd8 transparent',
                                'animation': 'ring 1.2s linear infinite'
                            }
                        }
                    }
                }
            </style>
        )
    }

    render() {
        return (
            <div className="load">
                <div className="load__inner">
                    <span></span>
                </div>
            </div>
        )
    }
}