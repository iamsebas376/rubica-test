import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import { IoPersonOutline } from "react-icons/io5";
import Testimonials from "@/data/Testimonials";
import AnimatedAvatars from "@/components/ui/AnimatedAvatars";
import People from "@/data/People";

SwiperCore.use([Autoplay]);

function About() {
  return (
    <div className="w-full mb-20 sm:px-6">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-neutral-300 text-3xl font-semibold tracking-tighter sm:text-4xl md:text-5xl">
              Sobre <span className="text-tertiary">Nosotros</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-neutral-300">
              Somos una empresa de desarrollo web con años de experiencia en la
              creación de soluciones a medida para nuestros clientes. Nos
              enorgullecemos de nuestro enfoque en la calidad, la innovación y
              la atención al detalle, lo que nos ha permitido construir
              aplicaciones web y sitios web que impulsan el éxito de nuestros
              clientes.
            </p>
            <p className="mt-4 text-base md:text-lg text-neutral-300">
              Nuestros valores fundamentales son la integridad, la colaboración
              y la excelencia. Trabajamos en estrecha colaboración con nuestros
              clientes para comprender sus necesidades y crear soluciones que se
              adapten perfectamente a sus requisitos únicos.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-10 mt-4 w-full lg:w-auto">
            <div className="flex flex-row items-center justify-center w-full">
              <AnimatedAvatars items={People} />
            </div>
            <div className="max-w-xs sm:max-w-lg">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  pauseOnMouseEnter: true,
                  delay: 3000,
                }}
                speed={2000}
                className="sm:mx-6"
              >
                {Testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="bg-neutral-300/20 rounded-lg p-6 shadow-sm h-80 sm:h-60 flex flex-col place-content-center cursor-grab active:cursor-grabbing">
                      <blockquote className="text-base font-medium leading-snug text-neutral-200">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>
                      <div className="mt-4 flex items-center gap-4">
                        <IoPersonOutline className="h-6 w-6 text-white" />
                        <div>
                          <p className="font-medium text-quinary">
                            {testimonial.name}
                          </p>
                          <p className="text-neutral-200 text-sm">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
