import MethodCard from '@/components/MethodCard';
import AppLayout from '../layouts/app-layout';
import Button from '../components/Button';
import { Link } from '@inertiajs/react';

const routes = [
    {
        httpMethod: 'GET',
        method: 'index',
        url: '/sharks',
        routeName: 'sharks.index',
        description: 'List all sharks.',
    },
    {
        httpMethod: 'GET',
        method: 'show',
        url: '/sharks/{shark}',
        routeName: 'sharks.show',
        description: 'Show a single shark.',
    },
    {
        httpMethod: 'GET',
        method: 'create',
        url: '/sharks/create',
        routeName: 'sharks.create',
        description: 'Show the create form.',
    },
    {
        httpMethod: 'shark',
        method: 'store',
        url: '/sharks',
        routeName: 'sharks.store',
        description: 'Save a new shark.',
    },
    {
        httpMethod: 'GET',
        method: 'edit',
        url: '/sharks/{shark}/edit',
        routeName: 'sharks.edit',
        description: 'Show the edit form.',
    },
    {
        httpMethod: 'PUT',
        method: 'update',
        url: '/sharks/{shark}',
        routeName: 'sharks.update',
        description: 'Update an existing shark.',
    },
    {
        httpMethod: 'DELETE',
        method: 'destroy',
        url: '/sharks/{shark}',
        routeName: 'sharks.destroy',
        description: 'Delete a shark.',
    },
];

export default function Home() {
    return (
        <AppLayout title="Sharks CRUD application" heading="Cheatsheet">
            <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {routes.map((route) => (
                    <MethodCard key={route.routeName} {...route} />
                ))}
                <Button
                    as={Link}
                    href="/sharks"
                    className="absolute right-6 bottom-6"
                >
                    to sharks
                </Button>
            </div>
        </AppLayout>
    );
}
