import { ReactNode } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout;
