import React from "react";
import {mount} from "enzyme";
import Card from "../../Components/Card-blank";
import {BrowserRouter as Router} from "react-router-dom";

it("renders correctly", () => {
    const wrapper = mount(<Router><Card /></Router>)
    console.log(wrapper);
});
