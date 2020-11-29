import { IRoute } from "exf-router/lib/interfaces/interfaces";
import { Injectable } from "exf-ts";
import { ITab } from "../interfaces/interfaces";

@Injectable()
export class Routes {
  routes: IRoute[] = [
    { component: 'exf-hero', path: '/' },
    { component: 'exf-skills', path: '/skills' },
    { component: 'exf-about', path: '/about' },
    { component: 'exf-contacts', path: '/contacts' },
    { component: 'exf-projects', path: '/projects' },
    { component: 'exf-settings', path: '/settings' },
    { component: 'exf-login', path: '/login' },
    { component: 'exf-details', path: '/details/:creatorId/:id' },
    { component: 'exf-create-project', path: '/create-project' },
    { component: 'exf-create-project', path: '/create-project/:creatorId/:id' }
  ]

  tabs: ITab[] = [
    { id: 1, name: 'Projects', route: '/projects' },
    { id: 2, name: 'Skills', route: '/skills' },
    { id: 3, name: 'Home', route: '/' },
    { id: 4, name: 'About', route: '/about' },
    { id: 5, name: 'Contacts', route: '/contacts' },
    { id: 6, name: 'Settings', route: '/settings', auth: true }
  ]
}