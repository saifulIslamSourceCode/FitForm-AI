// import { info } from "../info/info";
import { NavLink } from "react-router-dom";

const links = [
    {
        name: "Home",
        to: "/home",     // <-- add leading slash
        active: "home"
    },
    {
        name: "Dashboard",
        to: "/dashboard",
        active: "dashboard"
    },
    {
        name: "Set Goal",
        to: "/goal",
        active: "goal"
    },
    {
        name: "Profile",
        to: "/profile",
        active: "profile"
    },
]

const handleLogout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};

const NavComponent = () => {
    return (
        <nav className="w-52 bg-gray-100 p-4 h-screen flex flex-col justify-around">
            <ul className="mx-auto">
                {
                    links.map(link => (
                        <li key={link.to} className="text-lg">
                            <NavLink
                                to={link.to}
                                className={({ isActive }) =>
                                    isActive ? "bg-blue-200" : ""
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
            <button
                className="text-red-600 hover:bg-red-100 px-4 py-2 rounded mt-4 cursor-pointer"
                onClick={handleLogout}
            >
                Logout
            </button>

        </nav>

    );
}

export default NavComponent;