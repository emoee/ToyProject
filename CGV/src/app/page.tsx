import Header from "@/containers/header";
import "./globals.css";
import NavBar from "@/containers/NavBar";

export default function Home() {
    return (
        <div>
            <div className="header-content">
                <Header />
            </div>
            <div className="nav-content">
                <NavBar />
            </div>
        </div>
    );
}
