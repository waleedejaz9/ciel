"use client"
import NavBar from "./NavBar/Navbar";
import React from "react";

const Header = () => {
    return (
        <div>
            <link
                href="https://fonts.googleapis.com/css?family=Salsa"
                rel="stylesheet"></link>
            <link
                href="https://fonts.google.com/specimen/Montserrat"
                rel="stylesheet"></link>
            <link
                rel="stylesheet"
                href="https://fonts.google.com/specimen/Rubik"></link>
            <div
                className="relative sm:bg-center bg-hero bg-cover bg-center bg-no-repeat">
                {/* Color overlay div */}
                <div className="absolute top-0 left-0 w-full h-full bg-primary1 opacity-20"></div>
                <NavBar />

            </div>
        </div>
    );
};

export default Header;
