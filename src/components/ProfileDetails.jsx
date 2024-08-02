// ProfileDetails.js
const ProfileDetails = ({ profile }) => {
    return (
        <div className="mx-auto mt-6 max-w-5xl px-4 sm:px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                {Object.keys(profile.fields).map((field) => (
                    <div key={field} className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">{field}</dt>
                        <dd className="mt-1 text-sm text-gray-900">{profile.fields[field]}</dd>
                    </div>
                ))}
            </dl>
        </div>
    );
};

export default ProfileDetails;
