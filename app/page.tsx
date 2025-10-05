"use client"
import type React from "react"
import Image from "next/image"
import { useState, useEffect } from "react"
import {
  Building2,
  Laptop,
  Droplets,
  Car,
  Package,
  Sun,
  CheckCircle,
  Award,
  Shield,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Menu,
  X,
  Target,
  Lightbulb,
  TrendingUp,
  FileText,
  GraduationCap,
  Ship,
  Sparkles,
} from "lucide-react"

interface VisibilityState {
  [key: string]: boolean
}

interface FormDataState {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export default function Page() {
  const [isVisible, setIsVisible] = useState<VisibilityState>({})
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }))
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll("[id]").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const whatsappNumber = "923118305310"
    const message = `*New Inquiry from ${formData.name}*\n\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const services = [
    {
      icon: Building2,
      title: "Construction Services",
      desc: "Complete building construction, facility renovation, electrical & plumbing installation, water plant installations, paint works, and comprehensive project management",
      color: "from-blue-500 to-cyan-500",
      Image: "/construction-site-with-workers-and-modern-building.jpg",
  width: 600,
  height: 400,
    },
    {
      icon: Laptop,
      title: "IT Equipment & Educational Solutions",
      desc: "Video wall systems, projectors, laptops, computers, networking equipment, interactive boards, technology integration, and complete AV solutions",
      color: "from-purple-500 to-pink-500",
      image: "/modern-classroom-with-technology-and-computers.jpg",
        width: 600,
  height: 400,
    },
    {
      icon: Droplets,
      title: "Janitorial Services",
      desc: "Professional facility cleaning, garbage collection and disposal, environmental maintenance, hygiene management, and plantation services",
      color: "from-green-500 to-emerald-500",
      image: "/professional-cleaning-staff-in-modern-facility.jpg",
        width: 600,
  height: 400,
    },
    {
      icon: Car,
      title: "Transportation Services",
      desc: "Vehicle maintenance, fleet management, refurbishment solutions, performance monitoring, and complete transportation logistics",
      color: "from-orange-500 to-red-500",
      image: "/fleet-of-vehicles-and-maintenance-facility.jpg",
        width: 600,
  height: 400,
    },
    {
      icon: Package,
      title: "General Items & Supplies",
      desc: "Stationery supplies, printing and binding services, daily necessities, educational materials, office supplies, and specialized procurement",
      color: "from-yellow-500 to-orange-500",
      image: "/office-supplies-and-stationery-organized-display.jpg",
        width: 600,
  height: 400,
    },
    {
      icon: Sun,
      title: "Solar System Installation",
      desc: "On-grid, hybrid, and off-grid solar systems, professional site surveys, system design, Tier-1 modules and inverters installation",
      color: "from-amber-500 to-yellow-500",
      image: "/solar-panels-installation-on-building-rooftop.jpg",
        width: 600,
  height: 400,
    },
  ]

  const visionValues = [
    {
      icon: Award,
      title: "Excellence",
      desc: "Pursuing perfection in every project, regardless of size or complexity",
    },
    {
      icon: Shield,
      title: "Integrity",
      desc: "Transparent, honest, and ethical business practices in all relationships",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      desc: "Embracing new technologies and methodologies for superior solutions",
    },
    {
      icon: Target,
      title: "Reliability",
      desc: "Consistent, dependable service delivery that clients can trust",
    },
  ]

  const pmsaProjects = [
    {
      number: "01",
      title: "PMSA BASE KATI BANDAR",
      project: "Construction & Renovation",
      scope: "Complete facility modernization",
      features: "Advanced infrastructure, security systems",
      status: "Successfully completed",
    },
    {
      number: "02",
      title: "PMSA BASE RISHAD PASNI",
      project: "Prefabricated Boundary Wall",
      scope: "Security perimeter construction",
      features: "Weather-resistant rapid deployment",
      status: "Completed ahead of schedule",
    },
    {
      number: "03",
      title: "BASE GWADAR",
      project: "Administrative Block & Mosque",
      scope: "Dual-purpose facility construction",
      features: "Modern design, integrated facilities",
      status: "Successfully delivered",
    },
    {
      number: "04",
      title: "PMSA HEADQUARTERS",
      project: "Medical Equipment Supply",
      scope: "Complete medical equipment provision",
      equipment: "ECG machines, vein finders, stethoscopes",
      status: "Ongoing supply partnership",
    },
  ]

  const navyProjects = [
    {
      number: "01",
      title: "NAVY HEADQUARTERS KARACHI",
      project: "Professional Paint Works",
      scope: "Large-scale painting project",
      features: "Marine-grade materials",
      status: "Successfully completed",
    },
    {
      number: "02",
      title: "COLLEGE SRE SABIR",
      project: "Construction Works",
      scope: "Educational facility development",
      features: "Modern classrooms, technology integration",
      status: "Completed with excellence",
    },
    {
      number: "03",
      title: "WATER PLANT INSTALLATIONS",
      project: "Multiple SRE Schools & Colleges",
      scope: "Drinking water treatment systems",
      features: "Advanced filtration, chilling systems",
      status: "15+ installations completed",
    },
    {
      number: "04",
      title: "KARSAZ BASE",
      project: "Stationery Supply",
      scope: "Complete stationery provision",
      features: "Quality materials, timely delivery",
      status: "Ongoing partnership",
    },
  ]

  const educationalProjects = [
    {
      number: "01",
      title: "Book Printing & Binding Services",
      items: [
        "Educational material production",
        "Professional binding solutions",
        "Custom printing requirements",
        "Quality control standards",
      ],
    },
    {
      number: "02",
      title: "Technology Solutions",
      items: [
        "Projector installations",
        "Video wall systems",
        "Computer and accessory supply",
        "Technical support services",
      ],
    },
    {
      number: "03",
      title: "Training Solutions Support",
      items: ["Educational material supply", "Technology integration", "Ongoing maintenance", "Professional support"],
    },
    {
      number: "04",
      title: "Client Satisfaction",
      items: [
        "Exceeded quality expectations",
        "Delivered within budget",
        "Completed on schedule",
        "Comprehensive support provision",
      ],
    },
  ]

  const stats = [
    { value: "25+", label: "Major Projects", icon: Building2 },
    { value: "100%", label: "On-time Delivery", icon: CheckCircle },
    { value: "85%", label: "Repeat Business", icon: TrendingUp },
    { value: "12", label: "Service Categories", icon: Package },
  ]

  const achievements = [
    {
      title: "Completion statistics",
      desc: "We have completed 25+ major projects with 100% on-time delivery, full budget compliance, and client satisfaction, achieving an 85% repeat business rate.",
      icon: CheckCircle,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Project categories",
      desc: "Our portfolio includes 12 major construction works, 8 IT integration projects, over 15 supply agreements, 10+ maintenance partnerships, and 6 multi-service projects.",
      icon: FileText,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Institutional clients",
      desc: "We proudly serve the Pakistan Maritime Security Agency, Pakistan Navy, Educational Command Centers, government institutions, and leading facilities.",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Service excellence",
      desc: "We ensure zero major quality issues through professional project management, advanced technology integration, and a strong focus on long-term partnerships.",
      icon: Award,
      color: "from-orange-500 to-red-500",
    },
  ]

  const testimonials = [
    {
      org: "Pakistan Maritime Security Agency",
      quote: "Consistent, exceptional results with professional quality. A trusted partner for critical projects.",
      icon: Ship,
    },
    {
      org: "Pakistan Navy ",
      quote: "They understand requirements and deliver superior results every time. Reliable project management.",
      icon: Shield,
    },
    {
      org: "Educational Institutions",
      quote: "From construction to technology integration, they provide comprehensive solutions with timely delivery.",
      icon: GraduationCap,
    },
  ]

  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white min-h-screen relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/8 rounded-full blur-[120px] animate-pulse"></div>
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal-600/8 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-slate-800/20 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-2xl border-b border-teal-500/20 shadow-[0_0_20px_rgba(20,184,166,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 animate-[spin_10s_linear_infinite] hover:animate-[spin_2s_linear_infinite] transition-all duration-300 group">
                <Image
  src="/mslogo.png"
  alt="MS Logo"
  width={48}
  height={48}
  className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(20,184,166,0.5)]"
/>
                <div className="absolute inset-0 bg-teal-500/15 rounded-full blur-xl group-hover:bg-teal-500/25 transition-all"></div>
              </div>
              <div className="hidden md:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-teal-400 via-teal-300 to-teal-400 bg-clip-text text-transparent animate-[gradient_3s_ease_infinite] bg-[length:200%_auto]">
                  M.S Services & Trading Co.
                </h1>
                <p className="text-xs text-slate-400">Building Excellence, Delivering Solutions</p>
              </div>
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              {["Overview", "Vision", "Services", "Projects", "Achievements", "Quality", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-slate-300 hover:text-teal-400 transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-teal-400 group-hover:w-full transition-all duration-500 shadow-[0_0_8px_rgba(20,184,166,0.6)]"></span>
                </a>
              ))}
            </nav>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-slate-800/50 hover:bg-teal-500/10 border border-teal-500/30 hover:border-teal-500 transition-all duration-300 hover:shadow-[0_0_15px_rgba(20,184,166,0.3)]"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <nav className="px-4 py-4 space-y-2 bg-slate-900/95 backdrop-blur-2xl border-t border-teal-500/20">
            {["Overview", "Vision", "Services", "Projects", "Achievements", "Quality", "Contact"].map((item, idx) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-slate-300 hover:text-teal-400 hover:bg-teal-500/10 rounded-lg transition-all duration-300 border border-transparent hover:border-teal-500/30 animate-[slide-in-left_0.3s_ease-out]"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-gradient-to-br from-slate-950/60 via-slate-900 to-slate-950/60 transition-transform duration-300"
          style={{
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
          }}
        ></div>
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-teal-500/20 to-teal-600/20 rounded-full blur-[150px] animate-pulse"
            style={{
              transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
            }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-amber-500/15 to-yellow-500/15 rounded-full blur-[150px] animate-pulse"
            style={{
              animationDelay: "1.5s",
              transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
          <div className="text-center space-y-8 animate-[fadeInUp_1s_ease-out]">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-500/15 via-teal-600/15 to-teal-500/15 border border-teal-500/30 backdrop-blur-xl animate-[float_3s_ease-in-out_infinite] hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(20,184,166,0.2)] relative overflow-hidden group">
              <div className="absolute inset-0 animate-shimmer"></div>
              <Sparkles size={16} className="text-teal-400 animate-pulse" />
              <span className="text-sm font-semibold bg-gradient-to-r from-teal-400 to-teal-300 bg-clip-text text-transparent relative z-10">
                Integrated Infrastructure Solutions
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-teal-400 via-teal-300 to-teal-400 bg-clip-text text-transparent animate-[gradient_4s_ease_infinite] bg-[length:200%_auto] drop-shadow-[0_0_25px_rgba(20,184,166,0.4)]">
                Building Excellence
              </span>
              <br />
              <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">Delivering Solutions</span>
            </h1>

            <p className="max-w-3xl mx-auto text-lg sm:text-xl text-slate-300 leading-relaxed animate-[fadeInUp_1s_ease-out_0.2s_both]">
              We provide complete construction, technology integration, professional janitorial and transportation
              services, general supplies, and turnkey solar system installations for institutions, government
              facilities, and enterprises.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-[fadeInUp_1s_ease-out_0.4s_both]">
              <a
                href="#contact"
                className="group px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-500 rounded-full font-semibold hover:shadow-[0_0_30px_rgba(20,184,166,0.5)] transition-all duration-500 flex items-center gap-2 hover:scale-110 relative overflow-hidden border border-teal-400/40 bg-[length:200%_auto] hover:bg-[position:right_center]"
              >
                <span className="relative z-10">Get a Proposal</span>
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-2 transition-transform duration-300 relative z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-teal-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </a>
              <a
                href="#services"
                className="group px-8 py-4 bg-slate-800/50 backdrop-blur-xl rounded-full font-semibold border-2 border-teal-500/40 hover:border-teal-400 hover:bg-teal-500/10 transition-all duration-500 hover:scale-110 hover:shadow-[0_0_25px_rgba(20,184,166,0.3)] relative overflow-hidden"
              >
                <span className="relative z-10">Explore Services</span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-teal-500/15 to-teal-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </a>
            </div>
          </div>

          {/* Stats */}
          <div id="stats" className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
            {stats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div
                  key={idx}
                  className={`group p-6 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-xl border border-teal-500/25 hover:border-teal-400/50 transition-all duration-500 hover:scale-110 hover:shadow-[0_0_30px_rgba(20,184,166,0.25)] relative overflow-hidden ${
                    isVisible.stats ? "animate-[scale-in_0.6s_ease-out]" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 via-teal-500/8 to-teal-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Icon
                    size={32}
                    className="text-teal-400 mb-3 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 drop-shadow-[0_0_8px_rgba(20,184,166,0.6)] relative z-10"
                  />
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-teal-400 to-teal-300 bg-clip-text text-transparent relative z-10">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400 mt-2 relative z-10">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-teal-400/60 flex justify-center p-2 shadow-[0_0_15px_rgba(20,184,166,0.3)]">
            <div className="w-1 h-3 bg-gradient-to-b from-teal-400 to-teal-500 rounded-full animate-[scroll_1.5s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible.overview ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <span className="inline-block px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-500/15 via-teal-600/15 to-teal-500/15 border border-teal-500/30 text-teal-400 text-sm font-semibold mb-4 animate-[float_3s_ease-in-out_infinite] shadow-[0_0_20px_rgba(20,184,166,0.2)] hover:scale-105 transition-transform duration-300">
              Company Overview
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              Your Complete Solution Partner
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              A single, reliable partner for construction, technology, facility services, supplies, and renewable
              energy.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div
              className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible.overview ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-800/70 to-slate-900/90 backdrop-blur-xl border-2 border-teal-500/30 hover:border-teal-400 transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(20,184,166,0.3)] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 via-teal-500/5 to-teal-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-teal-300 bg-clip-text text-transparent relative z-10">
                  Who We Are
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6 relative z-10">
                  We specialize in integrated infrastructure solutions, enabling clients to access all critical services
                  through one trusted provider. Our portfolio spans government, education, and commercial sectors.
                </p>
                <ul className="space-y-3 relative z-10">
                  {[
                    "Educational facility construction",
                    "Government & defense projects",
                    "Technology integration & IT solutions",
                    "Complete supply chain management",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-slate-300 group-hover/item:text-teal-100 transition-colors duration-300 animate-[slide-in-left_0.5s_ease-out]"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      <CheckCircle
                        size={20}
                        className="text-teal-400 flex-shrink-0 group-hover/item:scale-125 group-hover/item:rotate-12 transition-all duration-300 drop-shadow-[0_0_10px_rgba(20,184,166,0.8)]"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-400 ${isVisible.overview ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div className="relative rounded-3xl overflow-hidden border-2 border-teal-500/30 hover:border-teal-400 transition-all duration-500 group shadow-[0_0_30px_rgba(20,184,166,0.2)] hover:shadow-[0_0_60px_rgba(20,184,166,0.4)]">
                <Image
  src="/ownerpic.png"
  alt="Muhammad Shabbir - Chief Executive Officer"
  width={800}
  height={500}
  className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-700"
/>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 via-teal-500/20 to-teal-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-8 left-8 right-8 transform group-hover:translate-y-[-10px] transition-transform duration-500">
                  <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent">
                    Muhammad Shabbir
                  </h3>
                  <p className="text-xl text-teal-400 font-semibold mb-3">Chief Executive Officer</p>
                  <p className="text-slate-300 leading-relaxed">
                    Visionary leadership driving excellence and client satisfaction through professional expertise and
                    innovative solutions
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`mt-16 p-8 rounded-3xl bg-gradient-to-br from-amber-500/15 via-yellow-500/10 to-amber-500/15 backdrop-blur-xl border-2 border-amber-500/40 hover:border-amber-400 transition-all duration-500 hover:shadow-[0_0_50px_rgba(251,191,36,0.3)] ${
              isVisible.overview ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-amber-500/30 hover:border-amber-400 transition-all duration-300 hover:scale-105">
                <Target size={40} className="text-amber-400 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-amber-400 mb-2">Professional Approach</h4>
                <p className="text-slate-300 text-sm">
                  Experience, leadership, and client-focused philosophy driving every project decision
                </p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-amber-500/30 hover:border-amber-400 transition-all duration-300 hover:scale-105">
                <Award size={40} className="text-amber-400 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-amber-400 mb-2">Key Achievements</h4>
                <p className="text-slate-300 text-sm">
                  Proven success with Navy, PMSA, and integrated quality systems across all sectors
                </p>
              </div>
              <div className="text-center p-6 rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-amber-500/30 hover:border-amber-400 transition-all duration-300 hover:scale-105">
                <TrendingUp size={40} className="text-amber-400 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-amber-400 mb-2">Management Principles</h4>
                <p className="text-slate-300 text-sm">
                  Personal attention, strong teams, and continuous improvement for lasting partnerships
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible.vision ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <span className="inline-block px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-500/15 via-teal-600/15 to-teal-500/15 border border-teal-500/30 text-teal-400 text-sm font-semibold mb-4 animate-[float_3s_ease-in-out_infinite] shadow-[0_0_20px_rgba(20,184,166,0.2)]">
              Vision & Mission
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              To be Pakistan&apos;s most trusted comprehensive service provider, setting excellence standards in
              construction, technology, and facility management.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {visionValues.map((value, idx) => {
              const Icon = value.icon
              return (
                <div
                  key={idx}
                  className={`group p-8 rounded-3xl bg-gradient-to-br from-amber-500/15 via-yellow-500/10 to-amber-500/15 backdrop-blur-xl border-2 border-amber-500/40 hover:border-amber-400 transition-all duration-500 hover:scale-110 hover:shadow-[0_0_60px_rgba(251,191,36,0.4)] relative overflow-hidden ${
                    isVisible.vision ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/20 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 via-yellow-500 to-amber-500 flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-[0_0_30px_rgba(251,191,36,0.6)] relative z-10 bg-[length:200%_auto] group-hover:bg-[position:right_center]">
                    <Icon size={32} className="text-white drop-shadow-lg" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-amber-400 relative z-10 group-hover:text-amber-300 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed relative z-10 group-hover:text-slate-300 transition-colors duration-300">
                    {value.desc}
                  </p>
                </div>
              )
            })}
          </div>

          <div
            className={`p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-800/70 to-slate-900/90 backdrop-blur-xl border-2 border-teal-500/30 hover:border-teal-400 transition-all duration-500 hover:shadow-[0_0_50px_rgba(20,184,166,0.3)] hover:scale-[1.02] ${
              isVisible.vision ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400 bg-clip-text text-transparent animate-[gradient_3s_ease_infinite] bg-[length:200%_auto]">
                Commitment to Excellence
              </h3>
              <p className="text-slate-300 leading-relaxed max-w-4xl mx-auto">
                Delivering superior quality services through professional expertise, innovative solutions, and
                unwavering commitment to client success. We strive for excellence in every project, building lasting
                partnerships based on trust, reliability, and exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible.services ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <span className="inline-block px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-500/15 via-teal-600/15 to-teal-500/15 border border-teal-500/30 text-teal-400 text-sm font-semibold mb-4 animate-[float_3s_ease-in-out_infinite] shadow-[0_0_20px_rgba(20,184,166,0.2)]">
              Service Overview
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              Comprehensive, Multi‑Disciplinary Services
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              From civil works and advanced technology to professional maintenance and fleet management.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <div
                  key={idx}
                  className={`group rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-800/70 to-slate-900/90 backdrop-blur-xl border-2 border-teal-500/30 hover:border-teal-400 transition-all duration-500 hover:scale-[1.05] hover:shadow-[0_0_60px_rgba(20,184,166,0.4)] overflow-hidden relative ${
                    isVisible.services ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                   <Image
  src={service.image || "/placeholder.svg"}
  alt={service.title}
  width={600}
  height={400}
  className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-2 transition-all duration-700"
/>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 via-teal-500/20 to-teal-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div
                      className={`absolute top-4 right-4 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_40px_rgba(20,184,166,0.8)]`}
                    >
                      <Icon size={32} className="text-white drop-shadow-lg" />
                    </div>
                  </div>
                  <div className="p-8 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 via-teal-500/5 to-teal-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-teal-400 to-teal-300 bg-clip-text text-transparent relative z-10 group-hover:scale-105 transition-transform duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed relative z-10 group-hover:text-slate-300 transition-colors duration-300">
                      {service.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible.projects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <span className="inline-block px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-500/15 via-teal-600/15 to-teal-500/15 border border-teal-500/30 text-teal-400 text-sm font-semibold mb-4 animate-[float_3s_ease-in-out_infinite] shadow-[0_0_20px_rgba(20,184,166,0.2)]">
              Recent Projects
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              Trusted by Government and Education
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Selected experience with Pakistan Maritime Security Agency, Pakistan Navy, education sector, and more.
            </p>
          </div>

          {/* PMSA Projects */}
          <div
            className={`mb-16 transition-all duration-1000 ${isVisible.projects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex items-center gap-4 mb-8">
              <Ship size={32} className="text-teal-400" />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-teal-400 via-teal-300 to-teal-400 bg-clip-text text-transparent animate-[gradient_3s_ease_infinite] bg-[length:200%_auto]">
                Pakistan Maritime Security Agency Projects
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {pmsaProjects.map((project, idx) => (
                <div
                  key={idx}
                  className={`group rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-800/70 to-slate-900/90 backdrop-blur-xl border-2 border-teal-500/30 hover:border-teal-400 transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(20,184,166,0.3)] overflow-hidden relative ${
                    isVisible.projects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
  src={
    idx === 0
      ? "/pmsa-base-construction.jpg"
      : idx === 1
        ? "/pmsa-boundary-wall.jpg"
        : idx === 2
          ? "/pmsa-administrative-building.jpg"
          : "/pmsa-medical-equipment.jpg"
  }
  alt={project.title}
  width={600}
  height={400}
  className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-2 transition-all duration-700"
/>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 via-teal-500/20 to-teal-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 left-4 text-5xl font-bold text-teal-400/40 group-hover:text-teal-400/60 transition-colors duration-500">
                      {project.number}
                    </div>
                  </div>
                  {/* </CHANGE> */}

                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 via-teal-500/10 to-teal-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="p-8 relative z-10">
                    <h4 className="text-xl font-bold text-amber-400 mb-3 group-hover:text-amber-300 transition-colors duration-300">
                      {project.title}
                    </h4>
                    <div className="space-y-2 text-sm">
                      <p className="text-slate-300">
                        <span className="font-semibold text-teal-400">Project:</span> {project.project}
                      </p>
                      <p className="text-slate-300">
                        <span className="font-semibold text-teal-400">Scope:</span> {project.scope}
                      </p>
                      <p className="text-slate-300">
                        <span className="font-semibold text-teal-400">Features:</span> {project.features}
                      </p>
                      {project.equipment && (
                        <p className="text-slate-300">
                          <span className="font-semibold text-teal-400">Equipment:</span> {project.equipment}
                        </p>
                      )}
                      <p className="text-slate-300">
                        <span className="font-semibold text-teal-400">Status:</span> {project.status}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pakistan Navy Projects */}
          <div
            className={`mb-16 transition-all duration-1000 delay-200 ${isVisible.projects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex items-center gap-4 mb-8">
              <Shield size={32} className="text-teal-400" />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-teal-400 via-teal-300 to-teal-400 bg-clip-text text-transparent animate-[gradient_3s_ease_infinite] bg-[length:200%_auto]">
                Pakistan Navy Projects
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {navyProjects.map((project, idx) => (
                <div
                  key={idx}
                  className={`group rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-800/70 to-slate-900/90 backdrop-blur-xl border-2 border-teal-500/30 hover:border-teal-400 transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(20,184,166,0.3)] overflow-hidden relative ${
                    isVisible.projects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={
                        idx === 0
                          ? "/navy-headquarters-painting.jpg"
                          : idx === 1
                            ? "/navy-college-construction.jpg"
                            : idx === 2
                              ? "/navy-water-plant.jpg"
                              : "/navy-stationery-supplies.jpg"
                      }
                      alt={project.title}
                       width={600}
  height={400}
                      className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-2 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 via-teal-500/20 to-teal-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 left-4 text-5xl font-bold text-teal-400/40 group-hover:text-teal-400/60 transition-colors duration-500">
                      {project.number}
                    </div>
                  </div>
                  {/* </CHANGE> */}

                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 via-teal-500/10 to-teal-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="p-8 relative z-10">
                    <h4 className="text-xl font-bold text-amber-400 mb-3 group-hover:text-amber-300 transition-colors duration-300">
                      {project.title}
                    </h4>
                    <div className="space-y-2 text-sm">
                      <p className="text-slate-300">
                        <span className="font-semibold text-teal-400">Project:</span> {project.project}
                      </p>
                      <p className="text-slate-300">
                        <span className="font-semibold text-teal-400">Scope:</span> {project.scope}
                      </p>
                      <p className="text-slate-300">
                        <span className="font-semibold text-teal-400">Features:</span> {project.features}
                      </p>
                      <p className="text-slate-300">
                        <span className="font-semibold text-teal-400">Status:</span> {project.status}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Educational Projects */}
          <div
            className={`transition-all duration-1000 delay-400 ${isVisible.projects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex items-center gap-4 mb-8">
              <GraduationCap size={32} className="text-teal-400" />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-teal-400 via-teal-300 to-teal-400 bg-clip-text text-transparent animate-[gradient_3s_ease_infinite] bg-[length:200%_auto]">
                Educational Projects - Naval Academy & PNS Bahadur
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {educationalProjects.map((project, idx) => (
                <div
                  key={idx}
                  className={`group rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-800/70 to-slate-900/90 backdrop-blur-xl border-2 border-teal-500/30 hover:border-teal-400 transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(20,184,166,0.3)] overflow-hidden relative ${
                    isVisible.projects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={
                        idx === 0
                          ? "/education-book-printing.jpg"
                          : idx === 1
                            ? "/education-technology.jpg"
                            : idx === 2
                              ? "/education-training.jpg"
                              : "/education-satisfaction.jpg"
                      }
                      alt={project.title}
                       width={600}
  height={400}
                      className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-2 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 via-teal-500/20 to-teal-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute top-4 left-4 text-5xl font-bold text-teal-400/40 group-hover:text-teal-400/60 transition-colors duration-500">
                      {project.number}
                    </div>
                  </div>
                  {/* </CHANGE> */}

                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 via-teal-500/10 to-teal-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="p-8 relative z-10">
                    <h4 className="text-xl font-bold text-amber-400 mb-4 group-hover:text-amber-300 transition-colors duration-300">
                      {project.title}
                    </h4>
                    <ul className="space-y-2">
                      {project.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-slate-300 text-sm group-hover:text-slate-200 transition-colors duration-300 animate-[slide-in-left_0.5s_ease-out]"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        >
                          <CheckCircle
                            size={16}
                            className="text-teal-400 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="achievements" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible.achievements ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <span className="inline-block px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-500/15 via-teal-600/15 to-teal-500/15 border border-teal-500/30 text-teal-400 text-sm font-semibold mb-4 animate-[float_3s_ease-in-out_infinite] shadow-[0_0_20px_rgba(20,184,166,0.2)]">
              Project Achievements
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              Delivery Excellence Metrics
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Proven track record of successful project delivery across multiple sectors and service categories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, idx) => {
              const Icon = achievement.icon
              return (
                <div
                  key={idx}
                  className={`group p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-800/70 to-slate-900/90 backdrop-blur-xl border-2 border-teal-500/30 hover:border-teal-400 transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(20,184,166,0.3)] relative overflow-hidden ${
                    isVisible.achievements ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 via-teal-500/10 to-teal-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)] relative z-10`}
                    >
                      <Icon size={32} className="text-white drop-shadow-lg" />
                    </div>
                    <div className="flex-1 relative z-10">
                      <h3 className="text-xl font-bold mb-3 text-amber-400">{achievement.title}</h3>
                      <p className="text-slate-300 leading-relaxed">{achievement.desc}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div
            className={`mt-12 p-8 rounded-3xl bg-gradient-to-br from-amber-500/15 via-yellow-500/10 to-amber-500/15 backdrop-blur-xl border-2 border-amber-500/40 transition-all duration-1000 ${
              isVisible.achievements ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center">
              <div className="inline-flex items-center gap-3 mb-4">
                <TrendingUp size={32} className="text-amber-400" />
                <h3 className="text-2xl font-bold text-amber-400">21-23/27 Excellence Rating</h3>
              </div>
              <p className="text-slate-300 leading-relaxed max-w-4xl mx-auto">
                Our comprehensive quality metrics demonstrate consistent excellence across all project categories, with
                outstanding client satisfaction and repeat business rates that reflect our commitment to superior
                service delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality */}
      <section id="quality" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible.quality ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <span className="inline-block px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-500/15 via-teal-600/15 to-teal-500/15 border border-teal-500/30 text-teal-400 text-sm font-semibold mb-4 animate-[float_3s_ease-in-out_infinite] shadow-[0_0_20px_rgba(20,184,166,0.2)]">
              Standards
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              Quality Standards & Safety Protocols
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              ISO‑aligned processes, certified teams, and continuous improvement for reliable outcomes.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                title: "Quality Management",
                desc: "Strict QC, verified materials, skilled workmanship, regular inspections.",
              },
              {
                icon: Shield,
                title: "Professional Certifications",
                desc: "PEC registration, trade licenses, safety & quality certifications.",
              },
              {
                icon: CheckCircle,
                title: "Service Standards",
                desc: "Best practices, performance monitoring, and client satisfaction tracking.",
              },
              {
                icon: Shield,
                title: "Construction Safety",
                desc: "Protective equipment, site management, and emergency readiness.",
              },
              {
                icon: Award,
                title: "Workplace Safety",
                desc: "Compliance, trainings, risk assessment, incident prevention.",
              },
              {
                icon: CheckCircle,
                title: "Environmental Responsibility",
                desc: "Sustainable methods, waste management, energy efficiency.",
              },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className={`group p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-800/70 to-slate-900/90 backdrop-blur-xl border-2 border-teal-500/30 hover:border-teal-400 transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(20,184,166,0.3)] relative overflow-hidden ${
                    isVisible.quality ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 via-teal-500/10 to-teal-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Icon
                    size={32}
                    className="text-teal-400 mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 drop-shadow-[0_0_10px_rgba(20,184,166,0.8)] relative z-10"
                  />
                  <h3 className="text-lg font-bold mb-2 text-amber-400 relative z-10">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed relative z-10 group-hover:text-slate-300 transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-500/15 via-teal-600/15 to-teal-500/15 border border-teal-500/30 text-teal-400 text-sm font-semibold mb-4 animate-[float_3s_ease-in-out_infinite] shadow-[0_0_20px_rgba(20,184,166,0.2)]">
              Client Testimonials
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, idx) => {
              const Icon = testimonial.icon
              return (
                <div
                  key={idx}
                  className="group p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-800/70 to-slate-900/90 backdrop-blur-xl border-2 border-teal-500/30 hover:border-teal-400 transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_50px_rgba(20,184,166,0.3)] relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 via-teal-500/10 to-teal-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Icon
                    size={40}
                    className="text-teal-400 mb-4 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(20,184,166,0.8)] relative z-10"
                  />
                  <div className="text-teal-400 text-4xl mb-4 relative z-10">&ldquo;</div>
                  <p className="text-slate-300 leading-relaxed mb-6 relative z-10 group-hover:text-slate-200 transition-colors duration-300">
                    {testimonial.quote}
                  </p>
                  <div className="pt-4 border-t border-teal-500/30 relative z-10">
                    <p className="font-semibold text-teal-400 group-hover:text-teal-300 transition-colors duration-300">
                      {testimonial.org}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible.contact ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <span className="inline-block px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-500/15 via-teal-600/15 to-teal-500/15 border border-teal-500/30 text-teal-400 text-sm font-semibold mb-4 animate-[float_3s_ease-in-out_infinite] shadow-[0_0_20px_rgba(20,184,166,0.2)]">
              Let&apos;s Build Together
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              Ready to discuss your next project?
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Reach out for proposals, site surveys, and integrated delivery plans.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div
              className={`transition-all duration-1000 delay-200 ${isVisible.contact ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              {/* Enhanced form with subtle hover effects and better styling */}
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-800/70 to-slate-900/90 backdrop-blur-xl border-2 border-teal-500/30 hover:border-teal-400 transition-all duration-500 hover:shadow-[0_0_50px_rgba(20,184,166,0.3)] relative overflow-hidden space-y-6"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 via-teal-500/10 to-teal-600/0 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300 relative z-10">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700/50 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all duration-300 relative z-10"
                    placeholder="Muhammad Shabbir"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300 relative z-10">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700/50 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all duration-300 relative z-10"
                    placeholder="msservicesandtrading@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300 relative z-10">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700/50 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all duration-300 relative z-10"
                    placeholder="+92 311 8305310"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300 relative z-10">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700/50 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all duration-300 relative z-10 appearance-none"
                  >
                    <option value="">Select a service</option>
                    <option value="Construction Services">Construction Services</option>
                    <option value="IT Equipment & Educational Solutions">IT Equipment & Educational Solutions</option>
                    <option value="Janitorial Services">Janitorial Services</option>
                    <option value="Transportation Services">Transportation Services</option>
                    <option value="General Items & Supplies">General Items & Supplies</option>
                    <option value="Solar System Installation">Solar System Installation</option>
                    <option value="Multiple Services">Multiple Services</option>
                  </select>
                  <div className="absolute inset-y-0 right-3 flex items-center px-2 pointer-events-none z-10">
                    <ArrowRight size={16} className="text-slate-400 rotate-90" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300 relative z-10">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/50 border border-slate-700/50 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400/50 transition-all duration-300 relative z-10 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-500 rounded-xl font-semibold hover:shadow-[0_0_40px_rgba(20,184,166,0.5)] transition-all duration-500 flex items-center justify-center gap-2 group hover:scale-105 relative overflow-hidden border border-teal-400/50 bg-[length:200%_auto] hover:bg-[position:right_center]"
                >
                  <span className="relative z-10">Send via WhatsApp</span>
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-2 transition-transform duration-300 relative z-10"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-teal-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
              </form>
            </div>

            <div
              className={`space-y-6 transition-all duration-1000 delay-400 ${isVisible.contact ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              {/* Enhanced contact info card with subtle hover effects */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-800/70 to-slate-900/90 backdrop-blur-xl border-2 border-teal-500/30 hover:border-teal-400 transition-all duration-500 hover:shadow-[0_0_50px_rgba(20,184,166,0.3)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 via-teal-500/10 to-teal-600/0 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex items-start gap-4 mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(6,182,212,0.8)]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-slate-300">Email</h3>
                    <a
                      href="mailto:msservicesandtrading@gmail.com"
                      className="text-teal-400 hover:text-teal-300 transition-colors duration-300"
                    >
                      msservicesandtrading@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(6,182,212,0.8)]">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-slate-300">Phone</h3>
                    <a
                      href="tel:+923118305310"
                      className="text-teal-400 hover:text-teal-300 transition-colors duration-300"
                    >
                      +92 311 8305310
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(6,182,212,0.8)]">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-slate-300">Office</h3>
                    <p className="text-slate-400">
                      Office No G‑48, Falaknaz Tower
                      <br />
                      Main Shahrah‑e‑Faisal, Opp. Airport
                      <br />
                      Karachi, Pakistan
                    </p>
                  </div>
                </div>
              </div>

              {/* Enhanced business hours card */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-800/70 to-slate-900/90 backdrop-blur-xl border-2 border-teal-500/30 hover:border-teal-400 transition-all duration-500 hover:shadow-[0_0_50px_rgba(20,184,166,0.3)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 via-teal-500/10 to-teal-600/0 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-teal-400 via-teal-300 to-teal-400 bg-clip-text text-transparent animate-[gradient_3s_ease_infinite] bg-[length:200%_auto] relative z-10">
                  Business Hours
                </h3>
                <div className="space-y-3 text-slate-300 relative z-10">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-teal-400 font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-teal-400 font-semibold">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-slate-500">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-teal-500/20 bg-slate-950/90 backdrop-blur-2xl shadow-[0_0_20px_rgba(20,184,166,0.08)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10 animate-[spin_8s_linear_infinite]">
                  <Image
  src="/mslogo.png"
  alt="MS Logo"
  width={48}
  height={48}
  className="w-full h-full object-contain drop-shadow-[0_0_10px_rgba(20,184,166,0.5)]"
/>
                </div>
                <span className="font-bold text-lg bg-gradient-to-r from-teal-400 to-teal-300 bg-clip-text text-transparent">
                  M.S Services & Trading Co.
                </span>
              </div>
              <p className="text-slate-400 mb-4">
                Building Excellence, Delivering Solutions. Your trusted partner for integrated infrastructure solutions.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-teal-400">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#overview" className="hover:text-teal-400 transition-colors duration-300">
                    Overview
                  </a>
                </li>
                <li>
                  <a href="#vision" className="hover:text-teal-400 transition-colors duration-300">
                    Vision
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-teal-400 transition-colors duration-300">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-teal-400 transition-colors duration-300">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#quality" className="hover:text-teal-400 transition-colors duration-300">
                    Quality
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-teal-400">Contact</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a
                    href="mailto:msservicesandtrading@gmail.com"
                    className="hover:text-teal-400 transition-colors duration-300"
                  >
                    Email Us
                  </a>
                </li>
                <li>
                  <a href="tel:+923118305310" className="hover:text-teal-400 transition-colors duration-300">
                    Call Us
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-teal-400 transition-colors duration-300">
                    Get Proposal
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-teal-500/20 text-center text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} M.S Services & Trading Co. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          40% {
            opacity: 1;
          }
          80% {
            transform: translateY(20px);
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        /* New Keyframes */
        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-shimmer {
          background-image: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite linear;
        }
      `}</style>
    </div>
  )
}
