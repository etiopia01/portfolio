import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";
import SocialBar from "@/components/SocialBar";

export default function ProjectsPage() {
    return (
        <div className="flex justify-center items-center w-full h-full px-20">
            <NavBar/>
            <Projects/>
            <SocialBar/>
            </div>
        
    )
}