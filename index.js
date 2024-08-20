// here we making functions for our main slide buttons to explore given location 
function slide1() {
    location.href = "premier.html"
}
function slide2() {
    location.href = "sportz.html"
}
function slide3() {
    location.href = "smart-watch.html"
}
function slide4() {
    location.href = "smart-band.html"
}
function slide5() {
    location.href = "clocks.html"
}


// here we add functions for the location of our main categories pages 

function sportz() {
    location.href = "sportz.html"

}
function premier() {
    location.href = "premier.html"
}



// making json for our new products which is in carousel 


let newproducts = [
    {
        "id": 1,
        "title": "NEW PRODUCT",
        "model": "Model-XY-ZZ-101",
        "image1": "./assets/np1.jpg",
        "image2": "./assets/np2.jpg",
        "image3": "./assets/np3.jpg",
        "image4": "./assets/np4.jpg",
        "image5": "./assets/np5.jpg",
        "availability":"(In Stock)",
        "price":300,
        "specs":"Tugor settled into a steep growth curve in the late 2010s in terms of global market adoption. Data from Statista shows that sales rose from five million units worldwide in 2014 to an estimated 173 million in 2022. Apple's market share rose from 13- to 30-percent from the second fiscal quarter of 2017 to the same period in 2021. With Samsung in the second-place spot with a 10-percent market share.Statista predicts that over 253 million smartwatches will ship worldwide by 2025.",
    },
    {
        "id": 2,
        "title": "NEW PRODUCT",
        "model": "Model-AD-45-TR",
        "image1": "./assets/np2.jpg",
        "image2": "./assets/np3.jpg",
        "image3": "./assets/np4.jpg",
        "image4": "./assets/np5.jpg",
        "image5": "./assets/np6.jpg",
        "availability":"(In Stock)",
        "price":350,
        "specs":"Smartwatches typically integrate with a users smartphone. Many of the same features and applications available on the available on the watch and can synchronize with it. Apple Watch requires that users also have an Apple iPhone.Some smartwatches have features for special uses. For example, police officers and firefighters might use a smartwatch application to receive alerts from dispatch. Pilots in the U.S. Air Force have smartwatches with special satellite navigation features.These waterproof watches provide divers with important indicators.",
    },
    {
        "id": 3,
        "title": "NEW PRODUCT",
        "model": "Model-DW-TFT-15",
        "image1": "./assets/np3.jpg",
        "image2": "./assets/np4.jpg",
        "image3": "./assets/np5.jpg",
        "image4": "./assets/np6.jpg",
        "image5": "./assets/np7.jpg",
        "availability":"(In Stock)",
        "price":399,
        "specs":"Citizen can be traced back to the early 1970s. Hamilton Pulsar was one of the first digital watches, released in 1972. This marks the point in history when computers became small enough to fit in a wristwatch. Another early digital watch was the Calcron calculator watch, which featured a nine-digit display.Another smartwatch predecessor was Seiko Data 2000, which came out in 1983. It could store two memos of 1,000 characters each and could be attached to a keyboard that came with the watch, which was used to type memos.",
        
    },
    {
        "id": 4,
        "title": "NEW PRODUCT",
        "model": "Model-AB-CD-450",
        "image1": "./assets/np4.jpg",
        "image2": "./assets/np5.jpg",
        "image3": "./assets/np6.jpg",
        "image4": "./assets/np7.jpg",
        "image5": "./assets/np8.jpg",
        "availability":"(In Stock)",
        "price":250,
        "specs":"Tissot can be traced back to the early 1970s. Hamilton Pulsar was one of the first digital watches, released in 1972. This marks the point in history when computers became small enough to fit in a wristwatch. Another early digital watch was the Calcron calculator watch, which featured a nine-digit display.Another smartwatch predecessor was Seiko Data 2000, which came out in 1983. It could store two memos of 1,000 characters each and could be attached to a keyboard that came with the watch, which was used to type memos.",
    },
    {
        "id": 5,
        "title": "NEW PRODUCT",
        "model": "Model-PR-WDE-50",
        "image1": "./assets/np5.jpg",
        "image2": "./assets/np6.jpg",
        "image3": "./assets/np7.jpg",
        "image4": "./assets/np8.jpg",
        "image5": "./assets/np9.jpg",
        "availability":"(In Stock)",
        "price":245,
        "specs":"Ikea can be traced back to the early 1970s. Hamilton Pulsar was one of the first digital watches, released in 1972. This marks the point in history when computers became small enough to fit in a wristwatch. Another early digital watch was the Calcron calculator watch, which featured a nine-digit display.Another smartwatch predecessor was Seiko Data 2000, which came out in 1983. It could store two memos of 1,000 characters each and could be attached to a keyboard that came with the watch, which was used to type memos.",
    },
    {
        "id": 6,
        "title": "NEW PRODUCT",
        "model": "Model-YT-555",
        "image1": "./assets/np6.jpg",
        "image2": "./assets/np7.jpg",
        "image3": "./assets/np8.jpg",
        "image4": "./assets/np9.jpg",
        "image5": "./assets/np1.jpg",
        "availability":"(In Stock)",
        "price":199,
        "specs":"Oris settled into a steep growth curve in the late 2010s in terms of global market adoption. Data from Statista shows that sales rose from five million units worldwide in 2014 to an estimated 173 million in 2022. Apple's market share rose from 13- to 30-percent from the second fiscal quarter of 2017 to the same period in 2021. With Samsung in the second-place spot with a 10-percent market share.Statista predicts that over 253 million smartwatches will ship worldwide by 2025.",
    },
    {
        "id": 7,
        "title": "NEW PRODUCT",
        "model": "Model-LWR-S4T-F1",
        "image1": "./assets/np7.jpg",
        "image2": "./assets/np8.jpg",
        "image3": "./assets/np9.jpg",
        "image4": "./assets/np1.jpg",
        "image5": "./assets/np2.jpg",
        "availability":"(In Stock)",
        "price":269,
        "specs":"Panerai settled into a steep growth curve in the late 2010s in terms of global market adoption. Data from Statista shows that sales rose from five million units worldwide in 2014 to an estimated 173 million in 2022. Apple's market share rose from 13- to 30-percent from the second fiscal quarter of 2017 to the same period in 2021. With Samsung in the second-place spot with a 10-percent market share.Statista predicts that over 253 million smartwatches will ship worldwide by 2025.",
    },
    {
        "id": 8,
        "title": "NEW PRODUCT",
        "model": "Model-ME-IMT-67",
        "image1": "./assets/np8.jpg",
        "image2": "./assets/np9.jpg",
        "image3": "./assets/np1.jpg",
        "image4": "./assets/np2.jpg",
        "image5": "./assets/np3.jpg",
        "availability":"(In Stock)",
        "price":450,
        "specs":"Apple settled into a steep growth curve in the late 2010s in terms of global market adoption. Data from Statista shows that sales rose from five million units worldwide in 2014 to an estimated 173 million in 2022. Apple's market share rose from 13- to 30-percent from the second fiscal quarter of 2017 to the same period in 2021. With Samsung in the second-place spot with a 10-percent market share.Statista predicts that over 253 million smartwatches will ship worldwide by 2025.",
    },
    {
        "id": 9,
        "title": "NEW PRODUCT",
        "model": "Model-YYS-ASD-50",
        "image1": "./assets/np9.jpg",
        "image2": "./assets/np1.jpg",
        "image3": "./assets/np2.jpg",
        "image4": "./assets/np3.jpg",
        "image5": "./assets/np4.jpg",
        "availability":"(In Stock)",
        "price":350,
        "specs":"Omega settled into a steep growth curve in the late 2010s in terms of global market adoption. Data from Statista shows that sales rose from five million units worldwide in 2014 to an estimated 173 million in 2022. Apple's market share rose from 13- to 30-percent from the second fiscal quarter of 2017 to the same period in 2021. With Samsung in the second-place spot with a 10-percent market share.Statista predicts that over 253 million smartwatches will ship worldwide by 2025.",
    }
]

