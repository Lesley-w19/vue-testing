import Hello from "@/components/Hello.vue";
import { mount } from "@vue/test-utils";
import { expect } from "chai";

const wrapper = mount(Hello, {
  propsData: {
    content: String
  },
});

describe("Hello", () => {
  it("renders a componetent with a welcome message", () => {
    expect(wrapper.text()).contains("Welcome!");
  });

//   it("should have a props content in form of a string ", () => {
//     expect(wrapper.props().content).to.be.a("string");
//   });
});
