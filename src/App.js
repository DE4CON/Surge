import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Shield, Zap, Code, Users, Star, MessageCircle, Bot, Rocket, Heart, Check, Crown, FileText, Book, Upload } from 'lucide-react';
import ParticlesBackground from './components/ParticlesBackground';
import ScrollProgress from './components/ScrollProgress';
import HeroSection from './components/HeroSection';
import FloatingCard from './components/FloatingCard';
import GradientButton from './components/GradientButton';
import SuccessStories from './components/SuccessStories';

const features = [
  {
    icon: Rocket,
    title: "Fast Updates",
    description: "Regular updates to keep you ahead of the game with the latest features and improvements."
  },
  {
    icon: Heart,
    title: "Reputable Devs",
    description: "Backed by experienced developers with a proven track record of excellence."
  },
  {
    icon: MessageCircle,
    title: "24/7 Discord Support",
    description: "Round-the-clock support through our active Discord community."
  },
  {
    icon: Bot,
    title: "Integrated AI",
    description: "Advanced AI integration for Luau scripting assistance and optimization."
  },
  {
    icon: Code,
    title: "Interactive UI",
    description: "Sleek and intuitive user interface for seamless interaction."
  },
  {
    icon: Zap,
    title: "Auto Inject",
    description: "Seamless automatic injection system for hassle-free operation."
  },
  {
    icon: Shield,
    title: "Highly Secure",
    description: "State-of-the-art security measures to protect your experience."
  },
  {
    icon: Users,
    title: "Active Community",
    description: "Join our vibrant community of over 7,000 active users and developers."
  }
];

