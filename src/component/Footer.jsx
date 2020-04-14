/** @format */

import React, { Component } from "react";
import "./foot.css";

class Footer extends Component {
    render() {
        return (
            <div className="container-fluid pt-4 pb-2 foot">
                    <hr className="hr" />
                <div className="row justify-content-center pt-3">
                    <p className="text-center">Copyright @ Mizuchi By Muhammad Jumadi</p>
                </div>
            </div>
        );
    }
}

export default Footer;
