import { configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-17-updated';

configure({ adapter: new Adapter() });

global.matchMedia = global.matchMedia || function() {
  return {
      matches : false,
      addListener : function() {},
      removeListener: function() {}
  }
}