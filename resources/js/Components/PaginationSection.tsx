import React from "react";
import {
    Pagination,
    PaginationContent, PaginationEllipsis,
    PaginationItem,
    PaginationLink, PaginationNext,
    PaginationPrevious
} from "@/Components/ui/pagination";
import {PaginationData} from "@/types/events.types";

type Props = {
    data:PaginationData
}

const PaginationSection = ({data}:Props) => {
    const { prev_page_url, next_page_url, first_page_url, last_page_url, last_page, current_page } = data;

    return (
        <div className={'grid place-items-center mt-5'}>
            <Pagination className={'w-1/3'}>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            className={prev_page_url === null ? 'text-muted-foreground hover:text-muted-foreground cursor-not-allowed' : ''}
                            href={prev_page_url ?? undefined}/>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href={first_page_url ?? undefined}>
                            1
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis/>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href={last_page_url ?? undefined}>
                            {last_page}
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext
                            className={next_page_url === null ? 'text-muted-foreground hover:text-muted-foreground cursor-not-allowed' : ''}
                            href={next_page_url ?? undefined}/>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
            <p className={'border-yellow-500 text-muted-foreground text-xs text-nowrap'}>
                Showing page {current_page} out of {last_page} {last_page < 2 ? 'page' : 'pages'}
            </p>
        </div>
    )
}

export default PaginationSection;
