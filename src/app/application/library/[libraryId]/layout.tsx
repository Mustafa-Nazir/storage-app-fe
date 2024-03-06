import Header from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";

export default function ApplicationLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className="flex h-[100vh] bg-main">
            <Sidebar />
            <div className="flex-grow flex flex-col overflow-x-auto">
                <Header/>
                {children}
            </div>
        </div>
    );
}