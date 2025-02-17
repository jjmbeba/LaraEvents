import ApplicationLogo from '@/Components/ApplicationLogo';
import {Link} from '@inertiajs/react';
import {PropsWithChildren} from 'react';
import Logo from "@/Components/Logo";

export default function Guest({children}: PropsWithChildren) {
    return (
        <div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0">
            <div>
                <Logo isAuthenticated={false} className="text-2xl fill-current text-gray-500"/>
            </div>

            <div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
