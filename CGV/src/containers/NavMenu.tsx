"use client";

import React from "react";
import Link from "next/link";
import NavOverMenu from "./NavOverMenu";

export default function NavMenu() {
    return (
        <ul className="nav">
            <li>
                <Link href="/movies">
                    <h3>영화</h3>
                    <NavOverMenu title="영화" menus="무비차트,아트하우스" menusEng="movies,ArtHouse"/>
                </Link>
            </li>
            <li>
                <Link href="theaters">
                    <h3>극장</h3>
                    <NavOverMenu title="극장" menus="CGV극장,특별관" menusEng="theaters,SpecialTheater"/>
                </Link>
            </li>
            <li>
                <Link href="/ticket">
                    <h3 style={{color : "#fb4357"}}>예매</h3>
                    <NavOverMenu title="예매" menus="빠른예매,상영스케줄" menusEng="ticket,ShowTimes"/>
                </Link>
            </li>
        </ul>
    );
}
