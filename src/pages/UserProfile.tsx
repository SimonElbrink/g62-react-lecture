import {useParams} from 'react-router-dom';


const UserProfile = () => {

    const {userId} = useParams<{ userId: string }>();

    //useEffect() - Fetch the userinfo

    return (

        <div
            className="relative flex flex-col justify-center items-center py-28 px-4 overflow-hidden bg-white border-b border-slate-100">
            <div className="p-4">
                <h1 className="text-2xl font-bold text-purple-600">User Profile</h1>
                <p>Viewing profile for User ID: <span className="font-mono bg-yellow-100 p-1">{userId}</span></p>
                <p className="text-sm text-gray-500 mt-2 italic">Params are extracted from the URL using the `useParams` hook.</p>
            </div>


        </div>
    );
};

export default UserProfile;