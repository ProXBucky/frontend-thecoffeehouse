import { Buffer } from 'buffer';


export function encodeBase64Func(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
    })
}


export const decodeBase64Func = (file) => {
    let imageBase64 = ''
    if (file) {
        imageBase64 = Buffer.from(file, 'base64').toString('Binary');    //decode image from buffer to base64
    }
    return imageBase64
}


