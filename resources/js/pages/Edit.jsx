import AppLayout from '../layouts/app-layout';

export default function Edit() {
    return (
        <AppLayout title="Edit" heading="Edit shark">
            <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6">
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        Edit an existing shark in the database.
                    </p>
                </div>
            </div>
        </AppLayout>
    );
}
