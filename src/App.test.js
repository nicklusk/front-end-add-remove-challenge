import React, {Component} from 'react';
import {shallow} from 'enzyme';
import { render } from "@testing-library/react";
import App from "./App";

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });


it("renders without crashing", () => {
  shallow(<App />);
});

it("renders Account header", () => {
  const wrapper = shallow(<App />);
  const welcome = <h1>Display Active Users Account Details</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});


// test("renders explanation text and starting directions", () => {
//   const { getByText } = render(<App />);
//   const explanationTextHeader = getByText(
//     /Let's create a view that displays user data grouped by the project each user is working on/i
//   );
//   const directionsElement = getByText(/Start by looking at /i);
//   expect(explanationTextHeader).toBeInTheDocument();
//   expect(directionsElement).toBeInTheDocument();
// });


describe("testRender", () =>{
it("should render hello world", () => {


    const html = idx.sayHello();


    const wrapper = shallow(html).toJSON();


    expect(wrapper.text()).toContain("Hello World!");


});

});