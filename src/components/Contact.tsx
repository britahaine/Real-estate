import { motion } from "framer-motion";
import React, { type FormEvent } from "react";
import { toast } from 'react-toastify';

const Contact = () => {

     const [result, setResult] = React.useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "811482a2-9bc8-4002-8a3a-df6868734f6a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
     toast.success("Form Submitted Successfully!");
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden" id="contact"
    >
 <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact
        <span className="underline underline-offset-4 decoration-1 under font-light">
          With Us
        </span>
      </h1>
      <p className="text-center text-grey-500 mb-12 max-w-80 mx-auto">
        Ready to make a move? Let's Build your future Together
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-600 pt-8">
        <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 text-left">
              Your Name  
              <input className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
               type="text" name="Name" placeholder="Enter your name" required />
            </div>

             <div className="w-full md:w-1/2 text-left md:pl-4">
              Your Email 
              <input className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
               type="email" name="Email" placeholder="Enter your email" required />
            </div>
        </div>
        <div className="my-6 text-left">
            Message
            <textarea className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
            name="Message" placeholder="Message" required ></textarea>
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {result ? result : "Send Message"}
        </button>
      </form>
    </motion.div>
  )
}

export default Contact