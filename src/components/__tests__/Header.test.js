import Header from '../Header';
import { fireEvent, render, screen} from '@testing-library/react'
import { BrowserRouter} from 'react-router-dom';
import '@testing-library/jest-dom'
import CartContext from '../../utils/Context';

it("should render header component with listItem", () => {

    render(
        <BrowserRouter>
          <CartContext>
             <Header/>
          </CartContext>
        </BrowserRouter>
    )

    const items = screen.getAllByRole("listitem")
   //console.log(items)

    expect(items.length).toBe(5)
})

it("should render header component with login button and changed it to logout onClick", () => {
    
    render(
        <BrowserRouter>
          <CartContext>
             <Header/>
          </CartContext>
        </BrowserRouter>
    )

    const loginbtn = screen.getByRole("button", {name: "LogIn"})

    fireEvent.click(loginbtn)

    const logoutbtn = screen.getByRole("button", {name : "LogOut"})

    expect(logoutbtn).toBeInTheDocument()

})

