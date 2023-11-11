import Link from "next/link"

export default function NavBar() {
    return (
        <>
        <div className="w-full py-8 px-16 text-slate-300 flex justify-between items-center absolute top-0 left-0 right-0">
            
                <Link className="font-medium text-2xl hover:scale-x-110 cursor-pointer" href={"/"}>Home</Link>
        
            <div className="flex gap-6 text-xl">
                <Link className="hover:scale-x-110 cursor-pointer" href={"/projects"}>Projects</Link>
                <Link className="hover:scale-x-110 cursor-pointer" href={"/contact"}>Contact</Link>
            </div>
        </div>
        </>
    )
}