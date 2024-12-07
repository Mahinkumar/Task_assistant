import { addToast } from "$lib/components/features/Toast.svelte";

let Init_Data: {
    Id: string;
    UserId: string;
    Type: string;
    SetDate: Date;
    EndDate: Date | null;
    CreatedDate: Date;
    Title: string;
    Content: string | null;
    isCompleted: boolean | null;
}[] = []


export const shared = $state({
    notes: Init_Data,
    flipCards: Init_Data,
    memcards: Init_Data,
    todos: Init_Data
})

export const timer = $state({
    minutes: 25,
    seconds: 0,
    ticking: false
})

export async function sync(){
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