// validation function 
export default function validate(name, surname, dateOfBirth, password, password2) {
    if (password.length < 6 && password > 20) return 'Your password needs a minimum of six characters and maximum 20 characters';
    if (password !== password2) return 'Password do not match !';
    if (password.search(/[a-z]/) < 0) return 'Your password requires at least one lowercase letter';
    if (password.search(/[A-Z]/) < 0) return 'Your password requires at least one uppercase letter';
    if (password.search(/[0-9]/) < 0) return 'Your password requires at least one number'
    if (name.length < 2) return 'Your name is too short';
    if (name.length > 15) return 'Your name is very long';
    if (surname.length < 2) return 'Your surname is too short';
    if (surname.length > 25) return 'Your surname is very long';
    if (Date.parse(dateOfBirth) > Date.now()) return 'Wow! Are you from the future?';
    if (Date.now() - Date.parse(dateOfBirth) > 5544838760430) return 'Are you really over 150?';
    return '';
}