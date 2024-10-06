// password must contain atleast 8 characters , one uppercase letter , one lowercase letter and one special character
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;

// uppercase, lowercase, space, hyphen(-), apostrophe (') are allowed
export const fullNameRegex = /^[a-zA-Z\s'-]{3,50}$/;

  export  const images = [
      {
        src: '/images/image1.jpg',
        caption: 'Explore all the clubs \n of your college',
      },
      {
        src: '/images/image2.jpg',
        caption: 'Explore all the clubs of your college',
      },
      {
        src: '/images/image3.jpg',
        caption: 'Explore all the clubs of your college',
      },];
  