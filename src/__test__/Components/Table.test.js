import React from "react";
import {mount} from "enzyme";
import Table from "../../Components/Table";
import {BrowserRouter as Router} from "react-router-dom";

it("renders correctly", () => {
    const wrapper = mount(<Router><Table/></Router>)
    console.log(wrapper);
});
