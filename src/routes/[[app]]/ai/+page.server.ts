import { env } from "$env/dynamic/private";
import { HfInference } from "@huggingface/inference";
import { redirect } from "@sveltejs/kit";

import type { Actions } from './$types';


export const load = async (event) => {
    
};

async function ai(prompt: string | any){
    const client = new HfInference(env.TEST_KEY);

    const chatCompletion = await client.chatCompletion({
        model:"microsoft/Phi-3.5-mini-instruct",
        messages: [
            {
                role: "user",
                content: `
                INSTRUCTION: You are a bot named Task Assistant. You can perform certain task in users data with commands. You
                can perform the following actions. These are conmmands and need to be in a seperate line.
                
                The only availible commands to perform are listed below. You can also without performing a single command 
                Also perform commands only if users insist you to do so.

                command>> Insert (Title: My Title, Content: This is the content for insert, Type: notes) <<command
                command>> Edit (Title: My Edit Title, Content: Updated content, Type: memories) <<command
                command>> Read (Title: Read Title, Content: Content to read, Type: todos) <<command
                
                The syntax is: 
                command>>  <<command  // You should always leave a line and space after this syntax
                Infer it based on examples. Types can be notes, todos, and memories all having title
                and a content. perform it when user asks for it. Anything you return apart from commands line will be provided as feedback to user.

                DO NOT USE ANY MARKDOWN
                DO NOT TALK TO USER ABOUT THE AVAILIBLE COMMANDS
                GIVE THEM FEEDBACK OF WHAT YOU DID AFTER EXECUTING PROMPT

                FROM USER:
                ` + prompt
            }
        ],
        max_tokens: 1024
    });
    return chatCompletion;
}


export const actions = {
	default: async ({cookies,request}) => {
		const data = await request.formData();
        const pr = data.get("prompt")?.toString();
        let x = await ai(pr);
        return {item : x}
	}
} satisfies Actions;