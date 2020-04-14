/** @format */

import React, { Component } from "react";
import "./head.css";
import p1 from "./images/p1.jpg";
import fb from "./images/fb.svg";
import ins from "./images/ins.svg";
import em from "./images/em.svg";
import hub from "./images/hub.svg";
import lab from "./images/lab.svg";
import twit from "./images/twit.svg";

class Header extends Component {
    render() {
        return (
            <div className="container-fluid header">
                <div className="row justify-content-center py-4">
                    <div className="col-sm-8 py-4">
                        <div class="card text-center crd mb-5">
                            <div class="card-body card-1">
                                <div className="row">
                                    <div className="col-sm-4 p-5">
                                        <img
                                            src={p1}
                                            alt="img"
                                            className="img-thumbnail my-5"
                                        />
                                    </div>
                                    <div className="col-sm-8 py-5">
                                        <div className="py-5 text px-2">
                                            <h3>Hi! I'm jumadi</h3>
                                            <p className="py-3">
                                            I'm a freelance developer, I continue to study and learn to get what I want. Now, to develop what i want, I'm following the bootcamp on impact byte. I have some expertise in programming, that is application development, website development, application design, and web design.
                                            </p>
                                            <a href="www.youtube.com"><button className="btn">
                                                Subscribe
                                            </button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer p-4 foot bg-warning">
                                <a href="www.facebook.com">
                                    {" "}
                                    <img src={fb} alt="facebook" />
                                </a>
                                <a href="www.instagram.com">
                                    {" "}
                                    <img src={ins} alt="instagram" />
                                </a>
                                <a href="www.gitlab.com">
                                    {" "}
                                    <img src={lab} alt="gitlab" />
                                </a>
                                <a href="www.github.com">
                                    {" "}
                                    <img src={hub} alt="github" />
                                </a>
                                <a href="www.gmail.com">
                                    {" "}
                                    <img src={em} alt="email" />
                                </a>
                                <a href="www.twitter.com">
                                    {" "}
                                    <img src={twit} alt="twitter" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
