import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";

const RootLayout = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <Navbar/>

            <main className="grow">
                <Outlet/>
            </main>

            <Footer/>

        </div>
    );
};

export default RootLayout;