import { fireEvent, render,screen } from "@testing-library/react"
import Counter from "./Counter"

describe("Checking Counter",function(){
    // afterEach(cleanup);
    it("should not crash",function(){
        render(<Counter/>);
        let counter = screen.getByText("Counter 0");
        expect(counter).toBeInTheDocument();
    })
    it("should increment by 5",function(){
        render(<Counter/>);
        let add = screen.getByTestId("addBtn");
        let counter = screen.getByTestId("counter");
        fireEvent.click(add);
        expect(counter).toHaveTextContent("Counter 5")
    })
    it("should decrement by 5",function(){
        render(<Counter/>);
        let reduce = screen.getByTestId("reduceBtn");
        let counter = screen.getByTestId("counter");
        fireEvent.click(reduce);
        expect(counter).toHaveTextContent("Counter -5")
    })
})