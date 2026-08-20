export default function ContactForm() {
  return (
    <form className="space-y-8">

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-xs uppercase tracking-[0.18em] text-neutral-600"
        >
          Name
        </label>

        <input
          type="text"
          id="name"
          name="name"
          className="
            w-full
            border-0
            border-b
            border-neutral-400
            bg-transparent
            px-0
            py-3
            text-lg
            outline-none
            transition-colors
            focus:border-black
          "
          required
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-xs uppercase tracking-[0.18em] text-neutral-600"
        >
          Email
        </label>

        <input
          type="email"
          id="email"
          name="email"
          className="
            w-full
            border-0
            border-b
            border-neutral-400
            bg-transparent
            px-0
            py-3
            text-lg
            outline-none
            transition-colors
            focus:border-black
          "
          required
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-xs uppercase tracking-[0.18em] text-neutral-600"
        >
          Message
        </label>

        <textarea
          id="message"
          name="message"
          rows={5}
          className="
            w-full
            resize-none
            border-0
            border-b
            border-neutral-400
            bg-transparent
            px-0
            py-3
            text-lg
            outline-none
            transition-colors
            focus:border-black
          "
          required
        />
      </div>

      <button
        type="submit"
        className="
          mt-4
          border-b
          border-black
          pb-1
          text-xs
          uppercase
          tracking-[0.2em]
          transition-opacity
          hover:opacity-50
        "
      >
        Send Message →
      </button>

    </form>
  );
}