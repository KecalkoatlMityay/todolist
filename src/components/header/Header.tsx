import Link from "next/link";
import s from "./header.module.css";
import { EnumPath } from "@/src/constants/paths";

export const Header = () => {
    return (
        <header className={s.heeader}>
            <h3>Todolist</h3>
            <div>
                <Link href={EnumPath.ABOUT}>About todolist</Link>
                <Link href={EnumPath.HOME}>home</Link>
            </div>
            <span>User</span>
        </header>
    );
};
