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

function App() {

  const { isMobile } = useViewportSize();
  
  return (
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
  )
}

export default App
