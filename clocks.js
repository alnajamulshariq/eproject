// sportz category page work start from here 


let clkprdlist = [
    {
        "id": 1,
        "title": "JUNGHANS",
        "model": "Model:YYS-457",
        "image1": "./assets/c1.jpg",
        "image2": "./assets/c3.jpg",
        "image3": "./assets/c9.jpg",
        "image4": "./assets/c10.jpg",
        "image5": "./assets/c11.jpg",
        "availability":"(In Stock)",
        "price":300,
        "specs":"Rado watches prove that all watches are not made equal. Since 1962, Rado has been making luxury watches that are completely scratch-proof so your investment piece will truly last a lifetime. To learn more about Rado watches, check out the facts below.All about Rado Watches.Rado was formed in 1917 and initially produced watch movements only. Formed by three brothers in the town of Lengnau, Switzerland, under the name Schlup & Co., it wasn't until 1957 that the company was renamed Rado and began making actual watches.",
    },
    {
        "id": 2,
        "title": "CASIO",
        "model": "Model:TYS-895",
        "image1": "./assets/c3.jpg",
        "image2": "./assets/c9.jpg",
        "image3": "./assets/c10.jpg",
        "image4": "./assets/c11.jpg",
        "image5": "./assets/c12.jpg",
        "availability":"(In Stock)",
        "price":350,
        "specs":"Rado watches prove that all watches are not made equal. Since 1962, Rado has been making luxury watches that are completely scratch-proof so your investment piece will truly last a lifetime. To learn more about Rado watches, check out the facts below.All about Rado Watches.Rado was formed in 1917 and initially produced watch movements only. Formed by three brothers in the town of Lengnau, Switzerland, under the name Schlup & Co., it wasn't until 1957 that the company was renamed Rado and began making actual watches.",
    },
    {
        "id": 3,
        "title": "SWATCH",
        "model": "Model:PYS-127",
        "image1": "./assets/c9.jpg",
        "image2": "./assets/c10.jpg",
        "image3": "./assets/c11.jpg",
        "image4": "./assets/c12.jpg",
        "image5": "./assets/c13.jpg",
        "availability":"(In Stock)",
        "price":400,
        "specs":"Rado watches prove that all watches are not made equal. Since 1962, Rado has been making luxury watches that are completely scratch-proof so your investment piece will truly last a lifetime. To learn more about Rado watches, check out the facts below.All about Rado Watches.Rado was formed in 1917 and initially produced watch movements only. Formed by three brothers in the town of Lengnau, Switzerland, under the name Schlup & Co., it wasn't until 1957 that the company was renamed Rado and began making actual watches.",
    },
    {
        "id": 4,
        "title": "BULOVA",
        "model": "Model:YUR-951",
        "image1": "./assets/c10.jpg",
        "image2": "./assets/c11.jpg",
        "image3": "./assets/c12.jpg",
        "image4": "./assets/c13.jpg",
        "image5": "./assets/c14.jpg",
        "availability":"(In Stock)",
        "price":450,
        "specs":"Rado watches prove that all watches are not made equal. Since 1962, Rado has been making luxury watches that are completely scratch-proof so your investment piece will truly last a lifetime. To learn more about Rado watches, check out the facts below.All about Rado Watches.Rado was formed in 1917 and initially produced watch movements only. Formed by three brothers in the town of Lengnau, Switzerland, under the name Schlup & Co., it wasn't until 1957 that the company was renamed Rado and began making actual watches.",
    },
    {
        "id": 5,
        "title": "SOLIMO",
        "model": "Model:PPS-567",
        "image1": "./assets/c11.jpg",
        "image2": "./assets/c12.jpg",
        "image3": "./assets/c13.jpg",
        "image4": "./assets/c14.jpg",
        "image5": "./assets/c17.jpg",
        "availability":"(In Stock)",
        "price":500,
        "specs":"Rado watches prove that all watches are not made equal. Since 1962, Rado has been making luxury watches that are completely scratch-proof so your investment piece will truly last a lifetime. To learn more about Rado watches, check out the facts below.All about Rado Watches.Rado was formed in 1917 and initially produced watch movements only. Formed by three brothers in the town of Lengnau, Switzerland, under the name Schlup & Co., it wasn't until 1957 that the company was renamed Rado and began making actual watches.",
    },
    {
        "id": 6,
        "title": "IKEA",
        "model": "Model:CBN-478",
        "image1": "./assets/c12.jpg",
        "image2": "./assets/c13.jpg",
        "image3": "./assets/c14.jpg",
        "image4": "./assets/c17.jpg",
        "image5": "./assets/c15.jpg",
        "availability":"(In Stock)",
        "price":550,
        "specs":"Rado watches prove that all watches are not made equal. Since 1962, Rado has been making luxury watches that are completely scratch-proof so your investment piece will truly last a lifetime. To learn more about Rado watches, check out the facts below.All about Rado Watches.Rado was formed in 1917 and initially produced watch movements only. Formed by three brothers in the town of Lengnau, Switzerland, under the name Schlup & Co., it wasn't until 1957 that the company was renamed Rado and began making actual watches.",
    },
    {
        "id": 7,
        "title": "HERMLE",
        "model": "Model:QRS-830",
        "image1": "./assets/c13.jpg",
        "image2": "./assets/c14.jpg",
        "image3": "./assets/c17.jpg",
        "image4": "./assets/c15.jpg",
        "image5": "./assets/c16.jpg",
        "availability":"(In Stock)",
        "price":600,
        "specs":"Rado watches prove that all watches are not made equal. Since 1962, Rado has been making luxury watches that are completely scratch-proof so your investment piece will truly last a lifetime. To learn more about Rado watches, check out the facts below.All about Rado Watches.Rado was formed in 1917 and initially produced watch movements only. Formed by three brothers in the town of Lengnau, Switzerland, under the name Schlup & Co., it wasn't until 1957 that the company was renamed Rado and began making actual watches.",
    },
    {
        "id": 8,
        "title": "AJANTA",
        "model": "Model:LYS-601",
        "image1": "./assets/c14.jpg",
        "image2": "./assets/c17.jpg",
        "image3": "./assets/c15.jpg",
        "image4": "./assets/c16.jpg",
        "image5": "./assets/c1.jpg",
        "availability":"(In Stock)",
        "price":650,
        "specs":"Rado watches prove that all watches are not made equal. Since 1962, Rado has been making luxury watches that are completely scratch-proof so your investment piece will truly last a lifetime. To learn more about Rado watches, check out the facts below.All about Rado Watches.Rado was formed in 1917 and initially produced watch movements only. Formed by three brothers in the town of Lengnau, Switzerland, under the name Schlup & Co., it wasn't until 1957 that the company was renamed Rado and began making actual watches.",
    },
    {
        "id": 9,
        "title": "CHUMBAK",
        "model": "Model:YYN-945",
        "image1": "./assets/c17.jpg",
        "image2": "./assets/c15.jpg",
        "image3": "./assets/c16.jpg",
        "image4": "./assets/c1.jpg",
        "image5": "./assets/c9.jpg",
        "availability":"(In Stock)",
        "price":700,
        "specs":"Rado watches prove that all watches are not made equal. Since 1962, Rado has been making luxury watches that are completely scratch-proof so your investment piece will truly last a lifetime. To learn more about Rado watches, check out the facts below.All about Rado Watches.Rado was formed in 1917 and initially produced watch movements only. Formed by three brothers in the town of Lengnau, Switzerland, under the name Schlup & Co., it wasn't until 1957 that the company was renamed Rado and began making actual watches.",
    },
    {
        "id": 10,
        "title": "KIENINGER",
        "model": "Model:UOS-778",
        "image1": "./assets/c15.jpg",
        "image2": "./assets/c16.jpg",
        "image3": "./assets/c1.jpg",
        "image4": "./assets/c9.jpg",
        "image5": "./assets/c3.jpg",
        "availability":"(In Stock)",
        "price":750,
        "specs":"Rado watches prove that all watches are not made equal. Since 1962, Rado has been making luxury watches that are completely scratch-proof so your investment piece will truly last a lifetime. To learn more about Rado watches, check out the facts below.All about Rado Watches.Rado was formed in 1917 and initially produced watch movements only. Formed by three brothers in the town of Lengnau, Switzerland, under the name Schlup & Co., it wasn't until 1957 that the company was renamed Rado and began making actual watches.",
    },
    {
        "id": 11,
        "title": "TITAN",
        "model": "Model:WYS-852",
        "image1": "./assets/c16.jpg",
        "image2": "./assets/c1.jpg",
        "image3": "./assets/c9.jpg",
        "image4": "./assets/c3.jpg",
        "image5": "./assets/c6.jpg",
        "availability":"(In Stock)",
        "price":800,
        "specs":"Rado watches prove that all watches are not made equal. Since 1962, Rado has been making luxury watches that are completely scratch-proof so your investment piece will truly last a lifetime. To learn more about Rado watches, check out the facts below.All about Rado Watches.Rado was formed in 1917 and initially produced watch movements only. Formed by three brothers in the town of Lengnau, Switzerland, under the name Schlup & Co., it wasn't until 1957 that the company was renamed Rado and began making actual watches.",
        
    },
    {
        "id": 12,
        "title": "STARWORK",
        "model": "Model:UUS-345",
        "image1": "./assets/c1.jpg",
        "image2": "./assets/c9.jpg",
        "image3": "./assets/c3.jpg",
        "image4": "./assets/c6.jpg",
        "image5": "./assets/c10.jpg",
        "availability":"(In Stock)",
        "price":850,
        "specs":"Rado watches prove that all watches are not made equal. Since 1962, Rado has been making luxury watches that are completely scratch-proof so your investment piece will truly last a lifetime. To learn more about Rado watches, check out the facts below.All about Rado Watches.Rado was formed in 1917 and initially produced watch movements only. Formed by three brothers in the town of Lengnau, Switzerland, under the name Schlup & Co., it wasn't until 1957 that the company was renamed Rado and began making actual watches.",
    },
    {
        "id": 13,
        "title": "URBAN BORN",
        "model": "Model:BNS-234",
        "image1": "./assets/c9.jpg",
        "image2": "./assets/c11.jpg",
        "image3": "./assets/c12.jpg",
        "image4": "./assets/c13.jpg",
        "image5": "./assets/c14.jpg",
        "availability":"(In Stock)",
        "price":900,
        "specs":"Rado watches prove that all watches are not made equal. Since 1962, Rado has been making luxury watches that are completely scratch-proof so your investment piece will truly last a lifetime. To learn more about Rado watches, check out the facts below.All about Rado Watches.Rado was formed in 1917 and initially produced watch movements only. Formed by three brothers in the town of Lengnau, Switzerland, under the name Schlup & Co., it wasn't until 1957 that the company was renamed Rado and began making actual watches.",
    },
    {
        "id": 14,
        "title": "WEBELKART",
        "model": "Model:YTP-498",
        "image1": "./assets/c3.jpg",
        "image2": "./assets/c17.jpg",
        "image3": "./assets/c15.jpg",
        "image4": "./assets/c16.jpg",
        "image5": "./assets/c1.jpg",
        "availability":"(In Stock)",
        "price":950,
        "specs":"Rado watches prove that all watches are not made equal. Since 1962, Rado has been making luxury watches that are completely scratch-proof so your investment piece will truly last a lifetime. To learn more about Rado watches, check out the facts below.All about Rado Watches.Rado was formed in 1917 and initially produced watch movements only. Formed by three brothers in the town of Lengnau, Switzerland, under the name Schlup & Co., it wasn't until 1957 that the company was renamed Rado and began making actual watches.",
    },
    {
        "id": 15,
        "title": "CHELSEA",
        "model": "Model:PKS-702",
        "image1": "./assets/c6.jpg",
        "image2": "./assets/c1.jpg",
        "image3": "./assets/c3.jpg",
        "image4": "./assets/c9.jpg",
        "image5": "./assets/c10.jpg",
        "availability":"(In Stock)",
        "price":1000,
        "specs":"Rado watches prove that all watches are not made equal. Since 1962, Rado has been making luxury watches that are completely scratch-proof so your investment piece will truly last a lifetime. To learn more about Rado watches, check out the facts below.All about Rado Watches.Rado was formed in 1917 and initially produced watch movements only. Formed by three brothers in the town of Lengnau, Switzerland, under the name Schlup & Co., it wasn't until 1957 that the company was renamed Rado and began making actual watches.",
    }
]


        let clkcrDrow = document.querySelector("#clk_crd_row")
        for (let index = 0; index < clkprdlist.length; index++) {
            clkcrDrow.innerHTML += `
    <div class="col-lg-4 col-md-6 col-sm-12 d-flex align-items-center justify-content-evenly p-5" data-aos="flip-left">
                    <div class="parent_sp_crd">
                        <div class="child_sp_crd">
                            <img src=${clkprdlist[index].image1} alt="">
                            <div class="sp_cont">
                                <h1>${clkprdlist[index].title}</h1>
                                <h3>${clkprdlist[index].model}</h3>
                                <p><span class="price_sp">$${clkprdlist[index].price}</span> <i onclick="changeColor(this)" class="fa-solid fa-heart heart" id="heart_icon"></i></p>
                                
                                <button class="btn btn-outline-light sp_crd_btn" data-bs-toggle="modal" data-bs-target="#exampleModal"  onclick="clkpmt(${index})">DETAILS</button>
                            </div>
                        </div>
                    </div>
                </div>
    `
        }



        let modalclk = document.querySelector("#clkmodal");
