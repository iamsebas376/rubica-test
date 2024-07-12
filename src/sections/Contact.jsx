"use client";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import { HiX } from "react-icons/hi";
import { ImagesSlider } from "@/components/ui/ImagesSlider";
import Project1 from "@/assets/images/project1.webp";
import Project2 from "@/assets/images/project2.webp";
import Project3 from "@/assets/images/project3.webp";
import Project4 from "@/assets/images/project4.webp";
import Project5 from "@/assets/images/project5.webp";
import Project6 from "@/assets/images/project6.webp";

function Contact() {
  const images = [Project1, Project2, Project3, Project4, Project5, Project6];

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [showAlert, setShowAlert] = React.useState(false);

  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center my-16 max-w-screen-xl mx-auto px-4 md:px-6">
      <AnimatePresence>
        {showAlert && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-5 right-5 z-40 max-w-72 sm:max-w-xl"
          >
            <div
              role="alert"
              className="rounded-xl border border-neutral-300 bg-secondary p-4"
            >
              <div className="flex items-start gap-4">
                <span className="text-green-400">
                  <CiCircleCheck className="h-6 w-6" />
                </span>

                <div className="flex-1">
                  <strong className="block font-medium text-white">
                    Mensaje enviado
                  </strong>
                  <p className="mt-1 text-sm text-neutral-300">
                    Nos comunicaremos lo más pronto posible.
                  </p>
                </div>

                <button
                  className="text-gray-300 transition hover:scale-110"
                  aria-label="Cerrar alerta"
                  onClick={() => setShowAlert(false)}
                >
                  <HiX className="h-6 w-6" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="w-full max-w-lg bg-neutral-300/20 p-8 rounded-lg lg:rounded-l-lg lg:rounded-r-none lg:min-h-[554px]">
        <h1 className="text-3xl sm:text-5xl font-semibold text-center text-neutral-300">
          Ponte en <span className="text-tertiary">contacto</span>
        </h1>
        <p className="mt-3 text-center text-neutral-300">
          ¿Tienes alguna pregunta o necesitas más información? No dudes en
          contactarnos.
        </p>

        <form onSubmit={sendEmail} ref={form} className="mt-10">
          <div className="grid gap-6 sm:grid-cols-2">
            <label htmlFor="name" className="relative z-0">
              <input
                className="peer block w-full appearance-none border-0 border-b border-gray-300 bg-transparent py-2.5 px-0 text-sm text-white focus:outline-none focus:ring-0"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder=" "
                required
                autoComplete="off"
                style={{ borderColor: "#FC9F5B" }}
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-neutral-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75">
                Tu nombre
              </label>
            </label>
            <label htmlFor="email" className="relative z-0">
              <input
                className="peer block w-full appearance-none border-0 border-b border-gray-300 bg-transparent py-2.5 px-0 text-sm text-white focus:outline-none focus:ring-0"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=" "
                required
                autoComplete="off"
                style={{
                  borderColor: "#FC9F5B",
                }}
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-neutral-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75">
                Tu correo
              </label>
            </label>
            <label htmlFor="message" className="relative z-0 col-span-2">
              <textarea
                className="peer block w-full appearance-none border-0 border-b border-gray-300 bg-transparent py-2.5 px-0 text-sm text-white focus:outline-none focus:ring-0 min-h-32 resize-none overflow-y-auto"
                type="text"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder=" "
                required
                maxLength={235}
                autoComplete="off"
                style={{ borderColor: "#FC9F5B" }}
              ></textarea>
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-neutral-300 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75">
                Tu mensaje
              </label>
              <p className="font-normal text-sm text-neutral-300">
                Carácteres restantes: {235 - message.length}
              </p>
            </label>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-10 w-40 h-10 bg-tertiary rounded-md text-primary hover:scale-110 transition-all duration-300"
            >
              Enviar mensaje
            </button>
          </div>
        </form>
      </div>
      <div className="hidden lg:block">
        <ImagesSlider className="min-h-[554px] rounded-r-lg" images={images}>
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center"
          >
            <motion.p className="font-bold text-5xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
              Esto son algunos de nuestros proyectos
            </motion.p>
          </motion.div>
        </ImagesSlider>
      </div>
    </div>
  );
}

export default Contact;
