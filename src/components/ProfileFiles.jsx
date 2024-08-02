// ProfileFiles.js
const ProfileFiles = ({ files }) => {
    return (
        <div className="mx-auto max-w-5xl px-4 pb-12 sm:px-6 lg:px-8">
            <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 mt-12">
                {files.map((file) => (
                    <li key={file.source} className="relative">
                        <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                            <img src={file.source} alt="" className="pointer-events-none object-cover group-hover:opacity-75" />

                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProfileFiles;
