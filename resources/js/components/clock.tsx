import { useState, useEffect } from "react";

export default function Clock() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const id = setInterval(() => {
            const now = new Date();
            let hours = now.getHours();
            const minutes = now.getMinutes().toString().padStart(2, "0");
            const seconds = now.getSeconds().toString().padStart(2, "0");
            const meridiem = hours >= 12 ? "PM" : "AM";
            hours = hours % 12 || 12;
            setTime(`${hours}:${minutes}:${seconds} ${meridiem}`);
        }, 1000);

        return () => clearInterval(id);
    }, []);

    return <span className="font-mono">{time}</span>;
}
