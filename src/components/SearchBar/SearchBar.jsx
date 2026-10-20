import {useState, useMemo} from "react";

export default function SearchBar() {

    const array =["1","2","3","4","5","6","7","8","9","10"]
    const [searchQuery, setSearchQuery] = useState("");


    return(
        <div className="flex w-full p-4 justify-center items-center">
            <input className="w-full p-2 mt-2  border-2 border-gray-500 rounded-md" type="text" placeholder="Search..." 
            value={searchQuery} onChange={e=>setSearchQuery(e.target.value)}/>
        </div>
    )
}