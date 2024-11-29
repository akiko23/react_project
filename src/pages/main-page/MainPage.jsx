import React, {useState} from "react";
import {Pagination} from "@consta/uikit/Pagination";
import "./MainPage.css";


const MainPage = () => {
    return (
        <main className="content">
            <div className="message-box">
                <p>Eos harum aliquam repellendus quidem ipsam vel necessitatibus id quasi.</p>
                <p>Описание описание описание</p>
                <div className="message-time">2024-11-13 03:45:10</div>
            </div>
            <div className="message-box">
                <p>Eos harum aliquam repellendus quidem ipsam vel necessitatibus id quasi.</p>
                <p>Описание описание описание</p>
                <div className="message-time">2024-11-13 03:45:10</div>
            </div>
        </main>

    );
};

export default MainPage;