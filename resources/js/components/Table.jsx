export function Table({ data, columns, keyField = 'uuid', emptyState }) {
    if (data.length === 0 && emptyState) {
        return emptyState;
    }

    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    {columns.map((column) => (
                        <th
                            key={column.key}
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                        >
                            {column.label}
                        </th>
                    ))}
                </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 bg-white">
                {data.map((row) => (
                    <tr key={row[keyField]} className="hover:bg-gray-50">
                        {columns.map((column) => (
                            <td
                                key={column.key}
                                className="px-6 py-4 text-sm whitespace-nowrap text-gray-500 first:font-medium first:text-gray-900"
                            >
                                {column.render
                                    ? column.render(row)
                                    : row[column.key]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
