// src/app/page.tsx
import Hero from '../Components/landingpage/Hero'; // Ensure the correct case in the import path
import PlatformSection from '../Components/landingpage/PlatformSection'; // Ensure the correct case in the import path
import Footer from '../Components/landingpage/Footer'; // Import the Footer component
import Navbar from '@/Components/landingpage/Navbar';

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <PlatformSection />
            <Footer /> {/* Add the Footer component here */}
        </>
    );
}
