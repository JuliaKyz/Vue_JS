import { mount } from "@vue/test-utils";
import App from "../src/App";

describe('Calvulator testing', () => {

    test('Test first operator', () => {
        const wrapper = mount(App);
        const operator1Input = wrapper.find('input[name="operator1"]');

        operator1Input.setValue(1);

        expect(wrapper.vm.operator1).toBe(1)
    })

    test('Test second operator', () => {
        const wrapper = mount(App);
        const operator2Input = wrapper.find('input[name="operator2"]');

        operator2Input.setValue(2);

        expect(wrapper.vm.operator2).toBe(2)
    })

    test('Test sum method', () => {
        const wrapper = mount(App);
        const operator1Input = wrapper.find('input[name="operator1"]');
        const operator2Input = wrapper.find('input[name="operator2"]');
        const sumButton = wrapper.find('button[name="sumButton"]');
        operator1Input.setValue(4);
        operator2Input.setValue(2);
        sumButton.trigger('click')
        expect(wrapper.vm.result).toBe(6)
    })

    test('Test minus method', () => {
        const wrapper = mount(App);
        const operator1Input = wrapper.find('input[name="operator1"]');
        const operator2Input = wrapper.find('input[name="operator2"]');
        const minusButton = wrapper.find('button[name="minusButton"]');
        operator1Input.setValue(4);
        operator2Input.setValue(2);
        minusButton.trigger('click')
        expect(wrapper.vm.result).toBe(2)
    })

    test('Test multiply method', () => {
        const wrapper = mount(App);
        const operator1Input = wrapper.find('input[name="operator1"]');
        const operator2Input = wrapper.find('input[name="operator2"]');
        const multiplyButton = wrapper.find('button[name="multiplyButton"]');
        operator1Input.setValue(4);
        operator2Input.setValue(2);
        multiplyButton.trigger('click')
        expect(wrapper.vm.result).toBe(8)
    })

    test('Test divide method', () => {
        const wrapper = mount(App);
        const operator1Input = wrapper.find('input[name="operator1"]');
        const operator2Input = wrapper.find('input[name="operator2"]');
        const divideButton = wrapper.find('button[name="divideButton"]');
        operator1Input.setValue(4);
        operator2Input.setValue(2);
        divideButton.trigger('click')
        expect(wrapper.vm.result).toBe(2)
    })

})