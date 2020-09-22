import ExF, { Component, CustomElement, Prop } from 'exf-ts';
import { match } from 'path-to-regexp';
import { IRoute } from './interfaces';

@CustomElement({
    selector: 'exf-router'
})
export class Router extends Component {
    @Prop('state') routes: IRoute[] = [];
    @Prop('state') guard?: () => boolean;

    onCreate() {
        window.addEventListener('popstate', this.handleChange);
        window.addEventListener('hashchange', this.handleChange);
        window.addEventListener('locationchange', this.handleChange);
    }

    onDestroy() {
        window.removeEventListener('popstate', this.handleChange);
        window.removeEventListener('hashchange', this.handleChange);
        window.removeEventListener('locationchange', this.handleChange)
    }

    handleChange = () => {
        (this as any).update();
    }

    render() {
        const pathname = window.location.pathname;

        for (let i = 0; i < this.routes.length; i++) {
            const currRoute = this.routes[i];
            const matchFn = match(currRoute.path, { decode: decodeURIComponent });
            const matched = matchFn(pathname);

            if (matched) {
                return { tag: currRoute.component, props: matched.params, children: [] };
            }
        }
        
        return <div>Route is not found</div>;
    }
}