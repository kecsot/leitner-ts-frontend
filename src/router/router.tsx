import {Navigate, RouterProvider, createBrowserRouter} from "react-router-dom"
import Layout from "../layouts/Layout.tsx"
import {ElementType, Suspense, lazy} from "react";

export const SuspenseWrapper = (Element: ElementType) => (props: any) => (
    <Suspense fallback={<div>Loading...</div>}>
        <Element {...props} />
    </Suspense>
);

const HomeComponent = SuspenseWrapper(lazy(() => import("../pages/dashboard/Home.tsx")));
const BoxesComponent = SuspenseWrapper(lazy(() => import("../pages/dashboard/Boxes.tsx")));
const BoxDetailComponent = SuspenseWrapper(lazy(() => import("../pages/dashboard/box/BoxDetail.tsx")));
const LeitnerSystemsComponent = SuspenseWrapper(lazy(() => import("../pages/dashboard/LeitnerSystems.tsx")));
const NotesComponent = SuspenseWrapper(lazy(() => import("../pages/dashboard/Notes.tsx")));

const BoxStoreComponent = SuspenseWrapper(lazy(() => import("../pages/community/store/BoxStore.tsx")));
const LeitnerSystemStoreComponent = SuspenseWrapper(lazy(() => import("../pages/community/store/LeitnerSystemStore.tsx")));

const AchievementsComponent = SuspenseWrapper(lazy(() => import("../pages/account/Achievements.tsx")));
const ProfileComponent = SuspenseWrapper(lazy(() => import("../pages/account/Profile.tsx")));

const TermsOfUseComponent = SuspenseWrapper(lazy(() => import("../pages/other/TermsOfUse.tsx")));
const PrivacyPolicyComponent = SuspenseWrapper(lazy(() => import("../pages/other/PrivacyPolicy.tsx")));
const ContactComponent = SuspenseWrapper(lazy(() => import("../pages/other/Contact.tsx")));

const Page404Component = SuspenseWrapper(lazy(() => import("../pages/Page404")));

export function Router() {

    const defaultRoutes = [
        {
            path: '/',
            Component: HomeComponent,
        },
        {
            path: 'boxes',
            children: [
                {element: <Navigate to='/boxes/list' replace/>, index: true},
                {path: 'list', Component: BoxesComponent},
                {path: 'detail/:id', Component: BoxDetailComponent}
            ]
        },
        {
            path: 'leitner-systems',
            Component: LeitnerSystemsComponent,
        },
        {
            path: 'notes',
            Component: NotesComponent,
        }
    ];

    const communityRoutes = [
        {
            path: 'community/store/boxes',
            Component: BoxStoreComponent,
        },
        {
            path: 'community/store/leitner-systems',
            Component: LeitnerSystemStoreComponent,
        },
    ];

    const accountRoutes = [
        {
            path: 'account/achievements',
            Component: AchievementsComponent,
        },
        {
            path: 'account/profile',
            Component: ProfileComponent,
        },
    ];

    const otherRoutes = [
        {
            path: 'other/terms-of-use',
            Component: TermsOfUseComponent,
        },
        {
            path: 'other/privacy-policy',
            Component: PrivacyPolicyComponent,
        },
        {
            path: 'other/contact',
            Component: ContactComponent,
        },
    ];

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout/>,
            children: [
                ...defaultRoutes,
                ...communityRoutes,
                ...accountRoutes,
                ...otherRoutes,
                {
                    path: '*',
                    Component: Page404Component,
                }
            ]
        },

    ]);

    return <RouterProvider router={router}/>
}
