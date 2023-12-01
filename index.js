#!/usr/bin/env node

import { mainMenu } from './madule/menu.js';
import { addUser } from './madule/DBquery.js';
import { userAuth } from './madule/DBquery.js';
import { Signup } from './madule/questions.js';
import { Signin } from './madule/questions.js';
import { logState } from './madule/questions.js';

export let user;

async function loginPage() {
    try {
        const { logstate } = await logState();

        if (logstate === 'signin') {
            const res = await Signin();
            const authenticatedUser = await userAuth(res);

            if (!authenticatedUser) {
                console.log('Wrong credentials. If you are new, you must sign up first.');
                await loginPage();
            } else {
                user = authenticatedUser;
                await mainMenu(authenticatedUser);
            }
        } else {
            const res = await Signup();
            user = res;
            await addUser(res);
            await mainMenu(res);
        }
    } catch (error) {
        console.error('Error occurred during login:', error);
    }
}






loginPage();
