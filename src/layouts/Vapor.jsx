import React from "react";
import "./Vapor.scss";
import Desktop from "../components/molecules/Desktop/Desktop";
import Taskbar from "../components/molecules/Taskbar/Taskbar";
import StartMenu from "../components/molecules/StartMenu/StartMenu";

export default function Vapor() {
    return (
        <div className="Vapor">
            <Desktop />
            <Taskbar />
            <StartMenu />
        </div>
    )
}
