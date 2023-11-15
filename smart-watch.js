// sportz category page work start from here 


let swprdlist = [
    {
        "id": 1,
        "title": "APPLE",
        "model": "Model:YTS-580",
        "image1": "./assets/sp5.jpg",
        "image2": "./assets/w5.png",
        "image3": "./assets/np2.jpg",
        "image4": "./assets/np3.jpg",
        "image5": "./assets/w6.jpg",
        "availability":"(In Stock)",
        "price":200,
        "specs":"Apple has been the industry leader since 1960. In fact, Times share of the Canadian and US watch market was 50 percent by the late 1960s, and as much as 20 percent worldwide. However, Timex missed several important environmental trends that changed the industry. For one thing, Timex stuck to analog technology, losing money and market share to competitors that adopted digital technology in the 1970s.",
    },
    {
        "id": 2,
        "title": "G-SHOCK",
        "model": "Model:YYD-505",
        "image1": "./assets/fet17.jpg",
        "image2": "./assets/np2.jpg",
        "image3": "./assets/np3.jpg",
        "image4": "./assets/w6.jpg",
        "image5": "./assets/w7.jpg",
        "availability":"(In Stock)",
        "price":250,
        "specs":"G-shock has been the industry leader since 1960. In fact, Times share of the Canadian and US watch market was 50 percent by the late 1960s, and as much as 20 percent worldwide. However, Timex missed several important environmental trends that changed the industry. For one thing, Timex stuck to analog technology, losing money and market share to competitors that adopted digital technology",
    },
    {
        "id": 3,
        "title": "GARMIN",
        "model": "Model:YSF-780",
        "image1": "./assets/np2.jpg",
        "image2": "./assets/np3.jpg",
        "image3": "./assets/w6.jpg",
        "image4": "./assets/w7.jpg",
        "image5": "./assets/np6.jpg",
        "availability":"(In Stock)",
        "price":300,
        "specs":"Garmin has been the industry leader since 1960. In fact, Times share of the Canadian and US watch market was 50 percent by the late 1960s, and as much as 20 percent worldwide. However, Timex missed several important environmental trends that changed the industry. For one thing, Timex stuck to analog technology, losing money and market share to competitors that adopted digital technology",
    },
    {
        "id": 4,
        "title": "SAMSUNG",
        "model": "Model-YRS-543",
        "image1": "./assets/fet31.jpg",
        "image2": "./assets/w6.jpg",
        "image3": "./assets/w7.jpg",
        "image4": "./assets/np6.jpg",
        "image5": "./assets/np7.jpg",
        "availability":"(In Stock)",
        "price":350,
        "specs":"Samsung has been the industry leader since 1960. In fact, Times share of the Canadian and US watch market was 50 percent by the late 1960s, and as much as 20 percent worldwide. However, Timex missed several important environmental trends that changed the industry. For one thing, Timex stuck to analog technology, losing money and market share to competitors that adopted digital technology",
    },
    {
        "id": 5,
        "title": "FITBIT",
        "model": "Model:YES-560",
        "image1": "./assets/w6.jpg",
        "image2": "./assets/w7.jpg",
        "image3": "./assets/np6.jpg",
        "image4": "./assets/np7.jpg",
        "image5": "./assets/w8.jpg",
        "availability":"(In Stock)",
        "price":400,
        "specs":"Fitbit has been the industry leader since 1960. In fact, Times share of the Canadian and US watch market was 50 percent by the late 1960s, and as much as 20 percent worldwide. However, Timex missed several important environmental trends that changed the industry. For one thing, Timex stuck to analog technology, losing money and market share to competitors that adopted digital technology",
    },
    {
        "id": 6,
        "title": "SEIKO",
        "model": "Model:YMS-990",
        "image1": "./assets/w7.jpg",
        "image2": "./assets/np6.jpg",
        "image3": "./assets/np7.jpg",
        "image4": "./assets/w8.jpg",
        "image5": "./assets/w9.jpg",
        "availability":"(In Stock)",
        "price":450,
        "specs":"Seiko has been the industry leader since 1960. In fact, Times share of the Canadian and US watch market was 50 percent by the late 1960s, and as much as 20 percent worldwide. However, Timex missed several important environmental trends that changed the industry. For one thing, Timex stuck to analog technology, losing money and market share to competitors that adopted digital technology",
    },
    {
        "id": 7,
        "title": "MOTOROLA",
        "model": "Model:YWS-667",
        "image1": "./assets/np6.jpg",
        "image2": "./assets/np7.jpg",
        "image3": "./assets/w8.jpg",
        "image4": "./assets/w9.jpg",
        "image5": "./assets/w10.jpg",
        "availability":"(In Stock)",
        "price":500,
        "specs":"Motorola has been the industry leader since 1960. In fact, Times share of the Canadian and US watch market was 50 percent by the late 1960s, and as much as 20 percent worldwide. However, Timex missed several important environmental trends that changed the industry. For one thing, Timex stuck to analog technology, losing money and market share to competitors that adopted digital technology",
    },
    {
        "id": 8,
        "title": "HUAWEI",
        "model": "Model:MZS-560",
        "image1": "./assets/np7.jpg",
        "image2": "./assets/w8.jpg",
        "image3": "./assets/w9.jpg",
        "image4": "./assets/w10.jpg",
        "image5": "./assets/w11.jpg",
        "availability":"(In Stock)",
        "price":550,
        "specs":"Huawei has been the industry leader since 1960. In fact, Times share of the Canadian and US watch market was 50 percent by the late 1960s, and as much as 20 percent worldwide. However, Timex missed several important environmental trends that changed the industry. For one thing, Timex stuck to analog technology, losing money and market share to competitors that adopted digital technology",
    },
    {
        "id": 9,
        "title": "TAG HEUER",
        "model": "Model:YIS-500",
        "image1": "./assets/w8.jpg",
        "image2": "./assets/w9.jpg",
        "image3": "./assets/w10.jpg",
        "image4": "./assets/w11.jpg",
        "image5": "./assets/np3.jpg",
        "availability":"(In Stock)",
        "price":600,
        "specs":"Tag heuer has been the industry leader since 1960. In fact, Times share of the Canadian and US watch market was 50 percent by the late 1960s, and as much as 20 percent worldwide. However, Timex missed several important environmental trends that changed the industry. For one thing, Timex stuck to analog technology, losing money and market share to competitors that adopted digital technology",
    },
    {
        "id": 10,
        "title": "ASUS",
        "model": "Model:YJS-980",
        "image1": "./assets/w9.jpg",
        "image2": "./assets/w10.jpg",
        "image3": "./assets/w11.jpg",
        "image4": "./assets/np3.jpg",
        "image5": "./assets/w12.jpg",
        "availability":"(In Stock)",
        "price":650,
        "specs":"Asus has been the industry leader since 1960. In fact, Times share of the Canadian and US watch market was 50 percent by the late 1960s, and as much as 20 percent worldwide. However, Timex missed several important environmental trends that changed the industry. For one thing, Timex stuck to analog technology, losing money and market share to competitors that adopted digital technology",
    },
    {
        "id": 11,
        "title": "SUUNTO",
        "model": "Model:YQS-770",
        "image1": "./assets/w10.jpg",
        "image2": "./assets/w11.jpg",
        "image3": "./assets/np3.jpg",
        "image4": "./assets/w12.jpg",
        "image5": "./assets/w13.jpg",
        "availability":"(In Stock)",
        "price":700,
        "specs":"Suunto has been the industry leader since 1960. In fact, Times share of the Canadian and US watch market was 50 percent by the late 1960s, and as much as 20 percent worldwide. However, Timex missed several important environmental trends that changed the industry. For one thing, Timex stuck to analog technology, losing money and market share to competitors that adopted digital technology",
    },
    {
        "id": 12,
        "title": "SONY",
        "model": "Model:YHS-555",
        "image1": "./assets/w11.jpg",
        "image2": "./assets/np3.jpg",
        "image3": "./assets/w12.jpg",
        "image4": "./assets/w13.jpg",
        "image5": "./assets/sp5.jpg",
        "availability":"(In Stock)",
        "price":750,
        "specs":"Sony has been the industry leader since 1960. In fact, Times share of the Canadian and US watch market was 50 percent by the late 1960s, and as much as 20 percent worldwide. However, Timex missed several important environmental trends that changed the industry. For one thing, Timex stuck to analog technology, losing money and market share to competitors that adopted digital technology",
    },
    {
        "id": 13,
        "title": "BOAT",
        "model": "Model:MNS-530",
        "image1": "./assets/fet30.jpg",
        "image2": "./assets/w12.jpg",
        "image3": "./assets/w13.jpg",
        "image4": "./assets/sp5.jpg",
        "image5": "./assets/w5.png",
        "availability":"(In Stock)",
        "price":800,
        "specs":"Boat has been the industry leader since 1960. In fact, Times share of the Canadian and US watch market was 50 percent by the late 1960s, and as much as 20 percent worldwide. However, Timex missed several important environmental trends that changed the industry. For one thing, Timex stuck to analog technology, losing money and market share to competitors that adopted digital technology",
    },
    {
        "id": 14,
        "title": "XIAOMI",
        "model": "Model:YLA-888",
        "image1": "./assets/w12.jpg",
        "image2": "./assets/w13.jpg",
        "image3": "./assets/sp5.jpg",
        "image4": "./assets/w5.png",
        "image5": "./assets/np2.jpg",
        "availability":"(In Stock)",
        "price":850,
        "specs":"Xiaomi has been the industry leader since 1960. In fact, Times share of the Canadian and US watch market was 50 percent by the late 1960s, and as much as 20 percent worldwide. However, Timex missed several important environmental trends that changed the industry. For one thing, Timex stuck to analog technology, losing money and market share to competitors that adopted digital technology",
    },
    {
        "id": 15,
        "title": "GARMIN",
        "model": "Model:DGS-470",
        "image1": "./assets/w13.jpg",
        "image2": "./assets/sp5.jpg",
        "image3": "./assets/w5.png",
        "image4": "./assets/np2.jpg",
        "image5": "./assets/np3.jpg",
        "availability":"(In Stock)",
        "price":900,
        "specs":"Garmin has been the industry leader since 1960. In fact, Times share of the Canadian and US watch market was 50 percent by the late 1960s, and as much as 20 percent worldwide. However, Timex missed several important environmental trends that changed the industry. For one thing, Timex stuck to analog technology, losing money and market share to competitors that adopted digital technology",
    }
]


        let swcrDrow = document.querySelector("#swp_crd_row")
        for (let index = 0; index < swprdlist.length; index++) {
            swcrDrow.innerHTML += `
    <div class="col-lg-4 col-md-6 col-sm-12 d-flex align-items-center justify-content-evenly p-5" data-aos="flip-left">
                    <div class="parent_sp_crd">
                        <div class="child_sp_crd">
                            <img src=${swprdlist[index].image1} alt="">
                            <div class="sp_cont">
                                <h1>${swprdlist[index].title}</h1>
                                <h3>${swprdlist[index].model}</h3>
                                <p><span class="price_sp">$${swprdlist[index].price}</span> <i onclick="changeColor(this)" class="fa-solid fa-heart heart" id="heart_icon"></i></p>
                                
                                <button class="btn btn-outline-light sp_crd_btn" data-bs-toggle="modal" data-bs-target="#exampleModal"  onclick="swpmt(${index})">DETAILS</button>
                            </div>
                        </div>
                    </div>
                </div>
    `
        }


        let modalsw = document.querySelector("#swpmodal");
