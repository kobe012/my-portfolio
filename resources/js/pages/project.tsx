import Header from "@/components/header";

export default function Project() {
    const headers = ["Date", "Project Name", "Technology"]
    const widths = ["w-1/4", "w-1/2", "w-1/4"]


    const projects = [["2025-04-12", "Portfolio Site", "React, Tailwind, Typescript", "https://github.com/username/portfolio"],
    ["2025-09-12", "Game", "Love, Lua"],
    ["2025-09-12", "Thesis", "Laravel, Vue, Mysql"]
    ]

    return (
        <>
            <Header />
            {/* header for my Date projecty contacnt me etc */}
            <div className="w-full bg-white select-none">
                <div className=" flex font-bold border-b p-5 text-black">
                    {headers.map((headers, i) => (
                        <span key={i} className={widths[i]}>
                            {headers}
                        </span>

                    ))}
                </div>
            </div>
            {projects.map((projects, index) => (

                <div key={index} className="flex border-b p-2 items-center">

                    {/* project date */}
                    <span className={widths[0]}>{projects[0]}</span>
                    {/* project name */}
                    <a href={projects[3]}
                        className={`${widths[1]} text-shadow-teal-50 hover:underline hover:text-lg  duration-250 cursor-pointer`}>
                        {projects[1]}
                    </a>
                    {/* Technology */}
                    <span className={widths[0]}>{projects[2]}</span>

                </div>

            ))}
        </>

    )

}
