import {
  Mail,
  Linkedin,
  Phone,
  MapPin,
  Github,
  ExternalLink,
  Menu,
  X,
  Code2,
  Server,
  Cloud,
  Database,
  Radio,
  Smartphone,
} from "lucide-react";
import { Eye, EyeOff } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useState, useRef, useEffect } from "react";
import {
  Cpu,
  FlaskConical,
  Network,
  Atom,
  GraduationCap,
  Send,
} from "lucide-react";

function ReflectionCard({ icon, title, professor, summary, details }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="reflection-chip chip-card reflection-node">
      <div className="signal-layer">
        {[...Array(18)].map((_, i) => {
          const edge = Math.floor(Math.random() * 4);

          const position =
            edge === 0
              ? { top: "0%", left: `${Math.random() * 100}%` }
              : edge === 1
                ? { top: "100%", left: `${Math.random() * 100}%` }
                : edge === 2
                  ? { left: "0%", top: `${Math.random() * 100}%` }
                  : { left: "100%", top: `${Math.random() * 100}%` };

          return (
            <span
              key={i}
              className="signal-dot"
              style={{
                ...position,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          );
        })}
      </div>
      <div className="reflection-header">
        <div className="reflection-title">
          <div
            className="
            flex items-center justify-center
            w-10 h-10 sm:w-12 sm:h-12
            min-w-[40px] sm:min-w-[48px]
            aspect-square
            rounded-full
            bg-cyan-400/10
            border border-cyan-400/25
            text-cyan-400
            shadow-[0_0_10px_rgba(34,211,238,0.25)]
            flex-shrink-0
          "
          >
            {icon}
          </div>

          <div>
            <h3>{title}</h3>
            <span>{professor}</span>
          </div>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="
    flex items-center justify-center
    w-8 h-8
    min-w-[32px]
    min-h-[32px]
    aspect-square
    rounded-xl
    border border-cyan-400/25
    bg-cyan-400/5
    text-cyan-400
    hover:bg-cyan-400/10
    hover:border-cyan-400
    hover:shadow-[0_0_14px_rgba(34,211,238,0.45)]
    active:scale-95
    flex-shrink-0
    transition-all duration-300
  "
          aria-label="Toggle reflection details"
        >
          {open ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>

      <p className="reflection-summary">{summary}</p>

      {open && <div className="reflection-details">{details}</div>}
    </div>
  );
}
function SkillGroup({ title, skills, icon }) {
  return (
    <div className="skill-panel chip-card relative">
      {/* signal emitters */}
      <div className="signal-layer">
        {[...Array(18)].map((_, i) => {
          const edge = Math.floor(Math.random() * 4);

          const position =
            edge === 0
              ? { top: "0%", left: `${Math.random() * 100}%` }
              : edge === 1
                ? { top: "100%", left: `${Math.random() * 100}%` }
                : edge === 2
                  ? { left: "0%", top: `${Math.random() * 100}%` }
                  : { left: "100%", top: `${Math.random() * 100}%` };

          return (
            <span
              key={i}
              className="signal-dot"
              style={{
                ...position,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          );
        })}
      </div>

      {/* header with icon */}
      <div className="flex flex-col items-center text-center mb-4">
        <div
          className="
    w-16 h-16
    rounded-lg
    flex items-center justify-center
    bg-cyan-400/10
    border border-cyan-400/25
    text-cyan-400
    shadow-[0_0_12px_rgba(34,211,238,0.25)]
    mb-3
    [&>svg]:w-8 [&>svg]:h-8
  "
        >
          {icon}
        </div>

        <h3 className="skill-title">{title}</h3>
      </div>

      <div className="skill-grid">
        {skills.map(skill => (
          <div key={skill} className="skill-chip">
            <span className="skill-dot" />
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
export default function Home() {
  const [open, setOpen] = useState(false);
  const heroImage =
    "https://mynewbucket2002.s3.ap-south-1.amazonaws.com/1000103557.jpg";
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationFrame: number;

    const autoScroll = () => {
      if (!el.matches(":hover")) {
        el.scrollLeft += 0.4;
      }
      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);
  return (
    <div className="flex flex-col min-h-screen text-foreground overflow-hidden bg-background">
      {/* Random animated PCB signal traces */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {[...Array(18)].map((_, i) => {
          const angle = Math.random() * 360;

          return (
            <div
              key={i}
              className="absolute pcb-signal"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${angle}deg)`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 6}s`,
              }}
            />
          );
        })}
      </div>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden opacity-40">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="pcb-pattern"
              width="300"
              height="300"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 150 H300 M150 0 V300"
                stroke="#22d3ee"
                strokeWidth="0.6"
                className="pcb-line"
              />

              <path
                d="M50 50 H250 V250"
                stroke="#2dd4bf"
                strokeWidth="0.5"
                className="pcb-line-slow"
              />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#pcb-pattern)" />
        </svg>
      </div>
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.12),transparent_60%)]" />
      {/* Circuit grid background */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.06] -z-10">
        <svg width="100%" height="100%">
          <pattern
            id="circuit"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 60 H120 M60 0 V120"
              stroke="#22d3ee"
              strokeWidth="0.5"
            />
          </pattern>

          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>
      {/* glowww */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div
            className="
                absolute top-[-120px] left-1/2 -translate-x-1/2
                w-[320px] h-[320px]
                md:w-[700px] md:h-[700px]
                bg-cyan-400/20 blur-[120px] md:blur-[180px]
                rounded-full pointer-events-none
                "
          />

          <div
            className="
          absolute bottom-[-120px] left-1/2 -translate-x-1/2
          w-[280px] h-[280px]
          md:w-[600px] md:h-[600px]
          bg-teal-400/20 blur-[120px] md:blur-[160px]
          rounded-full pointer-events-none
          "
          />
        </div>
      </div>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
        <div className="container flex items-center justify-between py-3 md:py-4">
          {/* Logo */}
          <h1 className="text-lg md:text-2xl font-bold tracking-tight">
            Portfolio
          </h1>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 text-sm font-medium absolute left-1/2 -translate-x-1/2">
            <a href="#about">Expertise</a>
            <a href="#skills">Tech Stack</a>
            <a href="#projects">Projects</a>
            <a href="#architecture">Architecture</a>
            <a href="#experience">Experience</a>
            <a href="#reflections">System Design</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Right buttons */}
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden sm:block px-3 py-1.5 text-xs md:text-sm rounded-lg border border-white/10 hover:border-cyan-400 transition"
            >
              Contact
            </a>

            <a
              href="https://mynewbucket2002.s3.ap-south-1.amazonaws.com/GauravSinghRaikwalResume.pdf"
              download
              className="hidden sm:block px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm rounded-lg
        bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-500
        text-black font-medium"
            >
              Resume
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-cyan-400"
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden fixed inset-0 z-40">
            {/* overlay */}
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* menu panel */}
            <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[92%] max-w-sm">
              <div
                className="
          rounded-2xl
          p-6
          bg-black/92
          border border-cyan-400/25
          shadow-[0_0_40px_rgba(34,211,238,0.18)]
        "
              >
                <div className="flex flex-col gap-3 text-center text-base font-medium">
                  <a
                    onClick={() => setOpen(false)}
                    href="#about"
                    className="mobile-link"
                  >
                    Expertise
                  </a>

                  <a
                    onClick={() => setOpen(false)}
                    href="#skills"
                    className="mobile-link"
                  >
                    Tech Stack
                  </a>

                  <a
                    onClick={() => setOpen(false)}
                    href="#projects"
                    className="mobile-link"
                  >
                    Projects
                  </a>

                  <a
                    onClick={() => setOpen(false)}
                    href="#architecture"
                    className="mobile-link"
                  >
                    Architecture
                  </a>

                  <a
                    onClick={() => setOpen(false)}
                    href="#experience"
                    className="mobile-link"
                  >
                    Experience
                  </a>

                  <a
                    onClick={() => setOpen(false)}
                    href="#reflections"
                    className="mobile-link"
                  >
                    System Design
                  </a>

                  <a
                    onClick={() => setOpen(false)}
                    href="#education"
                    className="mobile-link"
                  >
                    Education
                  </a>

                  <div className="pt-4 border-t border-cyan-400/10 flex flex-col gap-4">
                    <a
                      href="#contact"
                      onClick={() => setOpen(false)}
                      className="contact-btn w-full justify-center"
                    >
                      Contact Me
                    </a>

                    <a
                      onClick={() => setOpen(false)}
                      href="/GauravSinghRaikwalResume.pdf"
                      download
                      className="contact-cta"
                    >
                      Download Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-secondary/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal className="slide-in-left">
              <div className="h-[2px] w-24 bg-gradient-to-r from-cyan-400 to-teal-300 rounded-full"></div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                {" "}
                <span className="text-cyan-400">Backend-Focused</span> Full
                Stack Software Engineer
              </h1>
              <p className="text-lg text-secondary-foreground mb-8 leading-relaxed">
                Hi, I’m{" "}
                <span className="text-cyan-400 font-semibold">
                  Gaurav Singh Raikwal
                </span>{" "}
                — a Backend-focused Full Stack Software Engineer specializing in
                Java, Spring Boot, AWS, and scalable event-driven architectures.
                I build production-grade payment systems, real-time platforms,
                and microservices-ready distributed backends, and I also develop
                cross-platform mobile applications using Flutter.
              </p>
              <div className="flex gap-4 mt-6">
                {/* Email */}
                <a
                  href="mailto:gauravsinghraikwal13@gmail.com"
                  className="contact-btn"
                >
                  <Mail className="w-5 h-5" />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/DarkLordZeus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn"
                >
                  <Github className="w-5 h-5" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/gaurav-singh-raikwal-99a62b335"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </ScrollReveal>
            <ScrollReveal
              className="slide-in-right relative group w-full max-w-md mx-auto lg:max-w-none"
              delay={200}
            >
              {/* glow background */}
              <div className="absolute inset-0 rounded-2xl bg-cyan-400/10 blur-2xl opacity-40 group-hover:opacity-70 transition duration-500"></div>

              {/* signal frame */}
              {/* <div className="relative p-[2px] rounded-2xl bg-gradient-to-br from-cyan-400/40 via-transparent to-teal-300/40"> */}
                <img
                  src={heroImage}
                  alt="Gaurav Singh Raikwal"
                  className="
                  relative
                  rounded-2xl
                  w-[260px]
                  md:w-[300px]
                  mx-auto
                  shadow-[0_0_40px_rgba(34,211,238,0.25)]
                  group-hover:shadow-[0_0_70px_rgba(34,211,238,0.45)]
                  transition duration-500
                "
                />
              {/* </div> */}

              {/* scanning line effect */}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Semiconductor Capability Section */}
      <section id="about" className="py-24 bg-transparent">
        <div className="container">
          {/* Section Heading */}
          <ScrollReveal>
            <h2 className="text-4xl font-heading mb-3">
              Engineering <span className="text-cyan-400">Expertise</span>
            </h2>

            <div className="h-[2px] w-28 bg-gradient-to-r from-cyan-400 to-teal-300 rounded-full mb-12"></div>
          </ScrollReveal>

          {/* Capability Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* RTL Design */}
            <div className="semicard chip-card">
              {/* signal emitters */}
              <div className="signal-layer">
                {[...Array(20)].map((_, i) => {
                  const edge = Math.floor(Math.random() * 4);

                  const position =
                    edge === 0
                      ? { top: "0%", left: `${Math.random() * 100}%` }
                      : edge === 1
                        ? { top: "100%", left: `${Math.random() * 100}%` }
                        : edge === 2
                          ? { left: "0%", top: `${Math.random() * 100}%` }
                          : { left: "100%", top: `${Math.random() * 100}%` };

                  return (
                    <span
                      key={i}
                      className="signal-dot"
                      style={{
                        ...position,
                        animationDelay: `${Math.random() * 2}s`,
                      }}
                    />
                  );
                })}
              </div>
              <h3>Backend Architecture</h3>
              <p>
                Designing scalable Spring Boot services, event-driven systems,
                and microservices-ready backend infrastructure.
              </p>
            </div>

            {/* Mixed Signal */}
            <div className="semicard chip-card">
              <div className="signal-layer">
                {[...Array(20)].map((_, i) => {
                  const edge = Math.floor(Math.random() * 4);

                  const position =
                    edge === 0
                      ? { top: "0%", left: `${Math.random() * 100}%` }
                      : edge === 1
                        ? { top: "100%", left: `${Math.random() * 100}%` }
                        : edge === 2
                          ? { left: "0%", top: `${Math.random() * 100}%` }
                          : { left: "100%", top: `${Math.random() * 100}%` };

                  return (
                    <span
                      key={i}
                      className="signal-dot"
                      style={{
                        ...position,
                        animationDelay: `${Math.random() * 2}s`,
                      }}
                    />
                  );
                })}
              </div>
              <h3>Real-Time Systems</h3>
              <p>
                Implemented SSE, Redis Pub/Sub, and STOMP-based communication
                for live updates across distributed services.
              </p>
            </div>

            {/* Fabrication */}
            <div className="semicard chip-card">
              <div className="signal-layer">
                {[...Array(20)].map((_, i) => {
                  const edge = Math.floor(Math.random() * 4);

                  const position =
                    edge === 0
                      ? { top: "0%", left: `${Math.random() * 100}%` }
                      : edge === 1
                        ? { top: "100%", left: `${Math.random() * 100}%` }
                        : edge === 2
                          ? { left: "0%", top: `${Math.random() * 100}%` }
                          : { left: "100%", top: `${Math.random() * 100}%` };

                  return (
                    <span
                      key={i}
                      className="signal-dot"
                      style={{
                        ...position,
                        animationDelay: `${Math.random() * 2}s`,
                      }}
                    />
                  );
                })}
              </div>
              <h3>AWS Cloud</h3>
              <p>
                Hands-on with ECS, EKS, ECR, SQS, Cognito, CloudWatch, and
                production-grade deployment pipelines.
              </p>
            </div>

            {/* Cadence */}
            <div className="semicard chip-card">
              <div className="signal-layer">
                {[...Array(20)].map((_, i) => {
                  const edge = Math.floor(Math.random() * 4);

                  const position =
                    edge === 0
                      ? { top: "0%", left: `${Math.random() * 100}%` }
                      : edge === 1
                        ? { top: "100%", left: `${Math.random() * 100}%` }
                        : edge === 2
                          ? { left: "0%", top: `${Math.random() * 100}%` }
                          : { left: "100%", top: `${Math.random() * 100}%` };

                  return (
                    <span
                      key={i}
                      className="signal-dot"
                      style={{
                        ...position,
                        animationDelay: `${Math.random() * 2}s`,
                      }}
                    />
                  );
                })}
              </div>
              <h3>Payment Integrations</h3>
              <p>
                Integrated Stripe Checkout, PayPal Webhooks, and secure
                transaction workflows in production platforms.
              </p>
            </div>

            {/* Verification */}
            <div className="semicard chip-card">
              <div className="signal-layer">
                {[...Array(20)].map((_, i) => {
                  const edge = Math.floor(Math.random() * 4);

                  const position =
                    edge === 0
                      ? { top: "0%", left: `${Math.random() * 100}%` }
                      : edge === 1
                        ? { top: "100%", left: `${Math.random() * 100}%` }
                        : edge === 2
                          ? { left: "0%", top: `${Math.random() * 100}%` }
                          : { left: "100%", top: `${Math.random() * 100}%` };

                  return (
                    <span
                      key={i}
                      className="signal-dot"
                      style={{
                        ...position,
                        animationDelay: `${Math.random() * 2}s`,
                      }}
                    />
                  );
                })}
              </div>
              <h3>Search Optimization</h3>
              <p>
                Implemented Elasticsearch indexing and query optimization for
                real-time scalable search systems.
              </p>
            </div>

            {/* Systems */}
            <div className="semicard chip-card">
              <div className="signal-layer">
                {[...Array(20)].map((_, i) => {
                  const edge = Math.floor(Math.random() * 4);

                  const position =
                    edge === 0
                      ? { top: "0%", left: `${Math.random() * 100}%` }
                      : edge === 1
                        ? { top: "100%", left: `${Math.random() * 100}%` }
                        : edge === 2
                          ? { left: "0%", top: `${Math.random() * 100}%` }
                          : { left: "100%", top: `${Math.random() * 100}%` };

                  return (
                    <span
                      key={i}
                      className="signal-dot"
                      style={{
                        ...position,
                        animationDelay: `${Math.random() * 2}s`,
                      }}
                    />
                  );
                })}
              </div>
              <h3>CI/CD Automation</h3>
              <p>
                Dockerized services with Jenkins pipelines and AWS ECS Fargate
                deployments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-transparent">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-4">
              Technical <span className="text-cyan-400">Stack</span>
            </h2>
            <div className="h-[2px] w-28 bg-gradient-to-r from-cyan-400 to-teal-300 rounded-full mb-14"></div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <SkillGroup
              title="Languages"
              icon={<Code2 size={18} />}
              skills={[
                "Java",
                "C++",
                "C",
                "Dart",
                "Kotlin",
                "SQL",
                "JavaScript",
              ]}
            />

            <SkillGroup
              title="Backend"
              icon={<Server size={18} />}
              skills={[
                "Spring Boot",
                "Hibernate",
                "JPA",
                "WebFlux",
                "Multithreading",
              ]}
            />

            <SkillGroup
              title="Cloud & DevOps"
              icon={<Cloud size={18} />}
              skills={["AWS", "Docker", "Kubernetes", "Jenkins", "Ansible"]}
            />

            <SkillGroup
              title="Databases"
              icon={<Database size={18} />}
              skills={[
                "PostgreSQL",
                "MySQL",
                "MongoDB",
                "Redis",
                "Elasticsearch",
              ]}
            />

            <SkillGroup
              title="Realtime Systems"
              icon={<Radio size={18} />}
              skills={["SSE", "STOMP", "RabbitMQ", "Pub/Sub"]}
            />

            <SkillGroup
              title="Frontend & Mobile"
              icon={<Smartphone size={18} />}
              skills={["Flutter", "React Native", "Jetpack Compose"]}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-transparent">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-4">
              Key <span className="text-cyan-400">Projects</span>
            </h2>

            <div className="h-[2px] w-28 bg-gradient-to-r from-cyan-400 to-teal-300 rounded-full mb-16"></div>
          </ScrollReveal>

          <div className="space-y-20">
            {/* PROJECT 1 */}
            <ScrollReveal>
              <div className="project-module chip-card">
                <div className="project-line" />

                <div>
                  <h3 className="project-title">
                    Virtual Waiter – Resort Management Platform
                  </h3>

                  <p className="project-subtitle">
                    Multi-tenant real-time backend platform
                  </p>

                  <ul className="project-points list-disc pl-5 marker:text-cyan-400">
                    <li>
                      Architected multi-role backend for Admins, Managers,
                      Chefs, Runners, Customers
                    </li>
                    <li>
                      Implemented real-time order & inventory updates using SSE
                    </li>
                    <li>
                      Integrated Stripe Checkout, AWS Cognito, Firebase Phone
                      Auth & Twilio SMS
                    </li>
                    <li>
                      Built QR-based ordering with pre-signed AWS S3 uploads
                    </li>
                    <li>Developed AI assistants using OpenAI + Pinecone</li>
                    <li>
                      Deployed Dockerized services via Jenkins CI/CD on AWS ECS
                      Fargate
                    </li>
                  </ul>

                  <div className="tech-stack">
                    <span>Spring Boot</span>
                    <span>AWS</span>
                    <span>Redis</span>
                    <span>Stripe</span>
                    <span>OpenAI</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* PROJECT 2 */}
            <ScrollReveal delay={120}>
              <div className="project-module chip-card">
                <div className="project-line" />

                <div>
                  <h3 className="project-title">
                    DClutter4U – Donation & Junk Pickup Platform
                  </h3>

                  <p className="project-subtitle">
                    Uber-style real-time logistics backend
                  </p>

                  <ul className="project-points list-disc pl-5 marker:text-cyan-400">
                    <li>
                      Built real-time driver matching using Redis Pub/Sub +
                      STOMP
                    </li>
                    <li>
                      Implemented bidding & auction workflows with Stripe &
                      PayPal payments
                    </li>
                    <li>
                      Integrated Google Maps live tracking & geo-based discovery
                    </li>
                    <li>
                      Designed scalable Spring Boot event-driven architecture
                    </li>
                    <li>
                      Deployed infrastructure using Docker + AWS ECS Fargate
                    </li>
                  </ul>

                  <div className="tech-stack">
                    <span>Spring Boot</span>
                    <span>Redis</span>
                    <span>PayPal</span>
                    <span>Stripe</span>
                    <span>Docker</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* PROJECT 3 */}
            <ScrollReveal delay={180}>
              <div className="project-module chip-card">
                <div className="project-line" />

                <div>
                  <h3 className="project-title">
                    Pre23 – School Management System
                  </h3>

                  <p className="project-subtitle">
                    Role-based academic operations backend
                  </p>

                  <ul className="project-points list-disc pl-5 marker:text-cyan-400">
                    <li>
                      Developed attendance tracking & classroom scheduling
                      modules
                    </li>
                    <li>
                      Implemented invoice generation & Zoho Payments integration
                    </li>
                    <li>
                      Designed secure role-based access control for staff &
                      students
                    </li>
                  </ul>

                  <div className="tech-stack">
                    <span>Spring Boot</span>
                    <span>RBAC</span>
                    <span>Zoho Payments</span>
                    <span>MySQL</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* PROJECT 4 */}
            <ScrollReveal delay={220}>
              <div className="project-module chip-card">
                <div className="project-line" />

                <div>
                  <h3 className="project-title">
                    Anthirium – Peer-to-Peer Blockchain (Java)
                  </h3>

                  <p className="project-subtitle">
                    Distributed blockchain networking system
                  </p>

                  <ul className="project-points list-disc pl-5 marker:text-cyan-400">
                    <li>
                      Built multithreaded TCP-based decentralized node
                      communication
                    </li>
                    <li>
                      Implemented proof-of-work consensus & dynamic mining
                      difficulty
                    </li>
                    <li>
                      Designed conflict resolution & full-chain validation
                      mechanisms
                    </li>
                    <li>Enabled real-time block propagation across peers</li>
                  </ul>

                  <div className="tech-stack">
                    <span>Java</span>
                    <span>Multithreading</span>
                    <span>Blockchain</span>
                    <span>Distributed Systems</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* PROJECT 5 */}
            <ScrollReveal delay={260}>
              <div className="project-module chip-card">
                <div className="project-line" />

                <div>
                  <h3 className="project-title">
                    HomieCLI – AI-Powered Developer CLI Tool
                  </h3>

                  <p className="project-subtitle">
                    OpenAI-powered productivity CLI
                  </p>

                  <ul className="project-points list-disc pl-5 marker:text-cyan-400">
                    <li>
                      Built structured CLI using Picocli + OpenAI API
                      integration
                    </li>
                    <li>Implemented secure configuration management system</li>
                    <li>Created cross-platform executable JAR packaging</li>
                    <li>Designed extensible command architecture</li>
                  </ul>

                  <div className="tech-stack">
                    <span>Java</span>
                    <span>Picocli</span>
                    <span>OpenAI API</span>
                    <span>CLI Tools</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-transparent">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-4">
              Engineering <span className="text-cyan-400">Experience</span>
            </h2>

            <div className="h-[2px] w-28 bg-gradient-to-r from-cyan-400 to-teal-300 rounded-full mb-16"></div>
          </ScrollReveal>

          {/* Experience Timeline */}
          <div className="timeline">
            <ScrollReveal>
              <div className="timeline-item">
                <div className="timeline-node"></div>

                <div className="timeline-content chip-card">
                  <h3>Software Engineer (Team Lead)</h3>

                  <p className="timeline-degree">
                    IRA Technologies · Noida, India
                  </p>

                  <span className="timeline-meta">March 2024 – Present</span>

                  <ul className="project-points list-disc pl-5 marker:text-cyan-400">
                    <li>
                      Led migration from monolithic architecture to
                      microservices, improving scalability and fault isolation
                    </li>

                    <li>
                      Designed real-time backend pipelines using SSE, STOMP, and
                      Redis Pub/Sub
                    </li>

                    <li>
                      Reduced backend latency through async Spring Boot
                      optimization and efficient resource utilization
                    </li>

                    <li>
                      Implemented secure authentication using AWS Cognito, OAuth
                      2.0, and Firebase Authentication
                    </li>

                    <li>
                      Built production-grade payment integrations using Stripe
                      and PayPal webhooks
                    </li>

                    <li>
                      Improved search performance with Elasticsearch real-time
                      indexing
                    </li>

                    <li>
                      Delivered containerized deployments using Docker, Jenkins
                      CI/CD, and AWS ECS Fargate
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Reflections Section */}
      {/* System Design Insights Section */}
      <section id="reflections" className="py-24 bg-transparent">
        <div className="container">
          <h2 className="text-4xl font-bold mb-4">
            System Design <span className="text-cyan-400">Insights</span>
          </h2>

          <div className="h-[2px] w-28 bg-gradient-to-r from-cyan-400 to-teal-300 rounded-full mb-16"></div>

          <div className="reflection-bus-wrapper">
            <div className="reflection-bus-line"></div>

            <div className="space-y-14 relative">
              <ReflectionCard
                icon={<Network size={22} />}
                title="Designing Real-Time Event Pipelines"
                professor="Streaming Architectures"
                summary="Built SSE + Redis Pub/Sub pipelines for low-latency state propagation across distributed services."
                details="Implementing Server-Sent Events alongside Redis Pub/Sub demonstrated how push-based architectures outperform polling in real-time systems. Handling concurrent updates across multiple actors required designing idempotent consumers and lightweight synchronization strategies. This improved my ability to reason about consistency vs responsiveness trade-offs in production environments."
              />

              <ReflectionCard
                icon={<Cpu size={22} />}
                title="Scaling Monoliths into Microservices"
                professor="Service Decomposition"
                summary="Led migration planning from monolithic backend to modular microservice-ready architecture."
                details="Breaking tightly coupled services into independently deployable modules required identifying domain boundaries and eliminating shared-state bottlenecks. Designing stateless services with message-driven coordination improved fault isolation and deployment flexibility. This experience shaped my approach toward scalability-first backend architecture."
              />

              <ReflectionCard
                icon={<FlaskConical size={22} />}
                title="Designing Secure Authentication Systems"
                professor="Identity & Access Architecture"
                summary="Integrated Cognito, OAuth2, and Firebase authentication into production-grade platforms."
                details="Implementing layered authentication flows revealed how identity providers simplify token lifecycle management while improving system security. Combining JWT validation with role-based access control ensured scalable authorization across services. This strengthened my understanding of zero-trust backend design principles."
              />

              <ReflectionCard
                icon={<Atom size={22} />}
                title="Optimizing Search with Elasticsearch"
                professor="Search Infrastructure"
                summary="Improved query latency using real-time indexing and distributed search pipelines."
                details="Designing Elasticsearch indexing strategies demonstrated how denormalization improves read-heavy workloads. Implementing near real-time indexing pipelines allowed faster retrieval while maintaining consistency guarantees. This experience refined my approach to balancing storage duplication against performance gains."
              />

              <ReflectionCard
                icon={<Send size={22} />}
                title="Production-Grade Payment Workflows"
                professor="Fault-Tolerant Integrations"
                summary="Integrated Stripe Checkout and PayPal webhooks with retry-safe event handling."
                details="Handling asynchronous webhook callbacks required designing idempotent processing pipelines and event verification safeguards. Ensuring transactional reliability across distributed payment states improved system robustness under partial failures. This shaped my understanding of resilient external-service integrations."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Diagrams Section */}
      <section
        id="architecture"
        className="py-24 bg-transparent overflow-hidden"
      >
        <div className="container">
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-4">
              Architecture <span className="text-cyan-400">Diagrams</span>
            </h2>

            <div className="h-[2px] w-28 bg-gradient-to-r from-cyan-400 to-teal-300 rounded-full mb-16"></div>
          </ScrollReveal>

          {/* Slider wrapper */}
          <div className="relative group">
            {/* gradient edges */}
            {/* gradient edges */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10" />

            {/* scroll container */}
            <div
              ref={scrollRef}
              className="
    flex gap-10
    overflow-x-auto
    scroll-smooth
    scrollbar-hide
    px-2
    cursor-grab active:cursor-grabbing
    architecture-scroll-container
  "
            >
              {[
                {
                  title: "Virtual Waiter – Multi-Tenant Backend",
                  diagram: `
 Customers (QR Scan)
        │
        ▼
 API Gateway (Spring Boot)
        │
        ├── Cognito + Firebase Auth
        │
        ├── Order Service
        │        │
        │        └── Redis Pub/Sub
        │
        ├── Inventory Service
        │
        └── Notification Layer (SSE)
        │
        ▼
 MySQL + Elasticsearch
        │
        ▼
 AWS ECS Fargate
`,
                },

                {
                  title: "DClutter4U – Driver Matching Engine",
                  diagram: `
 Users
   │
   ▼
 Spring Boot Backend
   │
   ├── Matching Engine
   │        │
   │        └── Redis Pub/Sub
   │
   ├── Auction Service
   │
   ├── Payment Service
   │        ├── Stripe
   │        └── PayPal
   │
   ▼
 MySQL + Elasticsearch
   │
   ▼
 Google Maps Tracking
`,
                },

                {
                  title: "Payment Webhook Reliability Pipeline",
                  diagram: `
 Client Checkout
        │
        ▼
 Stripe / PayPal
        │
        ▼
 Webhook Listener
        │
        ├── Signature Verify
        ├── Idempotency Guard
        ├── Retry-safe Logic
        │
        ▼
 Order State Update
        │
        ▼
 Redis Broadcast + SSE
`,
                },

                {
                  title: "Event Driven Communication Layer",
                  diagram: `
 Service A
   │
   ▼
 Redis Pub/Sub Channel
   │
   ▼
 Service B
   │
   ▼
 SSE Push Layer
   │
   ▼
 Live Clients
`,
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="
              min-w-[520px]
              chip-card
              p-8
              backdrop-blur-xl
              border border-cyan-400/20
              shadow-[0_0_35px_rgba(34,211,238,0.12)]
              hover:shadow-[0_0_70px_rgba(34,211,238,0.35)]
              transition-all duration-500
              rounded-2xl
            "
                >
                  <h3 className="project-title mb-6">{card.title}</h3>

                  <pre
                    className="
              text-sm
              text-cyan-300
              font-mono
              leading-relaxed
              whitespace-pre
              overflow-x-auto
            "
                  >
                    {card.diagram}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section id="education" className="py-24 bg-transparent">
        <div className="container">
          {/* Section Title */}
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-4">
              Education <span className="text-cyan-400">Path</span>
            </h2>
            <div className="h-[2px] w-28 bg-gradient-to-r from-cyan-400 to-teal-300 rounded-full mb-16"></div>
          </ScrollReveal>

          {/* Timeline */}
          <div className="timeline">
            {/* MS */}
            <ScrollReveal>
              <div className="timeline-item">
                <div className="timeline-node"></div>

                <div className="timeline-content">
                  <h3 className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-cyan-400" />
                    Bachelor of Technology
                  </h3>

                  <p className="timeline-degree">Electronics Engineering</p>

                  <span className="timeline-meta">
                    Harcourt Butler Technical University · Sept 2020 – May 2024
                  </span>

                  <div className="timeline-tag">GPA: 8.0 / 10.0</div>

                  <p className="timeline-courses">
                    Semiconductor Devices · Analog IC Design · RF/Microwave
                    Circuits · Microfabrication Lab · Solid-State Sensors ·
                    Photovoltaics
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* BTech */}
            {/* <ScrollReveal delay={120}>
              <div className="timeline-item">
                <div className="timeline-node"></div>

                <div className="timeline-content">
                  <h3 className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-cyan-400" />
                    Bachelor of Technology
                  </h3>

                  <p className="timeline-degree">Electronics Engineering</p>

                  <span className="timeline-meta">
                    HBTU Kanpur · Sep 2020 – May 2024
                  </span>

                  <div className="timeline-tag">CGPA: 7.6 / 10.0 (Honors)</div>
                </div>
              </div>
            </ScrollReveal> */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-28 relative">
        <div className="container text-center">
          {/* title */}
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>

          <p className="text-secondary-foreground max-w-2xl mx-auto mb-16">
            I am currently seeking opportunities as a Backend or Full Stack
            Software Engineer, focused on designing scalable microservices,
            real-time systems, and cloud-native architectures using Java, Spring
            Boot, AWS, and Flutter. I enjoy solving performance, reliability,
            and distributed system challenges and would be happy to connect for
            collaboration or opportunities.
          </p>

          {/* contact card */}
          <div className="contact-chip">
            <div className="contact-row">
              <div className="contact-icon">
                <Mail size={18} />
              </div>

              <div className="contact-text">
                <span>Email</span>
                gauravsinghraikwal13@gmail.com
              </div>
            </div>

            <div className="contact-row">
              <div className="contact-icon">
                <MapPin size={18} />
              </div>

              <div className="contact-text">
                <span>Location</span>
                Noida, India
              </div>
            </div>

            {/* CTA button */}
            <a
              href="mailto:gauravsinghraikwal13@gmail.com"
              className="contact-cta"
            >
              <Send size={18} />
              Say Hello
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white/5 backdrop-blur-xl border border-cyan-400/10 border-t border-border">
        <div className="container">
          <div className="flex justify-between items-center">
            <p className="text-sm text-secondary-foreground">
              © 2026 Gaurav Singh Raikwal. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-accent hover:text-accent/80 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-accent hover:text-accent/80 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:gauravsinghraikwal13@gmail.com"
                className="text-accent hover:text-accent/80 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
