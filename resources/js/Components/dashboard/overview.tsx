import React from "react";
import {Card, CardContent, CardHeader, CardTitle} from "@/Components/ui/card";
import {DollarSign, Ticket, Users} from "lucide-react";

type Props = {
    numberOfEvents:number;
    numberofEventsThisWeek:number;
}

const DashboardOverview = ({numberOfEvents, numberofEventsThisWeek}:Props) => {
    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground"/>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">$45,231.89</div>
                    <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Tickets Sold</CardTitle>
                    <Ticket className="h-4 w-4 text-muted-foreground"/>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">1,680</div>
                    <p className="text-xs text-muted-foreground">+180 in the last hour</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Events</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground"/>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">
                        {numberOfEvents}
                    </div>
                    <p className="text-xs text-muted-foreground">{numberofEventsThisWeek} starting this
                        week</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Attendees</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground"/>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">1,800</div>
                    <p className="text-xs text-muted-foreground">+201 new registrations</p>
                </CardContent>
            </Card>
        </div>
    )
}

export default DashboardOverview;
