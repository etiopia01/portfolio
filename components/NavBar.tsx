import Link from "next/link"

export default function NavBar() {
    return (
        <div className="w-full py-4 px-8 bg-slate-300 flex justify-between items-center absolute top-0 left-0 right-0">
            <div>
                <Link href={"/"}>Home</Link>
            </div>
            <div className="flex gap-6">
                <Link href={"/projects"}>Projects</Link>
                <Link href={"/contact"}>Contact</Link>
            </div>
        </div>
    )
}