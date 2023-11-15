import Project from "./Project"; 

const myProjects = [{
    class : "rps",
    github: "https://github.com/etiopia01/r-p-s-game",
    vercel: "https://r-p-s-game.vercel.app/",
    title: "Rock Paper Scissors Game",
    des: "Simple r-p-s game I made when learning React, soon available on every game platform (probably)",
    id:1
}, {
    class : "todo",
    github: "https://github.com/etiopia01/todo-list-tailwind",
    vercel: "https://todo-list-olive-nine-84.vercel.app/",
    title: "ToDo List",
    des: "Simple and very VERY original ToDo list I made when first practicing Tailwindcss",
    id:2
},{
    class : "countries",
    github: "https://github.com/etiopia01/countries-list",
    vercel: "https://countries-list-theta.vercel.app/",
    title: "Countries Browser",
    des: "Super useful project (seriously tho) I made using React with an API",
    id:3
},{
    class : "tip",
    github: "https://github.com/etiopia01/tip-calculator",
    vercel: "https://tip-calculator-seven-sepia.vercel.app/",
    title: "Tip Calculator",
    des: "Ok, shut up.. I was just practicing React",
    id:4
}]

export default function Projects() {
    return (
        <div className="flex flex-col items-center justify-start gap-10 mt-8 mx-20 absolute left-0 right-0 top-20 bottom-20">
            <h1 className="text-3xl font-bold text-main-text text-opacity-60">MY PROJECTS</h1>
            <div className="flex justify-center flex-wrap w-auto gap-16 p-10 overflow-y-scroll h-[500px]">
            {myProjects.map(project => <Project key={project.id} {...project}/>)}
            </div>
        </div>
    )
}