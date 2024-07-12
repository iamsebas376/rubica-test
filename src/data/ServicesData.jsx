import {
  RiSettingsLine,
  RiComputerLine,
  RiLayoutRowLine,
  RiDeviceLine,
  RiSpeedLine,
  RiToolsLine,
  RiChat4Line,
  RiCheckboxCircleLine,
} from "react-icons/ri";

const ServicesData = [
  {
    title: "Desarrollo Frontend",
    description:
      "Construido para ofrecer experiencias interactivas y amigables para el usuario.",
    icon: <RiSettingsLine size={24} />,
  },
  {
    title: "Diseño UI/UX",
    description:
      "Diseños intuitivos y atractivos que destacan la identidad de tu marca.",
    icon: <RiLayoutRowLine size={24} />,
  },
  {
    title: "Responsive Design",
    description:
      "Sitios web que se adaptan perfectamente a cualquier dispositivo y pantalla.",
    icon: <RiDeviceLine size={24} />,
  },
  {
    title: "Optimización de Velocidad",
    description:
      "Mejora del rendimiento para tiempos de carga rápidos y eficiencia.",
    icon: <RiSpeedLine size={24} />,
  },
  {
    title: "Desarrollo Backend",
    description:
      "Arquitecturas robustas y seguras para manejar tu lógica empresarial.",
    icon: <RiComputerLine size={24} />,
  },
  {
    title: "Herramientas Personalizadas",
    description:
      "Integración de soluciones específicas para tus necesidades empresariales.",
    icon: <RiToolsLine size={24} />,
  },
  {
    title: "Soporte Técnico 24/7",
    description:
      "Asistencia continua para mantener tu sitio web funcionando sin problemas.",
    icon: <RiChat4Line size={24} />,
  },
  {
    title: "Control de Calidad",
    description:
      "Garantía de calidad para asegurar que cada aspecto funcione correctamente.",
    icon: <RiCheckboxCircleLine size={24} />,
  },
];

export default ServicesData;
