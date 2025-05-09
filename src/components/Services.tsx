import React from "react";
import { Code, Database, Globe, Lightbulb, Smartphone, Lock, Megaphone, Cog, Bot, Brain, Cpu } from "lucide-react";
import ServiceCard from "./ServiceCard";
const Services: React.FC = () => {
  const services = [{
    icon: <Brain size={24} />,
    title: "Problem Solving",
    description: "We tackle real-world issues with creative, practical, and impactful technology solutions."
  }, {
    icon: <Lightbulb size={24} />,
    title: "Innovation Lab",
    description: "We explore new possibilities through rapid prototyping, R&D, and emerging technologies."
  }, {
    icon: <Cpu size={24} />,
    title: "Digital Platforms",
    description: "From web to AI systems, we build scalable and user-focused platforms for modern needs."
  }, {
    icon: <Globe size={24} />,
    title: "Web Development",
    description: "Custom websites and web applications built with the latest technologies to meet your business needs."
  }, {
    icon: <Smartphone size={24} />,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that provide seamless experiences across all devices."
  }, {
    icon: <Database size={24} />,
    title: "Software Solutions",
    description: "Tailored software systems that streamline operations and enhance productivity for your organization."
  }, {
    icon: <Megaphone size={24} />,
    title: "Digital Marketing",
    description: "Elevate your online presence with our strategic digital marketing solutions resulting in substantial growth."
  }, {
    icon: <Cog size={24} />,
    title: "Digital Transformation",
    description: "Modernize operations, integrate new technologies & drive innovation to stay ahead in a digital-first world."
  }, {
    icon: <Bot size={24} />,
    title: "Data Science & AI Solutions",
    description: "Turn data into insights & automate with smart AI systems, making your business faster & efficient."
  }, {
    icon: <Code size={24} />,
    title: "Custom Tools",
    description: "Specialized tools and utilities designed to solve specific problems and automate workflows."
  }, {
    icon: <Lightbulb size={24} />,
    title: "Innovation Consulting",
    description: "Strategic guidance on leveraging technology to innovate and stay ahead in your industry."
  }, {
    icon: <Lock size={24} />,
    title: "Secure Systems",
    description: "Robust and secure system architecture ensuring your data and operations are protected."
  }];
  return <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-blue to-brand-purple mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            We build cutting-edge tech solutions that solve real world problems,
            drive innovation, improve lives and create new possibilities for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} delay={index * 100} />)}
        </div>

        <div className="mt-16 bg-brand-light-blue p-8 rounded-2xl border border-brand-blue/10 mt-[150px]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-3">Got any problem with your business? Looking for custom solutions?</h3>
              <p className="text-gray-600">
                We specialize in building tailored technology solutions to address your specific challenges.
              </p>
            </div>
            <div className="flex gap-4">
              <a href="#contact" className="bg-gradient-to-r from-brand-blue to-brand-purple hover:from-brand-purple hover:to-brand-blue text-white px-6 py-3 rounded-lg inline-flex items-center">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Services;