import React from 'react';
import {usePage} from "@inertiajs/react";
import Logo from "@/Components/Logo";
import {buttonVariants} from "@/Components/ui/button";

const Navbar = () => {
    const user = usePage().props.auth.user;

    return (
        <nav className={'sticky top-0 z-10 bg-white px-20 py-3 flex items-center justify-between backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200'}>
            <Logo isAuthenticated={!!user} />
            <div className={'flex items-center gap-4'}>
                <a className={buttonVariants({
                    variant: 'ringHover'
                })} href={route('register')}>
                    Register
                </a>
                <a className={buttonVariants({
                    variant: 'secondary'
                })} href={route('login')}>
                    Login
                </a>
            </div>
        </nav>
    )
}

export default Navbar;
