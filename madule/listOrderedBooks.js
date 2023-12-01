import { deleteBook, getBook, updateBook } from "./DBquery.js";
import { user } from "../index.js";
import { mainMenu} from "./menu.js";
import { backToMenu, listAllBooks, update } from "./questions.js";
import { exit } from 'process';

export async function listOfBooks(books, isUpdate=false, isDelete=false) {
    try {
        const booksList = books.map((book) => book.title);
        const title = await listAllBooks(booksList);
        const book = await getBook(title.book);

        console.log('--------------------------');
        console.log(`Title: ${book.title}\nAuthor: ${book.author}\nISBN: ${book.ISBN}\nCopies: ${book.available_copies}\nPatron: ${book.patron}\nContact: ${book.contact}`);
        console.log('--------------------------');

        if (isDelete) {
            console.log(book.title)
            await deleteBook(book.title);
            console.log('\n +++ Delete successful. +++\n');
            await mainMenu(user);
        } else if (isUpdate) {
            const updatedBook = await update(book);
            await updateBook(updatedBook, book.id);
            console.log('\n +++ Update successful. +++ \n');
            await mainMenu(user);
        } else {
            const res = await backToMenu();

            if (res.backOrExit[0] === '1') {
                await mainMenu(user);
            } else {
                exit(0);
            }
        }
    } catch (error) {
        console.log("\n ===== Bad Request ===== \n");
        mainMenu(user);
    }
}