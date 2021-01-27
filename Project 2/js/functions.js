/* add in your functions here */

function outputCountryBox(name, continent, cities, photos){
    document.write('<div class="item">');
    document.write('<h2>' + name +'</h2><p>' + continent +'</p>');
    //call functions to display cities and images
    outputCities();
    outputPhotos();
     //declare functions for displaying cities and photos
    function outputCities(){
    }
    function outputPhotos(){
    }
}
