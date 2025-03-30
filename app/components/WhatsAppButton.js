export default function WhatsAppButton() {
  const phoneNumber = "201027171423";
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <button className="px-4 py-2 bg-green-500 text-white rounded-lg">
        Talk with me on WhatsApp
      </button>
    </a>
  );
}