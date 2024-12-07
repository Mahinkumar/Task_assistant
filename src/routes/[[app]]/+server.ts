import { json } from '@sveltejs/kit';
//import * as database from '$lib/server/database.js';

export async function POST({ request, cookies }) {
    let shared = await request.json();
	return json({ status: 200 });
}