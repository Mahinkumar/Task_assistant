import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import type { Actions } from './$types';



export const actions: Actions = {
    new: async ({cookies,request}) => {
        let sno = "1"
        const data = await request.formData();
        redirect(303,"/notes/edit/"+sno)
    }
}