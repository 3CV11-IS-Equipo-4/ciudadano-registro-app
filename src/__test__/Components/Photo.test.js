import React from "react";
import {mount} from "enzyme";
import Photo from "../../Components/Photo";
import {BrowserRouter as Router} from "react-router-dom";

it("renders correctly", () => {
    const wrapper = mount(<Router><Photo/></Router>)
    console.log(wrapper);
});
