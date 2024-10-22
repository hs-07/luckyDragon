import React, { useState } from "react";

const SignUpForm = ({ setIsSubmitted }) => {
  const initialFormState = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    referralCode: "",
    termsAccepted: false,
  };

  const [formData, setFormData] = useState(initialFormState);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      setMessage("Please accept the Terms and Conditions");
      return;
    }

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzb1NCy1bHXwH8ydUxjuQ5ycfu-_csuw14CvEBX3_b91-OsFFnWRhoPwLnLg0dSvfVbDg/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        setFormData(initialFormState);
      } else {
        setIsSubmitted(false);
      }
    } catch (error) {
      setMessage("Error submitting the form: " + error.message);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto p-6">
      <form
        onSubmit={handleSubmit}
        className="rounded-3xl p-6 border border-white"
      >
        <div className="space-y-4">
          <div className="flex flex-col space-y-1">
            <label className="text-white/80 text-sm">First name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="bg-transparent border border-white rounded-full px-4 py-3 text-white focus:outline-none focus:border-white/40"
              required
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="text-white/80 text-sm">Last name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="bg-transparent border border-white rounded-full px-4 py-3 text-white focus:outline-none focus:border-white/40"
              required
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="text-white/80 text-sm">
              Enter number with country code
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="bg-transparent border border-white rounded-full px-4 py-3 text-white focus:outline-none focus:border-white/40"
              required
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="text-white/80 text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent border border-white rounded-full px-4 py-3 text-white focus:outline-none focus:border-white/40"
              required
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="text-white/80 text-sm">
              Referral Code (Optional)
            </label>
            <input
              type="text"
              name="referralCode"
              value={formData.referralCode}
              onChange={handleChange}
              className="bg-transparent border border-white rounded-full px-4 py-3 text-white focus:outline-none focus:border-white/40"
            />
          </div>

          <div className="flex items-center gap-2 mt-4">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="border-white border bg-transparent rounded-full"
            />
            <div className="text-xs text-white">
              By continuing you accept our{" "}
              <span className="text-red-500">Terms and Conditions</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-red-800 text-white rounded-full py-3 mt-4 hover:bg-red-700 transition-colors"
          >
            Sign up
          </button>
        </div>
      </form>
      {message && (
        <div className="mt-4 text-center text-white text-sm">{message}</div>
      )}
    </div>
  );
};

export default SignUpForm;
