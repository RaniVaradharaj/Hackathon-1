let div = document.createElement("div");
div.classList.add("d-flex", "flex-wrap","justify-content-around","div");
document.body.appendChild(div);
div.setAttribute("id", "head");




const betterCode = async () => {
    try{
  let response = await fetch(
    `https://anapioficeandfire.com/api/books?pageSize=15`
  );
        return await response.json();
    }catch (err) {
            console.log(err);
        }
};

        let imgarr = ["./got1.jpg", "./cok.jpg", "./sos.jpg", "./ek.jpg", "./ffc.jpg", "./ss.jpg", "./mk.jpg", "./dd.jpg", "./pq.jpg", "./rp.jpg", "./if.jpg", "./ksk.jpg"];

betterCode()
    .then((response) => {
        console.log(response);
        let p = 0;
        response.map((x) => {

            let cardpdiv = document.createElement("div");
            cardpdiv.setAttribute("id", "card");
            cardpdiv.setAttribute("style", "width: 30rem; height: 62rem;");
            cardpdiv.classList.add("card","m-3","p-5","card","border-success","bg-light","cardpdiv");
            div.appendChild(cardpdiv);

            let img = document.createElement("img");
            img.classList.add("img-fluid");
            
            img.setAttribute("src", imgarr[p]);
            img.setAttribute("style", "height:30rem");            
            cardpdiv.appendChild(img);
            p = p + 1;

            
            
            // img.setAttribute("src", "./GoT.jpg");
            // img.setAttribute("src","./got1.jpg")
            


            let cardBody = document.createElement("p");
            cardBody.setAttribute("id", "cardbody");
            cardBody.classList.add("cardBody");
            cardpdiv.appendChild(cardBody);

            let cardTitle = document.createElement("h5");
            cardTitle.setAttribute("id", "cardtitle");
            cardTitle.classList.add("cardTitle");
            cardBody.appendChild(cardTitle);

            let cardText = document.createElement("p");
            cardText.setAttribute("id", "cardtext");
            cardText.classList.add("cardText");
            cardBody.appendChild(cardText);


            let btn = document.createElement("a");
            btn.setAttribute("href", "#");
            btn.setAttribute("style", "height:3rem");
            btn.classList.add( "mbtn", "text-center","pt-2","pb-2","infobtn");
            // "fw-5", "list-group-item", "list-group-item-action");
            
            btn.innerText = "See Characters";
            btn.addEventListener("click", () => {
                let carr = x.characters;
                let rarr = [];
                for (i = 0; i <= 5; i++) {
                    fetch(carr[i])
                        .then((res) => res.json())
                        .then((objc) => {
                            let cname = objc.name;
                            rarr.push(cname);
                            console.log("rarr", rarr);
                        })
                }
                setTimeout(() => {
                    let ul = document.createElement("ul");
                            for (let i = 0; i < 4; i++) {
                                let li = document.createElement("li");
                                li.innerHTML = rarr[i];
                                ul.appendChild(li);
                    }
                     cardpdiv.appendChild(ul);
                },3000);
            })
            cardpdiv.appendChild(btn);
                
            

            let divB = document.createElement("p");
            divB.classList.add("d-flex", "flex-column");
            cardText.appendChild(divB);



            let bName = document.createElement("p");
            bName.setAttribute("id", "bname");
            bName.innerText = "Book Name : "+ x.name; 
            cardTitle.appendChild(bName);


            let bAuthor = document.createElement("p");
            bAuthor.innerText = "Authors : " + x.authors;
            divB.appendChild(bAuthor);

            let bPubl = document.createElement("p");
            bPubl.innerText = "Publisher : " + x.publisher;
            divB.appendChild(bPubl);

            let bPg = document.createElement("p");
            bPg.innerText = "No. of Pages : " + x.numberOfPages;
            divB.appendChild(bPg);

            let bRd = document.createElement("p");
            bRd.innerText = "Released Date : " + x.released;
            divB.appendChild(bRd);
            

            let bNo = document.createElement("p");
            bNo.innerText = "ISBN : " + x.isbn;
            divB.appendChild(bNo);

            // let char = document.createElement("p");
//             let carr = x.characters;
//             let rarr = [];
//             for (i = 0; i <= 5; i++){
//                 fetch(carr[i])
//                     .then((res) => res.json())
//                     .then((objc) => {
//                         let cname = objc.name;
//                         rarr.push(cname);
//                         // console.log(rarr);
//                 })
//             }
// console.log(rarr.length);

        })



    })

let see = document.getElementById("search");
let insee = document.getElementById("insearch");
let details = document.getElementById("details");
let direct = "https://www.youtube.com/results?search_query=";
details.addEventListener("click", () => {
    if (insee.value.length>0) {
        location.href = direct + insee.value;
    }
})

see.addEventListener("click", () => {
    if (insee.value) {
        window.find(insee.value);
    }
})