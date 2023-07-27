import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "../layout/layout"
import { routes } from "."

export function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path={routes.root.path} element={<Layout />}>
                    <Route index Component={routes.root.component} />
                    <Route path={routes.blog.root.path} Component={routes.blog.root.component} />
                    <Route path={routes.contact.root.path} Component={routes.contact.root.component} />
                    <Route path={routes.default.path} Component={routes.default.component} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
