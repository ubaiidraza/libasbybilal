import { useState } from "react";

function Contact() {
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    type: "Simple Suit",
    text: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `
🧵 New Tailoring Inquiry

👤 Name: ${info.name}
📱 Phone: ${info.phone}
✂️ Service: ${info.type}

📝 Stitching Details:
${info.text}
    `;

    const whatsappNumber = "923112468263";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
      <div className="text-center space-y-2">
        <span className="text-xs uppercase tracking-[0.4em] text-[#D4AF37] block font-mono">
          Contact Us
        </span>

        <h1 className="text-4xl md:text-5xl font-serif">
          Tailoring Inquiry Form
        </h1>

        <div className="w-16 h-[1px] bg-[#D4AF37]/40 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Form */}
        <div className="gold-border-card p-8 md:p-10 space-y-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-[#FDFBF7]/60 mb-2 font-mono">
                Full Name
              </label>

              <input
                type="text"
                required
                className="w-full bg-[#0D0D0D] border border-[#D4AF37]/20 px-4 py-3 text-xs text-[#FDFBF7] focus:outline-none focus:border-[#D4AF37]"
                placeholder="Enter your name"
                value={info.name}
                onChange={(e) =>
                  setInfo({ ...info, name: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest text-[#FDFBF7]/60 mb-2 font-mono">
                WhatsApp Number
              </label>

              <input
                type="tel"
                required
                className="w-full bg-[#0D0D0D] border border-[#D4AF37]/20 px-4 py-3 text-xs text-[#FDFBF7] focus:outline-none focus:border-[#D4AF37]"
                placeholder="03XXXXXXXXX"
                value={info.phone}
                onChange={(e) =>
                  setInfo({ ...info, phone: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest text-[#FDFBF7]/60 mb-2 font-mono">
                Service Type
              </label>

              <select
                className="w-full bg-[#0D0D0D] border border-[#D4AF37]/20 px-4 py-3 text-xs text-[#FDFBF7] focus:outline-none focus:border-[#D4AF37]"
                value={info.type}
                onChange={(e) =>
                  setInfo({ ...info, type: e.target.value })
                }
              >
                <option value="Simple Suit">
                  Simple Suit Stitching
                </option>

                <option value="Party Wear">
                  Party Wear Stitching
                </option>

                <option value="Bridal Dress">
                  Bridal Dress Stitching
                </option>

                <option value="Maxi">
                  Maxi Stitching
                </option>

                <option value="Alteration">
                  Alteration / Fitting
                </option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest text-[#FDFBF7]/60 mb-2 font-mono">
                Stitching Requirements
              </label>

              <textarea
                rows="5"
                className="w-full bg-[#0D0D0D] border border-[#D4AF37]/20 px-4 py-3 text-xs text-[#FDFBF7] focus:outline-none focus:border-[#D4AF37]"
                placeholder="Dress style, delivery date, stitching details..."
                value={info.text}
                onChange={(e) =>
                  setInfo({ ...info, text: e.target.value })
                }
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full gold-gradient-btn text-black text-xs uppercase tracking-widest font-bold py-4 transition-transform duration-300 hover:scale-[1.01]"
            >
              Send Inquiry on WhatsApp
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="space-y-3">
          <h3 className="text-xs uppercase tracking-widest font-mono text-[#D4AF37]">
            Shop Location
          </h3>

          <div className="w-full h-96 border border-[#D4AF37]/20 relative overflow-hidden bg-[#121212] p-1">
            <iframe
              title="Karachi Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14484.144415843477!2d67.0287163!3d24.8284589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33dc7ec3849d1%3A0x289acbe319e798!2sClifton%2C%20Karachi!5e0!3m2!1sen!2spk!4v1716982400000!5m2!1sen!2spk"
              className="w-full h-full border-0 opacity-40 invert-[90%] hue-rotate-[180deg] brightness-[85%]"
              loading="lazy"
            ></iframe>

            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;