// premier category page work start from here 


let premprdlist = [
    {
        "id": 1,
        "title": "HUBLOT",
        "model": "Model:YZS-760",
        "image1": "./assets/fet20.jpg",
        "image2": "./assets/p2.jpg",
        "image3": "./assets/p3.jpg",
        "image4": "./assets/np3.jpg",
        "image5": "./assets/p7.jpg",
        "availability":"(In Stock)",
        "price":300,
        "specs":"Hublot watch is the earliest form of watch since the 15th century. This pocket watch came with cover and were carried separately, often in a pocket, and hooked to a watch chain. It is until the 20th century that the wrist watch has came up and it sill inspires many watch manufacturers until today. Thanks to the invention of Patek Philippe, our generations still uses it and definitely have benefited it in many aspects. As the advancement of technologies grow with the passing of time,",
        
    },
    {
        "id": 2,
        "title": "PIAGET",
        "model": "Model:YYE-543",
        "image1": "./assets/p2.jpg",
        "image2": "./assets/p3.jpg",
        "image3": "./assets/np3.jpg",
        "image4": "./assets/p7.jpg",
        "image5": "./assets/np5.jpg",
        "availability":"(In Stock)",
        "price":350,
        "specs":"Piaget watch is the earliest form of watch since the 15th century. This pocket watch came with cover and were carried separately, often in a pocket, and hooked to a watch chain. It is until the 20th century that the wrist watch has came up and it sill inspires many watch manufacturers until today. Thanks to the invention of Patek Philippe, our generations still uses it and definitely have benefited it in many aspects. As the advancement of technologies grow with the passing of time,",
    },
    {
        "id": 3,
        "title": "ZENITH",
        "model": "Model:YER-240",
        "image1": "./assets/fet21.jpg",
        "image2": "./assets/np3.jpg",
        "image3": "./assets/p7.jpg",
        "image4": "./assets/np5.jpg",
        "image5": "./assets/p10.jpg",
        "availability":"(In Stock)",
        "price":400,
        "specs":"Zenith watch is the earliest form of watch since the 15th century. This pocket watch came with cover and were carried separately, often in a pocket, and hooked to a watch chain. It is until the 20th century that the wrist watch has came up and it sill inspires many watch manufacturers until today. Thanks to the invention of Patek Philippe, our generations still uses it and definitely have benefited it in many aspects. As the advancement of technologies grow with the passing of time,",
    },
    {
        "id": 4,
        "title": "BREGUET",
        "model": "Model:YVS-356",
        "image1": "./assets/fet19.jpg",
        "image2": "./assets/p7.jpg",
        "image3": "./assets/np5.jpg",
        "image4": "./assets/p10.jpg",
        "image5": "./assets/np7.jpg",
        "availability":"(In Stock)",
        "price":450,
        "specs":"Breguet watch is the earliest form of watch since the 15th century. This pocket watch came with cover and were carried separately, often in a pocket, and hooked to a watch chain. It is until the 20th century that the wrist watch has came up and it sill inspires many watch manufacturers until today. Thanks to the invention of Patek Philippe, our generations still uses it and definitely have benefited it in many aspects. As the advancement of technologies grow with the passing of time,",
    },
    {
        "id": 5,
        "title": "BLANCPAIN",
        "model": "Model:YPS-870",
        "image1": "./assets/p7.jpg",
        "image2": "./assets/np5.jpg",
        "image3": "./assets/p10.jpg",
        "image4": "./assets/np7.jpg",
        "image5": "./assets/p14.jpg",
        "availability":"(In Stock)",
        "price":500,
        "specs":"Blancpain watch is the earliest form of watch since the 15th century. This pocket watch came with cover and were carried separately, often in a pocket, and hooked to a watch chain. It is until the 20th century that the wrist watch has came up and it sill inspires many watch manufacturers until today. Thanks to the invention of Patek Philippe, our generations still uses it and definitely have benefited it in many aspects. As the advancement of technologies grow with the passing of time,",
    },
    {
        "id": 6,
        "title": "CHOPARD",
        "model": "Model:TTS-507",
        "image1": "./assets/fet22.jpg",
        "image2": "./assets/p10.jpg",
        "image3": "./assets/np7.jpg",
        "image4": "./assets/p14.jpg",
        "image5": "./assets/np9.jpg",
        "availability":"(In Stock)",
        "price":550,
        "specs":"Chopard watch is the earliest form of watch since the 15th century. This pocket watch came with cover and were carried separately, often in a pocket, and hooked to a watch chain. It is until the 20th century that the wrist watch has came up and it sill inspires many watch manufacturers until today. Thanks to the invention of Patek Philippe, our generations still uses it and definitely have benefited it in many aspects. As the advancement of technologies grow with the passing of time,",
    },
    {
        "id": 7,
        "title": "BULGARI",
        "model": "Model:YRS-245",
        "image1": "./assets/p10.jpg",
        "image2": "./assets/np7.jpg",
        "image3": "./assets/p14.jpg",
        "image4": "./assets/np9.jpg",
        "image5": "./assets/np1.jpg",
        "availability":"(In Stock)",
        "price":600,
        "specs":"Bulgari watch is the earliest form of watch since the 15th century. This pocket watch came with cover and were carried separately, often in a pocket, and hooked to a watch chain. It is until the 20th century that the wrist watch has came up and it sill inspires many watch manufacturers until today. Thanks to the invention of Patek Philippe, our generations still uses it and definitely have benefited it in many aspects. As the advancement of technologies grow with the passing of time,",
    },
    {
        "id": 8,
        "title": "BREMONT",
        "model": "Model:YUS-510",
        "image1": "./assets/np7.jpg",
        "image2": "./assets/p14.jpg",
        "image3": "./assets/np9.jpg",
        "image4": "./assets/np1.jpg",
        "image5": "./assets/np2.jpg",
        "availability":"(In Stock)",
        "price":650,
        "specs":"Bremont watch is the earliest form of watch since the 15th century. This pocket watch came with cover and were carried separately, often in a pocket, and hooked to a watch chain. It is until the 20th century that the wrist watch has came up and it sill inspires many watch manufacturers until today. Thanks to the invention of Patek Philippe, our generations still uses it and definitely have benefited it in many aspects. As the advancement of technologies grow with the passing of time,",
    },
    {
        "id": 9,
        "title": "G-SHOCK",
        "model": "Model-YPS-MSD-560",
        "image1": "./assets/fet23.jpg",
        "image2": "./assets/np9.jpg",
        "image3": "./assets/np1.jpg",
        "image4": "./assets/np2.jpg",
        "image5": "./assets/np3.jpg",
        "availability":"(In Stock)",
        "price":700,
        "specs":"G-shock watch is the earliest form of watch since the 15th century. This pocket watch came with cover and were carried separately, often in a pocket, and hooked to a watch chain. It is until the 20th century that the wrist watch has came up and it sill inspires many watch manufacturers until today. Thanks to the invention of Patek Philippe, our generations still uses it and definitely have benefited it in many aspects. As the advancement of technologies grow with the passing of time,",
    },
    {
        "id": 10,
        "title": "GUCCI",
        "model": "Model:ZCS-899",
        "image1": "./assets/np9.jpg",
        "image2": "./assets/np1.jpg",
        "image3": "./assets/np2.jpg",
        "image4": "./assets/np3.jpg",
        "image5": "./assets/p15.jpg",
        "availability":"(In Stock)",
        "price":750,
        "specs":"Gucci watch is the earliest form of watch since the 15th century. This pocket watch came with cover and were carried separately, often in a pocket, and hooked to a watch chain. It is until the 20th century that the wrist watch has came up and it sill inspires many watch manufacturers until today. Thanks to the invention of Patek Philippe, our generations still uses it and definitely have benefited it in many aspects. As the advancement of technologies grow with the passing of time,",
    },
    {
        "id": 11,
        "title": "ARMANI",
        "model": "Model:YHS-990",
        "image1": "./assets/np1.jpg",
        "image2": "./assets/np2.jpg",
        "image3": "./assets/np3.jpg",
        "image4": "./assets/p15.jpg",
        "image5": "./assets/p16.jpg",
        "availability":"(In Stock)",
        "price":800,
        "specs":"Armani watch is the earliest form of watch since the 15th century. This pocket watch came with cover and were carried separately, often in a pocket, and hooked to a watch chain. It is until the 20th century that the wrist watch has came up and it sill inspires many watch manufacturers until today. Thanks to the invention of Patek Philippe, our generations still uses it and definitely have benefited it in many aspects. As the advancement of technologies grow with the passing of time,",
    },
    {
        "id": 12,
        "title": "ORIS",
        "model": "Model:YRR-570",
        "image1": "./assets/fet24.jpg",
        "image2": "./assets/np3.jpg",
        "image3": "./assets/p15.jpg",
        "image4": "./assets/p16.jpg",
        "image5": "./assets/np6.jpg",
        "availability":"(In Stock)",
        "price":850,
        "specs":"Oris watch is the earliest form of watch since the 15th century. This pocket watch came with cover and were carried separately, often in a pocket, and hooked to a watch chain. It is until the 20th century that the wrist watch has came up and it sill inspires many watch manufacturers until today. Thanks to the invention of Patek Philippe, our generations still uses it and definitely have benefited it in many aspects. As the advancement of technologies grow with the passing of time,",
    },
    {
        "id": 13,
        "title": "WEISS",
        "model": "Model:YIS-993",
        "image1": "./assets/fet25.jpg",
        "image2": "./assets/p2.jpg",
        "image3": "./assets/p3.jpg",
        "image4": "./assets/np6.jpg",
        "image5": "./assets/p7.jpg",
        "availability":"(In Stock)",
        "price":900,
        "specs":"Weiss watch is the earliest form of watch since the 15th century. This pocket watch came with cover and were carried separately, often in a pocket, and hooked to a watch chain. It is until the 20th century that the wrist watch has came up and it sill inspires many watch manufacturers until today. Thanks to the invention of Patek Philippe, our generations still uses it and definitely have benefited it in many aspects. As the advancement of technologies grow with the passing of time,",
    },
    {
        "id": 14,
        "title": "BULOVA",
        "model": "Model:YYI-500",
        "image1": "./assets/p15.jpg",
        "image2": "./assets/p10.jpg",
        "image3": "./assets/np7.jpg",
        "image4": "./assets/np2.jpg",
        "image5": "./assets/np3.jpg",
        "availability":"(In Stock)",
        "price":950,
        "specs":"Bulova watch is the earliest form of watch since the 15th century. This pocket watch came with cover and were carried separately, often in a pocket, and hooked to a watch chain. It is until the 20th century that the wrist watch has came up and it sill inspires many watch manufacturers until today. Thanks to the invention of Patek Philippe, our generations still uses it and definitely have benefited it in many aspects. As the advancement of technologies grow with the passing of time,",
    },
    {
        "id": 15,
        "title": "ZENITH",
        "model": "Model:YXS-780",
        "image1": "./assets/p16.jpg",
        "image2": "./assets/np6.jpg",
        "image3": "./assets/p2.jpg",
        "image4": "./assets/p3.jpg",
        "image5": "./assets/np3.jpg",
        "availability":"(In Stock)",
        "price":1000,
        "specs":"Zenith watch is the earliest form of watch since the 15th century. This pocket watch came with cover and were carried separately, often in a pocket, and hooked to a watch chain. It is until the 20th century that the wrist watch has came up and it sill inspires many watch manufacturers until today. Thanks to the invention of Patek Philippe, our generations still uses it and definitely have benefited it in many aspects. As the advancement of technologies grow with the passing of time,",
    }
]


        let premcrDrow = document.querySelector("#prem_prd_crd_row")
        for (let index = 0; index < premprdlist.length; index++) {
            premcrDrow.innerHTML += `
    <div class="col-lg-4 col-md-6 col-sm-12 d-flex align-items-center justify-content-evenly p-5" data-aos="flip-left">
                    <div class="parent_sp_crd">
                        <div class="child_sp_crd">
                            <img src=${premprdlist[index].image1} alt="">
                            <div class="sp_cont">
                                <h1>${premprdlist[index].title}</h1>
                                <h3>${premprdlist[index].model}</h3>
                                <p><span class="price_sp">$${premprdlist[index].price}</span> <i onclick="changeColor(this)" class="fa-solid fa-heart heart" id="heart_icon"></i></p>
                                
                                <button class="btn btn-outline-light sp_crd_btn" data-bs-toggle="modal" data-bs-target="#exampleModal"  onclick="ppmt(${index})">DETAILS</button>
                            </div>
                        </div>
                    </div>
                </div>
    `
        }


        let modalpp = document.querySelector("#ppmodal");
