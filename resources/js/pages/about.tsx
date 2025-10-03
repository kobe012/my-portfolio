
import Header from "@/components/header";

export default function About() {

    const volumes = [
        { label: "Facebook:", name: "@Kobe", href: "https://facebook.com", comment: "I post rarely" },
        { label: "Instagram:", name: "@vkssanjuann", href: "https://instagram.com", comment: "Mostly stories" },
        { label: "LinkedIn:", name: "@vksanjuannn", href: "https://linkedin.com", comment: "For professional stuff" },
    ];

    return (
        <>
            <Header />
            <div className="flex flex-col items-center my-6 p-8 select-none">
                <h1 className="font-bold">About page v0.0.1</h1>
                <h2 className="my-6">Me on the web</h2>
                <h3>-----------------------------------------------------------------------------</h3>
                <div className="mt-6 space-y-3 w-full max-w-2xl ">
                    {volumes.map((item, index) => (
                        <div
                            key={index}
                            className=" grid grid-cols-3 gap-4"
                        >
                            <span className="font-bold">
                                {item.label}
                            </span>
                            <a
                                href={item.href}
                                target="_blank"
                                className="text-gray-400 hover:text-white duration-300 cursor-pointer"
                                part="_blank"
                            >
                                {item.name}
                            </a>
                            <span className="italic text-gray-400">
                                {item.comment}
                            </span>
                        </div>



                    ))}

                </div>


            </div>
        </>
    );
}

