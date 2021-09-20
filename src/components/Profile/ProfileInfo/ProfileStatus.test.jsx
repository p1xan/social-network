import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {

    test("status from props should be in state", () => {
        const component = create(<ProfileStatus status="some text"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("some text");
    });

    test("after creation <span> should be displayed", () => {
        const component = create(<ProfileStatus status="some text"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });

    test("after creation <span> should contains correct status", () => {
        const component = create(<ProfileStatus status="some text"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("some text")
    });

    test("after click  <span> should become <input>", () => {
        const component = create(<ProfileStatus status="some text"/>);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("some text")
    });
})