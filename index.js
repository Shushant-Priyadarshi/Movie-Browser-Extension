async function fetchData(){
    const url = 'https://movies-tv-shows-database.p.rapidapi.com/?page=1';
    const options = {
	    method: 'GET',
	    headers: {
		    Type: 'get-trending-movies',
		    'X-RapidAPI-Key': 'e053d27ee1mshb12798639fbf442p1c5c98jsnbf84136911a4',
		    'X-RapidAPI-Host': 'movies-tv-shows-database.p.rapidapi.com'
	    }
    };

    
	    const response = await fetch(url, options);
        const record =await response.json();
        console.log(record)
        document.querySelector(".movies").innerHTML=record.movie_results.map(movie=>`<li>${movie.title}</li>`).join(" ");
        
}
fetchData();