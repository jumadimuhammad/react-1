/** @format */

import React, { Fragment } from "react";
import Header from "./component/Header";
import Content from "./component/Content";
import Footer from "./component/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
    return (
        <Fragment>
            <Header />
            <Content />
            <Footer />
        </Fragment>
    );
}

export default App;
