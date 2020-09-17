import ExF, { Component, CustomElement, Prop, State } from 'exf-ts';
import { IElementRepresentation } from 'exf-ts/lib/interfaces/interfaces';

@CustomElement({
    selector: 'exf-route'
})
export class Route extends Component {
    @Prop('state') childs: IElementRepresentation[] = [];
    @Prop('state') route: string = '/';
    @State() isActive: boolean = false;

    render() {
        return (
            <div>
                { this.childs }
            </div>
        )
    }
}