
const Footer = () => {
  // Get the current year dynamically to always show up-to-date copyright
  const currentYear = new Date().getFullYear();
  
  // Define footer sections for better organization
  const quickLinks = [
    { name: 'Home', url: '#' },
    { name: 'About', url: '#about' },
    { name: 'Projects', url: '#projects' },
    { name: 'Contact', url: '#contact' }
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/yourusername' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile' },
    { name: 'Twitter', url: 'https://twitter.com/yourhandle' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Eduardo Abarca</h3>
            <p className="text-sm leading-relaxed">
              Crafting digital experiences through innovative web development solutions.
              Let's build something amazing together.
            </p>
          </div>

          {/* Quick links section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="block text-sm hover:text-white transition duration-150"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social links section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Connect</h3>
            <nav className="space-y-2">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm hover:text-white transition duration-150"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright text */}
            <p className="text-sm">
              © {currentYear} Eduardo Abarca. All rights reserved.
            </p>
            
            {/* Additional links */}
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="hover:text-white transition duration-150">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-white transition duration-150">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;