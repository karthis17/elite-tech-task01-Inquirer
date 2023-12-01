import { user } from "../index.js";
import { getPatronNameList, insertBook } from "./DBquery.js";
import { mainMenu } from "./menu.js";
import { add } from "./questions.js";

export async function addBook() {
    try {
        const patron = await getPatronNameList();
        const book = await add(patron);
        await insertBook(book);
        console.log('\n +++ Insert successful. +++ \n');
        await mainMenu(user);
    } catch (error) {
        console.error('Error occurred during book addition:', error);
    }
}