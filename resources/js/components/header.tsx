
export default function Header() {
    const volumes = [
        { label: "[1] My Project", href: "/projects" },
        { label: "[2] About", href: "/about" },
        { label: "[3] Email", href: "/email" },
    ]
    return (

        <div className="bg-[#96A78D] flex flex-col justify-start items-start gap-4">
            {/* Top Section */}
            <div className="self-stretch inline-flex justify-between items-start">
                {/* Logo + Info */}
                <div className="flex justify-start items-start gap-12">
                    {/* ASCII Logo */}
                    <div className="w-56 h-28 relative">
                        <pre className="absolute left-0 top-0 text-white text-sm font-semibold">
                            {` _  __     _
| |/ /___ | |__   ___
| ' // _ \\| '_ \\ / _ \\
| . \\ (_) | |_) |  __/
|_|\\_\\___/|_.__/ \\___|`}
                        </pre>
                    </div>

                    {/* Info */}
                    <div className="inline-flex flex-col justify-start items-start gap-1">
                        <div className="self-stretch inline-flex justify-start items-center gap-2">
                            <div className="w-24 text-white text-sm font-semibold">Name</div>
                            <div className="text-[#F0F0F0] text-sm font-semibold">Vince Kobe San Juan</div>
                        </div>

                        <div className="self-stretch inline-flex justify-start items-center gap-2">
                            <div className="w-24 text-white text-sm font-semibold">Location</div>
                            <div className="text-[#F0F0F0] text-sm font-semibold">Cavite, Philippines</div>
                        </div>

                        <div className="self-stretch inline-flex justify-start items-center gap-2">
                            <div className="w-24 text-white text-sm font-semibold">Email</div>
                            <div className="text-[#F0F0F0] text-sm font-semibold">vksanjuannn@gmail.com</div>
                        </div>

                        <div className="self-stretch inline-flex justify-start items-center gap-2">
                            <div className="w-24 text-white text-sm font-semibold">Editor</div>
                            <div className="text-[#F0F0F0] text-sm font-semibold">Neovim btw</div>
                        </div>
                    </div>
                </div>

                {/* Links */}
                <div className="flex flex-col justify-start items-start gap-2">
                    <div className="flex justify-start items-center gap-1.5 cursor-pointer">
                        <div className="w-6 h-6 relative overflow-hidden">
                            <img src="./images/Frame (1).svg" alt="How I build this site" />
                        </div>
                        <div className="text-indigo-200 text-sm font-semibold">
                            How I build this site
                        </div>
                    </div>

                    <div className="flex justify-start items-center gap-1.5 cursor-pointer">
                        <div className="w-6 h-6 relative overflow-hidden">
                            <img src="./images/Frame.svg" alt="Github" />
                        </div>
                        <div className="text-indigo-200 text-sm font-semibold">
                            <a href="https://github.com/kobe012">Github</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="flex gap-4 font-bold">
                {volumes.map((item, i) => (
                    <div key={i}
                        className=" text-white font-bold hover:underline hover:text-lg shadow-lg duration-150">
                        <a href={item.href}>{item.label}</a>
                    </div>


                ))}
            </div>

        </div>
    );
}

