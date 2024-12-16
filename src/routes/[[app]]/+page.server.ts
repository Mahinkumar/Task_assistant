import type { Actions } from "./$types";


type userData = dataFrag[]

type dataFrag = {
    sno? : number;
    Id: string | null;
    UserId: string;
    Type: string;
    SetDate: string;
    EndDate: string | null;
    CompletedDate: string | null;
    CreatedDate: string;
    Title: string;
    Content: string | null;
    Context: string | null;
    difficulty: number | null;
    isCompleted: boolean | null;
}



export const actions: Actions = {
    add: async (event: any) => {
        
    },
    remove: async (event: any) => {
    },

    edit: async (event: any) =>{

    },
    delete: async (event: any) =>{

    }
};