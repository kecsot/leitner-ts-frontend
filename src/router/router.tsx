import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import { Layout } from "../layouts/layout"
import { ElementType, Suspense, lazy } from "react";

const LazyHome = lazy(() => import("../pages/Home"));
const LazyBlogs = lazy(() => import("../pages/Blogs"));
const LazyContact = lazy(() => import("../pages/Contact"));
const LazyDecks = lazy(() => import("../pages/Decks"));
const LazyDeckDetail = lazy(() => import("../pages/DeckDetail"));
const LazyPage404 = lazy(() => import("../pages/Page404"));


export const SuspenseWrapper = (Element: ElementType) => (props: any) => (
    <Suspense fallback={<div>Loading...</div>}>
        <Element {...props} />
    </Suspense>
);



export function Router() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: 'home',
                    Component: LazyHome
                }, {
                    path: 'blogs',
                    Component: LazyBlogs
                },
                {
                    path: 'contact',
                    Component: LazyContact,
                },
                {
                    path: 'decks',
                    children: [
                        { element: <Navigate to='/decks/list' replace />, index: true },
                        { path: 'list', Component: LazyDecks },
                        { path: 'detail/:id', Component: LazyDeckDetail }
                    ]
                },
                {
                    path: '*',
                    Component: LazyPage404,
                }
            ]
        },

    ]);

    return <RouterProvider router={router} />
}
