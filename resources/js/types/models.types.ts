export type Event = {
    id: number;
    title: string;
    description: string;
    location: string;
    start_time: string;
    end_time: string;
    created_at: string;
    updated_at: string;
    organizer: User
}

export type User = {
    id: number;
    name: string;
    email: string;
    role: string;
}

export type TicketType = {
    id: number;
    event_id: number;
    type_name:string;
    price:number;
    quantity:number;
    available_quantity:number;
}
