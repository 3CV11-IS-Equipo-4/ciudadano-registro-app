import React from "react";
import {mount} from "enzyme";
import Button from "../../Components/Button";
import {BrowserRouter as Router} from "react-router-dom";

it("renders correctly", () => {
    const wrapper = mount(<Router><Button/></Router>)
    console.log(wrapper);
});