function swpmt(index) {modalsw.innerHTML=
    `<div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel"><span style="color: red; font-size: 2rem;">Aura</span>Watches</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <div class="container modal_container">
            <div class="img_modal_box">
                
                <div class="small_imgaes">
                    <div class="sm_img_parts"><img onclick="chimg1()" class="tinyimg" id="tiny_imga" src=${swprdlist[index].image2} alt="" ></div>
                    <div class="sm_img_parts"><img onclick="chimg2()" class="tinyimg" id="tiny_imgb" src=${swprdlist[index].image3} alt=""></div>
                    <div class="sm_img_parts"><img onclick="chimg3()" class="tinyimg" id="tiny_imgc" src=${swprdlist[index].image4} alt=""></div>
                    <div class="sm_img_parts"><img onclick="chimg4()" class="tinyimg" id="tiny_imgd" src=${swprdlist[index].image5} alt=""></div>
                </div>
                <div class="big_img_box"><img class="big_img" id="big_img" src=${swprdlist[index].image1} alt=""></div>
            </div>
            <div class="infobox">
                <h1>${swprdlist[index].title}</h1>
                <h3>${swprdlist[index].model}</h3>
                <h4>${swprdlist[index].availability}</h4>
                <h2>$${swprdlist[index].price}</h2>
                <p class="modal_info_heading">Technology & Specification :</p>
                <div class="specs_cont">
                    ${swprdlist[index].specs}
                </div>
                <div class="btn_modal">
                    <a href="store_locator.html"><button class="btn btn-outline-light btn_modala" >SHOP NEARBY</button></a>
                    <a href="./assets/AURA WATCHES (1).pdf" download="./assets/AURA WATCHES (1).pdf"><button class="btn btn-outline-light btn_modalb" >DOWNLOAD DETAILS</button></a>
                    
                    
                </div>
        
            </div>
          </div>
      ...
    </div>
  </div>

`
    
}
    

        // making json to add our most popular products cards 
