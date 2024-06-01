import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";



it("Should load Header Component with a login button", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );


    const loginButton =  screen.getByRole("button", {name: "Login"});
    expect(loginButton).toBeInTheDocument();
});


it("Should load Header Component with cart items 0", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );


    const Cart =  screen.getByText("Cart (0)"); //screen.getByText(/Cart/) regex
    expect(Cart).toBeInTheDocument();
});


it("Should change Login Button to Logout on click", ()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", {name: "Logout"});

    expect(logoutButton).toBeInTheDocument();
});