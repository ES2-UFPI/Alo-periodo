import React from "react"
import { shallow } from "enzyme"
import CreateProject from "../src/components/projects/CreateProject"

it('should pass a selected value to the onChange handler', () => {
    const value = '2';
    const onChange = jest.fn();
    const wrapper = shallow(
        <CreateProject onChange={onChange} />
    );

expect(wrapper).toMatchSnapshot();

wrapper.find('select').simulate('change', {
        target: { value },
    });

expect(onChange).toBeCalledWith(value);
});