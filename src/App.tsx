import { useState, useEffect } from 'react'
import './App.css'
import HeroSection from './components/HeroSection'
import Pattern from './components/Pattern'
import ExperienceSection from './components/ExperienceSection'
import { useViewportSize } from './hooks/use-viewport-size'
import ParallaxGraffiti from './components/ParallaxGraffiti'
import FooterContact from './components/FooterContact'
import { Gallery } from './components/Gallery'
import { mainGalleryData, stickerGalleryData } from "./data/gallery";
import { FloatingSection } from './components/FloatingSection'
import { LoadingScreen } from './components/LoadingScreen'
import { HERO_IMAGE_URL } from './data/constants'

function App() {
  const { isMobile } = useViewportSize();
  const [isHeroImageLoaded, setIsHeroImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    
    // Simple handlers
    img.onload = () => {
      console.log('Hero image loaded successfully');
      setIsHeroImageLoaded(true);
    };
    
    img.onerror = () => {
      console.error('Failed to load hero image, showing page anyway');
      setIsHeroImageLoaded(true); // Show page even if image fails
    };
    
    // Check if image is already cached (ESSENTIAL!)
    if (img.complete && img.naturalWidth !== 0) {
      setIsHeroImageLoaded(true);
    } else {
      img.src = HERO_IMAGE_URL;
    }

    // Fallback timeout - show page after 7 seconds
    const timeout = setTimeout(() => {
      console.warn('Loading timeout reached, showing page');
      setIsHeroImageLoaded(true);
    }, 10000);

    return () => clearTimeout(timeout);
  }, []);

  // Disable scrolling while loading
  useEffect(() => {
    if (!isHeroImageLoaded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isHeroImageLoaded]);
  
  return (
    <>
     <LoadingScreen isVisible={!isHeroImageLoaded} />
      <main>
        <Pattern/>
        <HeroSection isMobile={isMobile} />
        <ExperienceSection/>
        <ParallaxGraffiti isMobile={isMobile}/>
        {isMobile ? (
              <Gallery data={stickerGalleryData} title="Stickers" />
            ) : (
              <FloatingSection />
            )}
             
            <Gallery data={mainGalleryData} />

            {/* <AbalychWorldwide />  */}

            <FooterContact />
      </main>
    </>
  )
}

export default App
