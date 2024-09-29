import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import MobileNavBar from "@/components/MobileNavBar";
import { getLoggedInUser } from "@/lib/action/user.actions";
import { redirect } from "next/navigation";


export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const loggedIn = await getLoggedInUser();
    if (!loggedIn) redirect('/sign-in')
    return (
        <main className="flex h-screen w-full font-inter" >
            <Sidebar user={loggedIn} />
            <div className="flex size-full flex-col">
                <div className="root-layout">
                    <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
                    <div> <MobileNavBar user={loggedIn} />
                    </div>
                </div>

                {children}
            </div>

        </main>

    );
}
