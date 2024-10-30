import React from 'react';
import {cn} from "@/lib/utils";

type Props = {
    isAuthenticated:boolean;
    className?: string;
}

const Logo = ({isAuthenticated, className}:Props) => {
    return (
        <a href={isAuthenticated ? route('home') : route('welcome')}>
            <div className={cn(`font-bold text-lg`, className)}>
                Lara<span className={'text-indigo-600'}>Events</span>
            </div>
        </a>
    )
}

export default Logo;
