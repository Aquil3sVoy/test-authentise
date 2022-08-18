import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("renders app", () => {
  it("render app source component", () => {
    render(<App />);
    screen.getByTestId("root-component");
  });
});
