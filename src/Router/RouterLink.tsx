import ExF, { Component, CustomElement, Prop } from 'exf-ts';
import { IElementRepresentation } from 'exf-ts/lib/interfaces/interfaces';

@CustomElement({
	selector: 'exf-router-link'
})
export class RouterLink extends Component {
    @Prop('state') childs: IElementRepresentation[] = [];
    @Prop('state') route: string = '/';

    stopRefresh = (e: any) => {
        e.preventDefault();
        window.history.pushState(null, '', this.route);
        window.dispatchEvent(new Event('locationchange'))
    }

    stylize() {
        return (
            <style>
                a {
                    {
                        'text-decoration': 'none',
                        'color': 'inherit'
                    }
                }
            </style>
        )
    }

	render() {
		return (
			<a href={this.route} onClick={this.stopRefresh}>
                {this.childs}
			</a>
		)
	}
}