const elenewprdt = document.querySelector("#newsliderhp");

for (let i = 0; i < newproducts.length; i += 3) {
    const carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item");
    if (i === 0) {
        carouselItem.classList.add("active");
    }

    carouselItem.innerHTML  = `
      <div class="card-wrapper">
      <div class="slideparent">
      <div class="slidecrd">
          <img src="${newproducts[i].image1}" alt="">
      </div>
      <div class="slidecrdcontent">
          <h1>${newproducts[i].title}</h1>
          <h3>${newproducts[i].model}</h3>
          <button class="newsprdslidebtn btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#exampleModal"  onclick="hpnpmt(${i})">DISCOVER</button>
      </div>
      </div>
      <div class="slideparent">
      <div class="slidecrd">
          <img src="${newproducts[i+1].image1}" alt="">
      </div>
      <div class="slidecrdcontent">
          <h1>${newproducts[i+1].title}</h1>
          <h3>${newproducts[i+1].model}</h3>
          <button class="newsprdslidebtn btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#exampleModal"  onclick="hpnpmt(${i+1})">DISCOVER</button>
      </div>
  </div>
  <div class="slideparent">
  <div class="slidecrd">
      <img src="${newproducts[i+2].image1}" alt="">
  </div>
  <div class="slidecrdcontent">
      <h1>${newproducts[i+2].title}</h1>
      <h3>${newproducts[i+2].model}</h3>
      <button class="newsprdslidebtn btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#exampleModal"  onclick="hpnpmt(${i+2})">DISCOVER</button>
  </div>
</div>
      </div>
    `;
    elenewprdt.appendChild(carouselItem);
}

