import { Props } from "@/types";

export default function RootLayout({ children }: Props) {
    return (
        <>
            <main class="w-full h-full">{children}</main>
        </>
    );
}
