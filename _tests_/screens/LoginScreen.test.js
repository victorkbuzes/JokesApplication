import { fireEvent, render } from "@testing-library/react-native";
import React from "react";

import App from "../../App"
import { LoginScreen } from "../../src/screens/LoginScreen";


describe('Login screen', () => {
    it('go to home page on login ', () => {
        const page = render(<LoginScreen  navigation={navigation}/>);

        const loginButton = page.getByTestId('loginButton');
        fireEvent.press(loginButton);
        expe
    });
});

