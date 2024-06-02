import {uploadPhoto, createUser} from "./utils.js";
export default async function asyncUploadUser(){
    try{
        const photo = await uploadPhoto();
        const user = await createUser();
    } catch (err) {
        res = { photo: null, user: null };
    }
    return res;
}