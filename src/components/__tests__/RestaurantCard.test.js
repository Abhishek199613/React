import { render, screen } from "@testing-library/react";
import RestaurantCard, {withPromotedLabel} from "../RestaurantCard";
import MOCK_DATA from "../mocks/resData.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />)

    const name = screen.getByText("DMB Sweets Pvt Ltd");
    expect(name).toBeInTheDocument();
});

it("Should render RestaurantCard component with promoted Label", () => {
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    render(<RestaurantCardPromoted resData={MOCK_DATA}/>);

    const name = screen.getByText(/50%/);
    expect(name).toBeInTheDocument();
})