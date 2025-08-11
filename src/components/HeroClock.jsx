import { useEffect, useState, useMemo } from "react";

export default function HeroClock() {
    const [time, setTime] = useState("");

    const createClock = () => {
        {
            const date = new Date();
            const hrs = date.getHours();
            const min = date.getMinutes();
            const sec = date.getSeconds();
            return `${hrs}:${min > 10 ? min : "0" + min}:${sec > 10 ? sec : "0" + sec}`;
        }
    };

    useEffect(() => {
        setTime(createClock);
    }, [createClock]);
    // setInterval(() => setTime(createClock), 1000);
    // , [setInterval, createClock]);
    return <>{time}</>;
}
