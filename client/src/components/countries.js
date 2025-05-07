const twoLetterISO = [
    "ae", "ar", "at", "au", "az", "be", "bg", "bh", "br", "by",
    "ca", "ch", "cl", "cn", "cz", "de", "dk", "dz", "eg", "es",
    "fi", "fr", "gb", "gr", "hk", "hr", "hu", "id", "ie", "il",
    "in", "iq", "ir", "is", "it", "jp", "jo", "kr", "kw", "kz",
    "lb", "ly", "ma", "mx", "my", "nl", "no", "nz", "om", "pe",
    "ph", "pk", "pl", "pt", "qa", "ro", "rs", "ru", "sa", "se",
    "sg", "si", "sk", "sy", "th", "tn", "tr", "tw", "ua", "us",
    "ve", "vn", "ye", "za"
  ];
  
  const isoCountries = {
    "AE": "United Arab Emirates",
    "AR": "Argentina",
    "AT": "Austria",
    "AU": "Australia",
    "AZ": "Azerbaijan",
    "BE": "Belgium",
    "BG": "Bulgaria",
    "BH": "Bahrain",
    "BR": "Brazil",
    "BY": "Belarus",
    "CA": "Canada",
    "CH": "Switzerland",
    "CL": "Chile",
    "CN": "China",
    "CZ": "Czech Republic",
    "DE": "Germany",
    "DK": "Denmark",
    "DZ": "Algeria",
    "EG": "Egypt",
    "ES": "Spain",
    "FI": "Finland",
    "FR": "France",
    "GB": "United Kingdom",
    "GR": "Greece",
    "HK": "Hong Kong",
    "HR": "Croatia",
    "HU": "Hungary",
    "ID": "Indonesia",
    "IE": "Ireland",
    "IL": "Israel",
    "IN": "India",
    "IQ": "Iraq",
    "IR": "Iran",
    "IS": "Iceland",
    "IT": "Italy",
    "JP": "Japan",
    "JO": "Jordan",
    "KR": "South Korea",
    "KW": "Kuwait",
    "KZ": "Kazakhstan",
    "LB": "Lebanon",
    "LY": "Libya",
    "MA": "Morocco",
    "MX": "Mexico",
    "MY": "Malaysia",
    "NL": "Netherlands",
    "NO": "Norway",
    "NZ": "New Zealand",
    "OM": "Oman",
    "PE": "Peru",
    "PH": "Philippines",
    "PK": "Pakistan",
    "PL": "Poland",
    "PT": "Portugal",
    "QA": "Qatar",
    "RO": "Romania",
    "RS": "Serbia",
    "RU": "Russia",
    "SA": "Saudi Arabia",
    "SE": "Sweden",
    "SG": "Singapore",
    "SI": "Slovenia",
    "SK": "Slovakia",
    "SY": "Syria",
    "TH": "Thailand",
    "TN": "Tunisia",
    "TR": "Turkey",
    "TW": "Taiwan",
    "UA": "Ukraine",
    "US": "United States",
    "VE": "Venezuela",
    "VN": "Vietnam",
    "YE": "Yemen",
    "ZA": "South Africa"
  };
  
  let countries = []; 
  twoLetterISO.forEach(element => {
      let obj = {
          iso_2_alpha : element,
          // 
          png : `https://flagcdn.com/24x18/${element}.png`,
          countryName : getCountryName(element.toUpperCase()),
      }
      countries.push(obj); 
  })
  
  function getCountryName (countryCode) {
      if (isoCountries.hasOwnProperty(countryCode)) {
          return isoCountries[countryCode];
      } else {
          return countryCode;
      }
  }
  
  console.log(countries)
  
  export default countries; 