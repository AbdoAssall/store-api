/* eslint-disable react/prop-types */
import Footer from "../Footer";
import NavBar from "../Navbar";

export default function AppLayout ({children}) {
    return (
        <>
        <NavBar />
        <section className="min-h-screen bg-white">{children}</section>
        <Footer />
        </>
    )
}