"use client";

export default function WaitlistForm() {
  return (
    <form
      className="mt-5 flex w-full max-w-xl flex-col gap-3 md:mt-0 md:flex-row"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Next step: connect this to an email service (ConvertKit/Mailchimp/etc.).");
      }}
    >
      <input
        type="email"
        required
        placeholder="you@email.com"
        className="w-full flex-1 rounded-full border border-white/15 bg-black/25 px-4 py-3 text-white placeholder:text-white/40 outline-none"
      />
      <button
        type="submit"
        className="rounded-full bg-gradient-to-br from-violet-500 to-cyan-300 px-6 py-3 font-semibold text-[#071018] hover:opacity-90"
      >
        Join waitlist
      </button>
    </form>
  );
}
