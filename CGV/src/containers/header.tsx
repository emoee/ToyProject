import IconButtons from "@/components/button/headerIconButton";
import HeaderLogo from "@/components/headerLogo";

export default function Header() {
    return (
        <>
            <HeaderLogo />
            <IconButtons iconName="login" label="로그인" />
            <IconButtons iconName="join" label="회원가입" />
            
        </>
    );
}
