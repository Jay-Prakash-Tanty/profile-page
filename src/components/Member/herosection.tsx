import React, { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';

interface ImageWithTextProps {
  imageUrl: string;
  heading: string;
  paragraph: string; 
}

const ImageWithText: React.FC<ImageWithTextProps> = ({ imageUrl, heading, paragraph }) => {
  const containerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '80vh',
    overflow: 'hidden',
  };

  const blackOverlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  };

  const textOverlayStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    textAlign: 'center',
    padding: '10px',
    width: '90%',
  };

  // State for dynamic font sizes
  const [headingStyle, setHeadingStyle] = useState<React.CSSProperties>({ fontSize: '28px', fontWeight: 'bold', margin: '0' });
  const [paragraphStyle, setParagraphStyle] = useState<React.CSSProperties>({ fontSize: '20px', margin: '0' });

  // Function to update styles based on window size
  const updateStyles = () => {
    if (window.innerWidth < 600) {
      setHeadingStyle({ fontSize: '15px', fontWeight: 'bold', margin: '0' });
      setParagraphStyle({ fontSize: '10px', margin: '0' });
    } else if (window.innerWidth < 900) {
      setHeadingStyle({ fontSize: '28px', fontWeight: 'bold', margin: '0' });
      setParagraphStyle({ fontSize: '20px', margin: '0' });
    } else {
      setHeadingStyle({ fontSize: '32px', fontWeight: 'bold', margin: '0' });
      setParagraphStyle({ fontSize: '22px', margin: '0' });
    }
  };

  useEffect(() => {
    updateStyles(); // Set initial styles
    window.addEventListener('resize', updateStyles); // Update styles on resize

    return () => {
      window.removeEventListener('resize', updateStyles); // Cleanup on unmount
    };
  }, []);

  return (
    <div style={containerStyle}>
      <Image 
        src={imageUrl} 
        fluid 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
      />
      <div style={blackOverlayStyle} />
      <div style={textOverlayStyle}>
        <h2 style={headingStyle}>{heading}</h2>
        <p style={paragraphStyle}>{paragraph}</p>
      </div>
    </div>
  );
};

export default ImageWithText;