function ppmt(index) {modalpp.innerHTML=
    `<div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel"><span style="color: red; font-size: 2rem;">Aura</span>Watches</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <div class="container modal_container">
            <div class="img_modal_box">
                
                <div class="small_imgaes">
                    <div class="sm_img_parts"><img onclick="chimg1()" class="tinyimg" id="tiny_imga" src=${premprdlist[index].image2} alt="" ></div>
                    <div class="sm_img_parts"><img onclick="chimg2()" class="tinyimg" id="tiny_imgb" src=${premprdlist[index].image3} alt=""></div>
                    <div class="sm_img_parts"><img onclick="chimg3()" class="tinyimg" id="tiny_imgc" src=${premprdlist[index].image4} alt=""></div>
                    <div class="sm_img_parts"><img onclick="chimg4()" class="tinyimg" id="tiny_imgd" src=${premprdlist[index].image5} alt=""></div>
                </div>
                <div class="big_img_box"><img class="big_img" id="big_img" src=${premprdlist[index].image1} alt=""></div>
            </div>
            <div class="infobox">
                <h1>${premprdlist[index].title}</h1>
                <h3>${premprdlist[index].model}</h3>
                <h4>${premprdlist[index].availability}</h4>
                <h2>$${premprdlist[index].price}</h2>
                <p class="modal_info_heading">Technology & Specification :</p>
                <div class="specs_cont">
                    ${premprdlist[index].specs}
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
let ppmplist = [
    {
        "id": 1,
        "title": "PREMIER",
        "model": "CO-QZ-055",
        "image1": "./assets/p2.jpg",
        "image2": "./assets/p3.jpg",
        "image3": "./assets/p4.jpg",
        "image4": "./assets/p5.jpg",
        "image5": "./assets/p6.jpg",
        "availability":"(In Stock)",
        "oldprice": 630,
        "price": 599,
        "specs":"Casio watch is the earliest form of watch since the 15th century. This pocket watch came with cover and were carried separately, often in a pocket, and hooked to a watch chain. It is until the 20th century that the wrist watch has came up and it sill inspires many watch manufacturers until today. Thanks to the invention of Patek Philippe, our generations still uses it and definitely have benefited it in many aspects. As the advancement of technologies grow with the passing of time,"
    },
    {
        "id": 2,
        "title": "PREMIER",
        "model": "LR-AY-885",
        "image1": "./assets/p3.jpg",
        "image2": "./assets/p4.jpg",
        "image3": "./assets/p5.jpg",
        "image4": "./assets/p6.jpg",
        "image5": "./assets/p7.jpg",
        "availability":"(In Stock)",
        "oldprice": 530,
        "price": 699,
        "specs":"Citizen watch is the earliest form of watch since the 15th century. This pocket watch came with cover and were carried separately, often in a pocket, and hooked to a watch chain. It is until the 20th century that the wrist watch has came up and it sill inspires many watch manufacturers until today. Thanks to the invention of Patek Philippe, our generations still uses it and definitely have benefited it in many aspects. As the advancement of technologies grow with the passing of time,"
    },
    {
        "id": 3,
        "title": "PREMIER",
        "model": "CU-AT-065",
        "image1": "./assets/p4.jpg",
        "image2": "./assets/p5.jpg",
        "image3": "./assets/p6.jpg",
        "image4": "./assets/p7.jpg",
        "image5": "./assets/p8.jpg",
        "availability":"(In Stock)",
        "oldprice": 730,
        "price": 899,
        "specs":"Rado watch is the earliest form of watch since the 15th century. This pocket watch came with cover and were carried separately, often in a pocket, and hooked to a watch chain. It is until the 20th century that the wrist watch has came up and it sill inspires many watch manufacturers until today. Thanks to the invention of Patek Philippe, our generations still uses it and definitely have benefited it in many aspects. As the advancement of technologies grow with the passing of time,"
    },
    {
        "id": 4,
        "title": "PREMIER",
        "model": "YI-OP-465",
        "image1": "./assets/fet26.jpg",
        "image2": "./assets/p6.jpg",
        "image3": "./assets/p7.jpg",
        "image4": "./assets/p8.jpg",
        "image5": "./assets/p9.jpg",
        "availability":"(In Stock)",
        "oldprice": 430,
        "price": 499,
        "specs":"Luxury watch is the earliest form of watch since the 15th century. This pocket watch came with cover and were carried separately, often in a pocket, and hooked to a watch chain. It is until the 20th century that the wrist watch has came up and it sill inspires many watch manufacturers until today. Thanks to the invention of Patek Philippe, our generations still uses it and definitely have benefited it in many aspects. As the advancement of technologies grow with the passing of time,"
    },
    {
        "id": 5,
        "title": "PREMIER",
        "model": "ZC-JK-095",
        "image1": "./assets/fet27.jpg",
        "image2": "./assets/p7.jpg",
        "image3": "./assets/p8.jpg",
        "image4": "./assets/p9.jpg",
        "image5": "./assets/11.jpg",
        "availability":"(In Stock)",
        "oldprice": 730,
        "price": 899,
        "specs":"Smart watch is the earliest form of watch since the 15th century. This pocket watch came with cover and were carried separately, often in a pocket, and hooked to a watch chain. It is until the 20th century that the wrist watch has came up and it sill inspires many watch manufacturers until today. Thanks to the invention of Patek Philippe, our generations still uses it and definitely have benefited it in many aspects. As the advancement of technologies grow with the passing of time,"
    },
    {
        "id": 6,
        "title": "PREMIER",
        "model": "CT-AU-025",
        "image1": "./assets/p7.jpg",
        "image2": "./assets/p8.jpg",
        "image3": "./assets/p9.jpg",
        "image4": "./assets/11.jpg",
        "image5": "./assets/p12.jpg",
        "availability":"(In Stock)",
        "oldprice": 930,
        "price": 999,
        "specs":"Ikea watch is the earliest form of watch since the 15th century. This pocket watch came with cover and were carried separately, often in a pocket, and hooked to a watch chain. It is until the 20th century that the wrist watch has came up and it sill inspires many watch manufacturers until today. Thanks to the invention of Patek Philippe, our generations still uses it and definitely have benefited it in many aspects. As the advancement of technologies grow with the passing of time,"
    },
    {
        "id": 7,
        "title": "PREMIER",
        "model": "AR-UZ-039",
        "image1": "./assets/p8.jpg",
        "image2": "./assets/p9.jpg",
        "image3": "./assets/p11.jpg",
        "image4": "./assets/p12.jpg",
        "image5": "./assets/p2.jpg",
        "availability":"(In Stock)",
        "oldprice": 530,
        "price": 599,
        "specs":"Premier watch is the earliest form of watch since the 15th century. This pocket watch came with cover and were carried separately, often in a pocket, and hooked to a watch chain. It is until the 20th century that the wrist watch has came up and it sill inspires many watch manufacturers until today. Thanks to the invention of Patek Philippe, our generations still uses it and definitely have benefited it in many aspects. As the advancement of technologies grow with the passing of time,"
    },
    {
        "id": 8,
        "title": "PREMIER",
        "model": "TR-JZ-905",
        "image1": "./assets/p9.jpg",
        "image2": "./assets/p11.jpg",
        "image3": "./assets/p12.jpg",
        "image4": "./assets/p13.jpg",
        "image5": "./assets/p3.jpg",
        "availability":"(In Stock)",
        "oldprice": 830,
        "price": 999,
        "specs":"Rolex watch is the earliest form of watch since the 15th century. This pocket watch came with cover and were carried separately, often in a pocket, and hooked to a watch chain. It is until the 20th century that the wrist watch has came up and it sill inspires many watch manufacturers until today. Thanks to the invention of Patek Philippe, our generations still uses it and definitely have benefited it in many aspects. As the advancement of technologies grow with the passing of time,"
    },
    {
        "id": 9,
        "title": "PREMIER",
        "model": "CE-GZ-075",
        "image1": "./assets/p11.jpg",
        "image2": "./assets/p12.jpg",
        "image3": "./assets/p13.jpg",
        "image4": "./assets/p4.jpg",
        "image5": "./assets/p5.jpg",
        "availability":"(In Stock)",
        "oldprice": 430,
        "price": 799,
        "specs":"Cartier watch is the earliest form of watch since the 15th century. This pocket watch came with cover and were carried separately, often in a pocket, and hooked to a watch chain. It is until the 20th century that the wrist watch has came up and it sill inspires many watch manufacturers until today. Thanks to the invention of Patek Philippe, our generations still uses it and definitely have benefited it in many aspects. As the advancement of technologies grow with the passing of time,"
    }

]

let prempcrdrow = document.querySelector("#mp_prem_crd_row")
for (let index = 0; index < ppmplist.length; index++) {

    prempcrdrow.innerHTML += `
    <div class="col-lg-4 col-md-6 col-sm-12 d-flex align-items-center justify-content-evenly p-5" data-aos="flip-down">
    <div class="prdcardparent">
    <div class="prdcard">
      <div class="prdimg">
          <img src=${ppmplist[index].image1} alt="">
      </div>
      <div class="prdcont">
          <h5>${ppmplist[index].title}</h5>
          <h3>${ppmplist[index].model}</h3>
          <button class="prdbtn btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#exampleModal"  onclick="pmpmt(${index})">DETAILS</button>
          <p><s>$${ppmplist[index].oldprice}</s> &nbsp;$${ppmplist[index].price}</p>
      </div>
    </div>
  </div>
            </div>
            </div>
        
    `
}



function pmpmt(index) {modalpp.innerHTML=
    `<div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel"><span style="color: red; font-size: 2rem;">Aura</span>Watches</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <div class="container modal_container">
            <div class="img_modal_box">
                
                <div class="small_imgaes">
                    <div class="sm_img_parts"><img onclick="chimg1()" class="tinyimg" id="tiny_imga" src=${ppmplist[index].image2} alt="" ></div>
                    <div class="sm_img_parts"><img onclick="chimg2()" class="tinyimg" id="tiny_imgb" src=${ppmplist[index].image3} alt=""></div>
                    <div class="sm_img_parts"><img onclick="chimg3()" class="tinyimg" id="tiny_imgc" src=${ppmplist[index].image4} alt=""></div>
                    <div class="sm_img_parts"><img onclick="chimg4()" class="tinyimg" id="tiny_imgd" src=${ppmplist[index].image5} alt=""></div>
                </div>
                <div class="big_img_box"><img class="big_img" id="big_img" src=${ppmplist[index].image1} alt=""></div>
            </div>
            <div class="infobox">
                <h1>${ppmplist[index].title}</h1>
                <h3>${ppmplist[index].model}</h3>
                <h4>${ppmplist[index].availability}</h4>
                <h2>$${ppmplist[index].price}</h2>
                <p class="modal_info_heading">Technology & Specification :</p>
                <div class="specs_cont">
                    ${ppmplist[index].specs}
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