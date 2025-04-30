"use client";
import Link from "next/link";
import React, {Fragment} from 'react'
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
    const pathname = usePathname();
    const paths = pathname.split("/").filter((path) => path);

    return (
        <nav className="text-sm text-gray-600 my-4">
            <ul className="flex space-x-1">
                <li>
               <Link href="/" className="text-black hover:underline font-[family-name:var(--font-poppins)]">
                 Home
               </Link>
            </li>
                {paths.map((path, index) => {
                    const fullPath = "/" + paths.slice(0, index + 1).join("/");
                    const formattedPath = path.replace(/-/g, " ");
                    return (
                        <Fragment key={index}>
                            <li key={fullPath} className="flex items-center">
                                <span className="mx-1">›</span>
                                <Link href={fullPath} className="text-black hover:underline capitalize font-[family-name:var(--font-poppins)]">
                                    {formattedPath}
                                </Link>
                            </li>
                        </Fragment>

                    );
                })}
            </ul>
        </nav>
    );
};

export default Breadcrumb;
