import React from "react";
import {mount} from "enzyme";
import Form from "../../Components/Form";
import {BrowserRouter as Router} from "react-router-dom";

it("renders correctly", () => {
    const wrapper = mount(<Router><Form /></Router>)
    console.log(wrapper);
});
