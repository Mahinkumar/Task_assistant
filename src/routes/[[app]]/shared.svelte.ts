import { addToast } from "$lib/components/features/Toast.svelte";
import { onMount } from "svelte";
import { on } from "svelte/events";

export type Init_Data_type = {
    sno?: number;
    Id: string | null;
    UserId: string;
    Type: string;
    SetDate: string;
    EndDate: string | null;
    CreatedDate: string;
    Title: string;
    Content: string | null;
    isCompleted: boolean | null;
}

let Init_Data: Init_Data_type[] = []

export const settings = $state({
    black_theme: false,
    theme: "",
    sidebar_expand: true,
    Ai_api_key: "",
    Ai_api_type: "",
    Ai_api_url: ""
})

export const shared = $state({
    all_data: Init_Data,
    user_id: ''
})


export const timer = $state({
    minutes: 25,
    seconds: 0,
    ticking: false
})

export const sync_state = $state({
    need_sync: false,
})

export function get_type_data(n: Init_Data_type[], type: string) {
    let data: Init_Data_type[] = [];

    for (let i = 0; i < n.length; i++) {
        if (n[i].Type == type) {
            data.push(n[i]);
        }
    }

    return data;
}

export function add(data: Init_Data_type) {
    shared.all_data.push(data);
}


export function construct_data( 
    Id: string | null, 
    Type: string, 
    SetDate: string, 
    EndDate: string | null, 
    CreatedDate: string,
    Title: string,
    Content: string | null,
    isCompleted: boolean | null,
    sno?: number)
    {
        let curr_date = Date.now();
        let new_data: Init_Data_type = {
            sno : 0,
            Id : Id,
            UserId : shared.user_id,
            Type: Type,
            SetDate: SetDate ? SetDate : curr_date.toString() ,
            EndDate: EndDate ,
            CreatedDate: CreatedDate ? CreatedDate : curr_date.toString(),
            Title: Title,
            Content: Content,
            isCompleted: isCompleted
        };
        return new_data;
    }


