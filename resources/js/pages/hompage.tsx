// import { useState } from "react"

export default function HomePage() {
    return (
        <div className="bg-black min-h-screen"></div>

    )
    //     const [command, setCommand] = useState("");
    //     const [currentTab, setCurrentTab] = useState("terminal");
    //     const [commandHistory, setCommandHistory] = useState<string[]>([]);
    //
    //     const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //         if (e.key === "Enter") {
    //             const cmd = command.toLowerCase().trim();
    //             setCommandHistory(prev => [...prev, `$ ${command}`]);
    //
    //             if (cmd === "1" || cmd === "article" || cmd === "articles") {
    //                 setCurrentTab("articles");
    //             } else if (cmd === "c" || cmd === "clear") {
    //                 setCommandHistory([]);
    //                 setCurrentTab("terminal")
    //             } else if (cmd === "2" || cmd === "my projects" || cmd === "my project" || cmd === "projects" || cmd === "project") {
    //                 setCurrentTab("project");
    //             } else if (cmd === "3" || cmd === "about" || cmd === "abouts") {
    //                 setCurrentTab("about")
    //             } else if (cmd === "4" || cmd === "skills" || cmd === "skill") {
    //                 setCurrentTab("skills")
    //             } else if (cmd === "help" || cmd === "?") {
    //                 setCurrentTab("help")
    //             }
    //
    //             setCommand("");
    //         }
    //     };
    //
    //     const renderContent = () => {
    //         switch (currentTab) {
    //             case "articles":
    //                 return (
    //                     <div className="text-green-400">
    //                         <h2 className="text-xl mb-4">📰 Articles</h2>
    //                         <div className="space-y-2">
    //                             <div>• How I built this terminal interface</div>
    //                             <div>• React best practices in 2024</div>
    //                             <div>• Building ASCII art with CSS</div>
    //                         </div>
    //                     </div>
    //                 );
    //             case "project":
    //                 return (
    //                     <div className="text-green-400">
    //                         <h2 className="text-xl mb-4"> 🖥️ My Projects</h2>
    //                         <div className="space-y-2">
    //                             <div>• Thesis</div>
    //                             <div>• ETC</div>
    //                             <div>• ETC</div>
    //                         </div>
    //                     </div>
    //                 );
    //
    //             case "about":
    //
    //                 return (
    //                     <div className="text-green-400">
    //                         <h2 className="text-xl mb-4"> 🤔 About</h2>
    //                         <div className="space-y-2">
    //                             <div>• Pogi</div>
    //                             <div>• 69</div>
    //                             <div>• 69</div>
    //                         </div>
    //                     </div>
    //                 )
    //             case "skills":
    //
    //                 return (
    //                     <div className="text-green-400">
    //                         <h2 className="text-xl mb-4"> ⌨️ Skills</h2>
    //                         <div className="space-y-2">
    //                             <div>• HTML</div>
    //                             <div>• REACT</div>
    //                             <div>• VUE</div>
    //                             <div>• TailWind CSS</div>
    //                         </div>
    //                     </div>
    //                 )
    //             case "help":
    //
    //                 return (
    //                     <div className="text-green-400">
    //                         <h2 className="text-xl mb-4"> Keybinds </h2>
    //                         <div className="space-y-2">
    //                             <div>• 1/ Articles</div>
    //                             <div>• 2/ My projects</div>
    //                             <div>• 3/ About</div>
    //                             <div>• 4/ Skills</div>
    //                             <div>• help or ?</div>
    //                         </div>
    //                     </div>
    //                 )
    //             default: // ADD THIS
    //                 return null;
    //         }
    //     };
    //
    //     return (
    //         <div className="bg-[#303743] min-h-screen p-4 font-mono">
    //             <div className="mb-4">
    //                 {commandHistory.map((cmd, index) => (
    //                     <div key={index} className="text-green-400 mb-1">
    //                         {cmd}
    //                     </div>
    //                 ))}
    //             </div>
    //
    //             {renderContent()}
    //
    //             <div className="flex items-center">
    //                 <span className="text-green-400 mr-2">$</span>
    //                 <input
    //                     type="text"
    //                     value={command}
    //                     onChange={(e) => setCommand(e.target.value)}
    //                     onKeyDown={handleKeyDown}
    //                     className="bg-transparent outline-none text-green-400 flex-1 caret-green-400"
    //                     autoFocus
    //                     placeholder="need Help? just type ? or help"
    //                 />
    //             </div>
    //         </div>
    //     );
}
