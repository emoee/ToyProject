import Header from "@/containers/header";
import "./globals.css";
import NavBar from "@/containers/NavBar";
import MainVideo from "@/containers/mainVideo";

export default function Home() {
    return (
        <div className="cgv">
            <div className="header-content">
                <Header />
            </div>
            <div className="nav-content">
                <NavBar />
            </div>
            <div className="container">
                <div className="video-content">
                    <MainVideo />
                </div>
            </div>
        </div>
    );
}
