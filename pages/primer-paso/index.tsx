import React from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import MainImage from './components/MainImage';
import StepsSection from './components/StepsSection';
import StepsDetail from './components/StepDetail';
import Section4 from '../../components/Section4'
import Head from 'next/head';

export default function index() {
    return (
        <div className="flex h-screen min-h-screen w-full flex-col">
            <Head>
                <title>Clínica nuevo ser Primer paso</title>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="../../public/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="../../public/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="../../public/favicon-16x16.png"
                />
                <link rel="manifest" href="../../public/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="../../public/safari-pinned-tab.svg"
                    color="#5bbad5"
                />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
                <meta
                    property="og:title"
                    content="Clínica nuevo ser Primer paso"
                    key="title"
                />
            </Head>
            <NavBar />
            <main className="mt-[70px] lg:mt-100">
                <MainImage />
                <StepsSection />
                <StepsDetail />
                <Section4 />
                <Footer />
            </main>
        </div>
    );
}
