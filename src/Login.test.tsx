import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import App from "./App";
describe("Login Component tests, covering Login Capability MVP element", () => {
    beforeEach(() => {
        render(
            <React.StrictMode>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </React.StrictMode>
        );
    });
    test("When logging in as a user, the admin page isn't shown", () => {
        fireEvent.click(screen.getByTestId("login-page"));
        const emailField = screen.getByTestId("email-input");
        const passwordField = screen.getByTestId("password-input");
        const loginButton = screen.getByTestId("login-button");
        userEvent.type(emailField, "kraustev500@gmail.com");
        userEvent.type(passwordField, "password");
        fireEvent.click(loginButton);
        const adminLink = screen.queryByRole("admin-link");
        expect(adminLink).toBeNull();
    });
    test("When logging in as an admin, the admin page is shown", () => {
        fireEvent.click(screen.getByTestId("login-page"));
        const emailField = screen.getByTestId("email-input");
        const passwordField = screen.getByTestId("password-input");
        const loginButton = screen.getByTestId("login-button");
        userEvent.type(emailField, "skraus@udel.edu");
        userEvent.type(passwordField, "team2pass");
        fireEvent.click(loginButton);
        const adminLink = screen.queryByRole("admin-link", { hidden: true });
        expect(adminLink).not.toBeNull();
    });
    test("When failing a login, the login page remains", () => {
        fireEvent.click(screen.getByTestId("login-page"));
        const emailField = screen.getByTestId("email-input");
        const passwordField = screen.getByTestId("password-input");
        const loginButton = screen.getByTestId("login-button");
        userEvent.type(emailField, "invalidEmail");
        userEvent.type(passwordField, "invPs");
        fireEvent.click(loginButton);
        const loginButton2 = screen.queryByTestId("login-button");
        expect(loginButton2).not.toBeNull();
    });
});
