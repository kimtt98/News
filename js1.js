window.addEventListener('load', function () {
let url = 'https://5da86012e44c790014cd4cf3.mockapi.io/News';
        url+= window.location.search
        fetch(url)
          .then(function (response) { 
                return response.json(); 
                console.log(response.json());
            })
          .then(function (data) {
                data.forEach(function (element) {
                    
                    document.getElementById("row8").innerHTML += `<div class="story__thumb"><a href="" target="_blank">
                    <img class="w-100 border rounded-sm" height ="400" src="`+ element.image +`"></a>
                    <div class=""> <h4 class=" story__heading title_h1 mt-5 h3 font"> 
                    <a class="source  text-dark" href=""> `+ element.title + `</a></h4>  
                    <time class="time ">`+ Date(element.time) +` </time>   </div> </div>
                     <div class="story__meta mt-3 "><strong><p class="mb-5 font">`
                        +element.description+element.description
                        + `</strong><br><br>`+element.description
                        +element.title+element.title+element.title
                        +element.title+element.description
                        +element.description
                        +element.description+element.description
                        +element.description+element.description
                        +element.title+element.description
                        +element.description
                        +element.description+element.description
                        +element.description+element.description
                        +element.title+element.description
                        +element.description
                        +element.description+element.description
                        +element.description+element.description
                        +element.title+element.title+element.title
                        +element.title+element.description+`</p>
                        <a class="source" href="">`+ element.author +` </a>   <br>`    
                      
                    })
                    for(var i=0; i< 4;i++){
                        document.getElementById("row2").innerHTML += 
                         `<div class="row mt-4 ">
                             <div class="col-sm-4">
                                 <div class="story__thumb">
                                     <a href="http://127.0.0.1:5500/Detail.html?id=${data[i].id}">
                                         <img class="b-r" width="80" height ="50" src="${data[i].image}"></a>
                                  </div>
                            </div>
                              <div class="col-sm-8">     
                                  <p class="fsz">
                                    <a style="color:black" href="http://127.0.0.1:5500/Detail.html?id=${data[i].id}">${data[i].title}</a>
                                   </p> 
                                   
                                </div>
                           </div> `;
        
                    }
                      })
                    });
function

requestAPI(){
  console.log("kik")
    fetch("https://flickrdidenkoradionv1.p.rapidapi.com/addComment", {
	"method": "POST",
	"headers": {
		"x-rapidapi-host": "FlickrdidenkoradionV1.p.rapidapi.com",
		"x-rapidapi-key": "557c6beb4emsh3cda4461607093fp182fecjsned7e30757c91",
		"content-type": "application/x-www-form-urlencoded"
	},
	"body": {}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
})
}