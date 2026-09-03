/**
 * WhatsApp contact config.
 *
 * Replace `number` with the real RAYNEX WhatsApp number in international
 * format, digits only, no "+", no spaces or dashes (e.g. Pakistan number
 * 0300 1234567 becomes "923001234567").
 *
 * `defaultMessage` is pre-filled into the chat when a visitor taps the
 * WhatsApp button — edit the wording any time, no code changes needed
 * elsewhere.
 */
export const whatsapp = {
  number: "10000000000", // [Placeholder — replace with real WhatsApp number]
  defaultMessage: "Hi RAYNEX, I'd like to know more about your products.",
};

export function getWhatsAppLink(message: string = whatsapp.defaultMessage) {
  return `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(message)}`;
}