let swmplist = [
    {
        "id": 1,
        "title": "SMART WATCH",
        "model": "PR-QZ-955",
        "image1": "./assets/w1.jpg",
        "image2": "./assets/w2.jpg",
        "image3": "./assets/w3.jpg",
        "image4": "./assets/w4.jpg",
        "image5": "./assets/sp6.jpg",
        "availability":"(In Stock)",
        "oldprice": 499,
        "price": 599,
        "specs":"Timex has been the industry leader since 1960. In fact, Times share of the Canadian and US watch market was 50 percent by the late 1960s, and as much as 20 percent worldwide. However, Timex missed several important environmental trends that changed the industry. For one thing, Timex stuck to analog technology, losing money and market share to competitors that adopted digital technology"
    },
    {
        "id": 2,
        "title": "SMART WATCH",
        "model": "CP-AT-307",
        "image1": "./assets/w2.jpg",
        "image2": "./assets/w3.jpg",
        "image3": "./assets/w4.jpg",
        "image4": "./assets/sp6.jpg",
        "image5": "./assets/fet7.jpg",
        "availability":"(In Stock)",
        "oldprice": 690,
        "price": 799,
        "specs":"Gucci has been the industry leader since 1960. In fact, Times share of the Canadian and US watch market was 50 percent by the late 1960s, and as much as 20 percent worldwide. However, Timex missed several important environmental trends that changed the industry. For one thing, Timex stuck to analog technology, losing money and market share to competitors that adopted digital technology"
    },
    {
        "id": 3,
        "title": "SMART WATCH",
        "model": "CF-LK-443",
        "image1": "./assets/fet29.png",
        "image2": "./assets/w4.jpg",
        "image3": "./assets/sp6.jpg",
        "image4": "./assets/fet7.jpg",
        "image5": "./assets/sp3.png",
        "availability":"(In Stock)",
        "oldprice":899 ,
        "price": 999,
        "specs":"Chopard has been the industry leader since 1960. In fact, Times share of the Canadian and US watch market was 50 percent by the late 1960s, and as much as 20 percent worldwide. However, Timex missed several important environmental trends that changed the industry. For one thing, Timex stuck to analog technology, losing money and market share to competitors that adopted digital technology"
    },
    {
        "id": 4,
        "title": "SMART WATCH",
        "model": "UI-ER-725",
        "image1": "./assets/w4.jpg",
        "image2": "./assets/sp6.jpg",
        "image3": "./assets/fet7.jpg",
        "image4": "./assets/sp3.png",
        "image5": "./assets/fet2.jpg",
        "availability":"(In Stock)",
        "oldprice": 499,
        "price": 599,
        "specs":"Sony has been the industry leader since 1960. In fact, Times share of the Canadian and US watch market was 50 percent by the late 1960s, and as much as 20 percent worldwide. However, Timex missed several important environmental trends that changed the industry. For one thing, Timex stuck to analog technology, losing money and market share to competitors that adopted digital technology"
    },
    {
        "id": 5,
        "title": "SMART WATCH",
        "model": "TQ-GH-878",
        "image1": "./assets/sp6.jpg",
        "image2": "./assets/fet7.jpg",
        "image3": "./assets/sp3.png",
        "image4": "./assets/fet2.jpg",
        "image5": "./assets/p13.jpg",
        "availability":"(In Stock)",
        "oldprice": 599,
        "price": 699,
        "specs":"Omega has been the industry leader since 1960. In fact, Times share of the Canadian and US watch market was 50 percent by the late 1960s, and as much as 20 percent worldwide. However, Timex missed several important environmental trends that changed the industry. For one thing, Timex stuck to analog technology, losing money and market share to competitors that adopted digital technology"
    },
    {
        "id": 6,
        "title": "SMART WATCH",
        "model": "RT-YZ-223",
        "image1": "./assets/fet7.jpg",
        "image2": "./assets/sp3.png",
        "image3": "./assets/fet2.jpg",
        "image4": "./assets/p13.jpg",
        "image5": "./assets/w1.jpg",
        "availability":"(In Stock)",
        "oldprice": 699,
        "price":799,
        "specs":"Apple has been the industry leader since 1960. In fact, Times share of the Canadian and US watch market was 50 percent by the late 1960s, and as much as 20 percent worldwide. However, Timex missed several important environmental trends that changed the industry. For one thing, Timex stuck to analog technology, losing money and market share to competitors that adopted digital technology"
    },
    {
        "id": 7,
        "title": "SMART WATCH",
        "model": "LP-OA-012",
        "image1": "./assets/sp3.png",
        "image2": "./assets/fet2.jpg",
        "image3": "./assets/p13.jpg",
        "image4": "./assets/w2.jpg",
        "image5": "./assets/w3.jpg",
        "availability":"(In Stock)",
        "oldprice": 799,
        "price": 899,
        "specs":"Samsung has been the industry leader since 1960. In fact, Times share of the Canadian and US watch market was 50 percent by the late 1960s, and as much as 20 percent worldwide. However, Timex missed several important environmental trends that changed the industry. For one thing, Timex stuck to analog technology, losing money and market share to competitors that adopted digital technology"
    },
    {
        "id": 8,
        "title": "SMART WATCH",
        "model": "YR-OP-785",
        "image1": "./assets/fet2.jpg",
        "image2": "./assets/p13.jpg",
        "image3": "./assets/w3.jpg",
        "image4": "./assets/w4.jpg",
        "image5": "./assets/sp6.jpg",
        "availability":"(In Stock)",
        "oldprice": 630,
        "price": 799,
        "specs":"Ikea has been the industry leader since 1960. In fact, Times share of the Canadian and US watch market was 50 percent by the late 1960s, and as much as 20 percent worldwide. However, Timex missed several important environmental trends that changed the industry. For one thing, Timex stuck to analog technology, losing money and market share to competitors that adopted digital technology"
    },
    {
        "id": 9,
        "title": "SMART WATCH",
        "model": "GN-MA-885",
        "image1": "./assets/fet28.jpg",
        "image2": "./assets/fet7.jpg",
        "image3": "./assets/sp3.png",
        "image4": "./assets/fet2.jpg",
        "image5": "./assets/w1.jpg",
        "availability":"(In Stock)",
        "oldprice": 730,
        "price": 899,
        "specs":"Lenovo has been the industry leader since 1960. In fact, Times share of the Canadian and US watch market was 50 percent by the late 1960s, and as much as 20 percent worldwide. However, Timex missed several important environmental trends that changed the industry. For one thing, Timex stuck to analog technology, losing money and market share to competitors that adopted digital technology"
    }

]

