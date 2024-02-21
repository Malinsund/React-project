
export default function Contact(){

    return(
        <div className="flex min-h-screen  bg-stone-300">
            <div className="justify-center">
                <div>
                    <input className="border w-80 rounded p-1"  type="email" />
                </div>
                <div>
                    <input className="border w-80 rounded p-1" type="text" />
                </div>
                <div>
                    <input className="border w-80 rounded p-1" type="" />
                </div>
                <div>
                    <input className="border w-80 rounded p-1" type="text" />
                </div>
                <div>
                    <input className="cursor-pointer" type="submit" value="Skicka!" />
                </div>

            </div>
        </div>
    )
}