function clkpmt(index) {modalclk.innerHTML=
    `<div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel"><span style="color: red; font-size: 2rem;">Aura</span>Watches</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <div class="container modal_container">
            <div class="img_modal_box">
                
                <div class="small_imgaes">
                    <div class="sm_img_parts"><img onclick="chimg1()" class="tinyimg" id="tiny_imga" src=${clkprdlist[index].image2} alt="" ></div>
                    <div class="sm_img_parts"><img onclick="chimg2()" class="tinyimg" id="tiny_imgb" src=${clkprdlist[index].image3} alt=""></div>
                    <div class="sm_img_parts"><img onclick="chimg3()" class="tinyimg" id="tiny_imgc" src=${clkprdlist[index].image4} alt=""></div>
                    <div class="sm_img_parts"><img onclick="chimg4()" class="tinyimg" id="tiny_imgd" src=${clkprdlist[index].image5} alt=""></div>
                </div>
                <div class="big_img_box"><img class="big_img" id="big_img" src=${clkprdlist[index].image1} alt=""></div>
            </div>
            <div class="infobox">
                <h1>${clkprdlist[index].title}</h1>
                <h3>${clkprdlist[index].model}</h3>
                <h4>${clkprdlist[index].availability}</h4>
                <h2>$${clkprdlist[index].price}</h2>
                <p class="modal_info_heading">Technology & Specification :</p>
                <div class="specs_cont">
                    ${clkprdlist[index].specs}
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
let clkmplist = [
    {
        "id": 1,
        "title": "CLOCKS",
        "model": "CY-PZ-037",
        "image1": "./assets/c2.jpg",
        "image2": "./assets/c4.jpg",
        "image3": "./assets/c5.jpg",
        "image4": "./assets/c6.jpg",
        "image5": "./assets/c7.jpg",
        "availability":"(In Stock)",
        "oldprice": 550,
        "price": 399,
        "specs":"Rado watches prove that all watches are not made equal. Since 1962, Rado has been making luxury watches that are completely scratch-proof so your investment piece will truly last a lifetime. To learn more about Rado watches, check out the facts below.All about Rado Watches.Rado was formed in 1917 and initially produced watch movements only. Formed by three brothers in the town of Lengnau, Switzerland, under the name Schlup & Co., it wasn't until 1957 that the company was renamed Rado and began making actual watches."
    },
    {
        "id": 2,
        "title": "CLOCKS",
        "model": "LR-AS-055",
        "image1": "./assets/c4.jpg",
        "image2": "./assets/c5.jpg",
        "image3": "./assets/c6.jpg",
        "image4": "./assets/c7.jpg",
        "image5": "./assets/c8.jpg",
        "availability":"(In Stock)",
        "oldprice": 830,
        "price": 699,
        "specs":"Rado watches prove that all watches are not made equal. Since 1962, Rado has been making luxury watches that are completely scratch-proof so your investment piece will truly last a lifetime. To learn more about Rado watches, check out the facts below.All about Rado Watches.Rado was formed in 1917 and initially produced watch movements only. Formed by three brothers in the town of Lengnau, Switzerland, under the name Schlup & Co., it wasn't until 1957 that the company was renamed Rado and began making actual watches."
    },
    {
        "id": 3,
        "title": "CLOCKS",
        "model": "CQ-HZ-095",
        "image1": "./assets/c5.jpg",
        "image2": "./assets/c6.jpg",
        "image3": "./assets/c7.jpg",
        "image4": "./assets/c8.jpg",
        "image5": "./assets/c18.jpg",
        "availability":"(In Stock)",
        "oldprice": 930,
        "price": 799,
        "specs":"Rado watches prove that all watches are not made equal. Since 1962, Rado has been making luxury watches that are completely scratch-proof so your investment piece will truly last a lifetime. To learn more about Rado watches, check out the facts below.All about Rado Watches.Rado was formed in 1917 and initially produced watch movements only. Formed by three brothers in the town of Lengnau, Switzerland, under the name Schlup & Co., it wasn't until 1957 that the company was renamed Rado and began making actual watches."
    },
    {
        "id": 4,
        "title": "CLOCKS",
        "model": "CH-AC-235",
        "image1": "./assets/c6.jpg",
        "image2": "./assets/c7.jpg",
        "image3": "./assets/c8.jpg",
        "image4": "./assets/c18.jpg",
        "image5": "./assets/c20.jpg",
        "availability":"(In Stock)",
        "oldprice": 330,
        "price": 299,
        "specs":"Rado watches prove that all watches are not made equal. Since 1962, Rado has been making luxury watches that are completely scratch-proof so your investment piece will truly last a lifetime. To learn more about Rado watches, check out the facts below.All about Rado Watches.Rado was formed in 1917 and initially produced watch movements only. Formed by three brothers in the town of Lengnau, Switzerland, under the name Schlup & Co., it wasn't until 1957 that the company was renamed Rado and began making actual watches."
    },
    {
        "id": 5,
        "title": "CLOCKS",
        "model": "CO-AG-015",
        "image1": "./assets/c7.jpg",
        "image2": "./assets/c8.jpg",
        "image3": "./assets/c18.jpg",
        "image4": "./assets/c20.jpg",
        "image5": "./assets/c19.jpg",
        "availability":"(In Stock)",
        "oldprice": 430,
        "price": 399,
        "specs":"Rado watches prove that all watches are not made equal. Since 1962, Rado has been making luxury watches that are completely scratch-proof so your investment piece will truly last a lifetime. To learn more about Rado watches, check out the facts below.All about Rado Watches.Rado was formed in 1917 and initially produced watch movements only. Formed by three brothers in the town of Lengnau, Switzerland, under the name Schlup & Co., it wasn't until 1957 that the company was renamed Rado and began making actual watches."
    },
    {
        "id": 6,
        "title": "CLOCKS",
        "model": "FR-HZ-835",
        "image1": "./assets/c8.jpg",
        "image2": "./assets/c18.jpg",
        "image3": "./assets/c20.jpg",
        "image4": "./assets/c19.jpg",
        "image5": "./assets/c2.jpg",
        "availability":"(In Stock)",
        "oldprice": 600,
        "price": 499,
        "specs":"Rado watches prove that all watches are not made equal. Since 1962, Rado has been making luxury watches that are completely scratch-proof so your investment piece will truly last a lifetime. To learn more about Rado watches, check out the facts below.All about Rado Watches.Rado was formed in 1917 and initially produced watch movements only. Formed by three brothers in the town of Lengnau, Switzerland, under the name Schlup & Co., it wasn't until 1957 that the company was renamed Rado and began making actual watches."
    },
    {
        "id": 7,
        "title": "CLOCKS",
        "model": "CY-KZ-995",
        "image1": "./assets/c18.jpg",
        "image2": "./assets/c20.jpg",
        "image3": "./assets/c19.jpg",
        "image4": "./assets/c4.jpg",
        "image5": "./assets/c5.jpg",
        "availability":"(In Stock)",
        "oldprice": 530,
        "price": 799,
        "specs":"Rado watches prove that all watches are not made equal. Since 1962, Rado has been making luxury watches that are completely scratch-proof so your investment piece will truly last a lifetime. To learn more about Rado watches, check out the facts below.All about Rado Watches.Rado was formed in 1917 and initially produced watch movements only. Formed by three brothers in the town of Lengnau, Switzerland, under the name Schlup & Co., it wasn't until 1957 that the company was renamed Rado and began making actual watches."
    },
    {
        "id": 8,
        "title": "CLOCKS",
        "model": "CX-AG-075",
        "image1": "./assets/c20.jpg",
        "image2": "./assets/c19.jpg",
        "image3": "./assets/c5.jpg",
        "image4": "./assets/c6.jpg",
        "image5": "./assets/c7.jpg",
        "availability":"(In Stock)",
        "oldprice": 730,
        "price": 600,
        "specs":"Rado watches prove that all watches are not made equal. Since 1962, Rado has been making luxury watches that are completely scratch-proof so your investment piece will truly last a lifetime. To learn more about Rado watches, check out the facts below.All about Rado Watches.Rado was formed in 1917 and initially produced watch movements only. Formed by three brothers in the town of Lengnau, Switzerland, under the name Schlup & Co., it wasn't until 1957 that the company was renamed Rado and began making actual watches."
    },
    {
        "id": 9,
        "title": "CLOCKS",
        "model": "SR-AN-905",
        "image1": "./assets/c19.jpg",
        "image2": "./assets/c2.jpg",
        "image3": "./assets/c4.jpg",
        "image4": "./assets/c5.jpg",
        "image5": "./assets/c6.jpg",
        "availability":"(In Stock)",
        "oldprice": 630,
        "price": 599,
        "specs":"Rado watches prove that all watches are not made equal. Since 1962, Rado has been making luxury watches that are completely scratch-proof so your investment piece will truly last a lifetime. To learn more about Rado watches, check out the facts below.All about Rado Watches.Rado was formed in 1917 and initially produced watch movements only. Formed by three brothers in the town of Lengnau, Switzerland, under the name Schlup & Co., it wasn't until 1957 that the company was renamed Rado and began making actual watches."
    }

]

let clkmpcrdrow = document.querySelector("#clk_mp_crd_row")
for (let index = 0; index < clkmplist.length; index++) {

    clkmpcrdrow.innerHTML += `
    <div class="col-lg-4 col-md-6 col-sm-12 d-flex align-items-center justify-content-evenly p-5" data-aos="flip-down">
    <div class="prdcardparent">
    <div class="prdcard">
      <div class="prdimg">
          <img src=${clkmplist[index].image1} alt="">
      </div>
      <div class="prdcont">
          <h5>${clkmplist[index].title}</h5>
          <h3>${clkmplist[index].model}</h3>
          <button class="prdbtn btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#exampleModal"  onclick="clkmpmt(${index})">DETAILS</button>
          <p><s>$${clkmplist[index].oldprice}</s> &nbsp;$${clkmplist[index].price}</p>
      </div>
    </div>
  </div>
            </div>
            </div>
        
    `
}



function clkmpmt(index) {modalclk.innerHTML=
    `<div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel"><span style="color: red; font-size: 2rem;">Aura</span>Watches</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <div class="container modal_container">
            <div class="img_modal_box">
                
                <div class="small_imgaes">
                    <div class="sm_img_parts"><img onclick="chimg1()" class="tinyimg" id="tiny_imga" src=${clkmplist[index].image2} alt="" ></div>
                    <div class="sm_img_parts"><img onclick="chimg2()" class="tinyimg" id="tiny_imgb" src=${clkmplist[index].image3} alt=""></div>
                    <div class="sm_img_parts"><img onclick="chimg3()" class="tinyimg" id="tiny_imgc" src=${clkmplist[index].image4} alt=""></div>
                    <div class="sm_img_parts"><img onclick="chimg4()" class="tinyimg" id="tiny_imgd" src=${clkmplist[index].image5} alt=""></div>
                </div>
                <div class="big_img_box"><img class="big_img" id="big_img" src=${clkmplist[index].image1} alt=""></div>
            </div>
            <div class="infobox">
                <h1>${clkmplist[index].title}</h1>
                <h3>${clkmplist[index].model}</h3>
                <h4>${clkmplist[index].availability}</h4>
                <h2>$${clkmplist[index].price}</h2>
                <p class="modal_info_heading">Technology & Specification :</p>
                <div class="specs_cont">
                    ${clkmplist[index].specs}
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