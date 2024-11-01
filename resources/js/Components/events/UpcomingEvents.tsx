import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/Components/ui/card";
import {Avatar, AvatarFallback} from "@/Components/ui/avatar";
import dayjs from "dayjs";
import {Event} from "@/types/models.types";

type Props = {
    eventsWithPurchaseCounts: {
        purchaseCount: number;
        event: Event,
        capacity:number;
    }[]
}

const UpcomingEvents = ({eventsWithPurchaseCounts}:Props) => {
    return (
        <Card className="col-span-3">
            <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>You have {eventsWithPurchaseCounts.length} events coming up</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-8">
                    {eventsWithPurchaseCounts.map(({event, purchaseCount, capacity}) => (
                        <div key={event.id} className="flex items-center">
                            <Avatar className="h-9 w-9">
                                <AvatarFallback>{event.title.slice(0, 2)}</AvatarFallback>
                            </Avatar>
                            <div className="ml-4 space-y-1">
                                <p className="text-sm font-medium leading-none">{event.title} - {event.id}</p>
                                <p className="text-sm text-muted-foreground">
                                    {dayjs(new Date(event.start_time)).format('MMM D, YYYY')}
                                </p>
                            </div>
                            <div className="ml-auto font-medium">
                                {purchaseCount}/{capacity}
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

export default UpcomingEvents;
