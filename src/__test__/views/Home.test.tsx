import RenderPage from "src/views/home/RenderPage";
import { renderWithProviders } from "src/utils/test-utils";
import { screen, fireEvent, render } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import userEvent from "@testing-library/user-event";
import RenderWithRedux from "src/views/home/RenderWithRedux";
import RenderWithHook from "../../views/home/RenderWithHook";

export const handlers = [
  rest.get("/breeds/image/random", (req, res, ctx) => {
    return res(
      ctx.json({
        message:
          "https://images.dog.ceo/breeds/terrier-kerryblue/n02093859_1003.jpg",
        status: "success",
      })
    );
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen({ onUnhandledRequest: "bypass" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("should render with redux", () => {
  it("should render RenderPage", async () => {
    renderWithProviders(<RenderPage />);
  });
  it("should render RenderWithRedux", async () => {
    renderWithProviders(<RenderWithRedux />);
    const button = screen.getByTestId("button-with-redux");
    fireEvent.click(button);
  });
  it("should trigger useCustomHook", async () => {
    const { container } = render(<RenderWithHook />);
    const button = container.querySelector("button") as HTMLButtonElement;
    userEvent.click(button);
  });
});
