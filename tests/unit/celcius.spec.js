import { shallowMount } from "@vue/test-utils";
import { expect } from "chai";
import Celcius from "@/components/Celcius.vue";

const wrapper = shallowMount(Celcius);

describe("Celcius test", () => {
  it("fahrenheit model is an array", () => {
    expect(wrapper.vm.$data.fah).to.be.an("array");
  });

  it("should display the message: Fahrenheit to Celcius", () => {
    expect(wrapper.vm.$data.message).to.equal("Fahrenheit to Celcius");
  });
  it("should be a function that converts an array of data from fahrenheit to a degree", () => {
    expect(wrapper.vm.getCelcius([23, 140, 212, 41])).to.deep.equal([
      -5, 60, 100, 5,
    ]);
  });
});
