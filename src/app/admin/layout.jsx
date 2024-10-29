'use client';

import "../../../public/static/dist/output.css";
import "../../../public/static/src/styles/base.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const primarySidebarLinks = [
    { name: "Dashboard", url: "" },
    { name: "Product Category", url: "/product-category" },
    { name: "Contribution Community", url: "/contribution-community" },
    { name: "Discuss", url: "/discuss" },
    { name: "Challenges", url: "/challenges" },
    { name: "Jobs", url: "/jobs" },
    { name: "Resume", url: "/resume" },
    { name: "Recruiters", url: "/recruiters" },
    { name: "Projects", url: "/projects" },
    { name: "User Profiles", url: "/user-profiles" },
    { name: "Pro Subscriptions", url: "/pro-subscriptions" },
    { name: "Notifications", url: "/notifications" },
    { name: "Certifications", url: "/certifications" },
    { name: "Wallet", url: "/wallet" },
    { name: "Support Requests", url: "/support-requests" },
    { name: "Log History", url: "/log-history" },
    { name: "Vouchers", url: "/vouchers" },
    { name: "Panel Settings", url: "/panel-settings" },
].map(link => ({ ...link, url: `/admin${link.url}` }));

export default function Layout({ children }) {
    const pathname = usePathname();
    const [selected, setSelected] = useState("");
    console.log(selected)

    useEffect(() => {
        setSelected(pathname);
    }, [pathname]);

    return (
      
<>               <nav className="flex fixed bg-tertiary justify-start items-center h-[50px] w-screen px-3 ">
                    <div className="h-10 w-10 overflow-hidden">
                        <Image
                            src="/static/assets/logo.png"
                            alt="logo"
                            className="block object-cover size-full"
                            width={40}
                            height={40}
                        />
                    </div>
                    <h1 className="font-bold text-[21px]">
                        Now<span className="text-pink-500 text-[21px]">Ur</span>Turn
                    </h1>
                </nav>
                <section className="flex pt-[50px] h-screen w-full">
                    <div className='overflow-auto'>
                        <aside id="ps" className="bg-secondary w-[270px] px-3 h-full py-10 overflow-y-auto space-y-2">
                            {primarySidebarLinks.map((link) => (
                                <Link key={link.url} href={link.url} passHref>
                                    <button
                                        className={`button ${selected === link.url ? "selected" : ""}`}
                                        onClick={() => setSelected(link.url)}
                                    >
                                        {link.name}
                                    </button>
                                </Link>
                            ))}
                        </aside>
                    </div>
                    <main className="w-full py-10 ">
                        <h1 className="text-yellow-500 text-[19px] text-center font-semibold" style={{ color: "#ffe683" }}>
                            #A00000369
                        </h1>
                        <div className="content px-[40px]">
                            {children}
                        </div>
                    </main>
                </section>

                </> 
        
    );
}
