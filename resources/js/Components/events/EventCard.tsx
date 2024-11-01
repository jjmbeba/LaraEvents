import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/Components/ui/card";
import {AspectRatio} from "@/Components/ui/aspect-ratio";
import {Link} from "@inertiajs/react";
import {buttonVariants} from "@/Components/ui/button";
import {Badge} from "@/Components/ui/badge";
import dayjs from "dayjs";
import {Event} from '@/types/models.types'


type Props = {
    event:Event
}

const EventCard = ({event}:Props) => {
    const {id, description, title, end_time, start_time, location, organizer} = event;

    return (
        <Card className="w-[350px]">
            <CardHeader>
                <div className="h-[200px]">
                    <AspectRatio>
                        <img
                            className="rounded-[0.125rem]"
                            src="https://images.unsplash.com/photo-1664575601711-67110e027b9b?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="card-image"
                        />
                    </AspectRatio>
                </div>
                <CardTitle className={'capitalize pt-4'}>
                    <Link href={route('events.show', id)} className={buttonVariants({
                        variant: 'linkHover2',
                        className: 'pl-0 after:w-[93%]'
                    })}>
                        {title}
                    </Link>
                    <div className={'flex items-center gap-3'}>
                        <Badge>
                            {dayjs(start_time).format('D MMM')} - {dayjs(end_time).format('D MMM')}
                        </Badge>
                        <Badge>
                            {location}
                        </Badge>
                    </div>
                </CardTitle>
                <CardDescription className={'pt-3'}>{description}</CardDescription>
            </CardHeader>
            <CardContent className={'text-muted-foreground text-sm'}>
                Organizer: {organizer.name}
            </CardContent>
        </Card>
    )
}

export default EventCard;
