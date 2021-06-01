import React from "react";
import {mount} from "enzyme";
import Input from "../../Components/Input";
import {BrowserRouter as Router} from "react-router-dom";

it("renders correctly", () => {
    const wrapper = mount(<Router><Input/></Router>)
    console.log(wrapper);
});
