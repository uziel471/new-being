import React from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Section4 from '../../components/Section4'
import MainImage from './components/MainImage';
import ObjectivesSection from './components/ObjectivesSection';
import SpecificObjectives from './components/SpecificObjectives';
import MisionSection from './components/MisionSection';
import VisionSection from './components/VisionSection';
import FounderSection from './components/FounderSection';
import TeamSection from './components/TeamSection';
import PlacesSection from './components/PlacesSection';
export default function index() {
    return (
        <div className="flex h-screen min-h-screen w-full flex-col">
            <NavBar />
            <main className="mt-[70px] lg:mt-100">
                <MainImage />
                <ObjectivesSection />
                <SpecificObjectives />
                <MisionSection />
                <VisionSection />
                <FounderSection />
                <TeamSection />
                <PlacesSection />
                <Section4 />
                <Footer />
            </main>
        </div>
    );
}
