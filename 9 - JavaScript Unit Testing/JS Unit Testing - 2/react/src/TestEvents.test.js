import TestEvents from "./TestEvents";
import {render , fireEvent} from "@testing-library/react";

describe("test TestEvents component ",()=>{
    it("test button-up elem",()=>{
    const {getByTestId} = render(<TestEvents/>);
    fireEvent.click(getByTestId("button-up"));
    expect(getByTestId("counter")).toHaveTextContent(1)
    });

    it("test button-down elem",()=>{
        const {getByTestId} = render(<TestEvents/>);
        fireEvent.click(getByTestId("button-down"));
        expect(getByTestId("counter")).toHaveTextContent(-1)
        })
})