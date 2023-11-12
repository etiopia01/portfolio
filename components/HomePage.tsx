import Link from "next/link"
export default function HomePage() {
    return (
        
        <div className="flex justify-center items-center h-full">
            <div className=" pt-20 pl-48 flex flex-col justify-center items-start gap-4">
                <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full bg-[url(/me.jpeg)] bg-cover bg-center">
                       
                    </div>
                <h2 className="tracking-wider text-main-text text-opacity-80 font-semiboldbold">Salvatore Etiopia</h2>
                </div>
                <p className="w-[50%] text-xs leading-6 text-opacity-50 text-main-text"> Hi! I&apos;m an aspiring Web Developer.
                     In early 2023, I earned a Bachelor&apos;s degree in languages and literatures.
                      However, my passion for coding led me to swiftly change my career path.
                       Now, I&apos;m on an exciting journey to master the art of web development. 
                       With a foundation in languages and a knack for problem-solving, 
                       I&apos;m committed to continuously growing my knowledge and explore new opportunities.
                        My current skill-set consists mainly of the following front-end technologies: 
                        html5, CSS, tailwindcss, TypeScript, React and Next.js.
                        Let&apos;s make something happen!</p>
                        <p className="text-main-text text-opacity-30 text-sm">Take a look at my projects<Link className="ml-2 underline text-opacity-60 text-md text-main-text hover:text-opacity-90" href={"/projects"}>here</Link></p>
            </div>
            <div className="text-start text-main-text text-opacity-50 text-8xl break-word flex flex-col justify-between items-start gap-4 pr-10">
                <p>WAIT,</p>
                <p> THIS IS </p>
                <p>MY</p>
                <p>PORTFOLIO?!</p>
            </div>

        </div>
        
    )
}