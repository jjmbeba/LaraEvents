export type PaginationData = {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
    next_page_url: string | null;
    prev_page_url: string | null;
    first_page_url:string | null;
    last_page_url:string | null;
}
