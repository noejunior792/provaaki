import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">About Us</h3>
            <p className="text-sm text-muted-foreground">
              Created by Noé Júnior at InnovaTech, dedicated to revolutionizing
              educational technology and making learning accessible to everyone.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <a
                href="mailto:contact@innovatech.com"
                className="text-sm text-muted-foreground hover:text-primary flex items-left gap-2"
              >
                <Mail className="h-4 w-4" />
                contact@innovatech.com
              </a>
              <a
                href="https://github.com/innovatech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary flex items-left gap-2"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/company/innovatech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary flex items-left gap-2"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link
                href="/about"
                className="text-sm text-muted-foreground hover:text-primary block"
              >
                About
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-primary block"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-primary block"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-left text-sm text-muted-foreground">
          <p>© 2024 InnovaTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}