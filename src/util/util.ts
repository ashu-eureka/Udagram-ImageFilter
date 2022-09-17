import fs from 'fs'
import Jimp = require('jimp')
const axios = require('axios').default;

export async function filterImageFromURL (inputURL: string): Promise<string> {//console.log('1');
  return new Promise(async (resolve, reject) => {//console.log('2'); console.log(inputURL); 
  //const imag = await Jimp.read(inputURL); console.log(imag);
  axios({
    method: 'get',
    url: inputURL,
    responseType: 'arraybuffer'
  })
  .then(function ({data: imageBuffer}) {  
  Jimp.read(imageBuffer)
      .then(async (photo: any) => {//console.log('3');
        const outpath =
          '/tmp/filtered.' + Math.floor(Math.random() * 2000) + '.jpg'
        await photo
          .resize(256, 256) // resize
          .quality(60) // set JPEG quality
          .greyscale() // set greyscale
          .write(__dirname + outpath, () => {
            resolve(__dirname + outpath)
          })
      })
      .catch((error: any) => {console.log("00");console.log(error);
        reject(error)
      })
    })
  })
}

export async function deleteLocalFiles (files: Array<string>) {
  for (let file of files) {
    fs.unlinkSync(file)
  }
}

export const isValidImage = (imageUrl: string) => {
  return imageUrl.match(/\.(jpeg|jpg|gif|png)$/)
}

export const isValidUrl = (imageUrl: string) => {
  try {
    new URL(imageUrl)
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}
