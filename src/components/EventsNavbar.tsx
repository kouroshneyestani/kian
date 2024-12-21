"use client";

import React, { useState } from "react";

interface Item {
    id: number;
    name: string;
}

const EventsNavbar: React.FC = () => {
    const items: Item[] = [
        { id: 0, name: "All" },
        { id: 1, name: "Premium" },
        { id: 2, name: "VIP" },
        { id: 3, name: "Royal" },
    ];

    const [activeItem, setActiveItem] = useState<number>(0);

    return (
        <nav className="w-full rounded-2xl bg-blue-900 text-white sticky top-2 z-20">
            <ul className="h-12 flex items-center justify-center px-2">
                {items.map((item) => (
                    <li
                        key={item.id}
                        onClick={() => setActiveItem(item.id)}
                        className={`w-full h-8 flex items-center justify-center text-white cursor-pointer rounded-2xl ${
                            activeItem === item.id ? "bg-blue-800" : ""
                        }`}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default EventsNavbar;
