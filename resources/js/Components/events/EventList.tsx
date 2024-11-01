import React from "react";
import {Event} from '@/types/models.types'
import EventCard from "@/Components/events/EventCard";

type Props = {
    events:Event[]
}

const EventList = ({events}:Props) => {
    return (
        <div className={'mt-10 grid grid-cols-3 gap-10'}>
            {events.map((event) => (
                <EventCard key={event.id} event={event} />
            ))}
        </div>
    )
}

export default EventList;
