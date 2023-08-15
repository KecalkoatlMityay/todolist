import { EnumPath } from "@/src/constants/paths";
import Link from "next/link";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();
    const goBack = () => {
        router.back();
    };

    const goHome = () => router.push(EnumPath.HOME);
    return (
        <>
            <h1>Page not found</h1>
            <ul>
                <li>
                    <button onClick={goHome}>Go Home</button>
                </li>
                <li>
                    <button onClick={goBack}>Go Back</button>
                </li>
            </ul>
        </>
    );
};
