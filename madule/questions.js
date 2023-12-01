import inquirer from "inquirer";

export var admin_flag = false;

// Login page

export async function logState(){

    return await inquirer.prompt([
        {
            type: "list",
            name: "logstate",
            message: "Select a admin if You are admin othterwise (click enter or select endUser) :",
            choices: ["signin", "newUser"],
            default: 1
        }
    ])
}

export async function Signin(){
    return await inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "Enter Your username :"
        },
        {
            type: "input",
            name: "password",
            message: "Enter your password :"
        }
    ])
}

export async function Signup(){
    return await inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "Enter username :"
        },
        {
            type: "input",
            name: "password",
            message: "Enter password :"
        }
    ])
}

// main menu

export async function userType(admin){
    // it returns main menu list dinamically based on user type
    if(admin) admin_flag = true;
    return await inquirer.prompt([
        {
            type: "list",
            name: "query",
            message: "Select What you looking for ",
            choices: ["1.List all the books", "2.Search books", ...admin?['3.add book', '4.update book', '5.delete book', '6.add patron']:[], "Exit"]
        }
    ]);
}

export async function listAllBooks(books){
    return await inquirer.prompt([
        {
            type: "list",
            name: "book",
            message: "Select a book to see book details",
            choices: [...books]
        }
    ])
}
// module.exports = inquirer;

export async function backToMenu(){
    return await inquirer.prompt([
        {
            type: "list",
            name: "backOrExit",
            message: "select",
            choices: ["1.back", "2.exit"]
        }
    ]);
}

export async function search(){
    return await inquirer.prompt([
        {
            type: "input",
            name: "search",
            message: "Enter book name or ISBN number or author name"
        }
    ]);
}

export async function update(book){
    // this function returns promt input in object
    return await inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Enter book title : (press enter to keep old title)",
            default: book.title
        },
        {
            type:"input",
            name: "author",
            message: "Enter book author : (press enter same author name)",
            default: book.author
        },
        {
            type:"input",
            name: "ISBN",
            message: "Enter book ISBN : (press enter same ISBN number)",
            default:book.ISBN
        },
        {
            type:"input",
            name: "available_copies",
            message: "Enter no of copies :",
            default: book.available_copies
        }
    ]);
}

export async function add(patron_name){
    // this function returns promt input in object

    return await inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Enter book title : ",
        },
        {
            type:"input",
            name: "author",
            message: "Enter book author : ",
        },
        {
            type:"input",
            name: "ISBN",
            message: "Enter book ISBN : ",
        },
        {
            type:"input",
            name: "available_copies",
            message: "Enter no of copies :",
        },
        {
            type: "list",
            name: "patron",
            message: "select the patron from the list :",
            choices: [...patron_name]
        }
    ]);
}

export async function addPatron(){
    return await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter patron name :",
        },
        {
            type:"input",
            name: "contact_details",
            message: "Enter patron email :",
        }
    ]);
}