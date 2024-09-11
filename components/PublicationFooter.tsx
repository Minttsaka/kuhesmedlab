import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail } from "lucide-react"

export default function PublicationsFooter() {
  return (
    <footer className="bg-muted mt-20 text-muted-foreground text-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Research</h3>
            <ul className="space-y-2">
              <li><a href="/publications" className="hover:text-primary">Publications</a></li>
              <li><a href="/mw/research" className="hover:text-primary">Projects</a></li>
              <li><a href="/survey" className="hover:text-primary">Surveys</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/blog" className="hover:text-primary">Blog</a></li>
              <li><a href="/#faq" className="hover:text-primary">Faq</a></li>
              <li><a href="/support" className="hover:text-primary">Support</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Community</h3>
            <ul className="space-y-2">
              <li><a href="/events" className="hover:text-primary">Events</a></li>
              <li><a href="/community/create" className="hover:text-primary">Create Post</a></li>
              <li><a href="/community/feed" className="hover:text-primary">Forum</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Connect</h3>
            <ul className="space-y-2">
              <li><a href="/contact" className="hover:text-primary">Contact Us</a></li>
              <li><a href="/support" className="hover:text-primary">Support</a></li>
              <li><a href="/contact" className="hover:text-primary">Feedback</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-muted-foreground/20 pt-8 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 kuhesmedlab. All rights reserved.</p>
            <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a href="/" className="text-blue-600 transition-colors duration-300 hover:text-blue-800">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="/" className="text-blue-600 transition-colors duration-300 hover:text-blue-800">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="/" className="text-blue-600 transition-colors duration-300 hover:text-blue-800">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="/" className="text-blue-600 transition-colors duration-300 hover:text-blue-800">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
          </div>
        </div>
      </div>
    </footer>
  )
}