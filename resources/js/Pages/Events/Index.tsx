import React from "react";
import {Head, Link} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {PaginatedEvents} from "@/types/events.types";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card"
import {AspectRatio} from "@/Components/ui/aspect-ratio";
import {buttonVariants} from "@/Components/ui/button";
import {Badge} from "@/Components/ui/badge";
import dayjs from "dayjs";


type Props = {
    events:PaginatedEvents
}

const Index = ({events}:Props) => {
    console.log(events)

    return (
        <AuthenticatedLayout header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800">
                Events
            </h2>
        }>
            <Head title={'Events'}/>
           <div className={'px-20 mt-10 grid grid-cols-3 gap-10'}>
               {events.data.map(({id, description, title, end_time, start_time, location, organizer}) => (
                   <Card key={id} className="w-[350px]">
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
                               <Link href={route('events.index')} className={buttonVariants({
                                   variant: 'linkHover2',
                                   className:'pl-0'
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
               ))}
           </div>
        </AuthenticatedLayout>
    )
}

export default Index;
