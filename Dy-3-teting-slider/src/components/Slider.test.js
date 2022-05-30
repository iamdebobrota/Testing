import { fireEvent, render, screen } from "@testing-library/react"
import Button from "./Button";
import Slider from "./Slider";
const data = [
    {
      id:1,
      question:"This is question",
      answer: "This is answer"
    },
    {
      id:2,
      question:"This is question2",
      answer: "This is answer2"
    },
    {
      id:3,
      question:"This is question3",
      answer: "This is answer3"
    }
  ]

describe("Checking Slider component",function(){
    it("should not crash on render",function(){
        render(<Slider data={data}/>)
        let question = screen.getByTestId("question");
        let answer = screen.getByTestId("answer");
        expect(question).toBeInTheDocument();
        expect(answer).toBeInTheDocument();
    });

    it("should render without any data",function(){
        render(<Slider data={[]}/>);
        let slider = screen.getByTestId("slider");
        expect(slider).toBeInTheDocument();
    })

    it("should call next function",function(){
        let mockfn = jest.fn()
        render(<Button onClick={mockfn}>Next</Button>)
        let next = screen.getByText("Next");
        fireEvent.click(next);
        expect(mockfn).toBeCalled();
    })

    it("should call prev function",function(){
        let mockfn = jest.fn()
        render(<Button onClick={mockfn}>Prev</Button>)
        let prev = screen.getByText("Prev");
        fireEvent.click(prev);
        expect(mockfn).toBeCalled();
    })

})