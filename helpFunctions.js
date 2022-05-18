

const API_KEY = '';
const API_URL = `https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`;


function generateBody(image) {
  const body = {
    requests: [
      {
        "image": {
          "content": image  //base64 formaatissa
        },
        "features": [
          {
            "type": 'TEXT_DETECTION', //tekstin tunnistus "tarkkuus"
            "maxResults": 1,
          },
        ],
      },
    ],
  };
  return body;
}

async function callGoogleVisionAsync(image) {
    const body = generateBody(image); //pass in our image for the payload
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const result = await response.json();
    
   // console.log(result);
    const detectedText = result.responses[0].fullTextAnnotation.text;
    return detectedText                                                 //palautetaan tunnistettu teksti
      ? detectedText
      : { text: "This image doesn't contain any text!" };
  }


async function callGoogleTranslate(text,toLang,fromLang) {           //onko async????????????????????????????????????????????????????????????????
const encodedParams = new URLSearchParams();
encodedParams.append("q", "auto");

if (fromLang != null) {                               //mistä käännetään
  encodedParams.append("source", "fi");
}
if (toLang != null) {
  encodedParams.append("target", toLang);               //mihin käännetään
} else {
  encodedParams.append("target", "en");
}



//console.log(encodedParams)



const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com',
		'X-RapidAPI-Key': '1df9ac4279msh8185b43fd6250f7p155948jsn80c0c32594cc'
	},
	body: JSON.stringify('{"q":"'+text+'","source":"en","target":"es"}')                         // !!!!!!!!!!!!!!!!!!!
};

const response = await fetch('https://deep-translate1.p.rapidapi.com/language/translate/v2', options)
const result = await response.json();
console.log(result);
/*fetch('https://deep-translate1.p.rapidapi.com/language/translate/v2', options)
  .then(response => console.log(response))
  .then(response => response.json())
//	.then(response => console.log(response))
  //.then(response => translatedText = response)
	.catch(err => console.error(err));


  /*return translatedText                                                 //palautetaan tunnistettu teksti
  ? translatedText
  : { text: "Translate failed" }; */


















/*

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
		'X-RapidAPI-Key': '1df9ac4279msh8185b43fd6250f7p155948jsn80c0c32594cc'
	},
	body: encodedParams
};

fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
	.then(response => response.json())
	.then(response => console.log(response))
  .then(response => translatedText = response)          //ei salee toimi!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	.catch(err => console.error(err));


  return translatedText                                                 //palautetaan tunnistettu teksti
    ? translatedText
    : { text: "Translate failed" }; */
}

/*
const {Translate} = require('@google-cloud/translate').v2;
const translate = new Translate();


async function translateText(){
  let [translations] = await translate.translate(text,target);
  translations = Array.isArray(translations) ? translations : [translations];
  console.log(translations);
  translations.forEach((translation, i) => {
    console.log(translation)
  });
}
*/


  export {callGoogleVisionAsync, callGoogleTranslate};
   