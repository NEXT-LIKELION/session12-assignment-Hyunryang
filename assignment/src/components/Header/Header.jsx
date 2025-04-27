import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">☑️ Main</Link>
                    </li>
                    <li>
                        <Link to="/about">📚 About</Link>
                    </li>
                    <li>
                        <Link to="/library">🔍 Search</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
