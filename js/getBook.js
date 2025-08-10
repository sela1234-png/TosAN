import { getData } from "../store/fetchData.js";

const book = await getData("books")

console.log(book)