import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { Navigation } from '@/app/components/Navigation';
import { Hero } from '@/app/components/Hero';
import { Experience } from '@/app/components/Experience';
import { Education } from '@/app/components/Education';
import { Portfolio } from '@/app/components/Portfolio';
import { Skills } from '@/app/components/Skills';
import { Courses } from '@/app/components/Courses';

import { Footer } from '@/app/components/Footer';
import { FloatingCTA } from '@/app/components/FloatingCTA';
import { FeaturedClients } from '@/app/components/FeaturedClients';
import { ProjectDetail } from '@/app/components/ProjectDetail';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    // Apply theme to document
    if (theme === 'light') {
      document.documentElement.classList.add('light-theme');
    } else {
      document.documentElement.classList.remove('light-theme');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#0f0f0f]' : 'bg-white'}`}>
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <FeaturedClients />
            <Experience />
            <Portfolio />
            <Skills />
            <Education />
            <Courses />
           
            <Footer />
            <FloatingCTA />
          </>
        } />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}
