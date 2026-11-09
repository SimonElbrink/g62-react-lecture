import { createBrowserRouter, Link } from "react-router-dom";
import RootLayout from "./layouts/RootLayout.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import HomePage from "./pages/HomePage.tsx";

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
                path: "*",
                element: (
                    <div className="py-24 text-center">
                        <h1 className="text-4xl font-bold text-slate-900 mb-4">404 - Page Not Found</h1>
                        <p className="text-slate-600 mb-8">The page you are looking for does not exist.</p>
                        <Link to="/" className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-colors">
                            Go Back Home
                        </Link>
                    </div>
                ),
            }
        ]
    }
])

export default router;