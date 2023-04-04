import { render, fireEvent } from "@testing-library/react";
import Link from "./Link";
import { screen } from "@testing-library/react";


describe("test TestEvents component ", () => {

  it("test button-up elem", () => {
    const { getByTestId } = render(<Link />);
    fireEvent.click(screen.getByTestId("button-up"));
    expect(screen.getByTestId("counter")).toHaveTextContent(1);
  });

  it("test button-down elem", () => {
    const { getByTestId } = render(<Link/>);
    expect(screen.getByTestId("button-down")).toBeDisabled();
  });
  
});
