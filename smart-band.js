// sportz category page work start from here 


let sbprdlist = [
    {
        "id": 1,
        "title": "GOQII",
        "model": "Model:YSR-455",
        "image1": "./assets/b3.jpg",
        "image2": "./assets/b7.jpg",
        "image3": "./assets/w11.jpg",
        "image4": "./assets/w12.jpg",
        "image5": "./assets/b8.jpg",
        "availability":"(In Stock)",
        "price":500,
        "specs":"Goqii is a Japanese multinational electronics manufacturing corporation headquartered in Shibuya, Tokyo, Japan. Its products include calculators, mobile phones, digital cameras, electronic musical instruments, and analogue and digital watches. It was founded in 1946, and in 1957 introduced the first entirely compact electronic calculator. It was an early digital camera innovator, and during the 1980s and 1990s, the company developed numerous affordable home electronic keyboards for musicians along with introducing the first mass-produced digital watches.",
    },
    {
        "id": 2,
        "title": "HONOR",
        "model": "Model:YRT-456",
        "image1": "./assets/b7.jpg",
        "image2": "./assets/w11.jpg",
        "image3": "./assets/w12.jpg",
        "image4": "./assets/b8.jpg",
        "image5": "./assets/b9.jpg",
        "availability":"(In Stock)",
        "price":550,
        "specs":"Honor is a Japanese multinational electronics manufacturing corporation headquartered in Shibuya, Tokyo, Japan. Its products include calculators, mobile phones, digital cameras, electronic musical instruments, and analogue and digital watches. It was founded in 1946, and in 1957 introduced the first entirely compact electronic calculator. It was an early digital camera innovator, and during the 1980s and 1990s, the company developed numerous affordable home electronic keyboards for musicians along with introducing the first mass-produced digital watches.",
    },
    {
        "id": 3,
        "title": "LENOVO",
        "model": "Model:TYS-670",
        "image1": "./assets/w11.jpg",
        "image2": "./assets/w12.jpg",
        "image3": "./assets/b8.jpg",
        "image4": "./assets/b9.jpg",
        "image5": "./assets/b10.jpg",
        "availability":"(In Stock)",
        "price":600,
        "specs":"Lenovo is a Japanese multinational electronics manufacturing corporation headquartered in Shibuya, Tokyo, Japan. Its products include calculators, mobile phones, digital cameras, electronic musical instruments, and analogue and digital watches. It was founded in 1946, and in 1957 introduced the first entirely compact electronic calculator. It was an early digital camera innovator, and during the 1980s and 1990s, the company developed numerous affordable home electronic keyboards for musicians along with introducing the first mass-produced digital watches.",
    },
    {
        "id": 4,
        "title": "INFINIX",
        "model": "Model:ERS-345",
        "image1": "./assets/w12.jpg",
        "image2": "./assets/b8.jpg",
        "image3": "./assets/b9.jpg",
        "image4": "./assets/b10.jpg",
        "image5": "./assets/np7.jpg",
        "availability":"(In Stock)",
        "price":650,
        "specs":"Infinix is a Japanese multinational electronics manufacturing corporation headquartered in Shibuya, Tokyo, Japan. Its products include calculators, mobile phones, digital cameras, electronic musical instruments, and analogue and digital watches. It was founded in 1946, and in 1957 introduced the first entirely compact electronic calculator. It was an early digital camera innovator, and during the 1980s and 1990s, the company developed numerous affordable home electronic keyboards for musicians along with introducing the first mass-produced digital watches.",
    },
    {
        "id": 5,
        "title": "ONE PLUS",
        "model": "Model:QWS-667",
        "image1": "./assets/b8.jpg",
        "image2": "./assets/b9.jpg",
        "image3": "./assets/b10.jpg",
        "image4": "./assets/np7.jpg",
        "image5": "./assets/np8.jpg",
        "availability":"(In Stock)",
        "price":700,
        "specs":"Oneplus is a Japanese multinational electronics manufacturing corporation headquartered in Shibuya, Tokyo, Japan. Its products include calculators, mobile phones, digital cameras, electronic musical instruments, and analogue and digital watches. It was founded in 1946, and in 1957 introduced the first entirely compact electronic calculator. It was an early digital camera innovator, and during the 1980s and 1990s, the company developed numerous affordable home electronic keyboards for musicians along with introducing the first mass-produced digital watches.",
    },
    {
        "id": 6,
        "title": "REALME",
        "model": "Model:WWS-357",
        "image1": "./assets/b9.jpg",
        "image2": "./assets/b10.jpg",
        "image3": "./assets/np7.jpg",
        "image4": "./assets/np8.jpg",
        "image5": "./assets/np9.jpg",
        "availability":"(In Stock)",
        "price":750,
        "specs":"Realme is a Japanese multinational electronics manufacturing corporation headquartered in Shibuya, Tokyo, Japan. Its products include calculators, mobile phones, digital cameras, electronic musical instruments, and analogue and digital watches. It was founded in 1946, and in 1957 introduced the first entirely compact electronic calculator. It was an early digital camera innovator, and during the 1980s and 1990s, the company developed numerous affordable home electronic keyboards for musicians along with introducing the first mass-produced digital watches.",
    },
    {
        "id": 7,
        "title": "OURA",
        "model": "Model:QQS-660",
        "image1": "./assets/b10.jpg",
        "image2": "./assets/np7.jpg",
        "image3": "./assets/np8.jpg",
        "image4": "./assets/np9.jpg",
        "image5": "./assets/b11.jpg",
        "availability":"(In Stock)",
        "price":800,
        "specs":"Oura is a Japanese multinational electronics manufacturing corporation headquartered in Shibuya, Tokyo, Japan. Its products include calculators, mobile phones, digital cameras, electronic musical instruments, and analogue and digital watches. It was founded in 1946, and in 1957 introduced the first entirely compact electronic calculator. It was an early digital camera innovator, and during the 1980s and 1990s, the company developed numerous affordable home electronic keyboards for musicians along with introducing the first mass-produced digital watches.",
    },
    {
        "id": 8,
        "title": "GARMIN",
        "model": "Model:WQS-810",
        "image1": "./assets/np7.jpg",
        "image2": "./assets/np8.jpg",
        "image3": "./assets/np9.jpg",
        "image4": "./assets/b11.jpg",
        "image5": "./assets/b12.jpg",
        "availability":"(In Stock)",
        "price":850,
        "specs":"Garmin is a Japanese multinational electronics manufacturing corporation headquartered in Shibuya, Tokyo, Japan. Its products include calculators, mobile phones, digital cameras, electronic musical instruments, and analogue and digital watches. It was founded in 1946, and in 1957 introduced the first entirely compact electronic calculator. It was an early digital camera innovator, and during the 1980s and 1990s, the company developed numerous affordable home electronic keyboards for musicians along with introducing the first mass-produced digital watches.",
    },
    {
        "id": 9,
        "title": "TIMEX",
        "model": "Model:DGS-657",
        "image1": "./assets/np8.jpg",
        "image2": "./assets/np9.jpg",
        "image3": "./assets/b11.jpg",
        "image4": "./assets/b12.jpg",
        "image5": "./assets/b13.jpg",
        "availability":"(In Stock)",
        "price":900,
        "specs":"Timex is a Japanese multinational electronics manufacturing corporation headquartered in Shibuya, Tokyo, Japan. Its products include calculators, mobile phones, digital cameras, electronic musical instruments, and analogue and digital watches. It was founded in 1946, and in 1957 introduced the first entirely compact electronic calculator. It was an early digital camera innovator, and during the 1980s and 1990s, the company developed numerous affordable home electronic keyboards for musicians along with introducing the first mass-produced digital watches.",
    },
    {
        "id": 10,
        "title": "SMARTRON",
        "model": "Model:YAS-912",
        "image1": "./assets/fet32.jpg",
        "image2": "./assets/b11.jpg",
        "image3": "./assets/b12.jpg",
        "image4": "./assets/b13.jpg",
        "image5": "./assets/b14.jpg",
        "availability":"(In Stock)",
        "price":1000,
        "specs":"Smartron is a Japanese multinational electronics manufacturing corporation headquartered in Shibuya, Tokyo, Japan. Its products include calculators, mobile phones, digital cameras, electronic musical instruments, and analogue and digital watches. It was founded in 1946, and in 1957 introduced the first entirely compact electronic calculator. It was an early digital camera innovator, and during the 1980s and 1990s, the company developed numerous affordable home electronic keyboards for musicians along with introducing the first mass-produced digital watches.",
    },
    {
        "id": 11,
        "title": "AMAZFIT",
        "model": "Model-YFS-SVD-976",
        "image1": "./assets/b11.jpg",
        "image2": "./assets/b12.jpg",
        "image3": "./assets/b13.jpg",
        "image4": "./assets/b14.jpg",
        "image5": "./assets/np5.jpg",
        "availability":"(In Stock)",
        "price":1050,
        "specs":"Amazfit is a Japanese multinational electronics manufacturing corporation headquartered in Shibuya, Tokyo, Japan. Its products include calculators, mobile phones, digital cameras, electronic musical instruments, and analogue and digital watches. It was founded in 1946, and in 1957 introduced the first entirely compact electronic calculator. It was an early digital camera innovator, and during the 1980s and 1990s, the company developed numerous affordable home electronic keyboards for musicians along with introducing the first mass-produced digital watches.",
    },
    {
        "id": 12,
        "title": "WHOOP",
        "model": "Model:YGD-365",
        "image1": "./assets/b12.jpg",
        "image2": "./assets/b13.jpg",
        "image3": "./assets/b14.jpg",
        "image4": "./assets/np5.jpg",
        "image5": "./assets/b3.jpg",
        "availability":"(In Stock)",
        "price":1100,
        "specs":"Whoop is a Japanese multinational electronics manufacturing corporation headquartered in Shibuya, Tokyo, Japan. Its products include calculators, mobile phones, digital cameras, electronic musical instruments, and analogue and digital watches. It was founded in 1946, and in 1957 introduced the first entirely compact electronic calculator. It was an early digital camera innovator, and during the 1980s and 1990s, the company developed numerous affordable home electronic keyboards for musicians along with introducing the first mass-produced digital watches.",
    },
    {
        "id": 13,
        "title": "FASTRACK",
        "model": "Model:YYN-661",
        "image1": "./assets/b13.jpg",
        "image2": "./assets/b14.jpg",
        "image3": "./assets/np5.jpg",
        "image4": "./assets/b3.jpg",
        "image5": "./assets/b7.jpg",
        "availability":"(In Stock)",
        "price":1150,
        "specs":"Fastrack is a Japanese multinational electronics manufacturing corporation headquartered in Shibuya, Tokyo, Japan. Its products include calculators, mobile phones, digital cameras, electronic musical instruments, and analogue and digital watches. It was founded in 1946, and in 1957 introduced the first entirely compact electronic calculator. It was an early digital camera innovator, and during the 1980s and 1990s, the company developed numerous affordable home electronic keyboards for musicians along with introducing the first mass-produced digital watches.",
    },
    {
        "id": 14,
        "title": "MYTECH",
        "model": "Model:YHS-994",
        "image1": "./assets/b14.jpg",
        "image2": "./assets/np5.jpg",
        "image3": "./assets/b3.jpg",
        "image4": "./assets/b7.jpg",
        "image5": "./assets/w11.jpg",
        "availability":"(In Stock)",
        "price":1200,
        "specs":"Mytech is a Japanese multinational electronics manufacturing corporation headquartered in Shibuya, Tokyo, Japan. Its products include calculators, mobile phones, digital cameras, electronic musical instruments, and analogue and digital watches. It was founded in 1946, and in 1957 introduced the first entirely compact electronic calculator. It was an early digital camera innovator, and during the 1980s and 1990s, the company developed numerous affordable home electronic keyboards for musicians along with introducing the first mass-produced digital watches.",
    },
    {
        "id": 15,
        "title": "POLAR",
        "model": "Model:YPS-501",
        "image1": "./assets/np5.jpg",
        "image2": "./assets/b3.jpg",
        "image3": "./assets/b7.jpg",
        "image4": "./assets/w11.jpg",
        "image5": "./assets/w12.jpg",
        "availability":"(In Stock)",
        "price":1250,
        "specs":"Polar is a Japanese multinational electronics manufacturing corporation headquartered in Shibuya, Tokyo, Japan. Its products include calculators, mobile phones, digital cameras, electronic musical instruments, and analogue and digital watches. It was founded in 1946, and in 1957 introduced the first entirely compact electronic calculator. It was an early digital camera innovator, and during the 1980s and 1990s, the company developed numerous affordable home electronic keyboards for musicians along with introducing the first mass-produced digital watches.",
    }
]


        let sbcrDrow = document.querySelector("#sb_crd_row")
        for (let index = 0; index < sbprdlist.length; index++) {
            sbcrDrow.innerHTML += `
    <div class="col-lg-4 col-md-6 col-sm-12 d-flex align-items-center justify-content-evenly p-5" data-aos="flip-left">
                    <div class="parent_sp_crd">
                        <div class="child_sp_crd">
                            <img src=${sbprdlist[index].image1} alt="">
                            <div class="sp_cont">
                                <h1>${sbprdlist[index].title}</h1>
                                <h3>${sbprdlist[index].model}</h3>
                                <p><span class="price_sp">$${sbprdlist[index].price}</span> <i onclick="changeColor(this)" class="fa-solid fa-heart heart" id="heart_icon"></i></p>
                                
                                <button class="btn btn-outline-light sp_crd_btn" data-bs-toggle="modal" data-bs-target="#exampleModal"  onclick="sbpmt(${index})">DETAILS</button>
                            </div>
                        </div>
                    </div>
                </div>
    `
        }



        let modalsb = document.querySelector("#sbmodal");
