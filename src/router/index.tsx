import { Blogs } from "../page/Blogs";
import { Contact } from "../page/Contact";
import { Home } from "../page/Home";
import { Page404 } from "../page/Page404";


export const routes = {
    root: {
        path: '/',
        component: Home
    },
    blog: {
        root: {
            path: '/blogs',
            component: Blogs
        }
    },
    contact: {
        root: {
            path: '/contact',
            component: Contact
        }
    },
    default: {
        path: '*',
        component: Page404
    }
}