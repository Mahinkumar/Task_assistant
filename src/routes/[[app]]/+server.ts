import { json } from '@sveltejs/kit';
//import * as database from '$lib/server/database.js';

export async function POST({ request, cookies }) {
    let shared = await request.json();
    console.log(shared)
	return json({ status: 200 });
}