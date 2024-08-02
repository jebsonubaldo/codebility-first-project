// Profile.js
import ProfileHeader from '../components/ProfileHeader';
import ProfileDetails from '../components/ProfileDetails';
import ProfileServices from '../components/ProfileServices';
import ProfileFiles from '../components/ProfileFiles';

const profile = {
    name: 'Hussain Watkins',
    imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    coverImageUrl:
        'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    fields: {
        Title: 'Chief Technology Officer',
        Location: 'San Francisco',
        Phone: '(555) 123-4567',
        Email: 'hussainwatkins@gmail.com',
    },
};

const files = [
    {
        source:
            'https://images.unsplash.com/photo-1651129518942-21b21bd497e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        source:
            'https://images.unsplash.com/photo-1651129525259-a283dc1a66a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        source:
            'https://images.unsplash.com/photo-1555421689-3f034debb7a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        source:
            'https://images.unsplash.com/photo-1651129523724-b8386b9aea41?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
];

export default function Profile() {
    return (
        <>
            <div className="flex h-full">
                <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
                    <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">
                        <article>
                            <ProfileHeader profile={profile} />
                            <div className="mt-6 sm:mt-2 2xl:mt-5">
                                <div className="border-b border-gray-200">
                                    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                                        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                                            <a
                                                href="#"
                                                className="border-pink-500 text-gray-900 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
                                                aria-current="page"
                                            >
                                                Overview
                                            </a>
                                            <a
                                                href="#"
                                                className="border-transparent text-gray-500 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium hover:border-gray-300 hover:text-gray-700"
                                            >
                                                Details
                                            </a>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <ProfileDetails profile={profile} />
                            <ProfileServices />
                            <ProfileFiles files={files} />
                        </article>
                    </main>
                </div>
            </div>
            <footer>
                <div className="mt-8 mb-6 md:order-1 md:mt-0">
                    <p className="text-center text-xs leading-5 text-gray-500">
                        &copy; 2024 SwiftTech, Inc. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    );
}
