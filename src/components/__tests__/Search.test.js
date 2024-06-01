import {fireEvent, render, screen} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Body from "../Body";
import MOCK_DATA from "../mocks/bodyMockData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


//to make a dummy of fetch function as jest uses jest browser dom which not contains fetch function
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=> {
            return Promise.resolve(MOCK_DATA);
        },
    })
})

it("Should filter the cards before search", async () =>{
    await act(async () =>

        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );

    const cardsBeforeClick = screen.getAllByTestId("cardTest");    

    expect(cardsBeforeClick.length).toBe(9);

    // const searchBtn = screen.getByRole("button", {name: "Search"});

    // const searchInput = screen.getByTestId("searchInput");

    // fireEvent.change(searchInput, {target: {value: "pizza"}});

    // fireEvent.click(searchBtn);

    // const cardsAfterSeach = screen.getAllByTestId("cardTest");

    // expect(cardsAfterSeach.length).toBe(3);
    
});


it("Should render the Body Component after filter", async () =>{
    await act(async () =>

        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );

    const cardsBeforeFilter = screen.getAllByTestId("cardTest");    

    expect(cardsBeforeFilter.length).toBe(9);

    const topRatedButton = screen.getByRole("button", {name: "Top Rated Restaurants"});

    fireEvent.click(topRatedButton);

    const cardsAfterFilter = screen.getAllByTestId("cardTest");

    expect(cardsAfterFilter.length).toBe(8);


    
})