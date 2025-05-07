// languages.js

let twoLetterLanguageISO = [
    "en", "es", "fr", "de", "it", "pt", "nl", "ru", "zh", "ja", "ko", "ar", "hi", "bn", "pl", 
    "tr", "vi", "uk", "fa", "mr", "id", "th", "sw", "he", "ms", "ta", "ml", "or", "gu", "kn", 
    "pa", "te", "si", "cs", "ro", "el", "sr", "bg", "hr", "sl", "lt", "lv", "et", "bg", "sq"
];

// Language names mapping (ISO 639-1 codes)
let isoLanguages = {
    'en': 'English',
    'es': 'Spanish',
    'fr': 'French',
    'de': 'German',
    'it': 'Italian',
    'pt': 'Portuguese',
    'nl': 'Dutch',
    'ru': 'Russian',
    'zh': 'Chinese',
    'ja': 'Japanese',
    'ko': 'Korean',
    'ar': 'Arabic',
    'hi': 'Hindi',
    'bn': 'Bengali',
    'pl': 'Polish',
    'tr': 'Turkish',
    'vi': 'Vietnamese',
    'uk': 'Ukrainian',
    'fa': 'Persian',
    'mr': 'Marathi',
    'id': 'Indonesian',
    'th': 'Thai',
    'sw': 'Swahili',
    'he': 'Hebrew',
    'ms': 'Malay',
    'ta': 'Tamil',
    'ml': 'Malayalam',
    'or': 'Odia',
    'gu': 'Gujarati',
    'kn': 'Kannada',
    'pa': 'Punjabi',
    'te': 'Telugu',
    'si': 'Sinhala',
    'cs': 'Czech',
    'ro': 'Romanian',
    'el': 'Greek',
    'sr': 'Serbian',
    'bg': 'Bulgarian',
    'hr': 'Croatian',
    'sl': 'Slovenian',
    'lt': 'Lithuanian',
    'lv': 'Latvian',
    'et': 'Estonian',
    'sq': 'Albanian'
};

// Array to hold language objects
let languages = [];

// Create language objects based on the codes and language names
twoLetterLanguageISO.forEach(element => {
    let obj = {
        iso_2_alpha: element,
        languageName: getLanguageName(element),
        flag: `https://flagcdn.com/24x18/${element}.png` // Flag URL for each language
    }
    languages.push(obj);
});

// Function to get language name from the code
function getLanguageName(languageCode) {
    if (isoLanguages.hasOwnProperty(languageCode)) {
        return isoLanguages[languageCode];
    } else {
        return languageCode; // If no name found, return the code itself
    }
}

console.log(languages);

export default languages;