let modal = document.querySelector(".modal-dialog");
function hpnpmt(i) {modal.innerHTML=
    `<div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel"><span style="color: red; font-size: 2rem;">Aura</span>Watches</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <div class="container modal_container">
            <div class="img_modal_box">
                
                <div class="small_imgaes">
                    <div class="sm_img_parts"><img onclick="chimg1()" class="tinyimg" id="tiny_imga" src=${newproducts[i].image2} alt=""></div>
                    <div class="sm_img_parts"><img onclick="chimg2()" class="tinyimg" id="tiny_imgb" src=${newproducts[i].image3} alt=""></div>
                    <div class="sm_img_parts"><img onclick="chimg3()" class="tinyimg" id="tiny_imgc" src=${newproducts[i].image4} alt=""></div>
                    <div class="sm_img_parts"><img onclick="chimg4()" class="tinyimg" id="tiny_imgd" src=${newproducts[i].image5} alt=""></div>
                </div>
                <div class="big_img_box"><img class="big_img" id="big_img" src=${newproducts[i].image1} alt=""></div>
            </div>
            <div class="infobox">
                <h1>${newproducts[i].title}</h1>
                <h3>${newproducts[i].model}</h3>
                <h4>${newproducts[i].availability}</h4>
                <h2>$${newproducts[i].price}</h2>
                <p class="modal_info_heading">Technology & Specification :</p>
                <div class="specs_cont">
                    ${newproducts[i].specs}
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




// making json to add our feature cards 
let fetproductslist = [
    {
        "id": 1,
        "cat": "PREMIER",
        "model": "CR-AZ-035",
        "oldprice": 630,
        "price": 599,
        "image1": "./assets/fet1.jpg",
        "image2": "./assets/fet2.jpg",
        "image3": "./assets/fet3.jpg",
        "image4": "./assets/fet4.jpg",
        "image5": "./assets/fet5.jpg",
        "availability":"(In Stock)",
        "specs":"Quartz watches provide low-maintenance and reliable timekeeping. Using little power, the wearer can keep accurate time for long without the need to wind the watch continually. Quartz watches are available in a wide range of styles.This Collection Of Timeless Favorites Is Designed With Simple Elegance In Mind And Crafted With The Quality You Expect From Timex. Show Off Your Personality With These Stylish Watches That Give You The Perfect Look All Day Long.",
    },
    {
        "id": 2,
        "cat": "SPORTZ",
        "model": "QP-45-A5",
        "oldprice": 301,
        "price": 280,
        "image1": "./assets/fet2.jpg",
        "image2": "./assets/fet3.jpg",
        "image3": "./assets/fet4.jpg",
        "image4": "./assets/fet5.jpg",
        "image5": "./assets/fet6.jpg",
        "availability":"(In Stock)",
        "specs":"Timex has been around since 1854. The company traces its roots from Waterbury, Connecticut, a place popular for brass. Since the very beginning, Timex has stayed true to its philosophy of making affordable clocks and watches. At around 1914, however, the company started shifting to watches with straps.A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the person's activities.",
    },
    {
        "id": 3,
        "cat": "SMART-BAND",
        "model": "SB-00-15",
        "oldprice": 109,
        "price": 99,
        "image1": "./assets/fet3.jpg",
        "image2": "./assets/fet4.jpg",
        "image3": "./assets/fet5.jpg",
        "image4": "./assets/fet6.jpg",
        "image5": "./assets/fet7.jpg",
        "availability":"(In Stock)",
        "specs":"Rolex SA is a Swiss watch designer and manufacturer based in Geneva, Switzerland.Founded in 1905 as Wilsdorf and Davis by Hans Wilsdorf and Alfred Davis in London, the company registered Rolex as the brand name of its watches in 1908.Rolex SA and its subsidiary Montres Tudor SA design, make, distribute, and service wristwatches sold under the Rolex and Tudor brands. In 2023 Rolex agreed to acquire its longtime retail partner Bucherer.The earliest watches from Wilsdorf and Davis were usually hallmarked inside the caseback.",
    },
    {
        "id": 4,
        "cat": "SPORTZ",
        "model": "SP-107-TD",
        "oldprice": 252,
        "price": 230,
        "image1": "./assets/fet4.jpg",
        "image2": "./assets/fet5.jpg",
        "image3": "./assets/fet6.jpg",
        "image4": "./assets/fet7.jpg",
        "image5": "./assets/fet8.jpg",
        "availability":"(In Stock)",
        "specs":"Oris watches provide low-maintenance and reliable timekeeping. Using little power, the wearer can keep accurate time for long without the need to wind the watch continually. Quartz watches are available in a wide range of styles.This Collection Of Timeless Favorites Is Designed With Simple Elegance In Mind And Crafted With The Quality You Expect From Timex. Show Off Your Personality With These Stylish Watches That Give You The Perfect Look All Day Long.",
    },
    {
        "id": 5,
        "cat": "SMART-BAND",
        "model": "SB-54T-BD",
        "oldprice": 105,
        "price": 99,
        "image1": "./assets/fet5.jpg",
        "image2": "./assets/fet6.jpg",
        "image3": "./assets/fet7.jpg",
        "image4": "./assets/fet8.jpg",
        "image5": "./assets/fet9.jpg",
        "availability":"(In Stock)",
        "specs":"A smartbands is a wearable computing device that closely resembles a wristwatch or other time-keeping device.n addition to telling time, many smartwatches are Bluetooth-capable. The watch becomes a wireless Bluetooth adaptor capable of extending the capabilities of the wearer's smartphone to the watch. The wearer can use the watch's interface to initiate and answer phone calls from their mobile phone, read email and text messages, get weather reports, listen to music, dictate email and text messages, and ask a digital assistant a question.",
    },
    {
        "id": 6,
        "cat": "PREMIER",
        "model": "XT-DY-007",
        "oldprice": 499,
        "price": 450,
        "image1": "./assets/fet6.jpg",
        "image2": "./assets/fet7.jpg",
        "image3": "./assets/fet8.jpg",
        "image4": "./assets/fet9.jpg",
        "image5": "./assets/fet1.jpg",
        "availability":"(In Stock)",
        "specs":"Rado watch is not merely a time-telling device; it is a symbol of precision, sophistication, and timeless elegance. From the earliest sundials to the modern smartwatches, watches have evolved over centuries, reflecting the changing needs and aspirations of humanity. They have become an integral part of our lives, not only as a practical tool but also as a fashion statement and a symbol of status. In this essay, we will delve into the history, significance, and extraordinary craftsmanship behind a watch.",
    },
    {
        "id": 7,
        "cat": "SPORTZ",
        "model": "SPT-15Q-R88",
        "oldprice": 250,
        "price": 245,
        "image1": "./assets/fet7.jpg",
        "image2": "./assets/fet8.jpg",
        "image3": "./assets/fet9.jpg",
        "image4": "./assets/fet1.jpg",
        "image5": "./assets/fet2.jpg",
        "availability":"(In Stock)",
        "specs":" Honor watch is more than just a timekeeping device. It is a piece of art, meticulously crafted by skilled artisans who pour their heart and soul into every detail. From the intricate movements to the delicate dial, every element is crafted with precision and passion. The watchmaking industry has always been synonymous with excellence and craftsmanship. Brands like Rolex, Patek Philippe, and Audemars Piguet have become synonymous with luxury and are revered for their exceptional quality.",
    },
    {
        "id": 8,
        "cat": "SMART-BAND",
        "model": "SB-TR-17",
        "oldprice": 85,
        "price": 80,
        "image1": "./assets/fet8.jpg",
        "image2": "./assets/fet9.jpg",
        "image3": "./assets/fet1.jpg",
        "image4": "./assets/fet2.jpg",
        "image5": "./assets/fet3.jpg",
        "availability":"(In Stock)",
        "specs":"Each year, smart band are on many peoples Christmas lists and there is a whole subculture of enthusiasts and collectors devoted to them. Every online watch store, including Zimson, can tell buyers the history of the watches they are purchasing and the companies which produce them, as they form an important part of the watchs image.Here are some fascinating facts on the history of luxury watches 1857  Abraham Lincoln Wears One of the First Luxury Watches.",
    },
    {
        "id": 9,
        "cat": "PREMIER",
        "model": "PRM-EXP-777",
        "oldprice": 390,
        "price": 350,
        "image1": "./assets/fet9.jpg",
        "image2": "./assets/fet1.jpg",
        "image3": "./assets/fet2.jpg",
        "image4": "./assets/fet3.jpg",
        "image5": "./assets/fet4.jpg",
        "availability":"(In Stock)",
        "specs":"Seika watches is a portable device that's designed to be worn on a wrist. Like smartphones, they use touchscreens, offer apps, and often record your heart rate and other vital signs.At the same time, advances in silicon miniaturization opened the door to other kinds of dedicated-purpose smartwatches. Companies like Garmin, for example, support smartwatches like the Fenix, which are more rugged and optimized with sensors and trackers to support back-country expeditions. ",
        
    }

]

let fetcrdrow = document.querySelector("#fet_crd_row")
for (let index = 0; index < fetproductslist.length; index++) {

    fetcrdrow.innerHTML += `
    <div class="col-lg-4 col-md-6 col-sm-12 d-flex align-items-center justify-content-evenly p-5" data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000">
    <div class="prdcardparent">
    <div class="prdcard">
      <div class="prdimg">
          <img src=${fetproductslist[index].image1} alt="">
      </div>
      <div class="prdcont">
          <h5>${fetproductslist[index].cat}</h5>
          <h3>${fetproductslist[index].model}</h3>
          <button class="prdbtn btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#exampleModal"  onclick="fpmt(${index})">DETAILS</button>
          <p><s>$${fetproductslist[index].oldprice}</s> &nbsp;$${fetproductslist[index].price}</p>
      </div>
    </div>
  </div>
            </div>
            </div>
        
    `
}

function fpmt(index) {modal.innerHTML=
    `
    <div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel"><span style="color: red; font-size: 2rem;">Aura</span>Watches</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <div class="container modal_container">
            <div class="img_modal_box">
                
                <div class="small_imgaes">
                    <div class="sm_img_parts"><img onclick="chimg1()" class="tinyimg" id="tiny_imga" src=${fetproductslist[index].image2} alt="" ></div>
                    <div class="sm_img_parts"><img onclick="chimg2()" class="tinyimg" id="tiny_imgb" src=${fetproductslist[index].image3} alt=""></div>
                    <div class="sm_img_parts"><img onclick="chimg3()" class="tinyimg" id="tiny_imgc" src=${fetproductslist[index].image4} alt=""></div>
                    <div class="sm_img_parts"><img onclick="chimg4()" class="tinyimg" id="tiny_imgd" src=${fetproductslist[index].image5} alt=""></div>
                </div>
                <div class="big_img_box"><img class="big_img" id="big_img" src=${fetproductslist[index].image1} alt=""></div>
            </div>
            <div class="infobox">
                <h1>${fetproductslist[index].cat}</h1>
                <h3>${fetproductslist[index].model}</h3>
                <h4>${fetproductslist[index].availability}</h4>
                <h2>$${fetproductslist[index].price}</h2>
                <p class="modal_info_heading">Technology & Specification :</p>
                <div class="specs_cont">
                    ${fetproductslist[index].specs}
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
    console.log()
    bigimg.src=smimg4.src
};

    // smimg1.addEventListener("click", function () {
    //     bigimg.src=smimg1.src
        
    // })