let swmpcrdrow = document.querySelector("#sw_mp_crd_row")
for (let index = 0; index < swmplist.length; index++) {

    swmpcrdrow.innerHTML += `
    <div class="col-lg-4 col-md-6 col-sm-12 d-flex align-items-center justify-content-evenly p-5" data-aos="flip-down">
    <div class="prdcardparent">
    <div class="prdcard">
      <div class="prdimg">
          <img src=${swmplist[index].image1} alt="">
      </div>
      <div class="prdcont">
          <h5>${swmplist[index].title}</h5>
          <h3>${swmplist[index].model}</h3>
          <button class="prdbtn btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#exampleModal"  onclick="swmpmt(${index})">DETAILS</button>
          <p><s>$${swmplist[index].oldprice}</s> &nbsp;$${swmplist[index].price}</p>
      </div>
    </div>
  </div>
            </div>
            </div>
        
    `
}



function swmpmt(index) {modalsw.innerHTML=
    `<div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel"><span style="color: red; font-size: 2rem;">Aura</span>Watches</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <div class="container modal_container">
            <div class="img_modal_box">
                
                <div class="small_imgaes">
                    <div class="sm_img_parts"><img onclick="chimg1()" class="tinyimg" id="tiny_imga" src=${swmplist[index].image2} alt="" ></div>
                    <div class="sm_img_parts"><img onclick="chimg2()" class="tinyimg" id="tiny_imgb" src=${swmplist[index].image3} alt=""></div>
                    <div class="sm_img_parts"><img onclick="chimg3()" class="tinyimg" id="tiny_imgc" src=${swmplist[index].image4} alt=""></div>
                    <div class="sm_img_parts"><img onclick="chimg4()" class="tinyimg" id="tiny_imgd" src=${swmplist[index].image5} alt=""></div>
                </div>
                <div class="big_img_box"><img class="big_img" id="big_img" src=${swmplist[index].image1} alt=""></div>
            </div>
            <div class="infobox">
                <h1>${swmplist[index].title}</h1>
                <h3>${swmplist[index].model}</h3>
                <h4>${swmplist[index].availability}</h4>
                <h2>$${swmplist[index].price}</h2>
                <p class="modal_info_heading">Technology & Specification :</p>
                <div class="specs_cont">
                    ${swmplist[index].specs}
                </div>
                <div class="btn_modal">
                    <a href="store_locator.html"><button class="btn btn-outline-light btn_modala" >SHOP NEARBY</button></a>
                    <a href="./assets/AURA WATCHES (1).pdf" download="./assets/AURA WATCHES (1).pdf"><button class="btn btn-outline-light btn_modalb" >DOWNLOAD DETAILS</button></a>
                    
                    
                </div>
        
            </div>
          </div>
      ...
    </div>
  </div>

`
    
}



// function for change icon color 
function changeColor(icon) {
    icon.classList.toggle("fa-red");
}



// modal work image clicking work


function chimg1() {
    let bigimg = document.getElementById("big_img");
    let smimg1 = document.getElementById("tiny_imga");
    bigimg.src=smimg1.src
    
};
function chimg2() {
    let bigimg = document.getElementById("big_img");
    let smimg2 = document.getElementById("tiny_imgb");


    bigimg.src=smimg2.src
};
function chimg3() {
    let bigimg = document.getElementById("big_img");
    let smimg3 = document.getElementById("tiny_imgc");


    bigimg.src=smimg3.src
};
function chimg4() {
    let bigimg = document.getElementById("big_img");
    let smimg4 = document.getElementById("tiny_imgd");

    bigimg.src=smimg4.src
};