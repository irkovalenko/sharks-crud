import { Head } from '@inertiajs/react';

export default function AppLayout({ title, heading, children }) {
    return (
        <>
            <Head title={title} />
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:p-8 dark:bg-[#0a0a0a]">
                <div className="w-full max-w-4xl">
                    {heading && <h1 className="mb-6 font-medium">{heading}</h1>}
                    {children}
                </div>
            </div>
        </>
    );
}