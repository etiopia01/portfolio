import { ProjectProps } from "@/app/types"
import { merri } from "./HomePage"

export default function Project(props:ProjectProps) {
    return (
        <div className="relative mt-6"> 
        <div className="w-64 h-72 rounded-lg overflow-hidden flex flex-col gap-2 shadow-lg hover:shadow-2xl hover:scale-110 group peer hover:transition-all hover:duration-100 bg-main-text bg-opacity-40">
<a href={props.vercel} className={`${props.class} bg-cover bg-center w-auto h-full`}></a>
<div className="text-center p-2 hidden group-hover:block">
<h1 className="font-bold text-[#0a0908] text-opacity-90 text-lg">{props.title}</h1>

</div>
        </div>
<div className={`${merri.className} font-light opacity-0 peer-hover:opacity-60 text-main-text w-64 h-auto text-sm absolute bottom-auto mt-8`}>{props.des}</div>
</div>
    )
}