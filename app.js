const countries = require('./countries.json');

/** Get all the data of one single country given the ISO3 code.
 * @param  {string} isoCode
 * @returns {Object}
 */
function getCountryByIso3(isoCode){
    for (let index = 0; index < countries.length; index++) {
        if (countries[index].iso3 == isoCode){
            return countries[index];
        } ;
    }
}

/**
 * Get a country translated name given his ISO3 code and tranlated language.
 * @param  {string} isoCode
 * @param  {string} language example: "es"
 * @returns {string}
 */
function getCountryTranslatedName(isoCode, language){
    for (let index = 0; index < countries.length; index++) {
        if (countries[index].iso3 == isoCode){
            return countries[index].translations[language];
        } ;
    }
}
/**Get an array of all the countries with the specified subregion
 * @param  {string} subregion
 * @returns {Array}
 */
function getCountriesBySubregion(subregion){
    let countries_subregion = [];
    for (let index = 0; index < countries.length; index++) {
        if (countries[index].subregion == subregion){
            countries_subregion.push(countries[index].name);
        } ;   
    }
    return countries_subregion
}

function main() {
    console.log(
        '///// Ejercicio 1 /////\n',
        getCountryByIso3('ARG'),
        '\n');
    console.log(
        '///// Ejercicio 2 /////\n',
        getCountryTranslatedName('ARG', 'ja'),
        '\n');
    console.log(
        '///// Ejercicio 3 /////\n',
        getCountriesBySubregion('South America'),
        '\n');

}

main();