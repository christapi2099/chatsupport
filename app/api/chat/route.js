import { NextResponse } from "next/server"

export async function POST(req){
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + process.env.OPENROUTER_API_KEY,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "model": "meta-llama/llama-3.1-8b-instruct:free",
          "messages": [
            {"role": "user", "content": "Recommend me a simple salami sandwitch recipe."},
          ]
        })
      });
    
    const data = await response.json();
    console.log("Assistant:", data.choices[0].message.content);
    return NextResponse.json({message: 'Hello from server!'})
}