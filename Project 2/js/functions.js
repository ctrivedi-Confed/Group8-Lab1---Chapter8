/* add in your functions here */

function outputCountryBox(name, continent, cities, photos){
    document.write('<div class="item">');
    document.write('<h2>' + name +'</h2><p>' + continent +'</p>');
    //call functions to display cities and images
    outputCities();
    outputPhotos();
     //declare functions for displaying cities and photos
    function outputCities(){
        document.write('<div class="inner-box"><h3>Cities</h3><ul>');    
        for(let i=0; i<cities.length; i++){
            document.write('<li>'+ cities[i] +'</li>')
        }
        document.write('</ul></div>');
    }
    function outputPhotos(){
        document.write('<div class="inner-box"><h3>Popular Photos</h3>');

        for(let i=0; i<photos.length; i++){
            document.write(' <img src="images/' + photos[i] +'.jpg" class="photo">')
        }
    }
    document.write('</div><button>Visit</button></div>');
}
