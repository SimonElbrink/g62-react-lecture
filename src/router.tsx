import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import UserProfile from "./pages/UserProfile.tsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "about",
                element: <AboutPage />,
            },
            {
                path: "contact",
                element: <ContactPage />,
            },
            {
                path: "user/:userId",
                element: <UserProfile />,
            },

            {
                path: "/login",
                element: <LoginPage />,
            },

            {
                path: "*",
                element: <NotFoundPage/>,
            }
        ]
    }
])

export default router;