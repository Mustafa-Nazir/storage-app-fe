import SettingsControl from "@/components/utilities/settingsControl";

export default function SettingsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>){

    return <SettingsControl>{children}</SettingsControl>;
}