import React, { useEffect } from "react";
import Header from "./Header";
import Maintop from "./Maintop";
import Myname from "./MyName";
import MiniContact from "./MiniContact";
import Footer from "./Footer";
import Loader from "./Loading";

function Home() {
    useEffect(() => {
        setTimeout(() => {
            document.body.classList = "body";
        }, 2500);
    }, []);

    return (
        <div>
            <Loader />
            <Header />
            <Maintop />
            <Myname />
            <MiniContact />
            <Footer />
        </div>
    );
}

export default Home;
