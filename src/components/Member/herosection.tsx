import React from 'react';
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

  // Default font sizes
  const headingStyle: React.CSSProperties = {
    fontSize: '28px', // Fixed font size for heading
    fontWeight: 'bold',
    margin: '0',
  };

  const paragraphStyle: React.CSSProperties = {
    fontSize: '20px', // Fixed font size for paragraph
    margin: '0',
  };

  // Responsive adjustments for smaller screens
  if (typeof window !== 'undefined') {
    if (window.innerWidth < 600) {
      headingStyle.fontSize = '20px'; // Smaller heading font size for mobile
      paragraphStyle.fontSize = '15px'; // Smaller paragraph font size for mobile
    } else if (window.innerWidth < 900) {
      headingStyle.fontSize = '26px'; // Slightly smaller heading for medium screens
      paragraphStyle.fontSize = '18px'; // Slightly smaller paragraph for medium screens
    }
  }

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
