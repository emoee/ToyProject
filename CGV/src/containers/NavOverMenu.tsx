import Link from "next/link";

interface NavOverMenuProps {
    title : string;
    menus: string;
    menusEng : string;
}

export default function NavOverMenu({ title, menus, menusEng }: NavOverMenuProps) {
    const menuList = menus.split(",").map((menu) => menu.trim());
    const menuEngList = menusEng.split(",").map((menu) => menu.trim());
    const formattedMenuEngList = menuEngList.map((menu, index) =>
        index === 0 ? menu : `${menuEngList[0]}/${menu}`
    );


    return (
        <div className="nav-overMenu">
            {menuList.length > 0 && (
                <ul className="nav-overMenu-ul">
                    <li>{title}</li>
                    {menuList.map((menu, index) => (
                        <li key={index}>
                            <Link href={`/${formattedMenuEngList[index]}`}>{menu}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
