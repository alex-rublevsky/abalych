import {useState, useEffect} from 'react';
import {Blurhash} from 'react-blurhash';

export default function ImageComponent({ src, alt, className, blurHash }: { src: string, alt: string, className: string, blurHash: string }) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setIsLoaded(true);
    };
    img.src = src;
  }, [src]);

    return (
      <div 
      className={className} 
      style={{ 
        position: 'relative',
        backgroundColor: 'var(--background)'
      }}>
        {/* Blur hash - stays visible during image fade-in, then gets removed */}
        <Blurhash 
          hash={blurHash} 
          width="100%" 
          height="100%"
          resolutionX={32}
          resolutionY={32}
          punch={1}
          style={{
            display: 'block',
            animation: isLoaded ? 'hideAfterDelay 0.5s forwards' : 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }}
        />
        
        {/* Actual image - positioned absolutely to overlay */}
        <img 
          src={src} 
          alt={alt} 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out'
          }}
        />
      </div>
    );
}