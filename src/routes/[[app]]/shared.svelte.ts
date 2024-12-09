import { addToast } from "$lib/components/features/Toast.svelte";

let Init_Data: {
    sno: number;
    Id: string| null;
    UserId: string;
    Type: string;
    SetDate: string;
    EndDate: string | null;
    CreatedDate: string;
    Title: string;
    Content: string | null;
    isCompleted: boolean | null;
}[] = []

export const settings = $state({
    black_theme: false,
    theme: "",
    sidebar_expand: true,
    Ai_api_key : "",
    Ai_api_type : "",
    Ai_api_url : ""
})

export const shared = $state({
    notes: Init_Data,
    flipCards: Init_Data,
    memcards: Init_Data,
    todos: Init_Data,
    count: 0,
})

export const timer = $state({
    minutes: 25,
    seconds: 0,
    ticking: false
})

export const sync_state = $state({
    need_sync: false,
    syncing_to_cloud: false,
    sync_from_cloud: false
})

export async function try_sync(){
    if (sync_state.need_sync){
        sync_state.need_sync = false;
        await sync()
    } 
}

export async function sync(){
    sync_state.need_sync = false;
    const response = await fetch('/sync', {
        method: 'POST',
        body: JSON.stringify({shared}),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    addToast({
        data: {
            title: 'Sync Server Response',
            description:'Response From Server: ' + response.status.toString() + '\n' + 'Database sync not availible',
            color: 'green'
        }
    });
}



