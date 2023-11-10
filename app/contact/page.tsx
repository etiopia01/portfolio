import NavBar from "@/components/NavBar"
import SocialBar from "@/components/SocialBar"
import React from "react"

export default function ContactPage() {
    return (
        <>
        <NavBar/>
        <div className="flex flex-col gap-20">
        <div className="flex justify-start items-center gap-6">
            <div className="h-32 w-32 bg-[url(/me.jpeg)] bg-cover bg-center rounded-full"></div>
            <div className="text-3xl text-slate-300 flex flex-col items-start gap-4">
            <h1>Salvatore</h1>
            <h1>Etiopia</h1>
            </div>
        </div>
       <div className="flex flex-col text-slate-300 gap-4">
            <div className="flex gap-6 justify-start items-center">
                <dt className="text-lg font-bold">E-mail:</dt> <dd>etiopiasalvatore@gmail.com</dd>
                </div>
            <div className="flex gap-6 justify-start items-center">
                <dt className="text-lg font-bold">Mobile:</dt> <dd>+39 350 1978018 </dd>
            </div>
       </div>
        
    
        </div>
        <SocialBar/>
        </>
    )
}