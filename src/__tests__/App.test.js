import React from "react"
import { shallow, mount } from "enzyme"
import App from "../App"

it("Rendered App without crashing", () => {
    shallow(<App />);
});