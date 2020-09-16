import ExF, { Component, CustomElement, Prop, State } from 'exf-ts';
import tabsConfig from '../config/navbar';
import ITab from '../interfaces/interfaces';

@CustomElement({
	selector: 'exf-navbar-tab'
})
export class NavbarTab extends Component {
	@State('state') tabs: ITab[] = [];
	@Prop('state') route!: string;
	@Prop('state') name!: string;
	@Prop('state') image!: string;

	onCreate() {
		this.tabs = tabsConfig;
	}

	stylize() {
		return (
			<style>
				li {
					{
						'position': 'relative',
						'min-width': '60px'
					}
				}

                a {
					{
						'color': '#08fdd8',
						'text-decoration': 'none',
						'font-size': '15px',

						'span': {
							'opacity': '0',
							'position': 'absolute',
							'top': '5px',
							'left': '-6px',
							'transition': 'opacity 0.15s',
						},

						'img': {
							'width': '25px',
							'transition': 'opacity 0.15s',
						}
					}
				}

                a:hover {
					{
						'span': {
							'opacity': '1'
						},

						'img': {
							'opacity': '0'
						}
					}
				}
			</style>
		)
	}

	render() {
		return (
			<li className="navbar__tab">
				<a href={this.route}>
					<span>{this.name}</span>

					<img src={this.image} alt="settings" />
				</a>
			</li>
		)
	}
}