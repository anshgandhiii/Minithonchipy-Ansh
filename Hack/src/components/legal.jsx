import React, { useState } from "react";
import { HelpingHand, Briefcase, Home, Phone, FileDown, ChevronDown, ChevronUp, FileText, Mail, User, MessageSquare, Send, Loader } from "lucide-react";

const LegalAssistanceResources = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const legalCategories = [
    {
      id: "workplace",
      title: "Workplace Harassment",
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      content: "Workplace harassment is a form of discrimination that violates labor laws. It includes unwelcome conduct based on race, color, religion, sex, national origin, age, disability, or genetic information.",
      image: "data:image/jpeg;base64,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"
    },
    {
      id: "domestic",
      title: "Domestic Abuse",
      icon: <Home className="w-8 h-8 text-blue-600" />,
      content: "Domestic abuse, also known as domestic violence, is a pattern of behaviors used by one partner to maintain power and control over another partner in an intimate relationship.",
      image: "data:image/jpeg;base64,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"
    },
    {
      id: "emergency",
      title: "Emergency Contacts",
      icon: <Phone className="w-8 h-8 text-blue-600" />,
      content: "In case of immediate danger, always call your local emergency number (e.g., 911 in the United States). For non-emergency situations, consider contacting local support groups or legal aid organizations.",
      image: "data:image/jpeg;base64,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"
    }
  ];

  const guides = [
    {
      name: "Guide: Dealing with Workplace Harassment",
      steps: [
        "Identify and document incidents of harassment.",
        "Report the harassment to HR or a supervisor.",
        "Know your legal rights under workplace harassment laws.",
        "Seek legal counsel if needed."
      ]
    },
    {
      name: "Guide: Steps to Handle Domestic Abuse",
      steps: [
        "Reach out to trusted friends or family for support.",
        "Create a safety plan for leaving the situation.",
        "Contact local shelters or hotlines for help.",
        "Consider legal actions like restraining orders."
      ]
    }
  ];

  const resources = [
    { name: "Know Your Rights Guide", url: "#", icon: <FileText className="w-5 h-5 text-blue-600" /> },
    { name: "Workplace Harassment Toolkit", url: "#", icon: <FileDown className="w-5 h-5 text-blue-600" /> },
    { name: "Domestic Violence Safety Plan", url: "#", icon: <FileText className="w-5 h-5 text-blue-600" /> }
  ];

  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      setTimeout(() => {
        console.log("Form submitted:", formData);
        setIsLoading(false);
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-base">
      <div className="max-w-6xl mx-auto p-6">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-blue-800 flex items-center justify-center">
            <HelpingHand className="w-12 h-12 mr-4" />
            Legal Assistance & Resources
          </h1>
          <p className="text-xl text-gray-600">Get the support and information you need</p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {legalCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <img src={category.image} alt={category.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between cursor-pointer mb-4" onClick={() => toggleSection(category.id)}>
                  <div className="flex items-center">
                    <span className="mr-4">{category.icon}</span>
                    <h2 className="text-xl font-semibold text-gray-800">{category.title}</h2>
                  </div>
                  {expandedSection === category.id ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                </div>
                {expandedSection === category.id && (
                  <p className="text-gray-700">{category.content}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-blue-800">Guides for Handling Harassment & Abuse</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {guides.map((guide, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-lg font-bold text-gray-800 mb-4">{guide.name}</h4>
                <ul className="space-y-2">
                  {guide.steps.map((step, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-block w-6 h-6 bg-blue-100 text-blue-800 rounded-full mr-3 flex items-center justify-center text-sm font-semibold">{idx + 1}</span>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-blue-800">Downloadable Resources</h3>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <ul className="grid md:grid-cols-3 gap-4">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a href={resource.url} className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                    <span className="mr-3">{resource.icon}</span>
                    <span className="text-blue-800 font-medium">{resource.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-blue-800">Contact Us for Support</h3>
          {submitSuccess && (
            <div className="bg-green-100 border-green-400 text-green-700 p-4 rounded-lg mb-6">
              <strong>Success!</strong> Thank you for reaching out. We will contact you soon.
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 flex items-center">
                <User className="w-5 h-5 mr-2" /> Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full p-3 border rounded-lg ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                aria-describedby="name-error"
              />
              {errors.name && <span id="name-error" className="text-red-500 text-sm mt-1">{errors.name}</span>}
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 flex items-center">
                <Mail className="w-5 h-5 mr-2" /> Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full p-3 border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                aria-describedby="email-error"
              />
              {errors.email && <span id="email-error" className="text-red-500 text-sm mt-1">{errors.email}</span>}
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2 flex items-center">
                <MessageSquare className="w-5 h-5 mr-2" /> Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full p-3 border rounded-lg ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                rows="4"
                aria-describedby="message-error"
              />
              {errors.message && <span id="message-error" className="text-red-500 text-sm mt-1">{errors.message}</span>}
            </div>

            <button type="submit" className="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
              {isLoading ? <Loader className="animate-spin mr-2" /> : <Send className="mr-2" />} Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LegalAssistanceResources;