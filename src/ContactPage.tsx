import { FormEvent } from "react";

export default function Contact() {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const email = formData.get("email") as string;
    const name = formData.get("name") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    // måste innehålla @
    if (!email.includes("@")) {
      alert("Ogiltig e-postadress");
      return;
    }

    if (name.trim() === "" || subject.trim() === "" || message.trim() === "") {
      alert("Fyll i alla fält");
      return;
    }

    sendEmail(email, name, subject, message);

    (event.target as HTMLFormElement).reset();

    // bekräftelsemeddelande
    alert("Ditt meddelande har skickats!");
  };

  const sendEmail = async (
    email: string,
    name: string,
    subject: string,
    message: string
  ) => {
    console.log("Skickar e-post till:", email);
    console.log("Namn:", name);
    console.log("Ämne:", subject);
    console.log("Meddelande:", message);
  };

  return (
    <div className="min-h-screen">
      <div className="text-center text-3xl ">
        <h1>Kontakta Mig</h1>
      </div>
      <div className="lg:flex justify-center">
        <div className="my-10 w-80">
          <p>
            Om du har några frågor eller funderingar så tveka inte på att
            kontakta mig! fyll i formuläret här så svarar jag så snart jag kan!
            ha det fint.
          </p>
        </div>
        <div className="lg:visible lg:h-80 w-1 bg-gray-500 mx-20 lg:my-10"></div>

        <form className="text-center m-2 my-10" onSubmit={handleSubmit}>
          <div>
            <input
              className="border w-80 rounded p-1 m-2"
              type="email"
              name="email"
              required
              placeholder="E-postadress"
            />
          </div>
          <div>
            <input
              className="border w-80 rounded p-1 m-2"
              type="text"
              name="name"
              required
              placeholder="Namn"
            />
          </div>
          <div>
            <input
              className="border w-80 rounded p-1 m-2"
              type="text"
              name="subject"
              required
              placeholder="Ämne"
            />
          </div>
          <div>
            <textarea
              className="border w-80 rounded p-1 m-2"
              name="message"
              required
              placeholder="Meddelande"
            ></textarea>
          </div>
          <div>
            <input
              className="cursor-pointer bg-stone-400 border rounded p-2"
              type="submit"
              value="Skicka!"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
