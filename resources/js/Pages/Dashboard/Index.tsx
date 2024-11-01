import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import {Head} from "@inertiajs/react";
import dayjs from "dayjs";
import {Event} from '@/types/models.types'
import isBetween from 'dayjs/plugin/isBetween'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import UpcomingEvents from "@/Components/events/UpcomingEvents";
import DashboardHeader from "@/Components/dashboard/header";
import DashboardOverview from "@/Components/dashboard/overview";
import RevenueOverview from "@/Components/dashboard/revenue-overview";
import RecentActivity from "@/Components/dashboard/recent-activity";
import EventCalendar from "@/Components/dashboard/event-calendar";

dayjs.extend(isBetween)
dayjs.extend(isSameOrAfter)

type Props = {
    eventsWithPurchaseCounts: {
        purchaseCount: number;
        event: Event,
        capacity: number;
    }[];
    totalTicketsSold: number;
}

const Index = ({eventsWithPurchaseCounts, totalTicketsSold}: Props) => {
    const eventsThisWeek = eventsWithPurchaseCounts.filter(({event}) => {
        return dayjs(event.start_time).isBetween(dayjs().startOf('week'), dayjs().endOf('week')) && dayjs(event.start_time).isSameOrAfter(new Date())
    });

    return (
        <AuthenticatedLayout header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800">
                Dashboard
            </h2>
        }>
            <Head title={'Dashboard'}/>
            <div className="flex flex-1 flex-col overflow-hidden">
                <DashboardHeader/>
                <main className="flex-1 overflow-y-auto bg-secondary/10 p-4">
                    <DashboardOverview
                        numberOfEvents={eventsWithPurchaseCounts.length}
                        numberOfEventsThisWeek={eventsThisWeek.length}
                        totalTicketsSold={totalTicketsSold}
                    />
                    <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                        <RevenueOverview/>
                        <UpcomingEvents eventsWithPurchaseCounts={eventsWithPurchaseCounts}/>
                    </div>
                    <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                        <RecentActivity/>
                        <EventCalendar/>
                    </div>
                </main>
            </div>
        </AuthenticatedLayout>
    )
}

export default Index;
