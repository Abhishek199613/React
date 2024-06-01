import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page test cases", () => { // just for grouping all the test cases


    // Used to run before all the task
    beforeAll(()=>{
        console.log("Before All");
    });

    //Used to run before each tasks, used in cleanup tasks before each tasks
    beforeEach(()=>{
        console.log("Before Each");
    });

    //Used to run after all the tasks 
    afterAll(()=>{
        console.log("after all");
    });

    //Used to run after each tasks 
    afterEach(()=>{
        console.log("after each");
    });


    // test can also be written as 'it', works exactly the same as test
    test("Shoul load contact us Component", () => {
        render(<Contact />);

        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });


    test("Shoul load button inside the Component", () => {
        render(<Contact />);

        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument()
    });


    test("Shoul load inpt name inside the Component", () => {
        render(<Contact />);

        const inputName = screen.getByPlaceholderText("name");
        expect(inputName).toBeInTheDocument()
    });

    test("Should load 2 input boxes on the Contact component", ()=>{
        render(<Contact />);

        // Querying
        const inputBoxes = screen.getAllByRole("textbox");//if multiple items use getAll

        //Assertion
        expect(inputBoxes.length).toBe(2)
    })
});