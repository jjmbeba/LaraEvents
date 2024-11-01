import React from "react";
import {Button} from "@/Components/ui/button";
import {PlusCircle} from "lucide-react";

const DashboardHeader = () => {
    return (<header className="flex h-16 items-center justify-end border-b px-4 ">
        <div className="flex items-center space-x-4">
            <a href={route('events.create')}>
                <Button variant="outline">
                    <PlusCircle className="mr-2 h-4 w-4"/>
                    Create Event
                </Button>
            </a>
        </div>
    </header>)
}

export default DashboardHeader;
