import React, { useRef } from "react";
import emailjs, { send } from "emailjs-com";

function Testimonials() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("Heyyyyyy");
    emailjs
      .sendForm(
        "service_1ndic7i", //  EmailJS service ID
        "template_225wn8n", // EmailJS template ID
        form.current,
        "O6Z62k8rx2xkFA3aZ" // EmailJS public key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        () => {
          alert("Failed to send. Try again.");
        }
      );
  };

  const contactInfo = [
    {
      title: "Email",
      icon: (
        <svg
          className="w-6 h-6 text-blue-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1.4 3L12 13 5.4 7h13.2zM4 18V8l8 6 8-6v10H4z" />
        </svg>
      ),
      value: "ramyaagowrik@email.com",
    },
    {
      title: "Phone",
      icon: (
        <svg
          className="w-6 h-6 text-green-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M6.62 10.79a15.72 15.72 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.06-.24c1.12.45 2.33.69 3.53.69a1 1 0 011 1V20a1 1 0 01-1 1c-9.39 0-17-7.61-17-17a1 1 0 011-1h3.5a1 1 0 011 1c0 1.21.24 2.41.69 3.53a1 1 0 01-.24 1.06l-2.2 2.2z" />
        </svg>
      ),
      value: "+91 8903444278",
    },
    {
      title: "Location",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-red-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z"
          />
          <circle cx="12" cy="9" r="2.5" fill="currentColor" />
        </svg>
      ),
      value: "Tamil Nadu, India",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#9fd3f9] py-10 px-6">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold">Get In Touch</h3>
        <p className="text-gray-700 text-sm mt-2 font-medium">
          Have a project in mind or want to discuss potential opportunities?
          Feel free to reach out!
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-stretch justify-center items-start gap-12 max-w-6xl mx-auto">
        {/* Left - Contact Info */}
        <div className="w-full md:w-1/2 p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div>{item.icon}</div>
                <div>
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-gray-700">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-4 flex-row mt-5 justify-center">
            <a
              href="https://www.linkedin.com/in/ramyaa-gowri-4659191a0"
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-blue-700"
              >
                <path d="M4.98 3.5a2.5 2.5 0 11.02 5.001A2.5 2.5 0 014.98 3.5zM3 8.98h3.96v12.02H3V8.98zM9.04 8.98H13v1.64h.05c.55-1.04 1.9-2.14 3.91-2.14 4.18 0 4.95 2.75 4.95 6.32v7.2h-3.96v-6.38c0-1.52-.03-3.49-2.13-3.49-2.13 0-2.46 1.66-2.46 3.38v6.49H9.04V8.98z" />
              </svg>

              {/* LinkedIn Icon */}
            </a>
            <a href="https://github.com/ramyaagowri" className="cursor-pointer">
              {/* GitHub Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-gray-800"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.31 6.84 9.66.5.09.66-.22.66-.48 0-.24-.01-1.02-.01-1.85-2.78.62-3.37-1.4-3.37-1.4-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.02a9.4 9.4 0 012.5-.34c.85 0 1.7.11 2.5.34 1.9-1.29 2.74-1.02 2.74-1.02.56 1.4.21 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.95.68 1.91 0 1.38-.01 2.5-.01 2.84 0 .27.17.58.67.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="w-full md:w-1/2">
          <form
            ref={form}
            className="bg-white shadow-md rounded-lg p-6 space-y-4"
            onSubmit={sendEmail}
          >
            <h2 className="text-xl font-bold text-center">Contact Me</h2>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 border rounded"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 border rounded"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-3 border rounded"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-3 border rounded"
            ></textarea>

            {/* Optional Hidden Fields */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="box" />
            <input
              type="hidden"
              name="_autoresponse"
              value="Thanks for reaching out! I’ll get back to you soon."
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>

    // <div className="w-full min-h-screen bg-[#9fd3f9] py-10 px-6">
    //   <div className="text-center mb-10">
    //     <h3 className="text-3xl font-bold">Get In Touch</h3>
    //     <p className="text-gray-700 text-sm mt-2 font-medium">
    //       Have a project in mind or want to discuss potential opportunities?
    //       Feel free to reach out!
    //     </p>
    //   </div>

    //   <div className="flex flex-col md:flex-row items-stretch justify-center items-start gap-12 max-w-6xl mx-auto ">
    //     {/* Left - Contact Info */}
    //     <div className="w-full md:w-1/2 p-6 bg-white rounded-lg shadow">
    //       <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
    //       <div className="space-y-6">
    //         {contactInfo.map((item, index) => (
    //           <div key={index} className="flex items-center space-x-4">
    //             <div>{item.icon}</div>
    //             <div>
    //               <p className="text-sm font-medium">{item.title}</p>
    //               <p className="text-gray-700">{item.value}</p>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //       <div className="flex gap-4 flex-row mt-5">
    //         <a
    //           href="https://www.linkedin.com/in/ramyaa-gowri-4659191a0"
    //           target="_blank"
    //           rel="noreferrer"
    //           className="cursor-pointer"
    //         >
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 24 24"
    //             fill="currentColor"
    //             className="w-6 h-6 text-blue-700"
    //           >
    //             <path d="M4.98 3.5a2.5 2.5 0 11.02 5.001A2.5 2.5 0 014.98 3.5zM3 8.98h3.96v12.02H3V8.98zM9.04 8.98H13v1.64h.05c.55-1.04 1.9-2.14 3.91-2.14 4.18 0 4.95 2.75 4.95 6.32v7.2h-3.96v-6.38c0-1.52-.03-3.49-2.13-3.49-2.13 0-2.46 1.66-2.46 3.38v6.49H9.04V8.98z" />
    //           </svg>
    //         </a>

    //         <a href="https://github.com/ramyaagowri" className="cursor-pointer">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 24 24"
    //             fill="currentColor"
    //             className="w-6 h-6 text-gray-800"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.31 6.84 9.66.5.09.66-.22.66-.48 0-.24-.01-1.02-.01-1.85-2.78.62-3.37-1.4-3.37-1.4-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.02a9.4 9.4 0 012.5-.34c.85 0 1.7.11 2.5.34 1.9-1.29 2.74-1.02 2.74-1.02.56 1.4.21 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.95.68 1.91 0 1.38-.01 2.5-.01 2.84 0 .27.17.58.67.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z"
    //               clipRule="evenodd"
    //             />
    //           </svg>
    //         </a>
    //       </div>
    //     </div>

    //     {/* Right - Contact Form */}
    //     <div className="w-full md:w-1/2">
    //       <form
    //         ref={form}
    //         onSubmit={sendEmail}
    //         className="bg-white shadow-md rounded-lg p-6 space-y-4"
    //       >
    //         <h2 className="text-xl font-bold text-center">Contact Me</h2>

    //         <input
    //           type="text"
    //           name="name"
    //           placeholder="Your Name"
    //           required
    //           className="w-full p-3 border rounded"
    //         />

    //         <input
    //           type="email"
    //           name="email"
    //           placeholder="Your Email"
    //           required
    //           className="w-full p-3 border rounded"
    //         />

    //         <input
    //           type="text"
    //           name="subject"
    //           placeholder="Subject"
    //           required
    //           className="w-full p-3 border rounded"
    //         />

    //         <textarea
    //           name="message"
    //           rows="5"
    //           placeholder="Your Message"
    //           required
    //           className="w-full p-3 border rounded"
    //         ></textarea>

    //         <button
    //           type="submit"
    //           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
    //         >
    //           Send Message
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Testimonials;
