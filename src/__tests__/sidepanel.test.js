import React from "react"
import Enzyme, { shallow, mount, render } from "enzyme"
import EachSlide from "../components/sidepanel/sidepanel-slider/EachSlide";
import CasesSlider from "../components/sidepanel/sidepanel-slider/CasesSlider";
import CasesFromRange from "../components/sidepanel/sidepanel-helpers/CasesFromRange";
import toJson from 'enzyme-to-json';
import CntryDropdown from "../components/sidepanel/sidepanel-helpers/CntryDropdown";
import SidePanelArenaDisplay from "../components/sidepanel/sidepanel-helpers/SidePanelArenaDisplay";
import Arena from "../components/sidepanel/sidepanel-sections/Arena";

const eachSlideData = {
    title: "Sample title",
    oldCases: 100,
    cases: 200,
    newCases: 150
}

describe("Slider of Sidepanel", () => {
    it("Each Slide Title Check", () => {
        const eachSlide = mount(<EachSlide title={eachSlideData.title} />)
        const title = eachSlide.find("h4").text()
        expect(title).toEqual(eachSlideData.title)
    });
    it("Each Slide Cases Check", () => {
        const eachSlide = mount(<EachSlide cases={eachSlideData.cases} />)
        const cases = eachSlide.find("p").text().split()[0]
        expect(parseInt(cases)).toEqual(eachSlideData.cases)
    });
    it("Overall Slider check", () => {
        shallow(<CasesSlider />)
    })
})

describe("sidepanel helpers check", () => {
    it("Cases From Range check", () => {
        shallow(<CasesFromRange />)
    })
    it("Country dropdown check", () => {
        shallow(<CntryDropdown />)
    })
    // snapshot testing
    it("Sidepanel Arena display check", () => {
        const wrapper = shallow(<SidePanelArenaDisplay 
            data={{Country: "India", CountryCode: "In", TotalConfirmed: 3000}} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})