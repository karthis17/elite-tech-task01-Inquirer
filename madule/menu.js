import { getAllData, insertPatron } from "./DBquery.js";
import { addBook } from "./add_book.js";
import { listOfBooks } from "./listOrderedBooks.js";
import { addPatron, userType } from "./questions.js";
import { searchBook } from "./search_book.js";
import {exit} from 'process';

export async function mainMenu(user) {
    try {
        const { query } = await userType(user.id === 1);

        switch (query[0]) {
            case '1':
                {
                    const books = await getAllData('books');
                    await listOfBooks(books);
                }
                break;

            case '2':
                await searchBook();
                break;

            case '3':
                await addBook();
                break;

            case '4':
                {
                    const books = await getAllData('books');
                    await listOfBooks(books,true);
                }
                break;

            case '5':
                {
                    const books = await getAllData('books');
                    await listOfBooks(books, false, true);
                }
                break;

            case '6':
                {
                    const parton = await addPatron();
                    insertPatron(parton);
                    console.log(" \n ++++insert successfully++++\n");
                    mainMenu(user);
                }
                break;
            default:
                exit(1);
        }
    } catch (error) {
        console.error('Error occurred in the main menu:', error);
    }
}
