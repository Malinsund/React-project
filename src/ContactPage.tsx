
export default function Contact(){
    const handleSubmit = (event) => {
        event.preventDefault(); 
        
        // Hämtafrån input
        const email = event.target.elements.email.value;
        const name = event.target.elements.name.value;
        const subject = event.target.elements.subject.value;
        const message = event.target.elements.message.value;
        
        // måste innehålla @
        if (!email.includes('@')) {
            alert('Ogiltig e-postadress');
            return; 
        }
        
        // Alla fält är ifyllda
        if (name.trim() === '' || subject.trim() === '' || message.trim() === '') {
            alert('Fyll i alla fält');
            return; 
        }
        
        sendEmail(email, name, subject, message);
        
        // Töm fälten efter skickat mejl
        event.target.elements.email.value = '';
        event.target.elements.name.value = '';
        event.target.elements.subject.value = '';
        event.target.elements.message.value = '';

        // bekräftelsemeddelande
        alert("Ditt meddelande har skickats!");
    };
    
    const sendEmail = async (email: string, name: string, subject: string, message: string) => {

        console.log("Skickar e-post till:", email);
        console.log("Namn:", name);
        console.log("Ämne:", subject);
        console.log("Meddelande:", message);
    };

    return (
        <div className="min-h-screen bg-stone-300">
            <div className="text-center text-3xl ">
                <h1>Kontakta Mig</h1>
            </div>
            <div className="flex justify-center">
                <div className="my-10">
                    <p>Bla bla bla bla</p>
                </div>
                <div className="h-80 w-1 bg-gray-500 mx-20 my-10"></div>

                <form className="text-center m-2 my-10" onSubmit={handleSubmit}>
                    <div>
                        <input className="border w-80 rounded p-1 m-2" type="email" name="email" required placeholder="E-postadress" />
                    </div>
                    <div>
                        <input className="border w-80 rounded p-1 m-2" type="text" name="name" required placeholder="Namn" />
                    </div>
                    <div>
                        <input className="border w-80 rounded p-1 m-2" type="text" name="subject" required placeholder="Ämne" />
                    </div>
                    <div>
                        <textarea className="border w-80 rounded p-1 m-2" name="message" required placeholder="Meddelande"></textarea>
                    </div>
                    <div>
                        <input className="cursor-pointer bg-stone-400 border rounded p-2" type="submit" value="Skicka!" />
                    </div>
                </form>
            </div>
        </div>
    );
}