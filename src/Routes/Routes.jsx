import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import LoginForm from "../Component/Auth/LoginForm";
import HomePage from "../Component/Pages/HomePage";
import SignupForm from "../Component/Auth/SignUpForm";

 

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
            path: '/',
            element: <HomePage/>
        }
      ]
    },
    {
        path: '/login',
        element: <LoginForm/>
    },
    {
        path: '/signup',
        element: <SignupForm/>
    }
  ]);