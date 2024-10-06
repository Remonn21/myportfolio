import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FormItem } from "./ui/form";
import { Input } from "./ui/input";
import emailjs from "emailjs-com";

import { Textarea } from "./ui/textarea";
import { Button } from "./ui/Button";
import { useState } from "react";
import { contactInfo } from "@/config";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    number: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleValidation = () => {
    const { firstName, lastName, number, email, message } = formData;
    if (!firstName || !lastName || !number || !email || !message) {
      toast.error("Please fill in all fields");
      return false;
    }
    if (!email.includes("@")) {
      toast.error("Please enter a valid email");
      return false;
    }
    if (number.length !== 11) {
      toast.error("Please enter a valid phone number");
      return false;
    }
    return true;
  };

  const handleInputChange = (e) => {
    setFormData((prevData) => ({ ...prevData, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = handleValidation();
    if (!isValid) return;
    setIsLoading(true);
    emailjs
      .send("service_lv9g5th", "template_a9k56vt", formData, "0BWXLY0xoEP8BFROe")
      .then((response) => {
        toast.success("Email sent", response.txt);
        // Optionally, reset the form
        setFormData({ firstName: "", lastName: "", number: "", email: "", message: "" });
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error("Error sending message:", err);
        setIsLoading(false);
      });
  };

  return (
    <div id="contact" className="flex flex-col gap-10 pt-[10%] md:gap-5 md:flex-row">
      <motion.div
        variants={fadeIn("right")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="relative bg-[#27272cee]  p-6 order-2  md:order-none flex-1 rounded-md"
      >
        {/* <motion.div
          variants={fadeIn("down")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[.9] bg-red-500 rounded-full blur-3xl"
        /> */}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 z-20" action="">
          <h1 className="text-accent text-xl font-semibold md:text-4xl md:font-thin mb-3">
            Let&apos;s work together
          </h1>
          <p className="text-white/60 leading-normal mb-2">
            I’m always excited to collaborate on innovative projects. Whether you’re
            looking for a full-stack developer to bring your ideas to life, or need expert
            support on your next big venture, I’m here to help. Let’s create something
            amazing together—reach out and let’s start the conversation!
          </p>
          <div className="flex md:flex-row flex-col gap-5">
            <FormItem className="flex-1">
              <Input
                id="firstName"
                placeholder="First name"
                onChange={handleInputChange}
                value={formData.firstName}
                className="border-none placeholder:text-white/60 text-white bg-primary"
              />
            </FormItem>{" "}
            <FormItem className="flex-1">
              <Input
                id="lastName"
                placeholder="Last name"
                onChange={handleInputChange}
                value={formData.lastName}
                className="border-none placeholder:text-white/60 text-white bg-primary"
              />
            </FormItem>
          </div>
          <div className="flex md:flex-row flex-col gap-5">
            <FormItem className="flex-1">
              <Input
                id="email"
                onChange={handleInputChange}
                value={formData.email}
                placeholder="Email address"
                className="border-none placeholder:text-white/60 text-white bg-primary"
              />
            </FormItem>{" "}
            <FormItem className="flex-1">
              <Input
                id="number"
                onChange={handleInputChange}
                value={formData.number}
                placeholder="Phone number"
                className="border-none placeholder:text-white/60 text-white bg-primary"
              />
            </FormItem>
          </div>
          <Textarea
            id="message"
            onChange={handleInputChange}
            value={formData.message}
            placeholder="Type your message here."
            className="resize-none placeholder:text-white/60 h-[200px] border-none bg-primary"
          />

          <Button
            disabled={isLoading}
            className="max-w-40 bg-accent text-primary hover:text-white rounded-full mt-2"
          >
            {isLoading ? "Loading..." : "Send message"}
          </Button>
        </form>
      </motion.div>
      <div className="relative overflow-x-hidden flex-1 flex">
        <motion.div
          variants={fadeIn("left")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className=" flex-1 order-1 md:order-none flex md:justify-center items-center"
        >
          <div className="flex flex-col gap-5">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title}>
                  <div className="flex gap-5">
                    <div className="bg-[#27272c] px-3 flex items-center justify-center rounded-md">
                      <Icon className="text-accent text-xl" />
                    </div>
                    <div>
                      <p className="text-white/60 text-xs mb-1">{item.title}</p>
                      <p className="text-sm">{item.content}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
