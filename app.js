const container = document.querySelector("container");

//get json from server

const url= "https://api.themoviedb.org/3/movie/550?api_key=6d620ce539a84a1d032d604633df8bbf"

fetch(url)
.then(Response=> {
  return Response.json();  

})

.then(data=>{
    console.log(data.title);
    console.log(data.overview);
    console.log(data.release_date);
    
    let year= new date(date.release_date).getFullYear();
    console.log(year);
    let imagepath= data.poster_path;
    let imageurl= "https://www.themoviedb.org/t/p/w600_and_h900_bestv" + imagepath
    console.log(imageurl);
    let movietitle=document.createElement("h1");
    movietitle.TEXT_CONTENT=data_title;
    container.appendChild(movietitle);

    let overview= document.createElement("p");
    overview.textContent= data. overview;
    container.appendChild(overview);

    let movieposter=document.createElement()
                                    
});