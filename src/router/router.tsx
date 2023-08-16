import {Navigate, RouterProvider, createBrowserRouter} from "react-router-dom"
import {Layout} from "../layouts/layout"
import {ElementType, Suspense, lazy} from "react";

export const SuspenseWrapper = (Element: ElementType) => (props: any) => (
    <Suspense fallback={<div>Loading...</div>}>
        <Element {...props} />
    </Suspense>
);

const HomeComponent = SuspenseWrapper(lazy(() => import("../pages/Home")));
const BlogsComponent = SuspenseWrapper(lazy(() => import("../pages/Blogs")));
const ContactComponent = SuspenseWrapper(lazy(() => import("../pages/Contact")));
const DecksComponent = SuspenseWrapper(lazy(() => import("../pages/Decks")));
const DeckDetailComponent = SuspenseWrapper(lazy(() => import("../pages/DeckDetail")));
const Page404Component = SuspenseWrapper(lazy(() => import("../pages/Page404")));

export function Router() {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout/>,
            children: [
                {
                    path: 'home',
                    Component: HomeComponent
                }, {
                    path: 'blogs',
                    Component: BlogsComponent
                },
                {
                    path: 'contact',
                    Component: ContactComponent,
                },
                {
                    path: 'decks',
                    children: [
                        {element: <Navigate to='/decks/list' replace/>, index: true},
                        {path: 'list', Component: DecksComponent},
                        {path: 'detail/:id', Component: DeckDetailComponent}
                    ]
                },
                {
                    path: '*',
                    Component: Page404Component,
                }
            ]
        },

    ]);

    return <RouterProvider router={router}/>
}
