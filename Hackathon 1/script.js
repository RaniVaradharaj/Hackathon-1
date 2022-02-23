let div = document.createElement("div");
div.classList.add("d-flex", "flex-wrap","justify-content-around");
document.body.appendChild(div);
div.setAttribute("id", "head");

// let nav = document.createElement("nav");
// nav.classList.add("navbar", "navbar-sucess", "bg-sucess");
// div.appendChild(nav);

// let navcls = document.createElement("div");
// navcls.classList.add("container-fluid");
// nav.appendChild(navcls);

// let navbrand = document.createElement("a");
// navbrand.classList.add("navbar-brand");
// navbrand.innerHTML = "ICE AND FIRE BOOKS";
// nav.appendChild(navbrand);

// let form = document.createElement("form");
// form.classList.add("d-flex");
// nav.appendChild("form");

// let input = document.createElement("input");
// input.setAttribute("type", "search");
// input.setAttribute("placeholder", "Search");
// input.setAttribute("aria-label", "search");
// input.classList.add("form-control", "me-2");
// form.appendChild(input);

// let searchBtn = document.createElement("button");
// searchBtn.classList.add("btn", "btn-outline-success");
// searchBtn.setAttribute("type", "submit");
// searchBtn.innerHTML = "Search";
// form.appendChild(searchBtn);

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



betterCode()
    .then((response) => {
        console.log(response);
        response.map((x) => {
            // let nav = document.createElement("nav");
    // nav.classList.add("navbar", "navbar-sucess", "bg-sucess");
    // div.appendChild(nav);

    // let navcls = document.createElement("div");
    // navcls.classList.add("container-fluid");
    // nav.appendChild(navcls);

    // let navbrand = document.createElement("a");
    // navbrand.classList.add("navbar-brand");
    // navbrand.innerHTML = "ICE AND FIRE BOOKS";
    // nav.appendChild(navbrand);

    // let form = document.createElement("form");
    // form.classList.add("d-flex");
    // nav.appendChild("form");

    // let input = document.createElement("input");
    // input.setAttribute("type", "search");
    // input.setAttribute("placeholder", "Search");
    // input.setAttribute("aria-label", "search");
    // input.classList.add("form-control", "me-2");
    // form.appendChild(input);

    // let searchBtn = document.createElement("button");
    // searchBtn.classList.add("btn", "btn-outline-success");
    // searchBtn.setAttribute("type", "submit");
    // searchBtn.innerHTML = "Search";
    // form.appendChild(searchBtn);



            let cardpdiv = document.createElement("div");
            cardpdiv.setAttribute("id", "card");
            cardpdiv.setAttribute("style", "width: 30rem; height: 30rem;");
            cardpdiv.classList.add("card","m-3","p-5","card","border-success","bg-light");
            div.appendChild(cardpdiv);

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
            btn.classList.add("btn", "btn-success", "mbtn", "text-center","pt-2","pb-2");
            // "fw-5", "list-group-item", "list-group-item-action");
            
            btn.innerText = "More details";
            btn.addEventListener("click", () => {
                let a = "";
                for (let i = 0; i <= 5; i++){
                    let b = x.characters;
                    a = a + b[i];
                }
                alert(a);
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




        })



    })