// password must contain atleast 8 characters , one uppercase letter , one lowercase letter and one special character
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;

// uppercase, lowercase, space, hyphen(-), apostrophe (') are allowed
export const fullNameRegex = /^[a-zA-Z\s'-]{3,50}$/;