import LoginPage from '../components/login/LoginPage'
import { render, screen, fireEvent, waitFor} from '@testing-library/react'
import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter } from 'react-router-dom'
import SignupPage from "../components/signup/SignupPage";
import TestingRouter from "../lib/TestingRouter";
import DashboardPage from "../components/dashboard/DashboardPage";

describe("Login page", () => {

    beforeAll(() => {
        render(
            <MemoryRouter>
                <LoginPage />
            </MemoryRouter>
        )
    })
    it("should render upon loading", () => {

        const loginButton = screen.getByRole('button', {
            name: /log in/i
        })
        expect(loginButton).toBeInTheDocument()
    })

    it("should show error message if there is no email", async () => {

        render(
            <MemoryRouter>
                <LoginPage />
            </MemoryRouter>
        )

        fireEvent.submit(screen.getByTestId('login-form'))


        await waitFor(() => {
            expect(screen.getByText( /please enter your email!/)).toBeInTheDocument()
            expect(screen.getByText( /please enter password!/)).toBeInTheDocument()
        } )
    })

    it("should render signup page if \"Sign up\" is clicked", async () => {

        const redirectUrl = '/signup'

        render(
            <TestingRouter
            ComponentWithRedirection={() => <LoginPage />}
            RedirectUrl={redirectUrl}
            RedirectComponent={() => <SignupPage />}
            />
        )

        screen.debug()
        const signUpLink = screen.getByRole('link', { name: /sign up here/i })
        screen.debug(signUpLink)
        fireEvent.click(signUpLink)

        await waitFor(() => {

            expect(screen.getByRole('button', { name: /sign up/i }))
            // expect(screen.getByText(redirectUrl)).toBeInTheDocument()
        })
    })

    it("should render Dashboard Page if email and password is correct", () => {

        let isAuth = true

        let redirectUrl = '/dashboard'

        render(
            <TestingRouter
                ComponentWithRedirection={() => <LoginPage isAuth={isAuth} />}
                RedirectUrl={redirectUrl}
                RedirectComponent={() => <DashboardPage />}
            />
        )

        const searchBar = screen.getByRole('textbox')
        expect(searchBar).toBeInTheDocument()

    })

})




