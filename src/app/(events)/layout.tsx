export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    return (
        <div className="max-w-xl mx-auto relative flex flex-col gap-6 pt-20">
            {children}
        </div>
    );
}
