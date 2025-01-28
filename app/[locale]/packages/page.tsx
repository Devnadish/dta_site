"use client";
import { motion } from "framer-motion";
import { Check, Rocket, Smartphone, Cloud, Headset, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PricingPlans = () => {
  const packages = [
    {
      name: "Starter",
      price: "15,000",
      features: [
        "3 custom screens for a mobile app",
        "5-page professional website",
        "Basic SEO optimization",
        "1-month complimentary support",
        "Social media integration",
      ],
      cta: "Start Your MVP",
    },
    {
      name: "Pro",
      price: "60,000",
      features: [
        "Tailored mobile app (iOS/Android)",
        "Responsive web portal",
        "6-month analytics dashboard",
        "Arabic-focused UI/UX design",
        "24/7 premium support",
      ],
      cta: "Scale Your Business",
      recommended: true,
    },
    {
      name: "Enterprise",
      price: "150,000+",
      features: [
        "End-to-end SaaS platform development",
        "AI-powered chatbot integration",
        "Government API compliance",
        "Dedicated private cloud hosting",
        "Payment gateway integration (STC/Mada)",
      ],
      cta: "Contact Us",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 text-white">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-6 py-16"
      >
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-5xl font-extrabold mb-4">
            Build Your Digital Vision
            <br />
            <span className="text-green-400">With World-Class Solutions</span>
          </h1>
          <p className="text-lg text-gray-300">
            Unlock your business's potential with cutting-edge technology and
            tailored strategies built for Saudi success.
          </p>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {[
            {
              icon: Rocket,
              title: "30-Day App Delivery",
              description:
                "Get your app live faster with guaranteed on-time delivery.",
            },
            {
              icon: Smartphone,
              title: "Mobile-First Designs",
              description:
                "Optimized for seamless user experiences on all devices.",
            },
            {
              icon: Cloud,
              title: "Secure Local Hosting",
              description: "Data privacy with Saudi-compliant local hosting.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all"
              variants={itemVariants}
            >
              <feature.icon className="w-12 h-12 text-green-400 mb-4 mx-auto" />
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Pricing Plans */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {packages.map((plan) => (
            <motion.div
              key={plan.name}
              className={`relative p-8 bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all ${
                plan.recommended && "border-2 border-green-400"
              }`}
              variants={itemVariants}
            >
              {plan.recommended && (
                <Badge className="absolute top-0 right-0 bg-green-400 text-white px-4 py-2 rounded-bl-md">
                  Most Popular
                </Badge>
              )}
              <h3 className="text-3xl font-extrabold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-green-400">
                  SAR {plan.price}
                </span>
                {plan.name === "Enterprise" && (
                  <span className="text-gray-400 text-lg ml-2">
                    / custom pricing
                  </span>
                )}
              </div>
              <ul className="space-y-4 mb-8 text-gray-300">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="text-green-400 w-5 h-5 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full py-3 ${
                  plan.recommended
                    ? "bg-green-400 hover:bg-green-500 text-gray-900"
                    : "bg-gray-700 hover:bg-gray-600 text-white"
                }`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="bg-green-500 text-gray-900 rounded-lg p-12 text-center"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
        >
          <Headset className="w-16 h-16 mb-6 mx-auto" />
          <h2 className="text-4xl font-bold mb-4">Get Started Today!</h2>
          <p className="text-lg mb-8">
            Schedule a free consultation and discover how we can transform your
            business vision into reality.
          </p>
          <Button className="px-8 py-4 bg-gray-900 hover:bg-gray-800 text-green-400">
            Claim Your Free Consultation
          </Button>
        </motion.div>
      </motion.main>
    </div>
  );
};

export default PricingPlans;
