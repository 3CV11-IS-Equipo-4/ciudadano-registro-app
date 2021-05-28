import React from "react";
import { shallow, mount } from "enzyme";
import Layout from "./../../Components/Layout";
import { BrowserRouter as Router } from 'react-router-dom';

it("renders correctly", () => {
  const wrapper = mount(<Router><Layout /></Router>);
  console.log(wrapper);
});