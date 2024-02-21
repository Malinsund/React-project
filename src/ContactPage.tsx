
export default function Contact(){

    return(
        <div className="min-h-screen  bg-stone-300">
            <div className="text-center text-3xl ">
                <h1>Kontakta Mig</h1>
            </div>
        <div className="flex justify-center">
            <div className="my-10">
                <p>Bla bla bla bla</p>
            </div>
        <div className="h-80 w-1 bg-gray-500 mx-20 my-10"></div>

            <div className="text-center m-2 my-10">
                <div>
                    <input className="border w-80 rounded p-1 m-2"  type="email" />
                </div>
                <div>
                    <input className="border w-80 rounded p-1 m-2" type="text" />
                </div>
                <div>
                    <input className="border w-80 rounded p-1 m-2" type="text" />
                </div>
                <div>
                    <input className="border w-80 rounded p-1 m-2" type="text" />
                </div>
                <div>
                    <input className="cursor-pointer bg-stone-400 border rounded p-2" type="submit" value="Skicka!" />
                </div>

            </div>
            </div>
        </div>
    )
}