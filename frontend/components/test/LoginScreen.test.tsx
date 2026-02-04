import { render,screen } from "@testing-library/react-native";
import React from "react";
import LoginScreen from "../screens/LoginScreen";


const mockNavigation = {
    navigate: jest.fn(),
  };
const mockRoute = {
    params: undefined,
  };
   // Tests Welcome Back Text
  describe("Welcome Back Text",() => {
    test("renders Welcome Back text", () => {
        render(
        <LoginScreen
          navigation={mockNavigation as any}
          route = {mockRoute as any}
        />
      );
        const welcomeBackText = screen.getByText("Welcome Back");
        expect(welcomeBackText).toBeTruthy();
      });

    });
    // Tests SecondSpin Logo 
  describe("SeondSpin Logo", () => {
    test("renders SecondSpin logo", () => {
        render(
        <LoginScreen
          navigation={mockNavigation as any}
          route = {mockRoute as any}
        />
      );
        const logoImage = screen.getByTestId("logoIcon");
        expect(logoImage).toBeTruthy();
      });
    });
  // Tests Login Subheader Text
  describe ("Welcome Back Subheader Text",() => {
    test("renders Login subheader text", () => {
        render(
        <LoginScreen
          navigation={mockNavigation as any}
          route = {mockRoute as any}
        />
      );
        const loginSubheaderText = screen.getByText("Log in to your SecondSpin account");
        expect(loginSubheaderText).toBeTruthy();
      });
    });

    // Tests Email Input Field
  describe("email input text",() => {
    test("renders email input field", () => {
        render(
        <LoginScreen
          navigation={mockNavigation as any}
          route = {mockRoute as any}
        />
      );
        const emailInputText = screen.getByText("Email Input");
        expect(emailInputText).toBeTruthy();
      });
    }

  );

  // Tests Email Text
  describe("Email Text",() => {
    test("renders email text", () => {
        render(
        <LoginScreen
          navigation={mockNavigation as any}
          route = {mockRoute as any}
        />
      );
        const emailText = screen.getByText("Email");
        expect(emailText).toBeTruthy();
      });
    });

    // Tests Email Placeholder Text
  describe("Email Placeholder Text",() => {
    test("renders email placeholder text", () => {
        render(
        <LoginScreen
          navigation={mockNavigation as any}
          route = {mockRoute as any}
        />
      );
        const emailPlaceholderText = screen.getByPlaceholderText("Enter your email");
        expect(emailPlaceholderText).toBeTruthy();
      });
    });

    // Tests Password Input Field
  describe("Password text",() => {
    test("renders password text", () => {
        render(
        <LoginScreen
          navigation={mockNavigation as any}
          route = {mockRoute as any}
        />
      );
        const passwordText = screen.getByText("Password");
        expect(passwordText).toBeTruthy();
      });
    });

    // Tests Password Placeholder Text
    describe("Password placeholder text",() => {
      test("renders password placeholder text", () => {
          render(
          <LoginScreen
            navigation={mockNavigation as any}
            route = {mockRoute as any}
          />
        );
          const passwordPlaceholderText = screen.getByPlaceholderText("Enter your password");
          expect(passwordPlaceholderText).toBeTruthy();
        });
      });

      // Tests Eye Icon
    describe("Eye icon",() => {
      test("renders eye icon for password visibility toggle", () => {
          render(
          <LoginScreen
            navigation={mockNavigation as any}
            route = {mockRoute as any}
          />
        );
          const eyeIcon = screen.getByTestId("togglePasswordVisibility");
          expect(eyeIcon).toBeTruthy();
        });
      });

      // Tests Forgot Password Text
    describe("Forgot Password Text",() => {
      test("renders Forgot Password text", () => {
          render(
          <LoginScreen
            navigation={mockNavigation as any}
            route = {mockRoute as any}
          />
        );
          const forgotPasswordText = screen.getByText("Forgot Password?");
          expect(forgotPasswordText).toBeTruthy();
        });
      });

      // Tests Login Button Text
    describe("Login Button Text",() => {
      test("renders Login button text", () => {
          render(
          <LoginScreen
            navigation={mockNavigation as any}
            route = {mockRoute as any}
          />
        );
          const loginButtonText = screen.getByText("Log In");
          expect(loginButtonText).toBeTruthy();
        });
      });

      // Tests Login Button
      describe("Login Button",() => {
        test("renders Login button", () => {
            render(
            <LoginScreen
              navigation={mockNavigation as any}
              route = {mockRoute as any}
            />
          );
            const loginButton = screen.getByTestId("loginButton");
            expect(loginButton).toBeTruthy();
          });
        });

        // Tests Don't have an account Text
      describe("Don't have an account Text",() => {
        test("renders Don't have an account text", () => {
            render(
            <LoginScreen
              navigation={mockNavigation as any}
              route = {mockRoute as any}
            />
          );
            const dontHaveAccountText = screen.getByText("Don't have an account?");
            expect(dontHaveAccountText).toBeTruthy();
          });
        });

        // Tests Sign Up Link
      describe("Sign Up Link",() => {
        test("renders Sign Up text", () => {
            render(
            <LoginScreen
              navigation={mockNavigation as any}
              route = {mockRoute as any}
            />
          );
            const signUpLinkText = screen.getByText("Sign Up");
            expect(signUpLinkText).toBeTruthy();
          });
        });



