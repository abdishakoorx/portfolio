import React from 'react';
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

const Footer = () => {
  return (
    <footer className="py-6 text-gray-900 border-t-4 border-blue-400">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" className="w-8 h-8" asChild>
              <a
                href="mailto:abdishakoor145@example.com"
                className="flex items-center transition-colors hover:text-gray-900 dark:hover:text-white"
              >
                <Mail className="w-4 h-4 mr-2" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="w-8 h-8" asChild>
              <a
                href="https://github.com/abdishakoorx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GitHubLogoIcon className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="w-8 h-8" asChild>
              <a
                href="https://linkedin.com/in/abdishakoorx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedInLogoIcon className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;