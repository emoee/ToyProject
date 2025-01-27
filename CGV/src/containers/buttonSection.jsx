import IconButtons from "@/components/button/headerIconButton";

export default function ButtonSection(){
    return (
        <ul className="header-btn-group">
            <IconButtons iconName="login" label="로그인" />
            <IconButtons iconName="join" label="회원가입" />
            <IconButtons iconName="mypage" label="MY TOY" />
            <IconButtons iconName="support" label="고객센터" />
        </ul>
    )
}
