import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  const phoneNumber = "923112468263"; // apna number yahan lagao

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=Assalamualaikum%20I%20want%20to%20know%20more%20about%20your%20stitching%20services`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="bg-green-500 hover:scale-110 transition-all duration-300 p-4 rounded-full shadow-lg">
        <FaWhatsapp className="text-white text-4xl" />
      </div>
    </a>
  );
}

export default WhatsAppButton;