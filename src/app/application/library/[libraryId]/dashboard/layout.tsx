import SettingsControl from "@/components/utilities/settingsControl";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>){
    return <SettingsControl>{children}</SettingsControl>;
}