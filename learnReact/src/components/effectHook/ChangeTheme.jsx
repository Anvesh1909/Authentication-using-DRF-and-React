import React, { useEffect, useState } from "react";

const ChangeTheme = () => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    const changeTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    useEffect(() => {
        let body = document.body;
        if (theme === "light") {
            body.style.backgroundColor = "white";
            body.style.color = "black";
        } else {
            body.style.backgroundColor = "black";
            body.style.color = "white";
        }
    }, [theme]); 

    return (
        <div>
            <h2>Theme: {theme}</h2>
            <button onClick={changeTheme}>Change Theme</button>
        </div>
    );
};

export default ChangeTheme;
