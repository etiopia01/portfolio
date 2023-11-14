import Link from "next/link"
import { Merriweather_Sans } from "next/font/google"
const merri = Merriweather_Sans({
subsets: ["latin"],
weight: ["400", "500", "700"],
fallback: ["sans-serif"]
})
export default function HomePage() {

    return (
        
        <div className="flex flex-col-reverse justify-center items-center h-full gap-12 mt-32 p-16">
            <div className="flex flex-col justify-center items-center gap-4">
                <div className="flex gap-4 items-center">
                    <div className="w-32 h-32 rounded-full bg-[url(/me.jpeg)] bg-cover bg-center">
                       
                    </div>
                <h2 className="tracking-wider text-main-text text-2xl text-opacity-80 font-semiboldbold">Salvatore Etiopia</h2>
                </div>
                <p className={`${merri.className} text-sm leading-6 text-opacity-80 text-main-text`}> Hi! I&apos;m an aspiring Web Developer.
                     In early 2023, I earned a Bachelor&apos;s degree in languages and literatures.
                      However, my passion for coding led me to swiftly change my career path.
                       Now, I&apos;m on an exciting journey to master the art of web development. 
                       With a foundation in languages and a knack for problem-solving, 
                       I&apos;m committed to continuously growing my knowledge and explore new opportunities.
                        My current skill-set consists mainly of the following front-end technologies: 
                        html5, CSS, tailwindcss, TypeScript, React and Next.js.
                        Let&apos;s make something happen!</p>
                        <Link href={"/projects"}><button className="bg-icon text-main-text text-opacity-70 py-2 px-6 rounded-md hover:bg-opacity-70 hover:text-opacity-95">Take a look at my work</button> </Link>
            </div>
            <div className="text-main-text text-opacity-50 text-5xl flex flex-col justify-between items-center gap-4">
                <p>WAIT,</p>
                <p> THIS IS </p>
                <p>MY</p>
                <p>PORTFOLIO?!</p>
            </div>

        </div>
        
    )
}