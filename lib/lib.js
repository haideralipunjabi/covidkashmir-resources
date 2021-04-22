import { ArraysToDict, CSVToArray } from "../utils/utils";

const API_URL = process.env.API_URL
export async function fetchData(){
    const response = await fetch(API_URL);
    const data = await response.text();
    return ArraysToDict(CSVToArray(data))
}
export async function getPaths(){
    const response = await fetch(API_URL);
    const data = await response.text();
    return CSVToArray(data).slice(1,).map(array=>array.slice(-1)[0]).filter((v,i,s)=>s.indexOf(v)===i).map(path=>({params: {page: path.toLowerCase()}}))
}