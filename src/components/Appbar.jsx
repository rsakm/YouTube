import { Searchbar } from "./Searchbar"

export const Appbar = ()=>{

    return (
        <div className="flex justify-between">

            <div className="col-span-1">
                YouTube
            </div>
            <div>
                <Searchbar/>
            </div>
            <div>
                Sign in
            </div>

        </div>
    )
}