function sbpmt(index) {modalsb.innerHTML=
    `<div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel"><span style="color: red; font-size: 2rem;">Aura</span>Watches</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <div class="container modal_container">
            <div class="img_modal_box">
                
                <div class="small_imgaes">
                    <div class="sm_img_parts"><img onclick="chimg1()" class="tinyimg" id="tiny_imga" src=${sbprdlist[index].image2} alt="" ></div>
                    <div class="sm_img_parts"><img onclick="chimg2()" class="tinyimg" id="tiny_imgb" src=${sbprdlist[index].image3} alt=""></div>
                    <div class="sm_img_parts"><img onclick="chimg3()" class="tinyimg" id="tiny_imgc" src=${sbprdlist[index].image4} alt=""></div>
                    <div class="sm_img_parts"><img onclick="chimg4()" class="tinyimg" id="tiny_imgd" src=${sbprdlist[index].image5} alt=""></div>
                </div>
                <div class="big_img_box"><img class="big_img" id="big_img" src=${sbprdlist[index].image1} alt=""></div>
            </div>
            <div class="infobox">
                <h1>${sbprdlist[index].title}</h1>
                <h3>${sbprdlist[index].model}</h3>
                <h4>${sbprdlist[index].availability}</h4>
                <h2>$${sbprdlist[index].price}</h2>
                <p class="modal_info_heading">Technology & Specification :</p>
                <div class="specs_cont">
                    ${sbprdlist[index].specs}
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
let sbmplist = [
    {
        "id": 1,
        "title": "SMART BANDS",
        "model": "CT-AZ-045",
        "image1": "./assets/b1.jpg",
        "image2": "./assets/fet8.jpg",
        "image3": "./assets/b2.jpg",
        "image4": "./assets/b4.jpg",
        "image5": "./assets/fet5.jpg",
        "availability":"(In Stock)",
        "oldprice": 330,
        "price": 399,
        "specs":"Smartband is a Japanese multinational electronics manufacturing corporation headquartered in Shibuya, Tokyo, Japan. Its products include calculators, mobile phones, digital cameras, electronic musical instruments, and analogue and digital watches. It was founded in 1946, and in 1957 introduced the first entirely compact electronic calculator. It was an early digital camera innovator, and during the 1980s and 1990s, the company developed numerous affordable home electronic keyboards for musicians along with introducing the first mass-produced digital watches."
    },
    {
        "id": 2,
        "title": "SMART BANDS",
        "model": "CJ-KZ-095",
        "image1": "./assets/fet8.jpg",
        "image2": "./assets/b2.jpg",
        "image3": "./assets/b4.jpg",
        "image4": "./assets/fet5.jpg",
        "image5": "./assets/b5.jpg",
        "availability":"(In Stock)",
        "oldprice": 430,
        "price": 499,
        "specs":"luxury is a Japanese multinational electronics manufacturing corporation headquartered in Shibuya, Tokyo, Japan. Its products include calculators, mobile phones, digital cameras, electronic musical instruments, and analogue and digital watches. It was founded in 1946, and in 1957 introduced the first entirely compact electronic calculator. It was an early digital camera innovator, and during the 1980s and 1990s, the company developed numerous affordable home electronic keyboards for musicians along with introducing the first mass-produced digital watches."
    },
    {
        "id": 3,
        "title": "SMART BANDS",
        "model": "CW-NZ-075",
        "image1": "./assets/b2.jpg",
        "image2": "./assets/b4.jpg",
        "image3": "./assets/fet5.jpg",
        "image4": "./assets/b5.jpg",
        "image5": "./assets/fet3.jpg",
        "availability":"(In Stock)",
        "oldprice": 530,
        "price": 599,
        "specs":"Premier is a Japanese multinational electronics manufacturing corporation headquartered in Shibuya, Tokyo, Japan. Its products include calculators, mobile phones, digital cameras, electronic musical instruments, and analogue and digital watches. It was founded in 1946, and in 1957 introduced the first entirely compact electronic calculator. It was an early digital camera innovator, and during the 1980s and 1990s, the company developed numerous affordable home electronic keyboards for musicians along with introducing the first mass-produced digital watches."
    },
    {
        "id": 4,
        "title": "SMART BANDS",
        "model": "HR-AU-055",
        "image1": "./assets/b4.jpg",
        "image2": "./assets/fet5.jpg",
        "image3": "./assets/b5.jpg",
        "image4": "./assets/fet3.jpg",
        "image5": "./assets/b6.jpg",
        "availability":"(In Stock)",
        "oldprice": 630,
        "price": 699,
        "specs":"Apple is a Japanese multinational electronics manufacturing corporation headquartered in Shibuya, Tokyo, Japan. Its products include calculators, mobile phones, digital cameras, electronic musical instruments, and analogue and digital watches. It was founded in 1946, and in 1957 introduced the first entirely compact electronic calculator. It was an early digital camera innovator, and during the 1980s and 1990s, the company developed numerous affordable home electronic keyboards for musicians along with introducing the first mass-produced digital watches."
    },
    {
        "id": 5,
        "title": "SMART BANDS",
        "model": "CH-PZ-635",
        "image1": "./assets/fet5.jpg",
        "image2": "./assets/b5.jpg",
        "image3": "./assets/fet3.jpg",
        "image4": "./assets/b6.jpg",
        "image5": "./assets/w2.jpg",
        "availability":"(In Stock)",
        "oldprice": 730,
        "price": 799,
        "specs":"Timex is a Japanese multinational electronics manufacturing corporation headquartered in Shibuya, Tokyo, Japan. Its products include calculators, mobile phones, digital cameras, electronic musical instruments, and analogue and digital watches. It was founded in 1946, and in 1957 introduced the first entirely compact electronic calculator. It was an early digital camera innovator, and during the 1980s and 1990s, the company developed numerous affordable home electronic keyboards for musicians along with introducing the first mass-produced digital watches."
    },
    {
        "id": 6,
        "title": "SMART BANDS",
        "model": "CY-OZ-055",
        "image1": "./assets/b5.jpg",
        "image2": "./assets/fet3.jpg",
        "image3": "./assets/b6.jpg",
        "image4": "./assets/w2.jpg",
        "image5": "./assets/b1.jpg",
        "availability":"(In Stock)",
        "oldprice": 830,
        "price": 899,
        "specs":"Omega is a Japanese multinational electronics manufacturing corporation headquartered in Shibuya, Tokyo, Japan. Its products include calculators, mobile phones, digital cameras, electronic musical instruments, and analogue and digital watches. It was founded in 1946, and in 1957 introduced the first entirely compact electronic calculator. It was an early digital camera innovator, and during the 1980s and 1990s, the company developed numerous affordable home electronic keyboards for musicians along with introducing the first mass-produced digital watches."
    },
    {
        "id": 7,
        "title": "SMART BANDS",
        "model": "CE-IZ-085",
        "image1": "./assets/fet3.jpg",
        "image2": "./assets/b6.jpg",
        "image3": "./assets/w2.jpg",
        "image4": "./assets/fet8.jpg",
        "image5": "./assets/b2.jpg",
        "availability":"(In Stock)",
        "oldprice": 930,
        "price": 999,
        "specs":"Sony is a Japanese multinational electronics manufacturing corporation headquartered in Shibuya, Tokyo, Japan. Its products include calculators, mobile phones, digital cameras, electronic musical instruments, and analogue and digital watches. It was founded in 1946, and in 1957 introduced the first entirely compact electronic calculator. It was an early digital camera innovator, and during the 1980s and 1990s, the company developed numerous affordable home electronic keyboards for musicians along with introducing the first mass-produced digital watches."
    },
    {
        "id": 8,
        "title": "SMART BANDS",
        "model": "YR-IZ-045",
        "image1": "./assets/b6.jpg",
        "image2": "./assets/w2.jpg",
        "image3": "./assets/b2.jpg",
        "image4": "./assets/b4.jpg",
        "image5": "./assets/fet5.jpg",
        "availability":"(In Stock)",
        "oldprice": 1030,
        "price": 1100,
        "specs":"Smartband is a Japanese multinational electronics manufacturing corporation headquartered in Shibuya, Tokyo, Japan. Its products include calculators, mobile phones, digital cameras, electronic musical instruments, and analogue and digital watches. It was founded in 1946, and in 1957 introduced the first entirely compact electronic calculator. It was an early digital camera innovator, and during the 1980s and 1990s, the company developed numerous affordable home electronic keyboards for musicians along with introducing the first mass-produced digital watches."
    },
    {
        "id": 9,
        "title": "SMART BANDS",
        "model": "CF-NZ-535",
        "image1": "./assets/w2.jpg",
        "image2": "./assets/b5.jpg",
        "image3": "./assets/fet3.jpg",
        "image4": "./assets/b6.jpg",
        "image5": "./assets/b1.jpg",
        "availability":"(In Stock)",
        "oldprice": 1130,
        "price": 1200,
        "specs":"Smartband is a Japanese multinational electronics manufacturing corporation headquartered in Shibuya, Tokyo, Japan. Its products include calculators, mobile phones, digital cameras, electronic musical instruments, and analogue and digital watches. It was founded in 1946, and in 1957 introduced the first entirely compact electronic calculator. It was an early digital camera innovator, and during the 1980s and 1990s, the company developed numerous affordable home electronic keyboards for musicians along with introducing the first mass-produced digital watches."
    }

]

let sbmpcrdrow = document.querySelector("#sb_mp_crd_row")
for (let index = 0; index < sbmplist.length; index++) {

    sbmpcrdrow.innerHTML += `
    <div class="col-lg-4 col-md-6 col-sm-12 d-flex align-items-center justify-content-evenly p-5" data-aos="flip-down">
    <div class="prdcardparent">
    <div class="prdcard">
      <div class="prdimg">
          <img src=${sbmplist[index].image1} alt="">
      </div>
      <div class="prdcont">
          <h5>${sbmplist[index].title}</h5>
          <h3>${sbmplist[index].model}</h3>
          <button class="prdbtn btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#exampleModal"  onclick="sbmpmt(${index})">DETAILS</button>
          <p><s>$${sbmplist[index].oldprice}</s> &nbsp;$${sbmplist[index].price}</p>
      </div>
    </div>
  </div>
            </div>
            </div>
        
    `
}


function sbmpmt(index) {modalsb.innerHTML=
    `<div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel"><span style="color: red; font-size: 2rem;">Aura</span>Watches</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <div class="container modal_container">
            <div class="img_modal_box">
                
                <div class="small_imgaes">
                    <div class="sm_img_parts"><img onclick="chimg1()" class="tinyimg" id="tiny_imga" src=${sbmplist[index].image2} alt="" ></div>
                    <div class="sm_img_parts"><img onclick="chimg2()" class="tinyimg" id="tiny_imgb" src=${sbmplist[index].image3} alt=""></div>
                    <div class="sm_img_parts"><img onclick="chimg3()" class="tinyimg" id="tiny_imgc" src=${sbmplist[index].image4} alt=""></div>
                    <div class="sm_img_parts"><img onclick="chimg4()" class="tinyimg" id="tiny_imgd" src=${sbmplist[index].image5} alt=""></div>
                </div>
                <div class="big_img_box"><img class="big_img" id="big_img" src=${sbmplist[index].image1} alt=""></div>
            </div>
            <div class="infobox">
                <h1>${sbmplist[index].title}</h1>
                <h3>${sbmplist[index].model}</h3>
                <h4>${sbmplist[index].availability}</h4>
                <h2>$${sbmplist[index].price}</h2>
                <p class="modal_info_heading">Technology & Specification :</p>
                <div class="specs_cont">
                    ${sbmplist[index].specs}
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