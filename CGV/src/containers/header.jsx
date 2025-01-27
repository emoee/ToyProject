import ButtonSection from "./buttonSection";
import LogoSection from "./logoSection";
import "../styles/header.css";

export default function Header() {
    return (
        <div className="header">
            <LogoSection />
            <ButtonSection />
        </div>
    );
}
