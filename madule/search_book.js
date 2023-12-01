import { user } from "../index.js";
import { searchForBook } from "./DBquery.js";
import { listOfBooks } from "./listOrderedBooks.js";
import { mainMenu } from "./menu.js";
import { search } from "./questions.js";

export async function searchBook() {
    try {
        const res = await search();
        const book = await searchForBook(res.search);
        await listOfBooks(book);
    } catch (error) {
        mainMenu(user);
    }
}