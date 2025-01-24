import * as React from "react";
import Image from "next/image"
import logo from "../../public/images/logoRed.png";
import "../styles/header.css";

export default function HeaderLogo() {
    return (
        <div className="header-logo">
            <Image src={logo} alt="Logo" style={{ objectFit: "contain" }}/>
        </div>
    );
}