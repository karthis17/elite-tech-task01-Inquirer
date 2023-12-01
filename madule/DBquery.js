import axios from "axios";




export async function addUser(user) {
    try{
        return await axios.post('http://localhost:3000/api/users/add/new', user);
    } catch (e) {
        console.log(e);
        return e;
    }

}

export async function userAuth(_user) { // user must be object

    try{
        let user = await axios.post('http://localhost:3000/api/users/auth', _user);
        return user.data;
    } catch (e) {
        console.log(e);
        return e;
    }

}

export async function insertBook(book) {
    // console.log(book);
    // return new Promise((resolve, reject) => {

    //     db.run(sql.INSERT_BOOK, [book.title, book.author, book.ISBN, book.available_copies], function(err) {
    //         if (err) {
    //             reject(err.message);
    //             return;
    //         }

    //          = this.lastID; // Get the last inserted book ID

    //         getPatron(book.patron).then((patron) => {
    //             getPatronInteractionId(bookId).then((existingPatronId) => {
    //                 if (existingPatronId === undefined || existingPatronId.patron_id !== patron.id) {

    //                     db.run(sql.INSERT_BOOK_PATRON_INTERSECTION, [bookId, patron.id], (err) => {
    //                         if (err) {
    //                             reject(err);
    //                             return;
    //                         }
    //                         resolve(true);
    //                     });
    //                 } else {
    //                     resolve(false); // If the patron ID already exists for the book, resolve as false
    //                 }
    //             }).catch((err) => {
    //                 reject(err.message);
    //             });
    //         }).catch((err) => {
    //             reject(err.message);
    //         });
    //     });
    // });

    // Making a POST request
    try {
        let bookres = await axios.post('http://localhost:3000/api/books/add/new', book);
        let patronres = await axios.get('http://localhost:3000/api/patrons/search-patron/id-or-name/' + book.patron);

        console.log(patronres.data);

        await axios.post('http://localhost:3000/api/intersections/add/new/', { book_id: bookres.data['data'], patron_id: patronres.data['id'] });
    } catch (err) {
        console.log(err);
    }

}



export async function getAllData(tableName) {
    try {
        let res = await axios.get(`http://localhost:3000/api/${tableName}/`);
        return res.data;
    } catch (err) {
        return err;
    }
}

export async function searchForBook(input) {

    try {
        let book =  await axios.get(`http://localhost:3000/api/books/searchBook/${input}`);
        return book.data;
    } catch (err) {
        return err;
    }

}

export async function getBook(title) {

    try {
        let book = await axios.get(`http://localhost:3000/api/books/searchBook/title/${title}`);
        let { data } = await axios.get(`http://localhost:3000/api/intersections/get-patronId/by-BookId/${book.data['id']}`);

        let patron = await axios.get("http://localhost:3000/api/patrons/search-patron/id-or-name/"+ data.patron_id);
        book.data['patron'] = patron.data.name;
        book.data['contact'] = patron.data.contact_details;

        return book.data;
    } catch (e) {
        console.log(e);
        return e;
    }


}

export async function updateBook(book, id) {

    book['id'] = id;
    try {
        // Making a PUT request
        return await axios.put('http://localhost:3000/api/books/update', book);
    } catch (e) {
        console.log(e);
        return e;
    }

}

export async function deleteBook(title) {

    try {

        return await axios.delete("http://localhost:3000/api/books/remove/"+title);
    } catch (err) {
        console.log(err);
        return err;
    }

}

// PATRON TABLE FUNCTIONS

export async function insertPatron(patron) {

    try{
        return await axios.post('http://localhost:3000/api/patrons/add/new', patron);
    } catch (e) {
        console.log(e);
        return e;
    }

}


export async function getPatronNameList() {

    let rows = await getAllData("patrons");
    let names = [];
    rows.forEach((row) => {
        names.push(row.name);
    })
    console.log(names);
    return names;
}





