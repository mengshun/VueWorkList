import cryptoJs from "crypto-js"

export const encryptDes = (message, key) => {
    // DES加密
    var keyHex = cryptoJs.enc.Utf8.parse(key);
    var option = { mode: cryptoJs.mode.ECB, padding: cryptoJs.pad.Pkcs7 };
    var encrypted = cryptoJs.DES.encrypt(message, keyHex, option);
    return encrypted.ciphertext.toString();
}