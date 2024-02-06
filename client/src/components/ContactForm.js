import React, { useEffect } from "react";

const ContactForm = () => {
  useEffect(() => {
    const form = document.getElementById("form");
    const result = document.getElementById("result");

    form.addEventListener("submit", function (e) {
      const formData = new FormData(form);
      e.preventDefault();

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      result.innerHTML = "Please wait...";

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      })
        .then(async (response) => {
          let json = await response.json();
          if (response.status === 200) {
            result.innerHTML = json.message;
            result.classList.remove("text-gray-500");
            result.classList.add("text-green-500");
          } else {
            console.log(response);
            result.innerHTML = json.message;
            result.classList.remove("text-gray-500");
            result.classList.add("text-red-500");
          }
        })
        .catch((error) => {
          console.log(error);
          result.innerHTML = "Something went wrong!";
        })
        .then(function () {
          form.reset();
          setTimeout(() => {
            result.style.display = "none";
          }, 3000);
        });
    });
  }, []);

  return (
    <main className="relative flex items-center justify-center md:px-10 py-24 overflow-hidden bg-zinc-300">
      <img className='absolute object-cover w-full h-full opacity-10' src='/images/graffiti.png'/>

      <div className="w-full md:w-3/4  bg-white p-5 rounded-lg shadow-lg z-10">
        <div className="text-center">
          <h2 className="my-3 text-3xl font-semibold text-black">Request a Free Quote</h2>
          <p className="text-black/50">
            Fill out the form below to send us a message!
          </p>
        </div>
        <section className="m-7">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            id="form"
          >
            <input
              type="hidden"
              name="access_key"
              value="d71f2dc9-5b13-4258-9217-2f8afe4ccf2a"
            />
            <input
              type="hidden"
              name="subject"
              value="NEW Submission from Mayhem Coatings!"
            />
            <input
              type="checkbox"
              name="botcheck"
              id=""
              style={{ display: "none" }}
            />

            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-black/60"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="John Doe"
                required
                className="w-full px-3 py-2 placeholder-black/30 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-black/60"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="you@company.com"
                required
                className="w-full px-3 py-2 placeholder-black/30 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="phone"
                className="block mb-2 text-black/60"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="+1 (555) 1234-567"
                required
                className="w-full px-3 py-2 placeholder-black/30 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="facility" className="block mb-2 text-black/60">
                Facility Type
              </label>

              <select
                id="facility"
                name="facility"
                defaultValue={"default"}
                required
                className="w-full px-3 py-2 placeholder-black/30 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300"
              >
                <option value="default" disabled>
                  Choose facility type
                </option>
                <option value="Automotive">Automotive</option>
                <option value="Education">Education</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Residential">Residential</option>
                <option value="Other">
                  Other
                </option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="service" className="block mb-2 text-black/60">
                Service Type
              </label>

              <select
                id="service"
                name="service"
                defaultValue={"default"}
                required
                className="w-full px-3 py-2 placeholder-black/30 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300"
              >
                <option value="default" disabled>
                  Choose service type
                </option>
                <option value="Thin Coats (light duty)">Thin Coats (light duty)</option>
                <option value="Floor Resurfacer (heavy duty)">Floor Resurfacer (heavy duty)</option>
                <option value="Decorative Flake">Decorative Flake</option>
                <option value="Decorative Quartz">Decorative Quartz</option>
                <option value="Metallic">Metallic</option>
                <option value="I'm not Sure">
                  I'm not Sure
                </option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="size" className="block mb-2 text-black/60">
                Project Size
              </label>

              <select
                id="size"
                name="size"
                defaultValue={"default"}
                required
                className="w-full px-3 py-2 placeholder-black/30 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300"
              >
                <option value="default" disabled>
                  Choose size
                </option>
                <option value="Under 1,000 sq ft">Under 1,000 sq ft</option>
                <option value="1,000 - 5,000 sq ft">1,000 - 5,000 sq ft</option>
                <option value="5,000 - 25,000 sq ft">5,000 - 25,000 sq ft</option>
                <option value="Greater than 25,000 sq ft">Greater than 25,000 sq ft</option>
                <option value="I'm not Sure">
                  I'm not Sure
                </option>
              </select>
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-black/60"
              >
                Project Description
              </label>

              <textarea
                rows="5"
                name="message"
                id="message"
                placeholder="Your Message"
                className="w-full px-3 py-2 placeholder-black/30 border border-black/20 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300"
                required
              ></textarea>
            </div>
            <div className="mb-6">
              <button
                type="submit"
                className="w-full px-3 py-4 text-white tracking-wide font-medium rounded-md bg-purple-600 hover:bg-purple-800 focus:outline-none"
              >
                Send Message
              </button>
            </div>
            <p className="text-base text-center text-gray-500" id="result"></p>
          </form>
        </section>
      </div>
    </main>
  );
};

export default ContactForm;