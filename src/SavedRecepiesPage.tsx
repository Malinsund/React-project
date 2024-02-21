import { HeartIcon } from "@heroicons/react/24/outline";

export default function SavedRecepies(){

    return(
        <div className="flex m-10 justify-center items-center">
            <HeartIcon className="w-20 h-20 "/>
            <h1 className="text-lg">Dina Favoriter</h1>
            <HeartIcon className="w-20 h-20"/>
        </div>
    )

}