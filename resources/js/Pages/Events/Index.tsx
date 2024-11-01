import React from "react";
import {Head} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {PaginationData} from "@/types/events.types";
import EventList from "@/Components/events/EventList";
import {Event} from "@/types/models.types";
import PaginationSection from "@/Components/PaginationSection";


type Props = {
    events: PaginationData &
        {
            data: Event[];
        }
}

const Index = ({events}: Props) => {
    return (
        <AuthenticatedLayout header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800">
                Events
            </h2>
        }>
            <Head title={'Events'}/>
            <EventList events={events.data}/>
            <PaginationSection data={events}/>
        </AuthenticatedLayout>
    )
}

export default Index;
