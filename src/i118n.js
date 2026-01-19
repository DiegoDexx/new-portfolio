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
            "devTitle": "Project Development",
            "devSubtitle": "Choose the plan that best fits your project",
            "maintenanceTitle": "Maintenance Plans",
            "maintenanceSubtitle": "Keep your website always updated and running smoothly",
            "note": "Note: All plans include a free SSL certificate and technical support during business hours. Maintenance plans require a minimum 3-month contract.",

            "dev": {
              "basic": {
                "name": "Basic",
                "badge": "",
                "desc": "Shopify One-Product Store or Landing Page",
                "price": "100–150€",
                "features": [
                  "Responsive design",
                  "1 main page",
                  "Basic optimization",
                  "Contact form"
                ]
              },
              "pro": {
                "name": "Professional",
                "badge": "",
                "desc": "Corporate website or standard online store",
                "price": "200–450€",
                "features": [
                  "Everything in Basic",
                  "Up to 10 pages",
                  "Admin panel",
                  "Social media integration",
                  "Basic SEO"
                ]
              },
              "enterprise": {
                "name": "Enterprise",
                "badge": "",
                "desc": "Advanced website with SEO + Database & CRM",
                "price": "500€+",
                "features": [
                  "Everything in Professional",
                  "Unlimited pages",
                  "Advanced SEO & optimization",
                  "Custom database",
                  "CRM integration",
                  "APIs & third-party integrations"
                ]
              }
            },

            "maintenance": {
              "monthly": "Monthly",
              "popular": "Popular",
              "select": "Select",
              "perMonth": "/month",

              "basic": {
                "name": "Basic",
                "price": "30€",
                "features": [
                  "Security updates",
                  "Monthly backup",
                  "Email support",
                  "1 hour of minor changes"
                ]
              },
              "pro": {
                "name": "Professional",
                "price": "70€",
                "features": [
                  "Everything in Basic",
                  "Weekly backup",
                  "Priority support 24/7",
                  "3 hours of monthly changes",
                  "Performance monitoring",
                  "Monthly SEO optimization"
                ]
              },
              "premium": {
                "name": "Premium",
                "price": "150€",
                "features": [
                  "Everything in Professional",
                  "Daily automatic backup",
                  "Dedicated support 24/7",
                  "10 hours of monthly development",
                  "Monthly analysis & reports",
                  "Advanced optimization",
                  "New features"
                ]
              }
            }
          }
          ,

          
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
            "devTitle": "Desarrollo de Proyectos",
            "devSubtitle": "Elige el plan que mejor encaje con tu proyecto",
            "maintenanceTitle": "Planes de Mantenimiento",
            "maintenanceSubtitle": "Mantén tu web siempre actualizada y funcionando perfectamente",
            "note": "Nota: Todos los planes incluyen certificado SSL gratuito y soporte técnico durante horario laboral. Los planes de mantenimiento requieren contratación mínima de 3 meses.",

            "dev": {
              "basic": {
                "name": "Básico",
                "badge": "",
                "desc": "Tienda Shopify One-Product o Landing Page",
                "price": "100–150€",
                "features": [
                  "Diseño responsivo",
                  "1 página principal",
                  "Optimización básica",
                  "Formulario de contacto"
                ]
              },
              "pro": {
                "name": "Profesional",
                "badge": "",
                "desc": "Web corporativa o tienda normal",
                "price": "200–450€",
                "features": [
                  "Todo lo del plan Básico",
                  "Hasta 10 páginas",
                  "Panel de administración",
                  "Integración redes sociales",
                  "SEO básico"
                ]
              },
              "enterprise": {
                "name": "Enterprise",
                "badge": "",
                "desc": "Web avanzada con SEO + BBDD y CRM",
                "price": "+500€",
                "features": [
                  "Todo lo del plan Profesional",
                  "Páginas ilimitadas",
                  "SEO avanzado y optimización",
                  "Base de datos personalizada",
                  "Integración CRM",
                  "APIs e integraciones de terceros"
                ]
              }
            },

            "maintenance": {
              "monthly": "Mensual",
              "popular": "Popular",
              "select": "Seleccionar",
              "perMonth": "/mes",

              "basic": {
                "name": "Básico",
                "price": "30€",
                "features": [
                  "Actualizaciones de seguridad",
                  "Backup mensual",
                  "Soporte por email",
                  "1 hora de cambios menores"
                ]
              },
              "pro": {
                "name": "Profesional",
                "price": "70€",
                "features": [
                  "Todo lo del plan Básico",
                  "Backup semanal",
                  "Soporte prioritario 24/7",
                  "3 horas de cambios mensuales",
                  "Monitoreo de rendimiento",
                  "Optimización SEO mensual"
                ]
              },
              "premium": {
                "name": "Premium",
                "price": "150€",
                "features": [
                  "Todo lo del plan Profesional",
                  "Backup diario automático",
                  "Soporte dedicado 24/7",
                  "10 horas de desarrollo mensual",
                  "Análisis y reportes mensuales",
                  "Optimización avanzada",
                  "Nuevas funcionalidades"
                ]
              }
            }
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