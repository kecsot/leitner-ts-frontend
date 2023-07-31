import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Layout } from "../layouts/layout"
import { routes } from "."

export function Router() {

    const router = createBrowserRouter([
        {
          path: routes.root.path,
          element: <Layout />,
          children: [
            {
                path: routes.blog.root.path,
                Component: routes.blog.root.component
            },
            {
                path: routes.contact.root.path,
                Component: routes.contact.root.component,
            },
            {
                path: routes.deck.root.path,
                Component: routes.deck.root.component,
            },
            {
                path: routes.default.path,
                Component: routes.default.component,
            },
          ]
        },

      ]);

      return <RouterProvider router={router} />
}
