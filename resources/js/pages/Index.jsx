import AppLayout from '../layouts/app-layout';
import Button from '../components/Button';
import { Link } from '@inertiajs/react';
import { Table } from '../components/Table';

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
                    <div className="px-4 py-5 sm:px-6">
                        <Button as={Link} href="/sharks/create">
                            Create a new shark
                        </Button>
                    </div>

                    <Table
                        data={sharks}
                        columns={[
                            { key: 'name', label: 'Name' },
                            { key: 'species', label: 'Species' },
                            { key: 'createdAt', label: 'Created At' },
                        ]}
                        emptyState={
                            <div className="px-4 py-10 text-center">
                                <p className="mb-4 text-sm text-gray-500">
                                    No sharks yet
                                </p>
                            </div>
                        }
                    />
                </div>
            </div>
        </AppLayout>
    );
}
