import NavMenu from "./NavMenu";
import SearchSection from "./SearchSection";
import "../styles/navbar.css";

export default function NavBar(){
    return (
        <div className="navbar">
            <NavMenu />
            <SearchSection />
        </div>
    )
}