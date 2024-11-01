import React from "react";
import {Event, TicketType, User} from '@/types/models.types'
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {Head} from "@inertiajs/react";
import {AspectRatio} from "@/Components/ui/aspect-ratio";
import {Badge} from "@/Components/ui/badge";
import dayjs from "dayjs";
import {clsx} from "clsx";
import {Button} from "@/Components/ui/button";
import {ChevronLeft} from "lucide-react";

type Props = {
    event: Event,
    organizer: User,
    ticketTypes: TicketType[]
}

const Show = ({event, organizer, ticketTypes}: Props) => {
    return <AuthenticatedLayout header={
        <h2 className="capitalize text-xl font-semibold leading-tight text-gray-800">
            {event.title}
        </h2>
    }>
        <Head title={event.title}/>
        <a href={route('events.index')}>
            <Button size={'icon'} variant={'outline'} className={'mt-10'}>
                <ChevronLeft />
            </Button>
        </a>
        <div className={'mt-10 flex items-start justify-evenly gap-10'}>
            <div className="w-[55%]">
                <AspectRatio>
                    <img
                        className="rounded-[0.125rem]"
                        src="https://images.unsplash.com/photo-1664575601711-67110e027b9b?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt={event.title}
                    />
                </AspectRatio>
            </div>
            <div className={'flex flex-col justify-between h-[359px]'}>
                <div className={'flex-1'}>
                    <h1 className={'text-4xl capitalize font-bold'}>
                        {event.title}
                    </h1>
                    <p className={'mt-5 text-muted-foreground max-w-[40vw]'}>
                        {event.description}
                    </p>
                    <div className={'flex items-center mt-5 gap-3'}>
                        <Badge>
                            {event.location}
                        </Badge>
                        <Badge>
                            {dayjs(event.start_time).format('D MMM')} to {dayjs(event.end_time).format('D MMM')}
                        </Badge>
                        <Badge>
                            {dayjs(event.start_time).format('h a')} to {dayjs(event.end_time).format('h a')}
                        </Badge>
                    </div>
                    <div className={'mt-4 flex items-center gap-4'}>
                        {ticketTypes.map(({id, type_name, available_quantity}) => (
                            <Badge key={id} variant={'outline'} className={clsx({
                                'text-red-600': available_quantity < 10,
                                'text-yellow-600': available_quantity < 20 && available_quantity > 10,
                                'text-green-600': available_quantity > 20,
                                'text-muted-foreground': available_quantity === 0
                            })}>
                                {type_name} - {available_quantity} remaining
                            </Badge>
                        ))}
                    </div>
                    <p className={'text-muted-foreground mt-5 text-sm'}>
                        Organized by: {organizer.name}
                    </p>
                </div>
                <div>
                    <Button variant={'gooeyLeft'}>
                        Book Now
                    </Button>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
}

export default Show;
