
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';
import App from '../App';


//intregrations
describe("Button Test", function(){

    it("should have button in dom", function(){
    render(<Button>Click me</Button>);
// screen.debug();

let button = screen.getByText("Click me");
expect(button).toBeInTheDocument() 

});

it("should rendered based on testid", function(){
    render(<Button>Click me</Button>);

    let button= screen.getByTestId('cButton');
    expect(button).toBeInTheDocument();
})
it("should rendered based empty", function(){
    render(<Button></Button>);

    let button= screen.getByTestId('cButton');
    expect(button).toBeInTheDocument();
});

it.only("should change theme", function(){
render(<App></App>)

let h3 = screen.getByText("Theme is light")
// expect(h3).toBeInTheDocument();
expect(h3).toHaveTextContent("light")

let themeButton= screen.getByText("Change Theme");
fireEvent.click(themeButton);
expect(h3).toHaveTextContent("dark");

});


it.only("should have call given function", function(){
    const mockfn= jest.fn();
    render(<Button onClick={mockfn}>Click me</Button>);

    const btn= screen.getByText("Click me")
    fireEvent.click(btn);

    expect(mockfn).toBeCalled();

    // expect(mockfn).toBeCalledTimes(1);
    //only once checking if calling twice then it will be fail

});



//snapshot ==> screenshot



})

