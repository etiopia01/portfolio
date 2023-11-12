import { ProjectProps } from "@/app/types"

export default function Project(props:ProjectProps) {
    return (
        <div className="relative"> 
        <div className="w-64 h-72 rounded-lg overflow-hidden flex flex-col gap-2 shadow-lg hover:shadow-2xl hover:scale-110 group peer hover:transition-all hover:duration-100 bg-main-text bg-opacity-40">
<a href={props.vercel} className={`${props.class} bg-cover bg-center w-auto h-full`}></a>
<div className="text-center p-3 hidden group-hover:block">
<h1 className="font-bold text-main-bg">{props.title}</h1>

</div>
        </div>
<div className="opacity-0 peer-hover:opacity-60 text-main-text peer-hover:transition-opacity w-64 h-auto text-xs absolute bottom-auto mt-8">{props.des}</div>
</div>
    )
}