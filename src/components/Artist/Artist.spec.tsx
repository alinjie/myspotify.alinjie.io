import { render } from "@testing-library/react";
import Artist from ".";

jest.mock("next/image", () => () => <img />);

describe("Artist tests", () => {
  it("renders passed in props", () => {
    const { getByText } = render(
      <Artist name="A Tribe Called Quest" image="img" />
    );

    expect(getByText("A Tribe Called Quest")).toBeInTheDocument();
  });

  it("changes layout when 'large' props is 'true' ", () => {
    const { getByTestId } = render(
      <Artist name="A Tribe Called Quest" image="img" large />
    );

    expect(getByTestId("artist")).toHaveClass("flex-col");
  });
});
