import { Link } from "react-router";
import { useState, useEffect } from "react"

function Banner(selectedPage) {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("mode") === "dark";
      });

    useEffect(() => {
        if (darkMode) {
          document.body.classList.add("dark-mode");
          localStorage.setItem("mode", "dark");
        } else {
          document.body.classList.remove("dark-mode");
          localStorage.setItem("mode", "light");
        }
      }, [darkMode]);

    return(
        <header className="banner">
            <h1 className="title">Dinner Decider</h1>

            <div className="navdark">
                <nav className="navigation">
                    <Link to="/">Home</Link>
                    <Link to="/account">My Account</Link>
                    <Link to="/new_recipe">New Recipe</Link>
                </nav>
                <label className="dark-toggle">
                    Dark mode <input type="checkbox" checked={darkMode}  onChange={() => setDarkMode(!darkMode)} />
                </label>
            </div>
        </header>
    );
}


export default Banner;

