// all products category page work start from here 


let allprdlist = [
    {
        "id": 1,
        "title": "ROLEX",
        "model": "Model:YYS-368",
        "image1": "./assets/fet14.jpg",
        "image2": "./assets/np1.jpg",
        "image3": "./assets/np2.jpg",
        "image4": "./assets/np3.jpg",
        "image5": "./assets/np4.jpg",
        "availability":"(In Stock)",
        "price":350,
        "specs":"Rolex was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 2,
        "title": "HUAWEI",
        "model": "Model:YPS-750",
        "image1": "./assets/w11.jpg",
        "image2": "./assets/np2.jpg",
        "image3": "./assets/np3.jpg",
        "image4": "./assets/np4.jpg",
        "image5": "./assets/np5.jpg",
        "availability":"(In Stock)",
        "price":400,
        "specs":"Huawei was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 3,
        "title": "APPLE",
        "model": "Model-YET-580",
        "image1": "./assets/w12.jpg",
        "image2": "./assets/np3.jpg",
        "image3": "./assets/np4.jpg",
        "image4": "./assets/np5.jpg",
        "image5": "./assets/np6.jpg",
        "availability":"(In Stock)",
        "price":450,
        "specs":"Apple was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 4,
        "title": "GARMIN",
        "model": "Model:UQS-710",
        "image1": "./assets/fet21.jpg",
        "image2": "./assets/np4.jpg",
        "image3": "./assets/np5.jpg",
        "image4": "./assets/np6.jpg",
        "image5": "./assets/np7.jpg",
        "availability":"(In Stock)",
        "price":500,
        "specs":"Garmin was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 5,
        "title": "QUARTZ",
        "model": "Model:YLA-812",
        "image1": "./assets/np4.jpg",
        "image2": "./assets/np5.jpg",
        "image3": "./assets/np6.jpg",
        "image4": "./assets/np7.jpg",
        "image5": "./assets/np8.jpg",
        "availability":"(In Stock)",
        "price":550,
        "specs":"Quartz was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 6,
        "title": "FITBIT",
        "model": "Model:GNS-540",
        "image1": "./assets/np5.jpg",
        "image2": "./assets/np6.jpg",
        "image3": "./assets/np7.jpg",
        "image4": "./assets/np8.jpg",
        "image5": "./assets/np9.jpg",
        "availability":"(In Stock)",
        "price":600,
        "specs":"Fitbit was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 7,
        "title": "HUBLOT",
        "model": "Model:ZYS-950",
        "image1": "./assets/fet32.jpg",
        "image2": "./assets/np7.jpg",
        "image3": "./assets/np8.jpg",
        "image4": "./assets/np9.jpg",
        "image5": "./assets/np1.jpg",
        "availability":"(In Stock)",
        "price":650,
        "specs":"Hublot was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 8,
        "title": "ORIS",
        "model": "Model:GYS-550",
        "image1": "./assets/np7.jpg",
        "image2": "./assets/np8.jpg",
        "image3": "./assets/np9.jpg",
        "image4": "./assets/np1.jpg",
        "image5": "./assets/np2.jpg",
        "availability":"(In Stock)",
        "price":700,
        "specs":"Oris was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 9,
        "title": "SAMSUNG",
        "model": "Model:HJS-500",
        "image1": "./assets/np8.jpg",
        "image2": "./assets/np9.jpg",
        "image3": "./assets/np1.jpg",
        "image4": "./assets/np2.jpg",
        "image5": "./assets/np3.jpg",
        "availability":"(In Stock)",
        "price":750,
        "specs":"Samsung was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 10,
        "title": "CITIZEN",
        "model": "Model:MQS-463",
        "image1": "./assets/np9.jpg",
        "image2": "./assets/np1.jpg",
        "image3": "./assets/np2.jpg",
        "image4": "./assets/np3.jpg",
        "image5": "./assets/np4.jpg",
        "availability":"(In Stock)",
        "price":800,
        "specs":"Citizen was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 11,
        "title": "FOSSIL",
        "model": "Model:YJQ-530",
        "image1": "./assets/np1.jpg",
        "image2": "./assets/np2.jpg",
        "image3": "./assets/np3.jpg",
        "image4": "./assets/np4.jpg",
        "image5": "./assets/np5.jpg",
        "availability":"(In Stock)",
        "price":850,
        "specs":"Fossil was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 12,
        "title": "SWATCH",
        "model": "Model:JMS-520",
        "image1": "./assets/np2.jpg",
        "image2": "./assets/np3.jpg",
        "image3": "./assets/np4.jpg",
        "image4": "./assets/np5.jpg",
        "image5": "./assets/np6.jpg",
        "availability":"(In Stock)",
        "price":900,
        "specs":"Swatch was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 13,
        "title": "AMAZFIT",
        "model": "Model:YJZ-010",
        "image1": "./assets/fet10.jpg",
        "image2": "./assets/np4.jpg",
        "image3": "./assets/np5.jpg",
        "image4": "./assets/np6.jpg",
        "image5": "./assets/np7.jpg",
        "availability":"(In Stock)",
        "price":950,
        "specs":"Amazfit was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 14,
        "title": "OMEGA",
        "model": "Model:KQS-650",
        "image1": "./assets/np4.jpg",
        "image2": "./assets/np5.jpg",
        "image3": "./assets/np6.jpg",
        "image4": "./assets/np7.jpg",
        "image5": "./assets/np8.jpg",
        "availability":"(In Stock)",
        "price":1000,
        "specs":"Omega was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 15,
        "title": "TIMEX",
        "model": "Model:YUQ-590",
        "image1": "./assets/np5.jpg",
        "image2": "./assets/np6.jpg",
        "image3": "./assets/np7.jpg",
        "image4": "./assets/np8.jpg",
        "image5": "./assets/np9.jpg",
        "availability":"(In Stock)",
        "price":1050,
        "specs":"Timex was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 16,
        "title": "HONOR",
        "model": "Model:YER-650",
        "image1": "./assets/b9.jpg",
        "image2": "./assets/np6.jpg",
        "image3": "./assets/np7.jpg",
        "image4": "./assets/np8.jpg",
        "image5": "./assets/np9.jpg",
        "availability":"(In Stock)",
        "price":1100,
        "specs":"Honor was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 17,
        "title": "LENOVO",
        "model": "Model:NYS-350",
        "image1": "./assets/b3.jpg",
        "image2": "./assets/np6.jpg",
        "image3": "./assets/np7.jpg",
        "image4": "./assets/np8.jpg",
        "image5": "./assets/np9.jpg",
        "availability":"(In Stock)",
        "price":1150,
        "specs":"Lenovo was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 18,
        "title": "GOQII",
        "model": "Model:IZS-750",
        "image1": "./assets/b8.jpg",
        "image2": "./assets/np6.jpg",
        "image3": "./assets/np7.jpg",
        "image4": "./assets/np8.jpg",
        "image5": "./assets/np9.jpg",
        "availability":"(In Stock)",
        "price":1200,
        "specs":"Goqii was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 19,
        "title": "FASTRACK",
        "model": "Model:YKL-340",
        "image1": "./assets/fet13.jpg",
        "image2": "./assets/np6.jpg",
        "image3": "./assets/np7.jpg",
        "image4": "./assets/np8.jpg",
        "image5": "./assets/np9.jpg",
        "availability":"(In Stock)",
        "price":1250,
        "specs":"Fastrack was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 20,
        "title": "FITBIT",
        "model": "Model:OAS-650",
        "image1": "./assets/fet14.jpg",
        "image2": "./assets/np6.jpg",
        "image3": "./assets/np7.jpg",
        "image4": "./assets/np8.jpg",
        "image5": "./assets/np9.jpg",
        "availability":"(In Stock)",
        "price":1300,
        "specs":"Fitbit was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 21,
        "title": "CARTIER",
        "model": "Model:PQS-750",
        "image1": "./assets/fet15.jpg",
        "image2": "./assets/np1.jpg",
        "image3": "./assets/np2.jpg",
        "image4": "./assets/np3.jpg",
        "image5": "./assets/np4.jpg",
        "availability":"(In Stock)",
        "price":1350,
        "specs":"Cartier was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 22,
        "title": "ZENITH",
        "model": "Model:LAC-950",
        "image1": "./assets/fet16.jpg",
        "image2": "./assets/np2.jpg",
        "image3": "./assets/np3.jpg",
        "image4": "./assets/np4.jpg",
        "image5": "./assets/np5.jpg",
        "availability":"(In Stock)",
        "price":1400,
        "specs":"Zenith was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 23,
        "title": "G-SHOCK",
        "model": "Model:YRV-450",
        "image1": "./assets/fet17.jpg",
        "image2": "./assets/np3.jpg",
        "image3": "./assets/np4.jpg",
        "image4": "./assets/np5.jpg",
        "image5": "./assets/np6.jpg",
        "availability":"(In Stock)",
        "price":1450,
        "specs":"G-shock was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 24,
        "title": "PANERAI",
        "model": "Model:WES-350",
        "image1": "./assets/fet18.jpg",
        "image2": "./assets/np4.jpg",
        "image3": "./assets/np5.jpg",
        "image4": "./assets/np6.jpg",
        "image5": "./assets/np7.jpg",
        "availability":"(In Stock)",
        "price":1500,
        "specs":"Panerai was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 25,
        "title": "BULGARI",
        "model": "Model:GCS-750",
        "image1": "./assets/sp2.jpeg",
        "image2": "./assets/np5.jpg",
        "image3": "./assets/np6.jpg",
        "image4": "./assets/np7.jpg",
        "image5": "./assets/np8.jpg",
        "availability":"(In Stock)",
        "price":1550,
        "specs":"Bulgari was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 26,
        "title": "PIAGET",
        "model": "Model:YGQ-723",
        "image1": "./assets/c1.jpg",
        "image2": "./assets/np6.jpg",
        "image3": "./assets/np7.jpg",
        "image4": "./assets/np8.jpg",
        "image5": "./assets/np9.jpg",
        "availability":"(In Stock)",
        "price":1600,
        "specs":"Piaget was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 27,
        "title": "CHOPARD",
        "model": "Model:ULS-050",
        "image1": "./assets/np6.jpg",
        "image2": "./assets/np7.jpg",
        "image3": "./assets/np8.jpg",
        "image4": "./assets/np9.jpg",
        "image5": "./assets/np1.jpg",
        "availability":"(In Stock)",
        "price":1650,
        "specs":"Chopard was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 28,
        "title": "DOXA",
        "model": "Model:YFV-930",
        "image1": "./assets/np7.jpg",
        "image2": "./assets/np8.jpg",
        "image3": "./assets/np9.jpg",
        "image4": "./assets/np1.jpg",
        "image5": "./assets/np2.jpg",
        "availability":"(In Stock)",
        "price":1700,
        "specs":"Doxa was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 29,
        "title": "CREDOR",
        "model": "Model:LXS-150",
        "image1": "./assets/np8.jpg",
        "image2": "./assets/np9.jpg",
        "image3": "./assets/np1.jpg",
        "image4": "./assets/np2.jpg",
        "image5": "./assets/np3.jpg",
        "availability":"(In Stock)",
        "price":1750,
        "specs":"Credor was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 30,
        "title": "ANGELUS",
        "model": "Model:YWR-750",
        "image1": "./assets/np9.jpg",
        "image2": "./assets/np1.jpg",
        "image3": "./assets/np2.jpg",
        "image4": "./assets/np3.jpg",
        "image5": "./assets/np4.jpg",
        "availability":"(In Stock)",
        "price":1800,
        "specs":"Angelus was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 31,
        "title": "WOLF",
        "model": "Model:IKS-623",
        "image1": "./assets/np1.jpg",
        "image2": "./assets/np2.jpg",
        "image3": "./assets/np3.jpg",
        "image4": "./assets/np4.jpg",
        "image5": "./assets/np5.jpg",
        "availability":"(In Stock)",
        "price":1850,
        "specs":"Wolf was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 32,
        "title": "FOSSIL",
        "model": "Model:JQS-509",
        "image1": "./assets/np2.jpg",
        "image2": "./assets/np3.jpg",
        "image3": "./assets/np4.jpg",
        "image4": "./assets/np5.jpg",
        "image5": "./assets/np6.jpg",
        "availability":"(In Stock)",
        "price":1900,
        "specs":"Fossil was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 33,
        "title": "TAG HEUER",
        "model": "Model:LAS-890",
        "image1": "./assets/np3.jpg",
        "image2": "./assets/np4.jpg",
        "image3": "./assets/np5.jpg",
        "image4": "./assets/np6.jpg",
        "image5": "./assets/np7.jpg",
        "availability":"(In Stock)",
        "price":2000,
        "specs":"Tag heuer was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 34,
        "title": "FLORN",
        "model": "Model:KMS-621",
        "image1": "./assets/np4.jpg",
        "image2": "./assets/np5.jpg",
        "image3": "./assets/np6.jpg",
        "image4": "./assets/np7.jpg",
        "image5": "./assets/np8.jpg",
        "availability":"(In Stock)",
        "price":2100,
        "specs":"Florn was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 35,
        "title": "METAMEC",
        "model": "Model:YPL-778",
        "image1": "./assets/np5.jpg",
        "image2": "./assets/np6.jpg",
        "image3": "./assets/np7.jpg",
        "image4": "./assets/np8.jpg",
        "image5": "./assets/np9.jpg",
        "availability":"(In Stock)",
        "price":2150,
        "specs":"Metamac was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 36,
        "title": "TELECHRON",
        "model": "Model:OPW-657",
        "image1": "./assets/c1.jpg",
        "image2": "./assets/np6.jpg",
        "image3": "./assets/np7.jpg",
        "image4": "./assets/np8.jpg",
        "image5": "./assets/np9.jpg",
        "availability":"(In Stock)",
        "price":2200,
        "specs":"Telechron was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 37,
        "title": "G-SHOCK",
        "model": "Model-YYS-ASD-50",
        "image1": "./assets/c12.jpg",
        "image2": "./assets/np6.jpg",
        "image3": "./assets/np7.jpg",
        "image4": "./assets/np8.jpg",
        "image5": "./assets/np9.jpg",
        "availability":"(In Stock)",
        "price":2250,
        "specs":"G-shock was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 38,
        "title": "AJANTA",
        "model": "Model:WTK-982",
        "image1": "./assets/c13.jpg",
        "image2": "./assets/np6.jpg",
        "image3": "./assets/np7.jpg",
        "image4": "./assets/np8.jpg",
        "image5": "./assets/np9.jpg",
        "availability":"(In Stock)",
        "price":2300,
        "specs":"Ajanta was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 39,
        "title": "STAR WORK",
        "model": "Model:OWQ-334",
        "image1": "./assets/c17.jpg",
        "image2": "./assets/np6.jpg",
        "image3": "./assets/np7.jpg",
        "image4": "./assets/np8.jpg",
        "image5": "./assets/np9.jpg",
        "availability":"(In Stock)",
        "price":2350,
        "specs":"Star work was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 40,
        "title": "CITIZEN",
        "model": "Model:PQC-947",
        "image1": "./assets/p10.jpg",
        "image2": "./assets/np6.jpg",
        "image3": "./assets/np7.jpg",
        "image4": "./assets/np8.jpg",
        "image5": "./assets/np9.jpg",
        "availability":"(In Stock)",
        "price":2400,
        "specs":"Citizen was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 41,
        "title": "SUUNTO",
        "model": "Model:KSD-78",
        "image1": "./assets/sp1.jpg",
        "image2": "./assets/np1.jpg",
        "image3": "./assets/np2.jpg",
        "image4": "./assets/np3.jpg",
        "image5": "./assets/np4.jpg",
        "availability":"(In Stock)",
        "price":2450,
        "specs":"Suunto was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 42,
        "title": "SKAGEN",
        "model": "Model:PZS-743",
        "image1": "./assets/np1.jpg",
        "image2": "./assets/np2.jpg",
        "image3": "./assets/np3.jpg",
        "image4": "./assets/np4.jpg",
        "image5": "./assets/np5.jpg",
        "availability":"(In Stock)",
        "price":2500,
        "specs":"Skagen was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 43,
        "title": "MOVADO",
        "model": "Model:YEM-876",
        "image1": "./assets/np2.jpg",
        "image2": "./assets/np3.jpg",
        "image3": "./assets/np4.jpg",
        "image4": "./assets/np5.jpg",
        "image5": "./assets/np6.jpg",
        "availability":"(In Stock)",
        "price":2550,
        "specs":"Movado was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 44,
        "title": "OMEGA",
        "model": "Model:YJA-73",
        "image1": "./assets/np3.jpg",
        "image2": "./assets/np4.jpg",
        "image3": "./assets/np5.jpg",
        "image4": "./assets/np6.jpg",
        "image5": "./assets/np7.jpg",
        "availability":"(In Stock)",
        "price":2600,
        "specs":"Omega was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 45,
        "title": "HAYLOU",
        "model": "Model:YLE-864",
        "image1": "./assets/np4.jpg",
        "image2": "./assets/np5.jpg",
        "image3": "./assets/np6.jpg",
        "image4": "./assets/np7.jpg",
        "image5": "./assets/np8.jpg",
        "availability":"(In Stock)",
        "price":2650,
        "specs":"Haylou was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 46,
        "title": "Alpina",
        "model": "Model:YLR-345",
        "image1": "./assets/np5.jpg",
        "image2": "./assets/np6.jpg",
        "image3": "./assets/np7.jpg",
        "image4": "./assets/np8.jpg",
        "image5": "./assets/np9.jpg",
        "availability":"(In Stock)",
        "price":2700,
        "specs":"Alpina was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 47,
        "title": "HUBLOT",
        "model": "Model:TYB-843",
        "image1": "./assets/np6.jpg",
        "image2": "./assets/np7.jpg",
        "image3": "./assets/np8.jpg",
        "image4": "./assets/np9.jpg",
        "image5": "./assets/np1.jpg",
        "availability":"(In Stock)",
        "price":2750,
        "specs":"Hublot was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 48,
        "title": "BERING",
        "model": "Model:IEW-734",
        "image1": "./assets/np7.jpg",
        "image2": "./assets/np8.jpg",
        "image3": "./assets/np9.jpg",
        "image4": "./assets/np1.jpg",
        "image5": "./assets/np2.jpg",
        "availability":"(In Stock)",
        "price":2800,
        "specs":"Bering was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 49,
        "title": "ONE PLUS",
        "model": "Model:YQP-874",
        "image1": "./assets/np8.jpg",
        "image2": "./assets/np9.jpg",
        "image3": "./assets/np1.jpg",
        "image4": "./assets/np2.jpg",
        "image5": "./assets/np3.jpg",
        "availability":"(In Stock)",
        "price":2850,
        "specs":"One plus was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 50,
        "title": "BLANCPAIN",
        "model": "Model:POE-366",
        "image1": "./assets/np9.jpg",
        "image2": "./assets/np1.jpg",
        "image3": "./assets/np2.jpg",
        "image4": "./assets/np3.jpg",
        "image5": "./assets/np4.jpg",
        "availability":"(In Stock)",
        "price":2900,
        "specs":"Blancpain was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 51,
        "title": "LONGINES",
        "model": "Model:OIR-673",
        "image1": "./assets/np1.jpg",
        "image2": "./assets/np2.jpg",
        "image3": "./assets/np3.jpg",
        "image4": "./assets/np4.jpg",
        "image5": "./assets/np5.jpg",
        "availability":"(In Stock)",
        "price":3000,
        "specs":"Longines was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 52,
        "title": "TUDOR",
        "model": "Model:POW-763",
        "image1": "./assets/np2.jpg",
        "image2": "./assets/np3.jpg",
        "image3": "./assets/np4.jpg",
        "image4": "./assets/np5.jpg",
        "image5": "./assets/np6.jpg",
        "availability":"(In Stock)",
        "price":3100,
        "specs":"Tudor was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 53,
        "title": "GUCCI",
        "model": "Model:TRE-468",
        "image1": "./assets/np3.jpg",
        "image2": "./assets/np4.jpg",
        "image3": "./assets/np5.jpg",
        "image4": "./assets/np6.jpg",
        "image5": "./assets/np7.jpg",
        "availability":"(In Stock)",
        "price":3200,
        "specs":"Gucci was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 54,
        "title": "BREGUET",
        "model": "Model:TRP-367",
        "image1": "./assets/np4.jpg",
        "image2": "./assets/np5.jpg",
        "image3": "./assets/np6.jpg",
        "image4": "./assets/np7.jpg",
        "image5": "./assets/np8.jpg",
        "availability":"(In Stock)",
        "price":3250,
        "specs":"Breguet was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 55,
        "title": "CARL-F",
        "model": "Model:YGS-452",
        "image1": "./assets/fet20.jpg",
        "image2": "./assets/np6.jpg",
        "image3": "./assets/np7.jpg",
        "image4": "./assets/np8.jpg",
        "image5": "./assets/np9.jpg",
        "availability":"(In Stock)",
        "price":3300,
        "specs":"Carl-f was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 56,
        "title": "PATEK",
        "model": "Model:PSJ-384",
        "image1": "./assets/fet22.jpg",
        "image2": "./assets/np6.jpg",
        "image3": "./assets/np7.jpg",
        "image4": "./assets/np8.jpg",
        "image5": "./assets/np9.jpg",
        "availability":"(In Stock)",
        "price":3350,
        "specs":"Patek was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 57,
        "title": "JAEGER",
        "model": "Model:YUE-293",
        "image1": "./assets/fet23.jpg",
        "image2": "./assets/np6.jpg",
        "image3": "./assets/np7.jpg",
        "image4": "./assets/np8.jpg",
        "image5": "./assets/np9.jpg",
        "availability":"(In Stock)",
        "price":3400,
        "specs":"Jaeger was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 58,
        "title": "DIESEL",
        "model": "Model:LES-864",
        "image1": "./assets/fet24.jpg",
        "image2": "./assets/np6.jpg",
        "image3": "./assets/np7.jpg",
        "image4": "./assets/np8.jpg",
        "image5": "./assets/np9.jpg",
        "availability":"(In Stock)",
        "price":3450,
        "specs":"Diesel was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 59,
        "title": "MOTOROLA",
        "model": "Model:IWQ-923",
        "image1": "./assets/np5.jpg",
        "image2": "./assets/np6.jpg",
        "image3": "./assets/np7.jpg",
        "image4": "./assets/np8.jpg",
        "image5": "./assets/np9.jpg",
        "availability":"(In Stock)",
        "price":3500,
        "specs":"Motorola was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 60,
        "title": "BOAT",
        "model": "Model:UWN-954",
        "image1": "./assets/np5.jpg",
        "image2": "./assets/np6.jpg",
        "image3": "./assets/np7.jpg",
        "image4": "./assets/np8.jpg",
        "image5": "./assets/np9.jpg",
        "availability":"(In Stock)",
        "price":3550,
        "specs":"Boat was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 61,
        "title": "SAMSUNG",
        "model": "Model:OPQ-540",
        "image1": "./assets/sp1.jpg",
        "image2": "./assets/np1.jpg",
        "image3": "./assets/np2.jpg",
        "image4": "./assets/np3.jpg",
        "image5": "./assets/np4.jpg",
        "availability":"(In Stock)",
        "price":3600,
        "specs":"Samsung was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 62,
        "title": "PEBBLE",
        "model": "Model:KHA-854",
        "image1": "./assets/np1.jpg",
        "image2": "./assets/np2.jpg",
        "image3": "./assets/np3.jpg",
        "image4": "./assets/np4.jpg",
        "image5": "./assets/np5.jpg",
        "availability":"(In Stock)",
        "price":3650,
        "specs":"Pebble was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 63,
        "title": "MAXIMA",
        "model": "Model:LPA-843",
        "image1": "./assets/np2.jpg",
        "image2": "./assets/np3.jpg",
        "image3": "./assets/np4.jpg",
        "image4": "./assets/np5.jpg",
        "image5": "./assets/np6.jpg",
        "availability":"(In Stock)",
        "price":3700,
        "specs":"Maxima was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 64,
        "title": "MINIX",
        "model": "Model-PWM-710",
        "image1": "./assets/np3.jpg",
        "image2": "./assets/np4.jpg",
        "image3": "./assets/np5.jpg",
        "image4": "./assets/np6.jpg",
        "image5": "./assets/np7.jpg",
        "availability":"(In Stock)",
        "price":3750,
        "specs":"Minix was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 65,
        "title": "RIZO",
        "model": "Model:TQP-912",
        "image1": "./assets/np4.jpg",
        "image2": "./assets/np5.jpg",
        "image3": "./assets/np6.jpg",
        "image4": "./assets/np7.jpg",
        "image5": "./assets/np8.jpg",
        "availability":"(In Stock)",
        "price":3800,
        "specs":"Rizo was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 66,
        "title": "LG",
        "model": "Model:PQB-612",
        "image1": "./assets/np5.jpg",
        "image2": "./assets/np6.jpg",
        "image3": "./assets/np7.jpg",
        "image4": "./assets/np8.jpg",
        "image5": "./assets/np9.jpg",
        "availability":"(In Stock)",
        "price":3850,
        "specs":"Lg was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 67,
        "title": "INTEX",
        "model": "Model:LWQ-721",
        "image1": "./assets/np6.jpg",
        "image2": "./assets/np7.jpg",
        "image3": "./assets/np8.jpg",
        "image4": "./assets/np9.jpg",
        "image5": "./assets/np1.jpg",
        "availability":"(In Stock)",
        "price":3900,
        "specs":"Intex was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 68,
        "title": "SONATA",
        "model": "Model:IWN-632",
        "image1": "./assets/np7.jpg",
        "image2": "./assets/np8.jpg",
        "image3": "./assets/np9.jpg",
        "image4": "./assets/np1.jpg",
        "image5": "./assets/np2.jpg",
        "availability":"(In Stock)",
        "price":3950,
        "specs":"Sonata was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 69,
        "title": "HAMILTON",
        "model": "Model:LQZ-842",
        "image1": "./assets/np8.jpg",
        "image2": "./assets/np9.jpg",
        "image3": "./assets/np1.jpg",
        "image4": "./assets/np2.jpg",
        "image5": "./assets/np3.jpg",
        "availability":"(In Stock)",
        "price":4000,
        "specs":"Hamilton was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 70,
        "title": "LOTUS",
        "model": "Model:OAL-923",
        "image1": "./assets/np9.jpg",
        "image2": "./assets/np1.jpg",
        "image3": "./assets/np2.jpg",
        "image4": "./assets/np3.jpg",
        "image5": "./assets/np4.jpg",
        "availability":"(In Stock)",
        "price":4150,
        "specs":"Lotus was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 71,
        "title": "NIXON",
        "model": "Model:BAA-952",
        "image1": "./assets/np1.jpg",
        "image2": "./assets/np2.jpg",
        "image3": "./assets/np3.jpg",
        "image4": "./assets/np4.jpg",
        "image5": "./assets/np5.jpg",
        "availability":"(In Stock)",
        "price":4100,
        "specs":"Nixon was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 72,
        "title": "TIMBERLAND",
        "model": "Model:ZAW-934",
        "image1": "./assets/np2.jpg",
        "image2": "./assets/np3.jpg",
        "image3": "./assets/np4.jpg",
        "image4": "./assets/np5.jpg",
        "image5": "./assets/np6.jpg",
        "availability":"(In Stock)",
        "price":4150,
        "specs":"Timberland was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 73,
        "title": "SEKONDA",
        "model": "Model:PQA-739",
        "image1": "./assets/np3.jpg",
        "image2": "./assets/np4.jpg",
        "image3": "./assets/np5.jpg",
        "image4": "./assets/np6.jpg",
        "image5": "./assets/np7.jpg",
        "availability":"(In Stock)",
        "price":4200,
        "specs":"Sekonda was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 74,
        "title": "OBAKU",
        "model": "Model:QMD-823",
        "image1": "./assets/np4.jpg",
        "image2": "./assets/np5.jpg",
        "image3": "./assets/np6.jpg",
        "image4": "./assets/np7.jpg",
        "image5": "./assets/np8.jpg",
        "availability":"(In Stock)",
        "price":4250,
        "specs":"Obaku was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    },
    {
        "id": 75,
        "title": "SONY",
        "model": "Model:OPQ-912",
        "image1": "./assets/np5.jpg",
        "image2": "./assets/np6.jpg",
        "image3": "./assets/np7.jpg",
        "image4": "./assets/np8.jpg",
        "image5": "./assets/np9.jpg",
        "availability":"(In Stock)",
        "price":4300,
        "specs":"Sony was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering.",
    }
    
]


        let allprdcrDrow = document.querySelector("#allprd")
        for (let i = 0; i < allprdlist.length; i++) {
            allprdcrDrow.innerHTML += `
    <div class="col-lg-4 col-md-6 col-sm-12 d-flex align-items-center justify-content-evenly p-5" data-aos="flip-left">
                    <div class="parent_sp_crd">
                        <div class="child_sp_crd">
                            <img src=${allprdlist[i].image1} alt="">
                            <div class="sp_cont">
                                <h1>${allprdlist[i].title}</h1>
                                <h3>${allprdlist[i].model}</h3>
                                <p><span class="price_sp">$${allprdlist[i].price}</span> <i onclick="changeColor(this)" class="fa-solid fa-heart heart" id="heart_icon"></i></p>
                                
                                <button class="btn btn-outline-light sp_crd_btn" data-bs-toggle="modal" data-bs-target="#exampleModal"  onclick="apmt(${i})">DETAILS</button>
                            </div>
                        </div>
                    </div>
                </div>
    `
        }


        let modalap = document.querySelector("#apmodal");
function apmt(i) {modalap.innerHTML=
    `<div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel"><span style="color: red; font-size: 2rem;">Aura</span>Watches</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <div class="container modal_container">
            <div class="img_modal_box">
                
                <div class="small_imgaes">
                    <div class="sm_img_parts"><img onclick="chimg1()" class="tinyimg" id="tiny_imga" src=${allprdlist[i].image2} alt="" ></div>
                    <div class="sm_img_parts"><img onclick="chimg2()" class="tinyimg" id="tiny_imgb" src=${allprdlist[i].image3} alt=""></div>
                    <div class="sm_img_parts"><img onclick="chimg3()" class="tinyimg" id="tiny_imgc" src=${allprdlist[i].image4} alt=""></div>
                    <div class="sm_img_parts"><img onclick="chimg4()" class="tinyimg" id="tiny_imgd" src=${allprdlist[i].image5} alt=""></div>
                </div>
                <div class="big_img_box"><img class="big_img" id="big_img" src=${allprdlist[i].image1} alt=""></div>
            </div>
            <div class="infobox">
                <h1>${allprdlist[i].title}</h1>
                <h3>${allprdlist[i].model}</h3>
                <h4>${allprdlist[i].availability}</h4>
                <h2>$${allprdlist[i].price}</h2>
                <p class="modal_info_heading">Technology & Specification :</p>
                <div class="specs_cont">
                    ${allprdlist[i].specs}
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
let allpmplist = [
    {
        "id": 1,
        "title": "PREMIER",
        "model": "CR-AZ-035",
        "image1": "./assets/fet9.jpg",
        "image2": "./assets/np1.jpg",
        "image3": "./assets/np2.jpg",
        "image4": "./assets/np3.jpg",
        "image5": "./assets/np4.jpg",
        "availability":"(In Stock)",
        "oldprice": 630,
        "price": 599,
        "specs":"Luxury watch was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering."
    },
    {
        "id": 2,
        "title": "SMART BAND",
        "model": "CR-AZ-035",
        "image1": "./assets/fet8.jpg",
        "image2": "./assets/np1.jpg",
        "image3": "./assets/np2.jpg",
        "image4": "./assets/np3.jpg",
        "image5": "./assets/np4.jpg",
        "availability":"(In Stock)",
        "oldprice": 630,
        "price": 599,
        "specs":"Rolex was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering."
    },
    {
        "id": 3,
        "title": "SPORTZ",
        "model": "CR-AZ-035",
        "image1": "./assets/fet7.jpg",
        "image2": "./assets/np1.jpg",
        "image3": "./assets/np2.jpg",
        "image4": "./assets/np3.jpg",
        "image5": "./assets/np4.jpg",
        "availability":"(In Stock)",
        "oldprice": 630,
        "price": 599,
        "specs":"Sportz was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering."
    },
    {
        "id": 4,
        "title": "PREMIER",
        "model": "CR-AZ-035",
        "image1": "./assets/fet6.jpg",
        "image2": "./assets/np1.jpg",
        "image3": "./assets/np2.jpg",
        "image4": "./assets/np3.jpg",
        "image5": "./assets/np4.jpg",
        "availability":"(In Stock)",
        "oldprice": 630,
        "price": 599,
        "specs":"Rado was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering."
    },
    {
        "id": 5,
        "title": "SMART WATCH",
        "model": "CR-AZ-035",
        "image1": "./assets/fet5.jpg",
        "image2": "./assets/np1.jpg",
        "image3": "./assets/np2.jpg",
        "image4": "./assets/np3.jpg",
        "image5": "./assets/np4.jpg",
        "availability":"(In Stock)",
        "oldprice": 630,
        "price": 599,
        "specs":"Casio was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering."
    },
    {
        "id": 6,
        "title": "SPORTZ",
        "model": "CR-AZ-035",
        "image1": "./assets/fet4.jpg",
        "image2": "./assets/np1.jpg",
        "image3": "./assets/np2.jpg",
        "image4": "./assets/np3.jpg",
        "image5": "./assets/np4.jpg",
        "availability":"(In Stock)",
        "oldprice": 630,
        "price": 599,
        "specs":"Gucci was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering."
    },
    {
        "id": 7,
        "title": "SMART BAND",
        "model": "CR-AZ-035",
        "image1": "./assets/fet3.jpg",
        "image2": "./assets/np1.jpg",
        "image3": "./assets/np2.jpg",
        "image4": "./assets/np3.jpg",
        "image5": "./assets/np4.jpg",
        "availability":"(In Stock)",
        "oldprice": 630,
        "price": 599,
        "specs":"Citizen was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering."
    },
    {
        "id": 8,
        "title": "PREMIER",
        "model": "CR-AZ-035",
        "image1": "./assets/fet2.jpg",
        "image2": "./assets/np1.jpg",
        "image3": "./assets/np2.jpg",
        "image4": "./assets/np3.jpg",
        "image5": "./assets/np4.jpg",
        "availability":"(In Stock)",
        "oldprice": 630,
        "price": 599,
        "specs":"Apple was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering."
    },
    {
        "id": 9,
        "title": "SPORTZ",
        "model": "CR-AZ-035",
        "image1": "./assets/fet1.jpg",
        "image2": "./assets/np1.jpg",
        "image3": "./assets/np2.jpg",
        "image4": "./assets/np3.jpg",
        "image5": "./assets/np4.jpg",
        "availability":"(In Stock)",
        "oldprice": 630,
        "price": 599,
        "specs":"Honor was founded in 1921 by Guccio Gucci in Florence, Tuscany. Under the direction of Aldo Gucci (son of Guccio), Gucci became a worldwide-known brand, an icon of the Italian dolce vita period. Following family feuds during the 1980s, the Gucci family was entirely ousted from the capital of the company by 1993. After this crisis, the brand was revived and in 1999 Gucci became a subsidiary of the French conglomerate PPR, which later renamed itself to Kering."
    }

]



let spmpcrdrow = document.querySelector("#ap_mp_crd_row")
for (let i = 0; i < allpmplist.length; i++) {

    spmpcrdrow.innerHTML += `
    <div class="col-lg-4 col-md-6 col-sm-12 d-flex align-items-center justify-content-evenly p-5" data-aos="flip-down">
    <div class="prdcardparent">
    <div class="prdcard">
      <div class="prdimg">
          <img src=${allpmplist[i].image1} alt="">
      </div>
      <div class="prdcont">
          <h5>${allpmplist[i].title}</h5>
          <h3>${allpmplist[i].model}</h3>
          <button class="prdbtn btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#exampleModal"  onclick="apmpmt(${i})">DETAILS</button>
          <p><s>$${allpmplist[i].oldprice}</s> &nbsp;$${allpmplist[i].price}</p>
      </div>
    </div>
  </div>
            </div>
            </div>
        
    `
}



function apmpmt(i) {modalap.innerHTML=
    `<div class="modal-content">
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel"><span style="color: red; font-size: 2rem;">Aura</span>Watches</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
        <div class="container modal_container">
            <div class="img_modal_box">
                
                <div class="small_imgaes">
                    <div class="sm_img_parts"><img onclick="chimg1()" class="tinyimg" id="tiny_imga" src=${allpmplist[i].image2} alt="" ></div>
                    <div class="sm_img_parts"><img onclick="chimg2()" class="tinyimg" id="tiny_imgb" src=${allpmplist[i].image3} alt=""></div>
                    <div class="sm_img_parts"><img onclick="chimg3()" class="tinyimg" id="tiny_imgc" src=${allpmplist[i].image4} alt=""></div>
                    <div class="sm_img_parts"><img onclick="chimg4()" class="tinyimg" id="tiny_imgd" src=${allpmplist[i].image5} alt=""></div>
                </div>
                <div class="big_img_box"><img class="big_img" id="big_img" src=${allpmplist[i].image1} alt=""></div>
            </div>
            <div class="infobox">
                <h1>${allpmplist[i].title}</h1>
                <h3>${allpmplist[i].model}</h3>
                <h4>${allpmplist[i].availability}</h4>
                <h2>$${allpmplist[i].price}</h2>
                <p class="modal_info_heading">Technology & Specification :</p>
                <div class="specs_cont">
                    ${allpmplist[i].specs}
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