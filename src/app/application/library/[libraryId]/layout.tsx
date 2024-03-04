import Sidebar from "@/components/ui/sidebar";

export default function ApplicationLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className="flex h-[100vh] bg-main">
            <Sidebar />
            <div>
                {children}
            </div>
        </div>
    );
}