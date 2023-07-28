import { Link } from "react-router-dom";

export const Nav = () => (<>
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/blogs">Blogs</Link>
            </li>
            <li>
                <Link to="/decks">Decks</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
</>);