import Header from "@/components/header";

export default function Project() {
    const headers = ["Date", "Project Name", "Technology"]
    const widths = ["w-1/4", "w-1/2", "w-1/4"]

    const volumes = [
        { date: "2025-04-12", name: "Portfolio site", tech: "React, Tailwind, Typescript", href: "https://github.com/kobe012/my-portfolio" },
        { date: "2025-09-12", name: "Game", tech: "Love, Lua", href: "https://github.com/kobe012/GameProject" },
        { date: "2025-09-12", name: "Thesis (Barangay Website)", tech: "Laravel, Vue, Mysql", href: "https://github.com/kobe012/BrgySanJose" },


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
            {volumes.map((items, index) => (

                <div key={index} className="flex border-b p-2 items-center select-none">

                    {/* project date */}
                    <span className={widths[0]}>{items.date}</span>
                    {/* project name */}
                    <a href={items.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${widths[1]} text-shadow-teal-50 hover:underline hover:text-lg  duration-250 cursor-pointer`}>
                        {items.name}
                    </a>
                    {/* Technology */}
                    <span className={widths[0]}>{items.tech}</span>

                </div>

            ))}
        </>

    )

}
