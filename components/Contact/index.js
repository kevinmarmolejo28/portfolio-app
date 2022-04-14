/* Own Components */
import ContactCard from "components/ContactCard";
import EmailOutlined from "components/Icons/EmailOutlined";
import LinkedinOutlined from "components/Icons/LinkedinOutlined";

export default function Contact() {
  return (
    <div className="w-site py-16">
      <h1 className="text-center mb-12 font-bold">Contact</h1>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <ContactCard
          title="Gmail"
          description="kevin.marmolejo.dev@gmail.com"
          alt="Gmail"
          icon={<EmailOutlined />}
          redirect="mailto:kevin.marmolejo.dev@gmail.com"
        />

        <ContactCard
          title="LinkedIn"
          description="kevin-marmolejo-solis"
          alt="LinkedIn"
          icon={<LinkedinOutlined />}
          redirect="https://www.linkedin.com/in/kevin-marmolejo-solis"
        />
      </div>
    </div>
  );
}
