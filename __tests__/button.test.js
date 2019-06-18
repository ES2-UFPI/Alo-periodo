import React from "react"
import { shallow } from "enzyme"
import SignIn from "../src/components/auth/SignIn"

describe("rendering", () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<SignIn />)
  })
  it("should render a button", () => {
    expect(wrapper.find("Button")).toHaveLength(1)
  })

  it("should render a button with Submit title", () => {
    expect(wrapper.find("Button").prop("title")).toBe("Submit")
})
})