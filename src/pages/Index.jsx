import Head from "../components/Head.jsx";
import About from "./About.jsx";

export default function Index() {

    return (
        <>
            <Head/>
            <div className="container mx-auto flex-grow">
                <main id="main">
                    <About/>
                </main>
            </div>
        </>
    )
}