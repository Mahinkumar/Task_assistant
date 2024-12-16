
import { db } from '$lib/server/db';
import * as table from '$lib/server/db/schema';
import { redirect } from '@sveltejs/kit';



export const actions = {
    new: async ({cookies,request}) => {
        let currentDate = new Date();
        const data = await request.formData();
        let user_id = data.get("user_id")?.toString();
        let content = data.get("content")?.toString();
        let date_of_note = data.get("date_of_note")?.toString();
        let note_name = data.get("note_name")?.toString()
        if (content && note_name && user_id){
            let sno = await db.insert(table.user_dat).values({ UserId: user_id, Id: "",Type: "notes", SetDate: currentDate.toISOString(), EndDate: date_of_note, CreatedDate:currentDate.toISOString(),Title:note_name,Content:content}).returning({sno :table.user_dat.sno});
            redirect(301,"/notes/edit/"+sno[0].sno)
        }
    }
}