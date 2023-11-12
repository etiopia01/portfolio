import Link from "next/link"

export default function NavBar() {
    return (
        <>
        <div className="w-full py-8 px-16 flex justify-between items-center absolute top-0 left-0 right-0">
            
                <Link className="font-medium  text-main-text  text-2xl text-opacity-60 hover:scale-x-110 hover:text-opacity-80 cursor-pointer" href={"/"}>Home</Link>
        
            <div className="flex gap-6 text-xl">
                <Link className=" text-main-text  hover:scale-x-110 text-opacity-60 cursor-pointer hover:text-opacity-80" href={"/projects"}>Projects</Link>
                <Link className=" text-main-text  hover:scale-x-110 text-opacity-60 cursor-pointer hover:text-opacity-80" href={"/contact"}>Contact</Link>
            </div>
        </div>
        </>
    )
}