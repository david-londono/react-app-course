import { lazy, LazyExoticComponent } from 'react';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-Lazyload/pages/';
import { NoLazy } from '../01-Lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: 'LazyLayout' */ '../01-Lazyload/layout/LazyLayout'));
// const Lazy2 = lazy(() => import(/* webpackChunkName: 'LazyPage2' */ '../01-Lazyload/pages/LazyPage2'));
// const Lazy3 = lazy(() => import(/* webpackChunkName: 'LazyPage3' */ '../01-Lazyload/pages/LazyPage3'));

export const routes: Route[] = [
    {
        to: '/lazyload',
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'Lazy Layout - Dash'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    }
];