import React, { useState } from 'react'
import Link from 'next/link';

interface MenuItem {
    title: string;
    route?: string;
    children?: MenuItem[];
}

interface Props {
    item: MenuItem;
}

export default function Dropdown(props: Props) {
    const { item } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const menuItems = item?.children ? item.children : [];

    const toggle = () => {
        setIsOpen(old => !old);
    }

    const transClass = isOpen
        ?
        "flex"
        :
        "hidden";

    return (
        <>
            <div className="relative">
                <button
                    {
                        menuItems.map((item: MenuItem) =>
                            <Link
                                key={item.route}
                                className="hover:bg-zinc-300 hover:text-zinc-500 px-4 py-1"
                                href={item?.route || ''}
                                onClick={toggle}
                            >{item.title}</Link>
                        )
                    }
                                onClick={toggle}
                            >{item.title}</Link>
                        )
                    }
                </div>
            </div>
            {
                isOpen
                    ?
                    <div
                        className="fixed top-0 right-0 bottom-0 left-0 z-20 bg-black/40"
                        onClick={toggle}
                    ></div>
                    :
                    <></>
            }
        </>
    )
}