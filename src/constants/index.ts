// Password must contain at least 8 characters, one uppercase letter, one lowercase letter, and one special character
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;

// Uppercase, lowercase, space, hyphen(-), apostrophe (') are allowed
export const fullNameRegex = /^[a-zA-Z\s'-]{3,50}$/;

// Username must start with a letter; it can include letters, numbers, and special characters but should not contain space
export const usernameRegex = /^[a-zA-Z][a-zA-Z0-9!@#$%^&*()-_=+{}[\];:'",.<>?/|\\`~]{2,14}$/;

// Image array with captions
export const images = [
  {
    src: '/images/image1.jpg',
    caption: 'Explore all the clubs of your college',
  },
  {
    src: '/images/image2.jpg',
    caption: 'Explore all the clubs of your college',
  },
  {
    src: '/images/image3.jpg',
    caption: 'Explore all the clubs of your college',
  },
];

// Clubs information
export const clubs = [
  { name: 'E-cell', description: 'Techno-management club of VSSUT, Burla', logo: '/eecell.png' },

];

// Technical clubs (ensure distinct entries)
export const technicalClubs = [
  { name: 'Enigma', description: 'Official web and coding club of VSSUT, Burla', logo: '/enigma.jpg' },

];

// Non-technical clubs (ensure distinct entries)
export const nonTechnicalClubs = [
  { name: 'IEEE SB', description: 'Electronics and Electrical Society of VSSUT, Burla', logo: '/ieee.jpg' },
];

// Consider removing or updating for unique images
export const imagesArray = [
  {
    src: 'ClubPIC2.jpg',
  },
  // Add more unique images if needed
];

// Profiles of individuals
export const profiles = [
  {
    name: "Prof. Lorem Ipsum Manet",
    title: "Professor",
    department: "Lorem Engineering",
    imageUrl: "enigma.jpg"
  },
  // Add more unique profiles here
];

// Profiles for web development context
export const profiles1 = [
  {
    name: "Lorem Ipsum Manet",
    title: "Web Development",
    department: "Lorem Engineering",
    imageUrl: "enigma.jpg",
    batch: "2023",
  },
  // Add more unique profiles here
];

// Batches list
export const batches = [
  'All Batches',
  '2028',
  '2027',
  '2026',
  '2025',
  '2024',
  '2023',
  '2022',
  '2021',
  '2020',
];
