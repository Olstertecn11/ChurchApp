import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function DropCard() {
    const [dropdown, setDropdown] = useState(false);
    const toggleOpen = () => setDropdown(!dropdown);

    return (
      <li className="dropdown">
            <button className="" onClick={toggleOpen}>Dropdown</button>
            <div
                className={`dropdown-menu ${dropdown ? "show" : ""}`}
                aria-labelledby="dropdownMenuButton"
            >
                <a className="dropdown-item" href="#">
                    Delete
                </a>
                <a className="dropdown-item" href="#">
                    Pin to your Profile
                </a>
            </div>
      </li>
    );
}
