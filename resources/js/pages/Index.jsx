import AppLayout from "../layouts/app-layout";
import Button from '../components/Button';
import { Link } from "@inertiajs/react";

export default function Index({ sharks }) {
    return (
        <AppLayout title="Index" heading="Sharks' overview">
            <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        List of all sharks in the database.
                    </p>
                </div>

                <div className="border-t border-gray-200">
                    {sharks.length === 0 ? (
                        <div className="px-4 py-10 text-center">
                            <p className="mb-4 text-sm text-gray-500">
                                No sharks yet
                            </p>

                            <Button as={Link} href="/">
                                Create a new shark
                            </Button>
                        </div>
                    ) : (
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                                    >
                                        Species
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
                                    >
                                        Created At
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-200 bg-white">
                                {sharks.map((shark) => (
                                    <tr key={shark.uuid} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900">
                                            {shark.name}
                                        </td>
                                        <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                                            {shark.species}
                                        </td>
                                        <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
                                            {shark.createdAt}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}