import { ProjectProps } from "@/app/types"

export default function Project(props:ProjectProps) {
    return (
        <div className="bg-slate-300 w-64 rounded-lg overflow-hidden flex flex-col gap-2">
<div className={`${props.class} bg-cover bg-center w-auto h-40`}></div>
<div className="flex flex-col items-start justify-even">
<h1>{props.title}</h1>
<p>{props.des}</p>
<a href={`${props.github}`}>See code here</a>
<a href={`${props.vercel}`}>See project here</a>
</div>
        </div>
    )
}