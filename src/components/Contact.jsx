import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FormItem } from "./ui/form";
import { Input } from "./ui/input";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

import { Textarea } from "./ui/textarea";
import { Button } from "./ui/Button";
const contactInfo = [
  {
    icon: <BsFillTelephoneFill className="text-accent text-xl" />,
    title: "Phone",
    content: "(+20) 127 215 7467",
  },
  {
    icon: <MdMail className="text-accent text-xl" />,
    title: "Email",
    content: "remon_ehab@hotmail.com",
  },
  {
    icon: <FaLocationDot className="text-accent text-xl" />,
    title: "Addres",
    content: "Benha, Egypt",
  },
];

const Contact = () => {
  return (
    <div className="flex flex-col gap-10 md:gap-0 md:flex-row">
      <motion.div
        variants={fadeIn("right")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="relative bg-[#27272cee]  p-6 order-2 md:order-none flex-1 rounded-md"
      >
        {/* <motion.div
          variants={fadeIn("down")}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[.9] bg-red-500 rounded-full blur-3xl"
        /> */}

        <form className="flex flex-col gap-4 z-20" action="">
          <h1 className="text-accent text-4xl font-thin mb-3">
            Let&apos;s work together
          </h1>
          <p className="text-white/60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In dicta velit
            tenetur labore hic nobis, voluptates aspernatur. Magni suscipit cupiditate
          </p>
          <div className="flex md:flex-row flex-col gap-5">
            <FormItem className="flex-1">
              <Input
                placeholder="First name"
                className="border-none placeholder:text-white/60 text-white bg-primary"
              />
            </FormItem>{" "}
            <FormItem className="flex-1">
              <Input
                placeholder="First name"
                className="border-none placeholder:text-white/60 text-white bg-primary"
              />
            </FormItem>
          </div>
          <div className="flex md:flex-row flex-col gap-5">
            <FormItem className="flex-1">
              <Input
                placeholder="Email address"
                className="border-none placeholder:text-white/60 text-white bg-primary"
              />
            </FormItem>{" "}
            <FormItem className="flex-1">
              <Input
                placeholder="Phone number"
                className="border-none placeholder:text-white/60 text-white bg-primary"
              />
            </FormItem>
          </div>
          <Textarea
            placeholder="Type your message here."
            className="resize-none placeholder:text-white/60 h-[200px] border-none bg-primary"
          />

          <Button className="max-w-40 bg-accent text-primary hover:text-white rounded-full mt-2">
            Send message
          </Button>
        </form>
      </motion.div>
      <motion.div
        variants={fadeIn("left")}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="flex-1 order-1 md:order-none flex md:justify-center items-center"
      >
        <div className="flex flex-col gap-5">
          {contactInfo.map((item) => (
            <div key={item.title}>
              <div className="flex gap-5">
                <div className="bg-[#27272c] px-3 flex items-center justify-center rounded-md">
                  {item.icon}
                </div>
                <div>
                  <p className="text-white/60 text-xs mb-1">{item.title}</p>
                  <p className="text-sm">{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
