import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { GetStarted } from './components/GetStarted';
import { Resources } from './components/Resources';
import { Events } from './components/Events';
import { Challenges } from './components/Challenges';
import { Blog } from './components/Blog';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { useStore } from './store';


function App() {
  const { isDarkMode } = useStore();

  return (
    <Router>
      <div className={isDarkMode ? 'dark' : ''}>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Header />
                <Hero />
                <GetStarted />
                <Gallery />
                <Resources />
              </>
            } />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/get-started" element={<GetStarted />} />
          
            <Route path="/resources" element={<Resources />} />
            <Route path="/events" element={<Events />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;