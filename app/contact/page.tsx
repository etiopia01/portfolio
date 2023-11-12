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
            <div className="text-3xl text-main-text text-opacity-80 flex flex-col items-start gap-4">
            <h1>Salvatore</h1>
            <h1>Etiopia</h1>
            </div>
        </div>
       <div className="flex flex-col  gap-4">
            <div className="flex gap-6 justify-start items-center">
                <dt className="text-lg font-bold text-main-text text-opacity-80">E-mail:</dt> <dd className="text-main-text text-opacity-50 ">etiopiasalvatore@gmail.com</dd>
                </div>
            <div className="flex gap-6 justify-start items-center">
                <dt className="text-lg font-bold text-main-text text-opacity-80">Mobile:</dt> <dd className="text-main-text text-opacity-50 ">+39 350 1978018 </dd>
            </div>
       </div>
        
    
        </div>
        <SocialBar/>
        </>
    )
}