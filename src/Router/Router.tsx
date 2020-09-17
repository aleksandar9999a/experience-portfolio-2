import ExF, { Component, CustomElement, Prop, State } from 'exf-ts';
import { IElementRepresentation } from 'exf-ts/lib/interfaces/interfaces';

@CustomElement({
    selector: 'exf-router'
})
export class Router extends Component {
    @Prop('state') childs: IElementRepresentation[] = [];

    onCreate() {
        window.addEventListener('locationchange', () => {
            (this as any).update();
        });
    }

    render() {
        const pathname = window.location.pathname;

        return this.childs.find(child => {
            return (child as any).props.route === pathname;
        }) 
        || this.childs.find(child => {
            return (child as any).props.route === '**';
        }) 
        || <div>Child for this route is not finded</div>
    }
}