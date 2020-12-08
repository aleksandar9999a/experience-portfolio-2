import ExF, { Component, CustomElement, ModuleInjected, State } from 'exf-ts';
import { AnyAction, CombinedState, Store, Unsubscribe } from 'redux';
import { IStore } from '../interfaces/interfaces';


@CustomElement({
    selector: 'exf-load'
})
export class Load extends Component {
    @State('style') isLoading: boolean = false;
    @ModuleInjected() store!: Store<CombinedState<IStore>, AnyAction>;

    unsubscribe!: Unsubscribe;

    onCreate() {
        this.unsubscribe = this.store.subscribe(() => {
			const { load } = this.store.getState();
			this.isLoading = load;
        })
    }

    onDestroy() {
        this.unsubscribe()
    }
    
    stylize() {
        return (
            <styles>
                <style>
                    @keyframes ring {
                        {
                            '0%': { 
                                'transform': 'rotate(0deg)'
                            },

                            '100%': { 
                                'transform': 'rotate(360deg)'
                            }
                        }
                    }
                </style>

                <style>
                    .load {
                        {
                            'height': '100vh',
                            'display': this.isLoading ? 'flex' : 'none',
                            'width': this.isLoading ? '100vw' : '0',
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
            </styles>
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