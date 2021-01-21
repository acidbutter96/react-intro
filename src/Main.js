import React from "react";
import Welcome from "./Welcome";
import Header from "./Header";
import Footer from "./Footer";
import Clock from "./Clock";
import Event from "./Events";

function Main() {
    return (
        <>
            <Header />
            <main>
                <div>
                    <Welcome name="Marvin" />
                    <Welcome name="Lady" />
                    <Welcome name="Pepita" />
                    <Welcome name="Luci" />
                </div>
                <div>
                    <Clock />
                </div>
                <div>
                    <Event/>
                </div>
            </main>
            <Footer/>
        </>
    );
}

export default Main;