import { validateSessionToken } from '$lib/server/auth.js';
import { json } from '@sveltejs/kit';
//import * as database from '$lib/server/database.js';

export async function POST({ request, cookies }) {
    let shared = await request.json();
    let user_token = cookies.get('auth-session')
    if (user_token){
        let {session,user} = await validateSessionToken(user_token)
        if (user){
            // Authenticated User
            return json({ status: 200 });
        }else{
            // Not an authenticated user 
            return json({ status: 500 });
        }
    } else{
        // Not Logged in user
        return json({ status: 500 });
    }
}