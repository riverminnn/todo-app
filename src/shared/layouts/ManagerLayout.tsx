import { ReactNode } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <Sidebar />
                <div className="main-content ml-12 md:ml-64">
                    {children}
                    <Footer />
                </div>
            </main>
        </div>
    )
}

export default Layout;
