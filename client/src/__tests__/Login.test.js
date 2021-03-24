import Enzyme, { shallow, mount } from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import LoginPage from '../components/login/LoginPage'
import {Button} from "react-bootstrap";
import { render, screen, fireEvent, findByText, waitFor} from '@testing-library/react'
import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'
import { Route } from 'react-router-dom'

// It should return an error if no email or password is provided when button is clicked
// It should show an alert if the email or password is wrong when button is clicked
// It should bring you to signup page if "Sign up" is clicked
// It should render upon starting

describe("Login page", () => {

    const isAuth = jest.fn()
    const login = jest.fn()

    let loginButton
    beforeAll(() => {
        render(
            <MemoryRouter>
                <LoginPage />
            </MemoryRouter>
        )

        loginButton = screen.getByRole('button', {
            name: /log in/i
        })
    })

    it("should render upon loading", () => {
        expect(loginButton).toBeInTheDocument()
    })

    it("should show error message if there is no email", async () => {

        render(
            <MemoryRouter>
                <LoginPage />
            </MemoryRouter>
        )

        fireEvent.submit(screen.getByTestId('login-form'))


        await waitFor(async () => {
            expect( screen.getByText( /please enter your email!/)).toBeInTheDocument()
            expect( screen.getByText( /please enter password!/)).toBeInTheDocument()
        } )


    })

    // it("should log you in if email and password is correct", () => {
    //     expect(wrapper.find('Button[type="submit"]').text()).toBe("Log In")
    //     expect(wrapper.find('#login-password').exists()).toBe(true)
    //     expect(wrapper.find('FormControl[name="email"]').exists()).toBe(true)
    //     expect(wrapper.find('FormControl[name="password"]').exists()).toBe(true)
    //
    //
    //
    // })
    //
    // it("should show an alert if email and password is blank", () => {
    //     expect(wrapper.find('Button').text()).toBe('Log In')
    //
    //
    //     console.log(wrapper.find('form').debug())
    //     wrapper.find('Button').simulate('click')
    //     console.log(wrapper.find('form').debug())
    //     // expect(wrapper.find('.emailError')).toHaveLength(1)
    //     // expect(wrapper.find(".emailError").children()).toHaveLength(1)
    //     expect(wrapper.find('.error-message').text()).toBe("please enter email")
    // })
})




