import { Blogs } from "../pages/Blogs";
import { Contact } from "../pages/Contact";
import { Decks } from "../pages/Decks";
import { Home } from "../pages/Home";
import { Page404 } from "../pages/Page404";


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
    deck: {
        root: {
            path: '/decks',
            component: Decks
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