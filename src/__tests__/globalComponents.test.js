import React from "react"
import { shallow, mount } from "enzyme"
import toJson from 'enzyme-to-json';
import Title from "../globalComponents/Title";
import Alert from "../globalComponents/Alert";
import CountryImage from "../globalComponents/CountryImage";
import TableRow from "../globalComponents/TableRow";
import Option from "../globalComponents/Option";
import Button from "../globalComponents/Button";

const sampleData = {
    Slug: "In", Country: "India"
}

describe("", () => {
    it("Alert check", () => {
        const wrapper = mount(<Alert alert="Danger ahead" />);
        const value = wrapper.find("span").text()
        expect(value).toEqual("Danger ahead")
    })

    it("Button snapshots", () => {
        const tree = 
            shallow(
                <Button text="Button name" nameOfClass="class" 
                    change="handleChange" styling/>)
        expect(toJson(tree)).toMatchSnapshot()
    })

    it("Country Image check", () => {
        const wrapper = mount(<CountryImage CountryCode="IN" />);
        expect(wrapper.props().CountryCode).toEqual("IN")
    })

    it("Option component check", () => {
        const wrapper = mount(<Option data={sampleData} />);
        const value = wrapper.find("option").text()
        expect(value).toEqual(sampleData.Country)
    })

    it("Table row snapshots", () => {
        const tree = shallow(<TableRow cases={120} title="Sample Title" />)
        expect(toJson(tree)).toMatchSnapshot()
    })

    it("Title check", () => {
        const wrapper = mount(<Title text="Hello world" />);
        const value = wrapper.find("h4").text()
        expect(value).toEqual("Hello world")
    })
})