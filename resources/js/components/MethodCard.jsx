const methodStyles = {
    GET: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400',
    POST: 'bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-400',
    PUT: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400',
    PATCH: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400',
    DELETE: 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400',
};

export default function MethodCard({ httpMethod, method, url, routeName, description }) {
    const badgeClass = methodStyles[httpMethod?.toUpperCase()] ?? 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300';

    return (
        <div className="rounded-lg bg-white p-4 shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] dark:bg-[#161615] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
            <div className="mb-2 flex items-center gap-2">
                <span className={`rounded px-2 py-0.5 text-[11px] font-semibold tracking-wide ${badgeClass}`}>
                    {httpMethod}
                </span>
                <code className="text-[12px] text-[#706f6c] dark:text-[#A1A09A]">{url}</code>
            </div>

            <h3 className="mb-1 font-medium text-[#1b1b18] dark:text-[#EDEDEC]">
                {method}
            </h3>

            {routeName && (
                <p className="mb-1 text-[12px] text-[#706f6c] dark:text-[#A1A09A]">
                    route: <span className="font-mono">{routeName}</span>
                </p>
            )}

            {description && (
                <p className="text-[13px] leading-[20px] text-[#1b1b18] dark:text-[#EDEDEC]">
                    {description}
                </p>
            )}
        </div>
    );
}