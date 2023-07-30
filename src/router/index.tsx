import { ElementType, Suspense, lazy } from "react";

const LazyHome = lazy(() => import("../pages/Home"));
const LazyBlogs = lazy(() => import("../pages/Blogs"));
const LazyContact = lazy(() => import("../pages/Contact"));
const LazyDecks = lazy(() => import("../pages/Decks"));
const LazyPage404 = lazy(() => import("../pages/Page404"));


export const SuspenseWrapper = (Element: ElementType) => (props: any) => (
    <Suspense fallback={<div>Loading...</div>}>
        <Element {...props} />
    </Suspense>
);


export const routes = {
    root: {
        path: '/',
        component: SuspenseWrapper(LazyHome)
    },
    blog: {
        root: {
            path: '/blogs',
            component: SuspenseWrapper(LazyBlogs)
        }
    },
    deck: {
        root: {
            path: '/decks',
            component: SuspenseWrapper(LazyDecks)
        }
    },
    contact: {
        root: {
            path: '/contact',
            component: SuspenseWrapper(LazyContact)
        }
    },
    default: {
        path: '*',
        component: SuspenseWrapper(LazyPage404)
    }
}