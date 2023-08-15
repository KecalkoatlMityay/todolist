import { EnumPath } from "@/src/constants/paths";
import Link from "next/link";

const About = () => {
    return (
        <>
            <h1>About Page</h1>
            <p>
                Hello. This is small frontend application to learn a little bit
                about "Next JS"
            </p>
            <p>
                The main idea is to create TODO list understand:
                <ul>
                    <li>CRUD operations </li>
                    <li>Next Routing</li>
                    <li>Next SSR</li>
                </ul>
            </p>
            <Link href={EnumPath.HOME}>Go back</Link>
        </>
    );
};
export default About;
