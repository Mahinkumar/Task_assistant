
import { db } from '$lib/server/db';
import * as table from '$lib/server/db/schema';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from "./$types";
import type { Actions } from './$types';

import { eq, lt, gte, ne } from 'drizzle-orm';

export const load: PageServerLoad = async ({ params }) => {
    let sno = Number.parseInt(params.slug)
    if (sno){
        let page_data = await db.select().from(table.user_dat).where(eq(table.user_dat.sno,sno));
        let date = parseDrizzleDateTime(page_data[0].EndDate?.toString());
        return {content: page_data[0].Content, title: page_data[0].Title, date_of_note: date, sno: page_data[0].sno}
    }
    redirect(301,"/notes/new");
};


export const actions: Actions = {
    edit: async ({cookies,request}) => {
        let currentDate = new Date();
        const data = await request.formData();
        let user_id = data.get("user_id")?.toString();
        let content = data.get("content")?.toString();
        let date_of_note = data.get("date_of_note")?.toString();
        let note_name = data.get("note_name")?.toString()
        let got_sno = data.get("sno")?.toString()
        
        if (content && note_name && user_id && got_sno){
            let sno_num = Number.parseInt(got_sno);
            await db.update(table.user_dat).set({ UserId: user_id, Id: "",Type: "notes", SetDate: currentDate.toISOString(), EndDate: date_of_note, CreatedDate:currentDate.toISOString(),Title:note_name,Content:content}).where(eq(table.user_dat.sno,sno_num));
            redirect(301,"/notes/edit/"+sno_num);
        }
    }
}

function parseDrizzleDateTime(dateStr: string | undefined): string {
    if (dateStr === undefined) {
      const today = new Date();
      const year = today.getFullYear();
      const month = (today.getMonth() + 1).toString().padStart(2, '0');
      const day = today.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
  
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
