"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Name() {
    const [inputVal,setInputVal] = useState("");
    const{push} = useRouter();
    const handleSubmit=(event:React.FormEvent)=>{
        event.preventDefault();
        push(`/prediction/${inputVal}`);
        console.log(inputVal); 

    }
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <div>
                <h1>Enter Your Name</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter your Name..." onChange={(e) => setInputVal(e.target.value)} value={inputVal}/>
                    <button type="submit" className="hover:cursor-pointer">Submit</button>
                </form>

            </main>
        </div>
    );
}

