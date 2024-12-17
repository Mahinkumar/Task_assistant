
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
