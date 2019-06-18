import React from "react"
import { shallow } from "enzyme"
import ProjectDetails from "../src/components/projects/ProjectDetails"

it('should render a document title', () => {
    const wrapper = shallow(
        <ProjectDetails title="Details" />
    );
    expect(wrapper.prop('title')).toEqual('Details');
});