import {Event} from '@/types/models.types'

export type PaginatedEvents = {
    data: Event[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    next_page_url: string | null;
    prev_page_url: string | null;
}
