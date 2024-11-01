import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import {Head} from "@inertiajs/react";

const Create = () => {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Create An Event
                </h2>
            }
        >
            <Head title={'Create An Event'} />
        </AuthenticatedLayout>
    )
}

export default Create;
