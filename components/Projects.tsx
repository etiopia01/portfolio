import Project from "./Project"; 

const myProjects = [{
    class : "rps",
    github: "https://github.com/etiopia01/r-p-s-game",
    vercel: "https://r-p-s-game.vercel.app/",
    title: "Rock Paper Scissors Game",
    des: "Simple r-p-s game I made when learning React"
}, {
    class : "todo",
    github: "https://github.com/etiopia01/todo-list-tailwind",
    vercel: "https://vercel.com/salvatores-projects-3fb13007/todo-list",
    title: "ToDo List",
    des: "Simple ToDo list I made when first practicing Tailwindcss"
},{
    class : "countries",
    github: "https://github.com/etiopia01/countries-list",
    vercel: "https://countries-list-theta.vercel.app/",
    title: "Countries Browser",
    des: "One of the first projects I made using React with an API"
}]

export default function Projects() {
    return (
        <div className="flex flex-col items-center justify-start gap-6 w-full h-[500px]">
            <h1 className="text-3xl font-bold text-slate-300">MY PROJECTS</h1>
            <div className="flex justify-between flex-wrap w-auto gap-16">
            {myProjects.map(project => <Project {...project}/>)}
            </div>
        </div>
    )
}