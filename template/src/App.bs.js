// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import LogoPng from "./logo.png";

import './App.css'
;

var logo = LogoPng;

function App(Props) {
  return React.createElement("div", {
              className: "app"
            }, React.createElement("header", undefined, React.createElement("img", {
                      className: "logo",
                      alt: "logo",
                      src: logo
                    })), React.createElement("main", undefined, React.createElement("p", undefined, "Edit", React.createElement("code", undefined, "src/App.res"), "and save to reload.")), React.createElement("footer", undefined, React.createElement("a", {
                      href: "https://rescript-lang.org/",
                      rel: "noopener noreferrer",
                      target: "_blank"
                    }, "Learn ReScript"), React.createElement("span", {
                      className: "separator"
                    }, "|"), React.createElement("a", {
                      href: "https://v2.parceljs.org/",
                      rel: "noopener noreferrer",
                      target: "_blank"
                    }, "Learn Parcel"), React.createElement("span", {
                      className: "separator"
                    }, "|"), React.createElement("a", {
                      href: "https://prettier.io/",
                      rel: "noopener noreferrer",
                      target: "_blank"
                    }, "Learn Prettier")));
}

var make = App;

export {
  logo ,
  make ,
  
}
/*  Not a pure module */
