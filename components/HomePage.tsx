export default function HomePage() {
    return (
        
        <div className="flex justify-center items-center h-full">
            <div className=" pt-20 pl-48 flex flex-col justify-center items-start gap-4">
                <div className="flex gap-4 items-center">
                    <div className="w-12 h-12 rounded-full bg-[url(/me.jpeg)] bg-cover bg-center">
                       
                    </div>
                <h2 className="text-slate-200 tracking-wider">Salvatore Etiopia</h2>
                </div>
                <p className="w-[50%] text-xs text-slate-500 leading-6"> Hi! I'm an aspiring Web Developer.
                     In early 2023, I earned a Bachelor's degree in languages and literatures.
                      However, my passion for coding led me to swiftly change my career path.
                       Now, I'm on an exciting journey to master the art of web development. 
                       With a foundation in languages and a knack for problem-solving, 
                       I'm committed to continuously growing my knowledge and explore new opportunities.
                        My current skill-set consists mainly of the following front-end technologies: 
                        html5, CSS, tailwindcss, TypeScript, React and Next.js.
                        Let's make something happen! </p>
            </div>
            <div className="text-start text-8xl break-word flex flex-col justify-between items-start gap-4 pr-10 text-slate-200">
                <p>WAIT,</p>
                <p> THIS IS </p>
                <p>MY</p>
                <p>PORTFOLIO?!</p>
            </div>

        </div>
        
    )
}