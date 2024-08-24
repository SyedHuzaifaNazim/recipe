import React from "react";

function SignIn() {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Sign In"
            ),
        React.createElement(
            "form",
            null,
            React.createElement(
                "label",
                null,
                "Email: "
                ),
            React.createElement(
                "input",
                {
                    type: "email",
                    name: "email",
                    placeholder: "Enter your email"
                    }
            ),
            React.createElement(
                "br",
                null
                ),
                React.createElement(
                    "label",
                    null,
                    "Password: "
            ),
            React.createElement(
                "input",
                {
                    type: "password",
                    name: "password",
                    placeholder: "Enter your password"
                    }
            ),
            React.createElement(
                "button",
                null,
                "Sign In"
            ),
            React.createElement(
                "a",
                {
                    href: "#",
                    style: {
                        color: "#0000ff",
                        textDecoration: "none"
                        }
                        },
                        "Forgot Password?"
            ),
        ),
    )
}

export default SignIn;