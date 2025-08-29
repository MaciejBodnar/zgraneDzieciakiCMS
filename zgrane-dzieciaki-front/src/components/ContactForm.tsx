"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone: string;
};

const ContactForm = () => {
  const [formDataValues, setFormDataValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "",
  });
  const [phoneError, setPhoneError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormDataValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneChange = (e: { target: { value: string } }) => {
    const value = e.target.value.replace(/[^\d]/g, ""); // Remove all non-digits

    let formattedNumber = "";
    if (value.length <= 3) {
      formattedNumber = value;
    } else if (value.length <= 6) {
      formattedNumber = value.slice(0, 3) + " " + value.slice(3);
    } else {
      formattedNumber =
        value.slice(0, 3) + " " + value.slice(3, 6) + " " + value.slice(6, 9);
    }

    setFormDataValues((prev) => ({
      ...prev,
      phone: formattedNumber,
    }));

    // Validate the phone number
    const phoneRegex = /^\d{3}\s\d{3}\s\d{3}$/;
    if (value.length > 0 && !phoneRegex.test(formattedNumber)) {
      setPhoneError("Proszę wprowadzić 9 cyfr numeru telefonu");
    } else {
      setPhoneError("");
    }
  };

  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    setIsSubmitted(true);
    window.location.href = `mailto:julitta.janiak@gmail.com?subject=${formData.subject}&body=Dzień dobry, nazywam się ${formData.name}. ${formData.message} (${formData.email} - ${formData.phone})`;
  };
  if (isSubmitted) {
    return (
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
        <div className="text-center py-8">
          <div className="mb-6">
            <svg
              className="mx-auto h-16 w-16 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Dziękujemy za wiadomość!
          </h2>
          <p className="text-gray-600 mb-8">
            Odpowiemy najszybciej jak to możliwe.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormDataValues({
                name: "",
                email: "",
                phone: "",
                message: "",
                subject: "",
              });
            }}
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Wyślij kolejną wiadomość
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Napisz do nas</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Imię i nazwisko
            </label>
            <input
              {...register("name")}
              type="text"
              id="name"
              name="name"
              value={formDataValues.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
              placeholder="Imię i nazwisko"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              name="email"
              value={formDataValues.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
              placeholder="e-mail@poczta.pl"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Telefon
          </label>
          <input
            {...register("phone")}
            type="tel"
            id="phone"
            name="phone"
            value={formDataValues.phone}
            onChange={handlePhoneChange}
            placeholder="XXX XXX XXX"
            className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500`}
          />
          {phoneError && (
            <p className="mt-1 text-sm text-red-600">{phoneError}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Temat
          </label>
          <input
            {...register("subject")}
            id="subject"
            name="subject"
            value={formDataValues.subject}
            onChange={handleChange}
            placeholder="Temat maila"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Wiadomość
          </label>
          <textarea
            {...register("message")}
            id="message"
            name="message"
            value={formDataValues.message}
            onChange={handleChange}
            rows={4}
            placeholder="Twoja wiadomość..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Wyślij wiadomość
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
