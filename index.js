
function generatePassword(length, includeLowercase, includeNumbers, includeSymbols, includeUppercase){
    
    const lowercaseChars = "abcdefghijklmnopqrtuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+=-[]{}\|;:,.<></>?"

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <= 0){
        return `(password legth must be at least 1)`;

    }
    if(allowedChars.length === 0){
        return `(At least 1 set of each charecter needs to be selected)`;
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }


    console.table(allowedChars);
    


    return password;
}


const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength,
                                  includeLowercase,
                                  includeNumbers, 
                                  includeSymbols, 
                                  includeUppercase);
console.log(`Generated password: ${password}`);