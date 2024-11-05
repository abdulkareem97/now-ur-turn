'use client';

import "../../../public/static/dist/output.css";
import "../../../public/static/src/styles/base.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const primarySidebarLinks = [
    { name: "Dashboard", url: "/" },
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
    const [selected, setSelected] = useState('');
    console.log(selected)
    console.log('pathname ',pathname)

    useEffect(() => {
        setSelected(pathname);
    }, [pathname]);

    return (
      
<>               <nav className="flex fixed bg-[#1C202C] justify-start items-center h-[50px] w-screen px-[24px] ">
                    <div className="h-10 w-10 overflow-hidden">
                        <Image
                            src="/static/assets/logo.png"
                            alt="logo"
                            className="block object-cover size-full"
                            width={40}
                            height={40}
                        />
                    </div>
                    <h1 className="font-semibold text-[20px] px-[6px]">
                        Now<span className="text-pink-500 text-[20px]">Ur</span>Turn
                    </h1>
                </nav>
                <section className="flex pt-[50px] h-screen w-full">
                    <div className='w-[224px]'>
                        <aside id="ps" className="bg-[#1C202C]  text-[14px] px-[12px] h-full py-[40px] overflow-y-auto space-y-[8px]">
                            {primarySidebarLinks.map((link) => (
                                <Link key={link.url} href={link.url} passHref>
                                    <button
                                        className={`button mb-[8px] ${selected === link.url ? "selected" : ""}`}
                                        onClick={() => setSelected(link.url)}
                                    >
                                        {link.name}
                                    </button>
                                </Link>
                            ))}
                        </aside>
                    </div>
                    <main className="w-full py-[40px] bg-[#0D0D19]">
                        <h1 className="text-[#FFE683] text-[16px] text-center font-semibold" style={{ color: "#ffe683" }}>
                            #A00000369
                        </h1>
                        <div className="content px-[40px] mt-[60px] ">
                            {children}
                        </div>
                    </main>
                </section>

                </> 
        
    );
}
