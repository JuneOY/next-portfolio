"use client";

import "../../public/style/ContactForm.css";

type Props = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm({ name, email, message }: Props) {
  return (
    <form id="contact-form" className="text-sm">
      <div className="flex flex-col">
        <label htmlFor="name" className="mb-3">
          _name:
        </label>
        <input
          type="text"
          id="name-input"
          name="name"
          placeholder={name}
          className="p-2 mb-5 placeholder-slate-600"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="mb-3">
          _email:
        </label>
        <input
          type="email"
          id="email-input"
          name="email"
          placeholder={email}
          className="p-2 mb-5 placeholder-slate-600"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="message" className="mb-3">
          _message:
        </label>
        <textarea
          id="message-input"
          name="message"
          placeholder={message}
          className="placeholder-slate-600"
          required
        ></textarea>
      </div>
      <button id="submit-button" type="submit" className="py-2 px-4">
        submit-message
      </button>
    </form>
  );
}
