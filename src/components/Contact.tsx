
import { useState, useEffect, useRef, FormEvent } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Contact</h2>

        <div className="max-w-3xl mx-auto mt-12">
          <div
            className={`mb-12 text-center transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Get In Touch
            </h3>
            <p className="text-slate max-w-2xl mx-auto">
              I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, I'll do my best to get back to you!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div
              className={`transition-all duration-700 ease-out delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-navy-light border-teal/30 focus:border-teal/60 text-white"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-navy-light border-teal/30 focus:border-teal/60 text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-navy-light border-teal/30 focus:border-teal/60 text-white resize-none"
                    placeholder="Your message..."
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal text-navy hover:bg-teal/90 transition-colors font-medium py-6"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      Sending... <Send className="ml-2 h-4 w-4 animate-pulse" />
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
            </div>

            <div
              className={`transition-all duration-700 ease-out delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="bg-navy-light rounded-lg p-6 border border-teal/20 h-full flex flex-col">
                <h4 className="text-xl font-bold text-white mb-6">
                  Let's Connect
                </h4>
                
                <p className="text-slate mb-8">
                  Prefer connecting through social media or email? You can find me on the platforms below.
                </p>
                
                <div className="space-y-6 mt-auto">
                  <a
                    href="mailto:vivek.sindagi@example.com"
                    className="flex items-center group"
                  >
                    <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center border border-teal/30 group-hover:border-teal transition-colors">
                      <Mail className="h-5 w-5 text-teal" />
                    </div>
                    <div className="ml-4">
                      <h5 className="text-white group-hover:text-teal transition-colors">Email</h5>
                      <p className="text-slate text-sm">vivek.sindagi@example.com</p>
                    </div>
                  </a>
                  
                  <a
                    href="https://linkedin.com/in/viveksindagi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center group"
                  >
                    <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center border border-teal/30 group-hover:border-teal transition-colors">
                      <Linkedin className="h-5 w-5 text-teal" />
                    </div>
                    <div className="ml-4">
                      <h5 className="text-white group-hover:text-teal transition-colors">LinkedIn</h5>
                      <p className="text-slate text-sm">linkedin.com/in/viveksindagi</p>
                    </div>
                  </a>
                  
                  <a
                    href="https://github.com/vivekgsindagi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center group"
                  >
                    <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center border border-teal/30 group-hover:border-teal transition-colors">
                      <Github className="h-5 w-5 text-teal" />
                    </div>
                    <div className="ml-4">
                      <h5 className="text-white group-hover:text-teal transition-colors">GitHub</h5>
                      <p className="text-slate text-sm">github.com/vivekgsindagi</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
