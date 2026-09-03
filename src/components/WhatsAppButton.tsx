import { getWhatsAppLink } from "@/lib/whatsapp";

export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with RAYNEX on WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rx-blue-light sm:bottom-8 sm:right-8"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 [animation:whatsapp-ping_2.4s_cubic-bezier(0,0,0.2,1)_infinite]" />
      <svg
        viewBox="0 0 32 32"
        className="relative h-7 w-7 fill-white"
        aria-hidden="true"
      >
        <path d="M16.02 3C9.4 3 4 8.37 4 14.98c0 2.2.6 4.26 1.63 6.04L4 29l8.2-1.58a12.9 12.9 0 0 0 3.82.58h.01c6.62 0 12.02-5.37 12.02-11.98C28.05 8.4 22.65 3 16.02 3Zm0 21.87h-.01a10.2 10.2 0 0 1-5.2-1.43l-.37-.22-4.87.94.95-4.75-.24-.39a9.86 9.86 0 0 1-1.53-5.24C4.75 8.93 9.86 3.8 16.03 3.8c2.79 0 5.4 1.09 7.37 3.06a10.29 10.29 0 0 1 3.05 7.32c0 6.18-5.13 11.7-10.43 10.68ZM21.6 17.7c-.31-.15-1.8-.89-2.08-.99-.28-.1-.48-.15-.68.15-.2.31-.78.99-.96 1.19-.18.2-.35.22-.66.07-.31-.15-1.3-.48-2.47-1.53-.91-.81-1.53-1.82-1.71-2.12-.18-.31-.02-.47.13-.62.14-.14.31-.36.46-.55.15-.18.2-.31.31-.51.1-.2.05-.39-.02-.55-.08-.15-.68-1.65-.94-2.25-.25-.6-.5-.52-.68-.52h-.58c-.2 0-.52.07-.79.39-.27.31-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.22 1.36.19 1.87.12.57-.09 1.8-.74 2.05-1.44.25-.71.25-1.32.18-1.45-.07-.13-.27-.2-.58-.35Z" />
      </svg>
    </a>
  );
}
