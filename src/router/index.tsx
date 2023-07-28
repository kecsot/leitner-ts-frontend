import { Blogs } from "../pages/Blogs";
import { Contact } from "../pages/Contact";
import { Blogs } from "../page/Blogs";
import { Contact } from "../page/Contact";
import { Home } from "../page/Home";
import { Page404 } from "../page/Page404";
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