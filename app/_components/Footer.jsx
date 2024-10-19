import React from 'react';
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

const Footer = () => {
  return (
    <footer 
      className="py-6 text-gray-900 border-t-4 border-blue-400"
      role="contentinfo"
      aria-label="Contact information and social links"
    >
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex flex-col items-center justify-center gap-12 sm:flex-row">
          <nav className="flex items-center space-x-4" aria-label="Social media and contact links">
            <Button 
              variant="ghost" 
              className="flex items-center justify-center h-10 gap-2 px-4 hover:border-2 hover:border-gray-700" 
              asChild
            >
              <a
                href="mailto:abdishakoor145@gmail.com"
                className="flex items-center transition-colors hover:text-gray-900"
                aria-label="Send email to abdishakoor145@gmail.com"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span>Email</span>
              </a>
            </Button>
            
            <Button 
              variant="ghost" 
              className="flex items-center justify-center h-10 gap-2 px-4 hover:border-2 hover:border-gray-700" 
              asChild
            >
              <a
                href="https://github.com/abdishakoorx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub profile (opens in new tab)"
              >
                <GitHubLogoIcon className="w-4 h-4" aria-hidden="true" />
                <span>GitHub</span>
              </a>
            </Button>
            
            <Button 
              variant="ghost" 
              className="flex items-center justify-center h-10 gap-2 px-4 hover:border-2 hover:border-gray-700" 
              asChild
            >
              <a
                href="https://linkedin.com/in/abdishakoorx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn profile (opens in new tab)"
              >
                <LinkedInLogoIcon className="w-100 h-100" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;