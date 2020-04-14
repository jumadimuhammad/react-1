/** @format */

import React, { Component } from "react";
import "./con.css";
import node from "./images/node.svg";
import mysql from "./images/mysql.svg";
import react from "./images/react.svg";
import sass from "./images/sass.svg";
import html from "./images/html.svg";
import css from "./images/css.svg";
import bo from "./images/bo.svg";
import vanila from "./images/vanila.svg";

class Content extends Component {
    render() {
        return (
            <div className="container-fluid content pb-5">
                <div className="row justify-content-center">
                    <div className="col-sm-8">
                        <div className="row row-1">
                            <div className="col-md-12 text-center p-5">
                                <h5 className="h5"><u>Skills</u></h5>
                            </div>
                            <div className="col-md-3 text-center p-3">
                                <img src={node} alt="node" />
                                <p>nodeJS</p>
                            </div>
                            <div className="col-md-3 text-center p-3">
                                <img src={mysql} alt="mysql" />
                                <p>MySQL</p>
                            </div>
                            <div className="col-md-3 text-center p-3">
                                <img src={react} alt="react" />
                                <p>React</p>
                            </div>
                            <div className="col-md-3 text-center p-3">
                                <img src={sass} alt="sass" />
                                <p>SASS</p>
                            </div>
                            <div className="col-md-3 text-center p-3">
                                <img src={html} alt="html" />
                                <p>HTML</p>
                            </div>
                            <div className="col-md-3 text-center p-3">
                                <img src={css} alt="css" />
                                <p>CSS</p>
                            </div>
                            <div className="col-md-3 text-center p-3">
                                <img src={bo} alt="bootstrap" />
                                <p>Bootstrap</p>
                            </div>
                            <div className="col-md-3 text-center p-3">
                                <img src={vanila} alt="vanila" />
                                <p>VanillaJS</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;
