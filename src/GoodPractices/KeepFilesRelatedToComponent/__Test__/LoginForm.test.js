import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { LoginForm } from "../LoginForm";

afterEach(cleanup);

describe("LoginForm", () => {
  it("should display login label", () => {
    const { getByText } = render(<LoginForm />);

    expect(getByText("Enter login:").textContent).toBe("Enter login:");
  });

  it("should display password label", () => {
    const { getByText } = render(<LoginForm />);

    expect(getByText("Enter password:").textContent).toBe("Enter password:");
  });

  it("should update login input", () => {
    const { getByLabelText } = render(<LoginForm />);
    const input = getByLabelText("Enter login:");

    fireEvent.change(input, { target: { value: "jacek" } });

    expect(input.value).toBe("jacek");
  });

  it("should update password input", () => {
    const { getByLabelText } = render(<LoginForm />);
    const input = getByLabelText("Enter password:");

    fireEvent.change(input, { target: { value: "jacek" } });

    expect(input.value).toBe("jacek");
  });
});
