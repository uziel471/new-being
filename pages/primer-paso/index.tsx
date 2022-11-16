import React from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import MainImage from './components/MainImage';
import StepsSection from './components/StepsSection';
import StepsDetail from './components/StepDetail';
import Section4 from '../../components/Section4'

export default function index() {
    return (
        <div className="flex h-screen min-h-screen w-full flex-col">
            <NavBar />
            <main className="">
                <MainImage />
                <StepsSection />
                <StepsDetail />
                <Section4 />
                <Footer />
            </main>
        </div>
    );
}