const faqItems = [
  {
    question: "What is Surge Executor?",
    answer: "Surge Executor is a powerful tool designed for enhancing your Roblox gameplay experience."
  },
  {
    question: "Is Surge Executor safe to use?",
    answer: "Yes, it is built with advanced security measures to ensure safety."
  },
  {
    question: "How do I install Surge Executor?",
    answer: "You can download and install Surge Executor from our official website."
  },
  {
    question: "What features does Surge Executor provide?",
    answer: "It offers an advanced execution engine, script library, intuitive UI, and robust security."
  },
  {
    question: "How can I contact support?",
    answer: "Visit our Support Page for assistance or join our Discord community."
  },
  {
    question: "Is Surge Executor free?",
    answer: "We offer both free and premium plans. Check our website for more details."
  },
  {
    question: "Can I use Surge Executor on multiple devices?",
    answer: "Yes, as long as you use the same account."
  },
  {
    question: "What should I do if I face issues?",
    answer: "Contact support or check our community forums for solutions."
  }
];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState<number | null>(null);
  const [supportForm, setSupportForm] = useState({
    discordUsername: '',
    email: '',
    subject: '',
    message: '',
    file: null as File | null
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const webhookUrl = "https://discord.com/api/webhooks/1327484299728916581/wyhCW0QafnSjM6k85v9AH_o1uO0O0cSCaD9EC89rP14m-dHMdHdAUsbohpA4o2X3Kn4W";
    
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        body: JSON.stringify({
          content: `New Support Request\nDiscord: ${supportForm.discordUsername}\nEmail: ${supportForm.email}\nSubject: ${supportForm.subject}\nMessage: ${supportForm.message}`
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        alert('Support request sent successfully!');
        setSupportForm({
          discordUsername: '',
          email: '',
          subject: '',
          message: '',
          file: null
        });
      } else {
        throw new Error('Failed to send support request');
      }
    } catch (error) {
      alert('Failed to send support request. Please try again later.');
    }
  };

  return (
    <div className="relative bg-[#030014] text-white overflow-hidden">
      <ScrollProgress />
      
      <div className="fixed inset-0 pointer-events-none">
        <ParticlesBackground />
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/80 backdrop-blur-xl py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <motion.a
              href="/"
              whileHover={{ scale: 1.1 }}
              className="text-3xl font-bold relative group"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                SURGE
              </span>
            </motion.a>
            <div className="hidden md:flex items-center space-x-12">
              {['Home', 'Purchase', 'Features', 'Support', 'FAQ', 'TOS'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-all duration-300 text-sm uppercase tracking-wider relative group"
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section id="features" className="relative py-32">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-center mb-24"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Features
            </span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FloatingCard key={index} delay={index * 0.1}>
                <feature.icon className="w-12 h-12 text-purple-500 mb-6" />
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Purchase Section */}
      <section id="purchase" className="relative py-32 bg-black/30">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-center mb-8"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Choose Your Plan
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-24"
          >
            Unlock the full potential of Surge with our flexible pricing plans.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Free Version (Coming Soon) */}
            <FloatingCard>
              <div className="absolute top-4 right-4 px-3 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm">
                Coming Soon
              </div>
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                Free
                <span className="ml-2 text-purple-400">
                  <Shield className="w-5 h-5" />
                </span>
              </h3>
              <div className="text-4xl font-bold mb-4">$0</div>
              <div className="flex mb-4">
                <Star className="w-4 h-4 text-purple-500 fill-purple-500" />
                <Star className="w-4 h-4 text-purple-500 fill-purple-500" />
              </div>
              <ul className="space-y-3 mb-8">
                {['Basic features', 'Community support', 'Limited scripts'].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-400">
                    <Check className="w-5 h-5 text-purple-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                disabled
                className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-purple-600/50 to-blue-600/50 text-white font-bold opacity-50 cursor-not-allowed"
              >
                Coming Soon
              </button>
            </FloatingCard>

            {/* Weekly Plan */}
            <FloatingCard>
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                Weekly
                <span className="ml-2 text-purple-400">
                  <Rocket className="w-5 h-5" />
                </span>
              </h3>
              <div className="text-4xl font-bold mb-4">
                $3.99
                <span className="text-sm text-gray-400 ml-2">/week</span>
              </div>
              <div className="flex mb-4">
                <Star className="w-4 h-4 text-purple-500 fill-purple-500" />
                <Star className="w-4 h-4 text-purple-500 fill-purple-500" />
                <Star className="w-4 h-4 text-purple-500 fill-purple-500" />
              </div>
              <ul className="space-y-3 mb-8">
                {['Full access', 'Priority support', 'Script library'].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-400">
                    <Check className="w-5 h-5 text-purple-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <GradientButton
                className="w-full"
                onClick={() => {
                  // Weekly plan purchase logic
                }}
              >
                Get Started
              </GradientButton>
            </FloatingCard>

            {/* Monthly Plan */}
            <FloatingCard>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                Monthly
                <span className="ml-2 text-purple-400">
                  <Crown className="w-5 h-5" />
                </span>
              </h3>
              <div className="text-4xl font-bold mb-4">
                $11.99
                <span className="text-sm text-gray-400 ml-2">/month</span>
              </div>
              <div className="flex mb-4">
                <Star className="w-4 h-4 text-purple-500 fill-purple-500" />
                <Star className="w-4 h-4 text-purple-500 fill-purple-500" />
                <Star className="w-4 h-4 text-purple-500 fill-purple-500" />
                <Star className="w-4 h-4 text-purple-500 fill-purple-500" />
              </div>
              <ul className="space-y-3 mb-8">
                {['Everything in Weekly', 'Premium support', 'Early updates'].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-400">
                    <Check className="w-5 h-5 text-purple-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <GradientButton
                className="w-full"
                onClick={() => {
                  // Monthly plan purchase logic
                }}
              >
                Get Started
              </GradientButton>
            </FloatingCard>

            {/* Lifetime Plan */}
            <FloatingCard>
              <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white text-sm">
                Best Value
              </div>
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                Lifetime
                <span className="ml-2 text-purple-400">
                  <Star className="w-5 h-5 fill-purple-400" />
                </span>
              </h3>
              <div className="text-4xl font-bold mb-4">
                $49.99
                <span className="text-sm text-gray-400 ml-2">one-time</span>
              </div>
              <div className="flex mb-4">
                <Star className="w-4 h-4 text-purple-500 fill-purple-500" />
                <Star className="w-4 h-4 text-purple-500 fill-purple-500" />
                <Star className="w-4 h-4 text-purple-500 fill-purple-500" />
                <Star className="w-4 h-4 text-purple-500 fill-purple-500" />
                <Star className="w-4 h-4 text-purple-500 fill-purple-500" />
              </div>
              <ul className="space-y-3 mb-8">
                {['Lifetime updates', 'VIP support', 'Exclusive features'].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-400">
                    <Check className="w-5 h-5 text-purple-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <GradientButton
                className="w-full"
                onClick={() => {
                  // Lifetime plan purchase logic
                }}
              >
                Get Started
              </GradientButton>
            </FloatingCard>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="relative py-32">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-center mb-8"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Support
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-24"
          >
            Need help? Our support team is here for you 24/7.
          </motion.p>

          <div className="max-w-4xl mx-auto">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-900/10 to-blue-900/10 backdrop-blur-xl border border-purple-500/20"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="relative group">
                  <input
                    type="text"
                    required
                    value={supportForm.discordUsername}
                    onChange={(e) => setSupportForm(prev => ({ ...prev, discordUsername: e.target.value }))}
                    className="w-full px-4 py-3 bg-purple-900/10 border border-purple-500/20 rounded-xl outline-none focus:border-purple-500 transition-colors duration-300 peer"
                  />
                  <label className="absolute left-4 top-3 text-gray-400 transition-all duration-300 pointer-events-none peer-focus:-top-6 peer-focus:text-sm peer-valid:-top-6 peer-valid:text-sm">
                    Discord Username
                  </label>
                </div>
                <div className="relative group">
                  <input
                    type="email"
                    required
                    value={supportForm.email}
                    onChange={(e) => setSupportForm(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 bg-purple-900/10 border border-purple-500/20 rounded-xl outline-none focus:border-purple-500 transition-colors duration-300 peer"
                  />
                  <label className="absolute left-4 top-3 text-gray-400 transition-all duration-300 pointer-events-none peer-focus:-top-6 peer-focus:text-sm peer-valid:-top-6 peer-valid:text-sm">
                    Email Address
                  </label>
                </div>
              </div>

              <div className="relative group mb-6">
                <input
                  type="text"
                  required
                  value={supportForm.subject}
                  onChange={(e) => setSupportForm(prev => ({ ...prev, subject: e.target.value }))}
                  className="w-full px-4 py-3 bg-purple-900/10 border border-purple-500/20 rounded-xl outline-none focus:border-purple-500 transition-colors duration-300 peer"
                />
                <label className="absolute left-4 top-3 text-gray-400 transition-all duration-300 pointer-events-none peer-focus:-top-6 peer-focus:text-sm peer-valid:-top-6 peer-valid:text-sm">
                  Subject
                </label>
              </div>

              <div className="relative group mb-6">
                <textarea
                  required
                  value={supportForm.message}
                  onChange={(e) => setSupportForm(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full px-4 py-3 bg-purple-900/10 border border-purple-500/20 rounded-xl outline-none focus:border-purple-500 transition-colors duration-300 peer min-h-[150px]"
                />
                <label className="absolute left-4 top-3 text-gray-400 transition-all duration-300 pointer-events-none peer-focus:-top-6 peer-focus:text-sm peer-valid:-top-6 peer-valid:text-sm">
                  Message
                </label>
              </div>

              <div className="relative group mb-6">
                <input
                  type="file"
                  onChange={(e) => setSupportForm(prev => ({ ...prev, file: e.target.files?.[0] || null }))}
                  className="w-full px-4 py-3 bg-purple-900/10 border border-purple-500/20 rounded-xl outline-none focus:border-purple-500 transition-colors duration-300 text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-500/20 file:text-purple-400 hover:file:bg-purple-500/30"
                />
                <label className="absolute -top-6 left-0 text-gray-400 text-sm">
                  Attachment (optional)
                </label>
              </div>

              <GradientButton className="w-full">
                Send Message
              </GradientButton>

              <div className="mt-6 text-center">
                <a
                  href="https://discord.gg/kMPhDGV6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
                >
                  Or join our Discord community →
                </a>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative py-32 bg-black/30">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-center mb-8"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              FAQ
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-24"
          >
            Find answers to commonly asked questions about Surge Executor.
          </motion.p>

          <div className="max-w-4xl mx-auto">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="mb-4"
              >
                <motion.button
                  className={`w-full p-6 rounded-xl bg-gradient-to-br from-purple-900/10 to-blue-900/10 backdrop-blur-xl border border-purple-500/20 text-left transition-all duration-300 ${
                    selectedFaq === index ? 'bg-opacity-100' : 'bg-opacity-50'
                  }`}
                  onClick={() => setSelectedFaq(selectedFaq === index ? null : index)}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-white">{item.question}</h3>
                    <motion.div
                      animate={{ rotate: selectedFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-6 h-6 text-purple-500" />
                    </motion.div>
                  </div>
                  <AnimatePresence>
                    {selectedFaq === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 text-gray-400"
                      >
                        {item.answer}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TOS Section */}
      <section id="tos" className="relative py-32">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold text-center mb-24"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Terms of Service
            </span>
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-900/10 to-blue-900/10 backdrop-blur-xl border border-purple-500/20"
            >
              <div className="prose prose-invert max-w-none">
                <div className="mb-12">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <FileText className="w-6 h-6 mr-2 text-purple-500" />
                    Terms of Service
                  </h3>
                  <p className="text-gray-400 mb-4">By using Surge Executor, you acknowledge and agree to the following terms:</p>
                  <ul className="space-y-4 text-gray-400">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Surge Executor is provided "as is" without any warranties of any kind, express or implied.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>You are solely responsible for your actions while using Surge Executor.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>The developers are not responsible for any damages or data loss.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Unauthorized use or misuse is strictly prohibited.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <Book className="w-6 h-6 mr-2 text-purple-500" />
                    Privacy Policy
                  </h3>
                  <p className="text-gray-400 mb-4">Your privacy is important to us. This policy explains how we handle your information:</p>
                  <ul className="space-y-4 text-gray-400">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>We collect minimal data necessary for functionality.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Your data is used solely to enhance your experience.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>We implement advanced security measures to protect your data.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>You have the right to request access to or deletion of your data.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 bg-black/50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-gray-400">© 2025 Surge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
