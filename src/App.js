import React, { useState } from "react";
import { GraduationCap, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import BackToTop from "./BackToTop";
import Preloader from "./Preloader";
import { Video, Image, Feather, Book, Layers, Users, Activity } from "lucide-react";



import "./index.css";
import profileImg from "./me.jpeg"; 
import aboutImg from "./about.jpg"; 

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

 const certifications = [
  {
    id: 1,
    name: "J.P. Morgan Software Engineering Virtual Internship",
    image: "/jpmorgans.jpeg",
    description: "Completed virtual internship in software engineering.",
    link: "https://www.linkedin.com/in/chellapandian-s/details/certifications/"
  },
  {
    id: 2,
    name: "Accenture Data Analytics Virtual Internship",
    image: "/accenture.jpeg",
    description: "Completed virtual internship in data analytics with Accenture.",
    link: "https://www.linkedin.com/in/chellapandian-s/details/certifications/"
  },
 {
  id: 3,
  name: "Sprout Course on AI, Machine Learning & Data Science",
  image: "/sprout.jpeg",
  description: "Completed introductory course on AI, ML, and data science from Sprout.",
  link: "https://www.linkedin.com/in/chellapandian-s/details/certifications/"
},

  {
  id: 4,
  name: "Python Programming Test – IIT Bombay",
  image: "/python.jpeg",
  description: "Successfully completed Python test conducted by IIT Bombay.",
  link: "https://www.linkedin.com/in/chellapandian-s/details/certifications/"
}

];

  return (
    <>
      {/* Header Navbar */}
      <header>
  <nav className="navbar">
    <div className="logo">Chellapandian S</div>
    <button 
      className="menu-toggle" 
      onClick={() => setMenuOpen(!menuOpen)}
    >
      ☰
    </button>
    <ul className={menuOpen ? "nav-links open" : "nav-links"}>
      <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
      <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
      <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
      <li><a href="#certifications" onClick={() => setMenuOpen(false)}>Certifications</a></li>
      <li><a href="#extracurricular" onClick={() => setMenuOpen(false)}>Extracurricular</a></li>
      <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
      <li><a href="#education" onClick={() => setMenuOpen(false)}>Education</a></li>
      <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
      <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
      <li><a href="/ChellapandianSCV.pdf" download className="btn" onClick={() => setMenuOpen(false)}>Download Résumé</a></li>
    </ul>
  </nav>
</header>

 <Preloader />
   {/* Hero */}
<section className="hero" id="home">
  <div className="hero-content">
    <img src={profileImg} alt="Chellapandian S" className="hero-img" />
    <div>
      <h1>
        Hi, I'm <span>Chellapandian S</span>
      </h1>

      <h2 className="animated-text">
        <span>Web Developer</span>
        <span>Frontend Developer</span>
        <span>Full Stack Developer</span>
      </h2>

      <p>
        PHP & MySQL Web Developer with 1 year of experience building responsive websites.
      </p>


      {/* Social Links */}
      <div className="social-links">
        <a href="https://github.com/ChellapandianS" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/chellapandian-s/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://x.com/Chellap98580365?t=S3HM_WwH-AZI5MDNc7A3Tw&s=08" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  </div>
</section>


{/* Resume Download */}
<div className="resume-download">
  <a href="/ChellapandianSCV.pdf" download>
    <i className="fas fa-file-download"></i> Download Resume
  </a>
</div>


{/* About */}
<section id="about">
  <h2>About Me</h2>
  <div className="about-container">
    
    {/* Left Side - Image */}
    <div className="about-img">
      <img src={aboutImg} alt="Chellapandian S" />

    </div>

    {/* Right Side - Content */}
    <div className="about-content">
      <p className="fade-in">
       I am a passionate Web Developer specializing in building responsive, user-friendly, and dynamic applications using PHP, MySQL, and React.js. My goal is to design and develop solutions that attract, inspire, and create impact through clean code and great user experiences.
      </p>

      <ul className="about-info slide-in">
        <li><strong>Phone:</strong> +91 78711 44922</li>
        <li><strong>Email:</strong> chellapandian625@gmail.com</li>
        <li><strong>From:</strong> Madurai, India</li>
        <li><strong>Languages:</strong> English, Tamil</li>
    
      </ul>
    </div>

  </div>
</section>


{/* Skills */}
<section id="skills">
  <h2 className="reveal">My Skills</h2>

  <div className="skills-grid">
    <div className="skill-card reveal">
      <i className="skill-icon devicon-php-plain colored"></i>
      <p>PHP</p>
      <div className="skill-bar"><div className="skill-level php"></div></div>
      <span className="percent">85%</span>
    </div>

    <div className="skill-card reveal">
      <i className="skill-icon devicon-mysql-plain colored"></i>
      <p>MySQL</p>
      <div className="skill-bar"><div className="skill-level mysql"></div></div>
      <span className="percent">80%</span>
    </div>

    <div className="skill-card reveal">
      <i className="skill-icon devicon-react-original colored"></i>
      <p>React</p>
      <div className="skill-bar"><div className="skill-level react"></div></div>
      <span className="percent">70%</span>
    </div>

    <div className="skill-card reveal">
      <i className="skill-icon devicon-javascript-plain colored"></i>
      <p>JavaScript</p>
      <div className="skill-bar"><div className="skill-level js"></div></div>
      <span className="percent">75%</span>
    </div>

    <div className="skill-card reveal">
      <i className="skill-icon devicon-html5-plain colored"></i>
      <p>HTML5</p>
      <div className="skill-bar"><div className="skill-level html"></div></div>
      <span className="percent">90%</span>
    </div>

    <div className="skill-card reveal">
      <i className="skill-icon devicon-css3-plain colored"></i>
      <p>CSS3</p>
      <div className="skill-bar"><div className="skill-level css"></div></div>
      <span className="percent">85%</span>
    </div>

     <div className="skill-card reveal">
  <i className="skill-icon devicon-bootstrap-plain colored"></i>
  <p>Bootstrap</p>
  <div className="skill-bar"><div className="skill-level bootstrap"></div></div>
  <span className="percent">85%</span>
</div>
<div className="skill-card reveal">
  <i className="fab fa-android skill-icon colored"></i>
  <p>Android</p>
  <div className="skill-bar"><div className="skill-level android"></div></div>
  <span className="percent">50%</span>
</div>
<div className="skill-card reveal">
  <i className="skill-icon devicon-python-plain colored"></i>
  <p>Python</p>
  <div className="skill-bar"><div className="skill-level python"></div></div>
  <span className="percent">60%</span>
</div>


    <div className="skill-card reveal">
      <i className="skill-icon devicon-git-plain colored"></i>
      <p>Git & GitHub</p>
      <div className="skill-bar"><div className="skill-level git"></div></div>
      <span className="percent">75%</span>
    </div>
  </div>
</section>


   
<section id="certifications" className="certifications-section">
  <h2>🎓 Certifications</h2>

  <div className="certifications-grid">
    {certifications.map((cert) => (
      <a
        key={cert.id}
        href={cert.link}
        target="_blank"
        rel="noopener noreferrer"
        className="cert-card-link"
        style={{ textDecoration: "none", color: "inherit" }} // optional styling to remove link underline
      >
        <div className="cert-card">
          <img src={cert.image} alt={cert.name} />
          <div className="cert-content">
            <h3>{cert.name}</h3>
            <p>{cert.description}</p>
          </div>
        </div>
      </a>
    ))}
  </div>
</section>


   {/* Extracurricular */}
<section id="extracurricular">
  
  <h2>Extracurricular Activities</h2>
  <div className="activities">
  <div className="activity"><Video size={40} color="#34d399" /><p>Video Editing</p></div>
  <div className="activity"><Image size={40} color="#34d399" /><p>Photo Editing</p></div>
  <div className="activity"><Feather size={40} color="#34d399" /><p>Drawing</p></div>
  <div className="activity"><Book size={40} color="#34d399" /><p>Reading Books</p></div>
  <div className="activity"><Layers size={40} color="#34d399" /><p>Multitasking</p></div>
  <div className="activity"><Users size={40} color="#34d399" /><p>Team Management</p></div>
  <div className="activity"><Activity size={40} color="#34d399" /><p>Quick Learner</p></div>
</div>

</section>

   
      {/* Projects */}
<section id="projects" className="projects-section">
  <h2>🚀 Projects</h2>

  <div className="projects-grid">
    {[
      {
        id: 1,
        name: "Bus pass management System",
        image: "/buspassproject.png",
        description: "The PHP MySQL Bus Pass Management System is a web-based solution that simplifies issuing and managing bus passes. It enables passengers to easily apply for and renew passes online while reducing administrative workload for transit authorities.",
        tech: "PHP, MySQL, Bootstrap, css",
        live: "https://github.com/ChellapandianS/Bus-Pass-Management-System-using--html-CSS-PHP-Mysql",
      },
      {
        id: 2,
        name: "Image Search Engine",
        image: "/imagesearch.jpg",
        description: "The React Image Search Engine is a web-based application designed to provide users with an efficient and intuitive platform for searching and discovering images. Built with React..",
        tech: "React, CSS",
        live: "https://image-searchengine-pied.vercel.app/",
      },
      {
        id: 3,
        name: "Tic-Tac_Toe",
        image: "/tictoc.JFIF",
        description: "The Tic-Tac-Toe Game in React is a web-based application that brings the classic pen-and-paper game to the digital realm, offering an engaging and interactive experience for players. Developed using the React framework.",
        tech: "React, TailwindCSS",
        live: "https://xox-game-chella.vercel.app/",
      },
      {
        id: 4,
        name: "Billing application Crud Basic",
        image: "/crackbill.png",
        description: "This project is a simple billing system built with PHP and MySQL that allows users to perform CRUD (Create, Read, Update, Delete) operations on billing records. Users can add, view, update, and delete bills through a basic interface to manage customer billing information efficiently..",
        tech: "PHP, MySQl, CSS",
        live: "https://github.com/ChellapandianS/Crackers-billing-php-and-mysql",
      },
      {
        id: 5,
        name: "School bill crud",
        image: "/feespaymentcrud.png",
        description: "A simple school payment billing system built with PHP and MySQL that lets users create, view, update, and delete student payment records efficiently.",
        tech: "PHP, MySQl, CSS",
        live: "https://github.com/ChellapandianS/Mini-school-bill-project",
      },

    ].map((proj) => (
      <div key={proj.id} className="project-card">
        <img src={proj.image} alt={proj.name} />
        <div className="project-content">
          <h3>{proj.name}</h3>
          <p>{proj.description}</p>
          <span className="tech">{proj.tech}</span>
          <a href={proj.live} target="_blank" rel="noopener noreferrer">
            🔗 Live Demo or Git code
          </a>
        </div>
      </div>
    ))}
  </div>
</section>


{/* Education */}
<section id="education">
  <h2 className="flex items-center gap-2">
    <GraduationCap className="w-6 h-6 text-blue-500" />
    Education
  </h2>
  <div className="timeline">

    {/* PG */}
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3>Master of Computer Applications (PG)</h3>
        <span>2022 – 2024</span>
        <h4>Madurai Kamaraj University College, Madurai.</h4>
        <p>Percentage: <strong>79%</strong></p>
      </div>
    </div>

    {/* UG */}
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3>Bachelor of Computer Science (UG)</h3>
        <span>2019 – 2022</span>
        <h4>NMSSVN COllege, Madurai</h4>
        <p>Percentage: <strong>78%</strong></p>
      </div>
    </div>

    {/* HSC */}
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3>Higher Secondary Certificate (HSC)</h3>
        <span>2018 – 2019</span>
        <h4>Thiagarajar Model Hr sec School, Madurai</h4>
        <p>Percentage: <strong>58%</strong></p>
      </div>
    </div>

    {/* SSLC */}
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3>Secondary School Leaving Certificate (SSLC)</h3>
        <span>2016 – 2017</span>
        <h4>Thiagarajar Model Hr sec School, Madurai</h4>
        <p>Percentage: <strong>86.6%</strong></p>
      </div>
    </div>

  </div>
</section>

{/* Experience */}
<section id="experience">
  <h2 className="flex items-center gap-2">
    <Briefcase className="w-6 h-6 text-green-500" />
    Experience
  </h2>
  <div className="timeline">

    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3>Web Developer</h3>
        <h4>Shwasthik Technologies</h4>
       <span>2024 – Present</span>
        <p>
          Working with Shwasthik Technologies to develop PHP & MySQL web applications, create responsive UIs, optimize performance, and deliver full-stack solutions for clients.
        </p>
      </div>
    </div>

    {/* <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3>Intern Web Developer</h3>
        <span>2024</span>
        <p>
          Assisted in bug fixing, worked on UI enhancements, collaborated with senior 
          developers to improve backend performance.
        </p>
      </div>
    </div> */}

  </div>
</section>

{/* Contact */}
<section id="contact" className="contact-section">
  <div className="contact-container">
    {/* Left Side - Form */}
    <div className="contact-form">
      <h2>📩 Get in Touch</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const name = e.target.name.value;
          const subject = e.target.subject.value;
          const message = e.target.message.value;
          const whatsappURL = `https://wa.me/7871144922?text=Hello, I am ${name}. %0A%0ASubject: ${subject} %0A%0AMessage: ${message}`;
          window.open(whatsappURL, "_blank");
        }}
      >
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send via WhatsApp</button>
      </form>
    </div>

    {/* Right Side - Info */}
    <div className="contact-info">
      <h2>📞 Contact Info</h2>
      <p>
        Hiring a skilled web developer – bring your ideas to life with clean code and creative design! Contact.
      </p>

      <div className="info-block">
        <h4>Email</h4>
       <p><a href="mailto:chellapandian625@gmail.com">chellapandian625@gmail.com</a></p>
        </div>

      <div className="info-block">
        <h4>Phone</h4>
        <p><a href="tel:+917871144922">+91 78711 44922</a></p>
      </div>

      <div className="info-block">
        <h4>Address</h4>
        <p>Yagappa Nagar,Madurai,<br/> Tamil Nadu, India 625020.</p>
      </div>

      <div className="social-links">
        <p>🌐 Visit my profile and get connected</p>
        <div className="icons">
          <a href="https://www.facebook.com/share/1FU4RVHUbT/" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/_its_me_sudharchellapandian_?igsh=YWFwbjllbW9jMnUz" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/chellapandian-s/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/ChellapandianS" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

  {/* Back to Top */}
      <BackToTop />

      {/* Footer */}
      <footer>
        © {new Date().getFullYear()} All Rights Reserved. Designed and Developed by Chellapandian.
      </footer>
    </>
  );
}

export default App;
