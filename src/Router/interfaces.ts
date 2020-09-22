export interface IRoute {
    component: string,
    path: string,
    redirectTo?: string,
    data?: any,
    useGuard?: () => boolean;
}