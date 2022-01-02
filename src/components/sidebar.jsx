import React from "react";
import { IconContext } from "react-icons";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import "./sidebar.css";

const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "GCD",
    path: "/gcd",
    icon: <AiIcons.AiFillCalculator />,
    cName: "nav-text",
  },
  {
    title: "Sets",
    path: "/sets",
    icon: <AiIcons.AiFillCalculator />,
    cName: "nav-text",
  },
  {
    title: "Modulo",
    path: "/mod",
    icon: <AiIcons.AiFillCalculator />,
    cName: "nav-text",
  },
  {
    title: "Divisors",
    path: "/divisors",
    icon: <AiIcons.AiFillCalculator />,
    cName: "nav-text",
  },
  {
    title: "Prime Factorization",
    path: "/factorization",
    icon: <AiIcons.AiFillCalculator />,
    cName: "nav-text",
  },
  {
    title: "Desired Grade",
    path: "/finalgrade",
    icon: <AiIcons.AiFillCalculator />,
    cName: "nav-text",
  },
  
];

export default function Sidebar() {
  return (
    <>
      <IconContext.Provider value={{ color: "#25274D" }}>
        <nav>
          <ul className="nav-menu-items">
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
