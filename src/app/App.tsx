import { Routes, Route } from 'react-router';
import { Navigation } from '@/app/components/Navigation';
import { Hero } from '@/app/components/Hero';
import { Experience } from '@/app/components/Experience';
import { Portfolio } from '@/app/components/Portfolio';
import { Skills } from '@/app/components/Skills';
import { Footer } from '@/app/components/Footer';
import { FloatingCTA } from '@/app/components/FloatingCTA';
import { FeaturedClients } from '@/app/components/FeaturedClients';
import { ProjectDetail } from '@/app/components/ProjectDetail';
import { CaseStudies } from '@/app/components/CaseStudies';
import { CaseStudyDetail } from '@/app/components/CaseStudyDetail';

export default function App() {
  return (
    <div className={`min-h-screen bg-[#0f0f0f]`}>
      <Navigation />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <FeaturedClients />
            <CaseStudies />
            <Experience />
            
            <Portfolio />
            <Skills />
           
            
           
            <Footer />
            <FloatingCTA />
          </>
        } />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/case-study/:id" element={<CaseStudyDetail />} />
      </Routes>
    </div>
  );
}
