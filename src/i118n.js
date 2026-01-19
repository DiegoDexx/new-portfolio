// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "actionsTitle": "Actions",
          "menuTitle1": "PROJECTS",
          "menuTitle2": "SKILLS",
          "menuTitle3": "PROFESSIONAL",
          "menuTitle4": "OTHER",
          "menuTitle5": "MY SERVICES",
          "downloadCV": "Download CV",

          "Technical Skills": "Technical Skills",
          "subtitle3": "Professional Experience",
          "subtitle4": "Other Experience",

          "intro": "I'm a Full-stack developer in Spain, with a superior grade finished, passionate about building visually appealing and functional web applications. Seeking a professional opportunity to grow and learn.",
          "otherTechnologies": "Other technologies",

          "experience": {
            "WordPress Developer": "WordPress Developer",
            "Freelance Developer": "Freelance Developer",
            "Parking Attendant and Chauffeur": "Parking Attendant and Chauffeur",
            "Computer Technician": "Computer Technician",
            "Network Administrator": "Network Administrator"
          },
          "jobDescription": {
            "wordpressDeveloper": "I was working as an intern on a project about WordPress plugin implementations.",
            "freelanceDeveloper": "After obtaining my degree, I have been working freelance on various company and start-up projects.",
            "parkingAttendant": "I worked in a parking facility where I was responsible for parking cars and providing chauffeur services for clients.",
            "computerTechnician": "I worked in a tech store, assembling and repairing computers, and assisting customers with their technical needs.",
            "networkAdministrator": "I am currently working as a network administrator, managing and maintaining the company's and schools' IT infrastructure."
          },

          "proyects": {
            "description_1": "Project made with React and Laravel for the creation of a website for a clothing shop with booking system and user profile.",
            "description_2": "Project made with React JSX and SEO for the creation of a website for a renewal company..",
            "description_3": "Project made with React and Laravel for the creation of a corporate website."
          },

          // 🔹 NUEVO BLOQUE: Servicios 🔹
          "services": {
            "title": "My Services",
            "service_1_name": "Basic Website - Corporate - Portfolio",
            "service_1_desc": "Development of corporate or portfolio websites with a modern, responsive design and included maintenance.",
            "service_2_name": "Online Store without User Integration (Basic Store / Shopify)",
            "service_2_desc": "Creation of basic online stores using Shopify or similar platforms, without user integration.",
            "service_3_name": "Advanced Online Store or Corporate Website with User Integration and SEO",
            "service_3_desc": "Development of websites or online stores with database integration, user management, and SEO implementation.",
            "service_4_name": "Ongoing Maintenance",
            "service_4_desc": "Includes optimization, new integrations, and continuous technical support.",
            "service_5_name": "E-commerce Maintenance & SEO Package",
            "service_5_desc": "Combined maintenance for e-commerce and advanced SEO services to optimize site performance and visibility."
          },

          
          "contact_form": {
            "title": "Contact Me",
            "email": "Email address",
            "phone": "Phone number",
            "message": "Message",
            "message_placeholder": "Write your message here...",
            "send": "Send",
            "sending": "Sending…",
            "success": "Thank you! Your message was sent successfully.",
            "error": "An error occurred while sending the message. Please try again later."
          },
          "common": {
            "close": "Close",
            "ok": "OK"
          },

          "estimatedTime": "Estimated time:",
          "Price": "Price:",
          "contactMe": "Contact me",

          "footerContactTitle": "Contact Data",
          "footerContactText": "If you want to contact me, you can do so through the following means:",
          "viewMore": "View more"
        }
      },

      es: {
        translation: {
          "intro": "Soy un desarrollador Full-stack en España, con un grado superior terminado, apasionado por construir aplicaciones web visualmente atractivas y funcionales. Busco una oportunidad profesional para crecer y aprender.",
          "otherTechnologies": "Otras tecnologías",
          "actionsTitle": "Acciones",
          "menuTitle1": "PROYECTOS",
          "menuTitle2": "HABILIDADES",
          "menuTitle3": "PROFESIONAL",
          "menuTitle4": "OTROS",
          "menuTitle5": "MIS SERVICIOS",
            "downloadCV": "Descargar CV",
          "Technical Skills": "Habilidades Técnicas",

          "subtitle3": "Experiencia Profesional",
          "subtitle4": "Otras Experiencias",

          "experience": {
            "WordPress Developer": "Desarrollador de WordPress",
            "Freelance Developer": "Desarrollador Freelance",
            "Parking Attendant and Chauffeur": "Encargado de Estacionamiento y Chófer",
            "Computer Technician": "Técnico de tienda de tecnología",
            "Network Administrator": "Administrador de Redes"
          },
          "jobDescription": {
            "wordpressDeveloper": "Trabajé como becario en un proyecto sobre implementaciones de plugins de WordPress.",
            "freelanceDeveloper": "Después de obtener mi título, he estado trabajando como freelance en varios proyectos de empresas y startups.",
            "parkingAttendant": "Trabajé en un aparcamiento donde era responsable de estacionar coches y proporcionar servicios de chófer a los clientes.",
            "techStore": "Trabajé en una tienda de tecnología, ensamblando y reparando computadoras, y asistiendo a los clientes con sus necesidades técnicas.",
            "networkAdministrator": "Actualmente trabajo como administrador de redes, gestionando y manteniendo la infraestructura informática de la empresa y las escuelas."
          },

          "proyects": {
            "description_1": "Proyecto realizado con React y Laravel para la creación de una web para una tienda con sistema de compra y reservas.",
            "description_2": "Proyecto realizado con React JSX con SEO y diseño profesional para una web de reformas.",
            "description_3": "Proyecto realizado con React y Laravel para la creación de una web corporativa."
          },

          // 🔹 NUEVO BLOQUE: Servicios 🔹
          "services": {
            "title": "Mis Servicios",
            "service_1_name": "Sitio Web Básico - Corporativo - Portafolio",
            "service_1_desc": "Desarrollo de sitios web corporativos o portafolios con diseño moderno, adaptable y mantenimiento incluido.",
            "service_2_name": "Tienda Online sin Integración de Usuarios (Tienda Básica / Shopify)",
            "service_2_desc": "Creación de tiendas online básicas utilizando Shopify o plataformas similares, sin integración de usuarios.",
            "service_3_name": "Tienda Online Avanzada o Sitio Corporativo con Integración de Usuarios y SEO",
            "service_3_desc": "Desarrollo de sitios web o tiendas online con integración de base de datos, gestión de usuarios y SEO.",
            "service_4_name": "Mantenimiento Continuo",
            "service_4_desc": "Incluye optimización, nuevas integraciones y soporte técnico continuo.",
            "service_5_name": "Paquete de Mantenimiento y SEO para E-commerce",
            "service_5_desc": "Mantenimiento combinado para e-commerce y servicios SEO avanzados para optimizar el rendimiento y visibilidad del sitio."
          },

           "contact_form": {
            "title": "Contáctame",
            "email": "Correo electrónico",
            "phone": "Teléfono",
            "message": "Mensaje",
            "message_placeholder": "Escribe tu mensaje aquí...",
            "send": "Enviar",
            "sending": "Enviando…",
            "success": "¡Gracias! Tu mensaje se envió correctamente.",
            "error": "Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde."
          },
          "common": {
            "close": "Cerrar",
            "ok": "Aceptar"
          },

          "estimatedTime": "Tiempo estimado:",
          "Price": "Precio:",
          "contactMe": "Contactar",
        

          "footerContactTitle": "Datos de Contacto",
          "footerContactText": "Si quieres contactar conmigo, puedes hacerlo a través de los siguientes medios:",
          "viewMore": "Ver más"
        }
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;