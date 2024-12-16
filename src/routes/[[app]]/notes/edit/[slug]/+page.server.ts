import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import type { Actions } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	return {id: params.slug, name: "Not Known Name"}
};


export const actions: Actions = {
    edit: async ({cookies,request}) => {
        const data = await request.formData();
    }
}
