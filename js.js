window.addEventListener('load', function () {
    var url = 'https://5da86012e44c790014cd4cf3.mockapi.io/News';
    //fetch du lieu bai viet
    fetch(url)
        .then(function (response) {
            return response.json();
            // promise
           
        })
        .then(function (data) {
            data.forEach(function (element) {
                document.getElementById("row1").innerHTML += `<div class="row mt-4 ">
                    <div class="col-sm-3">
                       <div class="story__thumb">
                           <a href="http://127.0.0.1:5500/Detail.html?id=${element.id}">
                               <img class="w-100 h-100" src="${element.image}">
                             </a>
                        </div>
                   </div>
                   <div class="col-sm-9">
                              <h5 class="story__heading">
                                <a class="source" href="http://127.0.0.1:5500/Detail.html?id=${element.id}">${element.title}</a></h5> 
                                <p>${element.title}${element.author}${element.title}</p>
                               

                                     <div class="story__meta">    <a class="source" href="">${element.author}</a>  
                                     <br><time class="time ">${Date(element.time)}</time>   
                                         </div> 
                                         <span class=" or fa fa-star "></span>
                                         <span class=" or fa fa-star "></span>
                                         <span class=" or fa fa-star "></span>
                                         <span class="fa fa-star"></span>
                                          <span class="fa fa-star"></span>
                    </div>
                 </div> `;


            })
            for (var i = 0; i < 6; i++) {
                document.getElementById("row2").innerHTML +=
                    `<div class="row  p-2">
                 <div class="col-sm-3">
                 <div class="story__thumb">
                     <a href="http://127.0.0.1:5500/Detail.html?id=${data[i].id}">
                         <img class="w-100 h-100 b-r" src="${data[i].avatar}"></a>
                  </div>
            </div>
                      <div class="col-sm-7 ">     
                          <p class="fsz">
                            <a style="color:black" href="http://127.0.0.1:5500/Detail.html?id=${data[i].id}">#${data[i].author}</a>
                           </p> 
                           
                        </div>
                        
                   </div> `;

            }
            for (var i = 0; i < 3; i++) {
                document.getElementById("row3").innerHTML +=
                    `<div class="row mt-4 ">
                     <div class="col-sm-3">
                         <div class="story__thumb">
                             <a href="http://127.0.0.1:5500/Detail.html?id=${data[i].id}">
                                 <img class="b-r w-100 h-100"  src="${data[i].image}"></a>
                          </div>
                    </div>
                      <div class="col-sm-7">     
                          <p class="fsz">
                            <a style="color:black" href="http://127.0.0.1:5500/Detail.html?id=${data[i].id}">${data[i].title}</a>
                           </p> 
                           
                        </div>
                   </div> `;

            }
            for (var i = 0; i < 5; i++) {
                document.getElementById("row4").innerHTML +=
                    `<div class="row mt-4 ">
                     <div class="col-sm-4">
                         <div class="story__thumb">
                             <a href="http://127.0.0.1:5500/Detail.html?id=${data[i].id}">
                                 <img class="b-r w-100 h-100" src="${data[i].avatar1}"></a>
                          </div>
                    </div>
                      <div class="col-sm-8">     
                          <p class="fsz">
                            <a style="color:black" href="http://127.0.0.1:5500/Detail.html?id=${data[i].id}">${data[i].title}</a>
                           </p> 
                           <a class="time ">3 giờ</a>   
                                         </div> 
                        </div>
                   </div> `;

            }

        })
        .catch(err => {
            console.log('loi la' + err);
        })

    //fectch du lieu covid 19
    fetch('https://corona.lmao.ninja/v2/countries/vn')
        .then((response) => {
            return (response.json());
        })
        .then((data) => {
            document.getElementById("row19").innerHTML = `
           <ul class="list-group mb-4">
           <li class="list-group-item"><strong>Quốc Gia: ${data.country}</strong></li>
           <li class="list-group-item"><strong>số người mắc: </strong> ${data.cases}</li>
           <li class="list-group-item"><strong>số người chết : </strong> ${data.deaths}</li>
           <li class="list-group-item"><a href="https://ncov.moh.gov.vn/-/ban-tin-dich-covid-19-trong-24h-the-gioi-tang-manh-ca-mac-va-tu-vong-viet-nam-tiep-tuc-phong-dich-nghiem"><strong>Thế Giới </strong></a></li>
           </ul>`;

        })


})
//scroll navbar

let header = document.getElementById("myHeader");
let sticky = header.offsetTop;
window.onscroll = function () { 
    if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
} else {
    header.classList.remove("sticky");
} 
};



