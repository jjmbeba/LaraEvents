import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/Components/ui/card";
import {Calendar} from "@/Components/ui/calendar";

const EventCalendar = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());

    return (
        <Card className="col-span-3">
            <CardHeader>
                <CardTitle>Event Calendar</CardTitle>
                <CardDescription>Upcoming events for the next 30 days</CardDescription>
            </CardHeader>
            <CardContent>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                    initialFocus
                />
            </CardContent>
        </Card>
    )
}

export default EventCalendar;
