import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import '@testing-library/jest-dom'


it("should render ", () => {
   render(<Contact/>)
    const res = screen.getByRole("heading")
    
    console.log(res)

    expect(res).toBeInTheDocument()
});

it("should render input", () => {
    render(<Contact />)
    const name = screen.getByRole("textbox")

    expect(name).toBeInTheDocument()
})