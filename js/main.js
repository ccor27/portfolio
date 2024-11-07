  // Initial language setting
  let currentLanguage = 'en';

  // Function to toggle the language and flag
  function toggleLanguage() {
    // Toggle between 'en' and 'es'
    currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
    
    // Set the language using the setLanguage function you defined earlier
    setLanguage(currentLanguage);
    
    // Update the flag icon based on the current language
    const flagIcon = document.getElementById('flag-icon');
    if (currentLanguage === 'en') {
      flagIcon.src = 'images/en_flag.png'; // English flag image path
      flagIcon.alt = 'English Language Flag';
    } else {
      flagIcon.src = 'images/es_flag.png'; // Spanish flag image path
      flagIcon.alt = 'Spanish Language Flag';
    }
  }
  
  // Set the initial language when the page loads
  document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLanguage);
    toggleLanguage(); // Ensure the flag matches the initial language
  });

  //---------------------------------------------------------------
  // Define translations for each text element
  const translations = {
    en: {
      //navbar
      homeNav: "Home",
      aboutNav: "About me",
      skillNav: "Skills",
      projectNav: "Projects",
      exploreNav: "Exploring",
      contactNav: "Contact me",
      //home
      homeTitle: "Home",
      homeText: "Hey there! 👋 I'm a backend wizard who usually hides behind the server, but today I'm here, bravely trying to tame the wild frontier of frontend! If you've ever seen a div that just won't center... yep, that’s probably me wrestling with it. Stick around for the adventure — I promise there’s some cool stuff (and maybe even some centered divs) waiting for you here! 😄",
      //about
      aboutTitle: "About me",
      aboutText: "I’m a Junior Java Spring Boot Developer with a strong drive for learning and continuous improvement. While my main focus is on backend development, I’m currently diving into the world of frontend — because why stop at one end of the stack when there’s a whole other side to explore? I believe that every new challenge is an opportunity to grow, which is why I enjoy tackling both personal and freelance projects that push my skills further. I also have a passion for sharing what I know with others, and I’m committed to building efficient, reliable solutions as I keep expanding my expertise. Here’s to embracing every line of code as a step towards becoming a better developer!",
      //skills-backend
      skillBackendTitle: "Backend",
      skillBackendText: "Building and optimizing server-side applications with Java and Spring Boot to handle complex business logic.",
      //skills-front
      skillFrontTitle: "Frontend",
      skillFrontText: "I can create simple, one-page sites with HTML, CSS, and Bootstrap, plus some attempts with JSP, Thymeleaf, and Spring. I even dabble in Angular to consume APIs (though let's just say CSS and I are still &quot;getting to know each other&quot;). If you see a layout mishap, just know – it's a work in progress!",
      //skills-tools
      skillsToolsTile: "Tools",
      skillsToolsText: "Proficient in using development environments, version control, and debugging tools to streamline and optimize the workflow.",
      //skills-knowledge
      skillKnowledgeTitle: "Knowledge",
      skillKnowledgeText: "Lifelong learner, continuously expanding knowledge through self-study and practical projects",
      //bags
      selfLearning: "Self-learning",
      books: "Books",
      english: "English",
      //project-section
      projectTitle: "Projects",
      projectText: "Welcome to my project showcase! Here, you'll find a collection of the projects I've worked on, from freelance gigs to personal passion projects. I’ve built everything from APIs and desktop applications to some adventurous web pages. Each project has its own story – a little bit of code, a lot of learning, and a dash of creativity. Check out the descriptions, you'll watch a links to the video, or dive into the code itself. Enjoy exploring!",
      projectEcommerce: "An e-commerce backend application developed to demonstrate my skills in Java and Spring Boot. This project includes core functionalities for managing products and users, with a focus on creating a scalable and maintainable REST API. Built with Spring Boot, this project also incorporates Spring Security for basic authentication, and PostgreSQL as the database.",
      projectMultipleChat: "A simple Java application designed to demonstrate real-time chat functionality using Java sockets and threads. This project allows multiple clients to connect to a server and exchange messages in a shared chat room environment. By leveraging Java's networking and multithreading capabilities, the app facilitates simultaneous client connections and message broadcasting, making it a great example of Java concurrency in action",
      projectAPIRestBack: "A simple API-REST app build in Java and Spring boot, it was of my first projects in the Spring boot and APIs world, it is about a simple customer manage using the CRUD operations",
      projectAPIRestFront: "A simple front to consume an API-REST build in angular, html, css and typescript. It is a simple front where we can manage a customers using the CRUD operations",
      //Exploring section
      exploringTitle: "Exploring",
      exploringFirstText: "I am passionate about learning new skills and expanding my knowledge continuously. Here are some topics I am currently exploring:",
      exploringMicroserviceText: "<strong>Microservices: </strong>Learning how to structure applications as a collection of loosely coupled services.",
      exploringDockerText: "<strong>Docker: </strong>Understanding containerization for scalable and isolated environments",
      exploringKubernetesText: "<strong>Kubernetes: </strong>Mastering container orchestration for automating deployment, scaling, and management.",
      exploringHtmlCssText: "<strong>HTML & CSS: </strong>Enhancing my front-end skills for creating structured and styled webpages.",
      exploringAngularText: "<strong>Angular: </strong>Immerse myself into this popular front-end framework for building dynamic applications.",
      exploringCibersecurityText: "<strong>Cibersecurity (Cisco Courses): </strong>Learning the fundamentals of cybersecurity through Cisco's free courses.",
      exploringLinuxText: "<strong>Linux: </strong>Building proficiency with Linux for development and system administration tasks.",
      exploringEnglishText: "<strong>English: </strong>Improving my language skills through various online resources and practice.",
      exploringSecondText: "I am using online resources like free courses, YouTube videos, forums, and websites. I follow a structured approach to learn these topics efficiently, ensuring that my study is organized and goal-oriented.",
      //contact section
      contactTitle: "Contact Me",
      contactName: "Name",
      contactEmail: "Email",
      contactMessage: "Message",
      contactSendButton: "Send Message"
    },
    es: {
      //navbar
      homeNav: "Home",
      aboutNav: "Sobre mi",
      skillNav: "Habilidades",
      projectNav: "Proyectos",
      exploreNav: "Explorando",
      contactNav: "Contacto",
      //home
      homeTitle: "Home",
      homeText: "Hola! 👋 Soy un mago del backend que por lo general se esconde detrás del servidor, pero hoy estoy aquí, valientemente tratando de domar la frontera del salvaje frontend!, Si alguna vez has visto un div que simplemente no centra... sí, probablemente soy yo luchando con él. Quédate para la aventura - te prometo que hay algunas cosas interesantes (y tal vez incluso algunos divs enfocados) esperare por ti aquí! 😄",
      //about
      aboutTitle: "Sobre mi",
      aboutText: "Soy un desarrollador junior de Java Spring Boot con una fuerte motivación para el aprendizaje y la mejora continua. Mientras mi principal enfoque es en el desarrollo de backend, estoy actualmente sumergiéndome en el mundo del frontend - porque ¿por qué detenerse en un extremo de la pila cuando hay todo un lado para explorar? Creo que cada nuevo desafío es una oportunidad para crecer, por lo que me gusta abordar proyectos personales y freelance que amplían mis habilidades. También me apasiona compartir lo que sé con los demás, y estoy comprometido a crear soluciones eficientes y confiables mientras sigo ampliando mi experiencia.",
      //skills-backend
      skillBackendTitle: "Backend",
      skillBackendText: "Creación y optimización de aplicaciones del lado servidor con Java y Spring Boot para manejar la lógica empresarial compleja.",
      //skills-front
      skillFrontTitle: "Frontend",
      skillFrontText: "Puedo crear sitios simples de una página con HTML, CSS y Bootstrap, además de algunos intentos con JSP, Thymeleaf y Spring. Incluso me dedico a Angular para consumir APIs (aunque digamos que CSS y yo todavía estamos &quot;conociéndonos mutuamente&quot;). Si ves un accidente de diseño, solo es un trabajo en progreso! ",
      //skills-tools
      skillsToolsTile: "Herramientas",
      skillsToolsText: "Competente en el uso de entornos de desarrollo, control de versiones y herramientas de depuración para agilizar y optimizar el flujo de trabajo.",
      //skills-knowledge
      skillKnowledgeTitle: "Conocimiento",
      skillKnowledgeText: "Aprendizaje permanente, con un conocimiento en continuo crecimiento a través de auto-estudio y proyectos prácticos",
      //bags
      selfLearning: "Auto-aprendizaje",
      books: "Libros",
      english: "Ingles",
      //project-section
      projectTitle: "Proyectos",
      projectText: "Bienvenido a mi escaparate de proyectos! Aquí encontrarás una colección de los proyectos en los que he trabajado, desde trabajos independientes hasta proyectos personales. He construido de todo, desde APIs y aplicaciones de escritorio hasta algunas páginas web aventureras. Cada proyecto tiene su propia historia - un poco de código, mucho aprendizaje y una pizca de creatividad. Echa un vistazo a las descripciones, verás los enlaces al vídeo o te sumergirás en el código. ¡Disfruta explorando!",
      projectEcommerce: "Una aplicación de e-commerce desarrollada para demostrar mis habilidades en Java y Spring Boot. Este proyecto incluye funcionalidades básicas para la gestión de productos y usuarios, con un enfoque en la creación de una API REST escalable y mantenible. Construido con Spring Boot, este proyecto también incorpora Spring Security para la autenticación básica, y PostgreSQL como base de datos.",
      projectMultipleChat: "Una aplicación Java simple diseñada para demostrar la funcionalidad de chat en tiempo real usando sockets y hilos Java. Este proyecto permite a múltiples clientes conectarse a un servidor e intercambiar mensajes en un entorno de sala de chat compartida. Aprovechando las capacidades de red y multithreading de Java, la aplicación facilita las conexiones simultáneas de clientes y transmisión de mensajes, por lo que es un gran ejemplo de concurrencia de Java en acción",
      projectAPIRestBack: "Una aplicación API-REST simple construida en Java y Spring boot, fue de mis primeros proyectos en Spring boot y en el mundo de las APIs, se trata de la gestión de clientes con las operaciones CRUD",
      projectAPIRestFront: "Un front simple para consumir una API-REST construir en angular, html, css y typescript. Es un front simple donde podemos manejar a clientes usando las operaciones de CRUD",
      //Exploring section
      exploringTitle: "Explorando",
      exploringFirstText: "Me apasiona aprender nuevas habilidades y ampliar mis conocimientos continuamente. Estos son algunos de los temas que estoy explorando actualmente:",
      exploringMicroserviceText: "<strong>Microservicios: </strong>Aprender a estructurar las aplicaciones como una colección de servicios con un acoplamiento libre.",
      exploringDockerText: "<strong>Docker: </strong>Comprensión de la contenedorización para entornos escalables y aislados",
      exploringKubernetesText: "<strong>Kubernetes: </strong>Dominar la orquestación de contenedores para automatizar el despliegue, la escalabilidad y la gestión.",
      exploringHtmlCssText: "<strong>HTML & CSS: </strong> Mejorar mis habilidades de front-end para crear páginas web estructuradas y con estilo.",
      exploringAngularText: "<strong>Angular: </strong>Sumergiendome en este popular marco front-end para la construcción de aplicaciones dinámicas.",
      exploringCibersecurityText: "<strong>Ciberseguridad (Cursos de cisco): </strong>Aprender los fundamentos de la ciberseguridad a través de cursos gratuitos de Cisco.",
      exploringLinuxText: "<strong>Linux: </strong>Desarrollar la capacidad de utilizar Linux para tareas de desarrollo y administración de sistemas.",
      exploringEnglishText: "<strong>Ingles: </strong>Mejorar mis habilidades lingüísticas a través de diversos recursos en línea y la práctica.",
      exploringSecondText: "Estoy usando recursos en línea como cursos gratuitos, videos de YouTube, foros y sitios web. Sigo un enfoque estructurado para aprender estos temas de manera eficiente, asegurando que mi estudio esté organizado y orientado a los objetivos.",
      //contact section
      contactTitle: "Contacta conmigo",
      contactName: "Nombre",
      contactEmail: "Corre",
      contactMessage: "Mensaje",
      contactSendButton: "Enviar Mensaje"
    }
  };

  // Function to change language
  function setLanguage(language) {
    // Check if the selected language exists in the translations
    if (!translations[language]) {
      console.error(`Language "${language}" not found in translations`);
      return;
    }

    // Get the translations for the selected language
    const selectedTranslations = translations[language];

    // Loop through each key-value pair in the selected language translations
    for (const key in selectedTranslations) {
      // Find the HTML element with the id that matches the key
      const element = document.getElementById(key);

      // If the element exists, update its text content
      if (element) {
        element.innerHTML = selectedTranslations[key];
      } else {
        console.warn(`Element with ID "${key}" not found in the document`);
      }
    }
  }
  //---------------------------------------------------
  window.onscroll = function () {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  };

  // Function to scroll to the top
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }