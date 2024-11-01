import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/Components/ui/card";
import {Avatar, AvatarFallback} from "@/Components/ui/avatar";

const RecentActivity = () => {
    const recentActivity = [
        {id: 1, action: 'New ticket sale', event: 'Tech Conference 2024', time: '5 minutes ago'},
        {id: 2, action: 'New registration', event: 'Music Festival', time: '10 minutes ago'},
        {id: 3, action: 'Refund requested', event: 'Food & Wine Expo', time: '1 hour ago'},
        {id: 4, action: 'Event updated', event: 'Tech Conference 2024', time: '2 hours ago'},
    ]

    return (
        <Card className="col-span-4">
            <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>You had 4 activities in the last 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-8">
                    {recentActivity.map((activity) => (
                        <div key={activity.id} className="flex items-center">
                            <Avatar className="h-9 w-9">
                                <AvatarFallback>{activity.action.slice(0, 2)}</AvatarFallback>
                            </Avatar>
                            <div className="ml-4 space-y-1">
                                <p className="text-sm font-medium leading-none">{activity.action}</p>
                                <p className="text-sm text-muted-foreground">{activity.event}</p>
                            </div>
                            <div className="ml-auto font-medium">{activity.time}</div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

export default RecentActivity;
