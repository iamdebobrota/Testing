import { render, screen } from "@testing-library/react";
import { Image } from "../Components/Image";
import { Input } from "../Components/Input";

test("Fake assertion", () => {
  expect(1).toBe(1);
});

describe("Input Test", function(){

  it("should render", function(){
    render(<Input />)

    let inp= screen.getByTestId("input")
    expect(inp).toBeInTheDocument();
  })

})

describe("should have image", function(){
  it("should render", function(){
    render(<Image />)

    let img= screen.getByTestId("image")
    expect(img).toBeInTheDocument();
  })

  it("should render height or width change", function(){
    render(<Image height={"150px"} width={"150px"} />)
    let img=screen.getByTestId("image")
    expect(img).toHaveAttribute("height", "150px");
    expect(img).toHaveAttribute("width", "150px");

  });
  it("should have alt", function(){
    render(<Image alt={"man"} />)
let img=screen.getByTestId("image")
expect(img).toHaveAttribute("alt", "man")
  })
})

describe("should have pagination", function(){

  

})