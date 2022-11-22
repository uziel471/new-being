import NavBar from '../components/NavBar';
import Carrousel from '../components/Carrousel';
import Section1 from '../components/section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function Home() {
    return (
        <div className="flex h-screen min-h-screen w-full flex-col">
            <Head>
                <title>Clínica nuevo ser</title>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="../public/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="../public/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="../public/favicon-16x16.png"
                />
                <link rel="manifest" href="../public/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="../public/safari-pinned-tab.svg"
                    color="#5bbad5"
                />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
                <meta
                    property="og:title"
                    content="Clínica nuevo ser"
                    key="title"
                />
            </Head>
            <NavBar />
            <main className="">
                <Carrousel />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Footer />
            </main>
        </div>
    );
}
