import {
  Mail,
  Linkedin,
  Phone,
  MapPin,
  Github,
  ExternalLink,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { useState } from "react";
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
          {icon}

          <div>
            <h3>{title}</h3>
            <span>{professor}</span>
          </div>
        </div>

        <button className="expand-btn" onClick={() => setOpen(!open)}>
          {open ? "Collapse" : "Read Reflection"}
        </button>
      </div>

      <p className="reflection-summary">{summary}</p>

      {open && <div className="reflection-details">{details}</div>}
    </div>
  );
}
function SkillGroup({ title, skills }) {
  return (
    <div className="skill-panel chip-card">
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

      <h3 className="skill-title">{title}</h3>

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
  const heroImage =
    "https://mynewbucket2002.s3.ap-south-1.amazonaws.com/WhatsApp+Image+2026-04-04+at+15.26.06.jpeg";
  const labImage =
    "https://d2xunoxnk3vwmv.cloudfront.net/encyclopedias/636541201985720309-Equal-split.jpg";
  const circuitImage =
    "https://vlsigyan.com/wp-content/uploads/2017/12/current_mirror.png.jpg";

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
        <div
          className="absolute top-[-200px] left-[15%]
  w-[700px] h-[700px]
  bg-cyan-400/20 blur-[180px] rounded-full"
        />

        <div
          className="absolute bottom-[-200px] right-[15%]
  w-[600px] h-[600px]
  bg-teal-400/20 blur-[160px] rounded-full"
        />
      </div>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/5 backdrop-blur-xl border border-cyan-400/10/5 border-b border-white/10">
        <div className="container flex items-center justify-between py-4">
          {/* Logo */}
          <h1 className="text-2xl font-bold tracking-tight">Portfolio</h1>

          {/* Centered Links */}
          <div className="hidden md:flex gap-8 text-sm font-medium font-sans absolute left-1/2 transform -translate-x-1/2">
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
            <a href="#education" className="hover:text-cyan-400 transition">
              Education
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>
            <a href="#experience" className="hover:text-cyan-400 transition">
              Experience
            </a>
            <a href="#reflections" className="hover:text-cyan-400 transition">
              Reflections
            </a>
          </div>

          {/* Right Side Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="px-4 py-2 text-sm rounded-lg border border-white/10 hover:border-cyan-400 transition"
            >
              Contact Me
            </a>

            <a
              href="https://mynewbucket2002.s3.ap-south-1.amazonaws.com/Resume_Muskaan.pdf"
              download
              className="px-4 py-2 text-sm rounded-lg
  bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-500
  text-black font-medium
  shadow-[0_0_18px_rgba(34,211,238,0.35)]
  hover:shadow-[0_0_28px_rgba(34,211,238,0.55)]
  hover:scale-105 transition-all duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-secondary/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal className="slide-in-left">
              <div className="h-[2px] w-24 bg-gradient-to-r from-cyan-400 to-teal-300 rounded-full"></div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Microelectronics & Semiconductor Engineer
              </h1>
              <p className="text-lg text-secondary-foreground mb-8 leading-relaxed">
                Master's graduate specializing in RTL modeling, mixed-signal
                circuit design, and semiconductor fabrication. Passionate about
                designing precision analog circuits and exploring the physics
                that powers modern electronics.
              </p>
              <div className="flex gap-4 mt-6">
                {/* Email */}
                <a
                  href="mailto:muskaan.vrati@gmail.com"
                  className="contact-btn"
                >
                  <Mail className="w-5 h-5" />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/muskaanvr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn"
                >
                  <Github className="w-5 h-5" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/muskaan-vrati-980321246"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </ScrollReveal>
            <ScrollReveal className="slide-in-right relative group" delay={200}>
              {/* glow background */}
              <div className="absolute inset-0 rounded-2xl bg-cyan-400/10 blur-2xl opacity-40 group-hover:opacity-70 transition duration-500"></div>

              {/* signal frame */}
              <div className="relative p-[2px] rounded-2xl bg-gradient-to-br from-cyan-400/40 via-transparent to-teal-300/40">
                <img
                  src={heroImage}
                  alt="Semiconductor wafer with circuit patterns"
                  className="relative rounded-2xl shadow-[0_0_40px_rgba(34,211,238,0.25)]
      group-hover:shadow-[0_0_70px_rgba(34,211,238,0.45)]
      transition duration-500"
                />
              </div>

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
              Semiconductor Profile
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
              <h3>RTL & Digital Design</h3>
              <p>
                Verilog modeling, FPGA systems, waveform debugging, synchronous
                logic architecture and simulation validation.
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
              <h3>Mixed-Signal Circuits</h3>
              <p>
                ADC/DAC integration, analog interfaces, signal integrity
                analysis and behavioral modeling of hybrid systems.
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
              <h3>Device Fabrication</h3>
              <p>
                Photolithography workflow, wafer processing steps, semiconductor
                materials and transistor-level physics.
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
              <h3>Cadence Virtuoso</h3>
              <p>
                Schematic capture, layout verification, simulation-driven design
                and waveform analysis.
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
              <h3>Simulation & Verification</h3>
              <p>
                MATLAB modeling, testbench workflows, timing validation and
                system-level signal evaluation.
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
              <h3>System Integration</h3>
              <p>
                FPGA prototyping, embedded interfaces, digital-analog
                interaction and architecture scaling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section id="education" className="py-24 bg-transparent">
        <div className="container">
          {/* Section Title */}
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-4">Education Path</h2>
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
                    Master of Science
                  </h3>

                  <p className="timeline-degree">
                    Microelectronics & Semiconductor Engineering
                  </p>

                  <span className="timeline-meta">
                    SUNY Buffalo · Jan 2025 – May 2026
                  </span>

                  <div className="timeline-tag">GPA: 3.875 / 4.0</div>

                  <p className="timeline-courses">
                    Semiconductor Devices · Analog IC Design · RF/Microwave
                    Circuits · Microfabrication Lab · Solid-State Sensors ·
                    Photovoltaics
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* BTech */}
            <ScrollReveal delay={120}>
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
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-transparent">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-4">Technical Stack</h2>
            <div className="h-[2px] w-28 bg-gradient-to-r from-cyan-400 to-teal-300 rounded-full mb-14"></div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <SkillGroup
              title="EDA & Simulation"
              skills={["Cadence Virtuoso", "ADS", "MATLAB", "Verilog"]}
            />

            <SkillGroup
              title="Technical Computing"
              skills={["Python", "C", "RTL Design", "FSM Design"]}
            />

            <SkillGroup
              title="Mixed-Signal Design"
              skills={[
                "ADC/DAC",
                "Analog Front-End",
                "Bias Circuits",
                "Op-Amps",
              ]}
            />

            <SkillGroup
              title="Fabrication"
              skills={["PVD", "CVD", "Photolithography", "Oxidation"]}
            />

            <SkillGroup
              title="Process Engineering"
              skills={["Doping", "Etching", "Thin Films", "Metrology"]}
            />

            <SkillGroup
              title="System Architecture"
              skills={[
                "FPGA",
                "Signal Integrity",
                "Waveform Debugging",
                "System Analysis",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-transparent">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-4">Design Projects</h2>

            <div className="h-[2px] w-28 bg-gradient-to-r from-cyan-400 to-teal-300 rounded-full mb-16"></div>
          </ScrollReveal>

          <div className="space-y-20">
            {/* PROJECT 1 */}
            <ScrollReveal>
              <div className="project-module chip-card">
                <div className="project-line" />

                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  <div>
                    <h3 className="project-title">
                      Analog CMOS Performance Evaluation
                    </h3>

                    <p className="project-subtitle">
                      Current Mirrors & Differential Amplifier Architecture
                    </p>

                    <ul className="project-points">
                      <li>
                        Designed NMOS mirror topologies (simple, cascode,
                        high-swing)
                      </li>

                      <li>Achieved 70–80 dB DC gain with 10 MHz UGB Op-Amp</li>

                      <li>
                        Cadence Virtuoso simulation & mismatch optimization
                      </li>

                      <li>Bias optimization for linearity and stability</li>
                    </ul>

                    <div className="tech-stack">
                      <span>Cadence Virtuoso</span>
                      <span>CMOS Analog</span>
                      <span>130nm PDK</span>
                    </div>
                  </div>

                  <div className="project-image">
                    <img src={circuitImage} alt="CMOS schematic" />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* PROJECT 2 */}
            <ScrollReveal delay={120}>
              <div className="project-module chip-card">
                <div className="project-line" />

                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  <div className="order-2 lg:order-1 project-image">
                    <img src={labImage} alt="Directional coupler design" />
                  </div>

                  <div className="order-1 lg:order-2">
                    <h3 className="project-title">
                      3-Section Directional Coupler Optimization
                    </h3>

                    <p className="project-subtitle">
                      RF/Microwave Circuit Design @ 3 GHz
                    </p>

                    <ul className="project-points">
                      <li>Designed 20 dB parallel-line coupler architecture</li>

                      <li>Achieved &lt;1.5 dB insertion loss</li>

                      <li>Directivity optimized to ~30 dB</li>

                      <li>S-parameter validation & EM tuning in ADS</li>
                    </ul>

                    <div className="tech-stack">
                      <span>ADS</span>
                      <span>RF Design</span>
                      <span>S-Parameters</span>
                    </div>
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
            <h2 className="text-4xl font-bold mb-4">Engineering Experience</h2>

            <div className="h-[2px] w-28 bg-gradient-to-r from-cyan-400 to-teal-300 rounded-full mb-16"></div>
          </ScrollReveal>

          {/* Experience Timeline */}
          <div className="timeline">
            <ScrollReveal>
              <div className="timeline-item">
                <div className="timeline-node"></div>

                <div className="timeline-content chip-card">
                  <h3>Design & Verification Engineer</h3>

                  <p className="timeline-degree">
                    IRA Technologies · Noida, India
                  </p>

                  <span className="timeline-meta">Jul 2024 – Nov 2024</span>

                  <ul className="experience-points">
                    <li>Hardware validation of Android box SoC platforms</li>

                    <li>
                      Functional verification across embedded chipset subsystems
                    </li>

                    <li>
                      Signal integrity & system-level performance analysis
                    </li>

                    <li>
                      Cross-team debug collaboration for design issue resolution
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Reflections Section */}
      <section id="reflections" className="py-24 bg-transparent">
        <div className="container">
          <h2 className="text-4xl font-bold mb-4">Academic Reflections</h2>

          <div className="h-[2px] w-28 bg-gradient-to-r from-cyan-400 to-teal-300 rounded-full mb-16"></div>

          <div className="reflection-bus-wrapper">
            <div className="reflection-bus-line"></div>

            <div className="space-y-14 relative">
              <ReflectionCard
                icon={<Cpu size={22} />}
                title="Analog Integrated Circuits"
                professor="Prof. Bibhudatta Sahoo"
                summary="Learned trade-offs between gain, bandwidth, and compliance voltage through Cadence-based mirror and op-amp design."
                details="Designing cascoded mirrors and differential amplifiers showed how non-ideal effects reshape theoretical expectations. Achieving 70–80 dB gain in a fully differential op-amp required iterative transistor sizing, pole placement analysis, and stability verification. This course transformed circuits from equations into engineering systems defined by trade-offs."
              />

              <ReflectionCard
                icon={<FlaskConical size={22} />}
                title="Microfabrication Lab"
                professor="Prof. Jeff Salzmann"
                summary="Hands-on exposure to wafer processing revealed how precision fabrication determines device reliability."
                details="Executing lithography, deposition, and SPC analysis showed that semiconductor manufacturing depends on repeatability rather than single-run correctness. Cleanroom workflow, metrology tools, and oxidation experiments changed my understanding from theoretical fabrication to controlled process engineering."
              />

              <ReflectionCard
                icon={<Network size={22} />}
                title="Machine Learning over Wireless Edge Networks"
                professor="Prof. Seyyedali Hosseinalipoour"
                summary="Explored optimization behavior in distributed ML systems under bandwidth and energy constraints."
                details="Training MNIST and federated models clarified convergence behavior across heterogeneous datasets. Studying UAV trajectory optimization and IRS-enabled networks strengthened my ability to interpret research papers and understand system-level trade-offs between communication and learning efficiency."
              />

              <ReflectionCard
                icon={<Atom size={22} />}
                title="Fundamentals of Semiconductor Devices"
                professor="Prof. Huamin Li"
                summary="Developed intuition for carrier transport, electrostatics, and device-scale physical modeling."
                details="Understanding drift, diffusion, and band structures transformed MOSFET behavior from symbolic models into physical processes. Demonstrations comparing pixel scale to human hair made nanoscale device dimensions tangible and strengthened my semiconductor physics foundation."
              />
            </div>
          </div>
        </div>
      </section>

      {/* contact me  */}
      {/* Contact Section */}
      <section id="contact" className="py-28 relative">
        <div className="container text-center">
          {/* title */}
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>

          <p className="text-secondary-foreground max-w-2xl mx-auto mb-16">
            I am currently seeking opportunities in microelectronics, RTL
            design, analog IC design, semiconductor fabrication, and
            device-level modeling. Feel free to reach out for collaboration or
            discussion.
          </p>

          {/* contact card */}
          <div className="contact-chip">
            <div className="contact-row">
              <div className="contact-icon">
                <Mail size={18} />
              </div>

              <div className="contact-text">
                <span>Email</span>
                muskaan.vrati@gmail.com
              </div>
            </div>

            <div className="contact-row">
              <div className="contact-icon">
                <MapPin size={18} />
              </div>

              <div className="contact-text">
                <span>Location</span>
                Buffalo, NY, USA
              </div>
            </div>

            {/* CTA button */}
            <a href="mailto:muskaan.vrati@gmail.com" className="contact-cta">
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
              © 2026 Muskaan Vrati. All rights reserved.
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
                href="mailto:muskaan.vrati@gmail.com"
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
