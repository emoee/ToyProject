import NavMenu from "./NavMenu";
import SearchSection from "./SearchSection";
import "../styles/navbar.css";

export default function NavBar(){
    return (
        <div className="contents">
            <NavMenu />
            <SearchSection />
        </div>
    )
}