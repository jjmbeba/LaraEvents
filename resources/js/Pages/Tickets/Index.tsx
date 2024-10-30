import React from "react";
import {Head} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const Index = () => {
    return (
        <AuthenticatedLayout header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800">
                My Tickets
            </h2>
        }>
            <Head title={'My Tickets'}/>
        </AuthenticatedLayout>
    )
}

export default Index;
