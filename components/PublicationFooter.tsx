import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail } from "lucide-react"

export default function PublicationsFooter() {
  return (
    <footer className="bg-muted mt-20 text-muted-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">About Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary">Our Mission</a></li>
              <li><a href="#" className="hover:text-primary">Research Areas</a></li>
              <li><a href="#" className="hover:text-primary">Team</a></li>
              <li><a href="#" className="hover:text-primary">Partners</a></li>
              <li><a href="#" className="hover:text-primary">Careers</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Research</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary">Publications</a></li>
              <li><a href="#" className="hover:text-primary">Projects</a></li>
              <li><a href="#" className="hover:text-primary">Datasets</a></li>
              <li><a href="#" className="hover:text-primary">Labs</a></li>
              <li><a href="#" className="hover:text-primary">Conferences</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary">Library</a></li>
              <li><a href="#" className="hover:text-primary">Tools</a></li>
              <li><a href="#" className="hover:text-primary">Webinars</a></li>
              <li><a href="#" className="hover:text-primary">Workshops</a></li>
              <li><a href="#" className="hover:text-primary">FAQs</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Community</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary">News</a></li>
              <li><a href="#" className="hover:text-primary">Events</a></li>
              <li><a href="#" className="hover:text-primary">Blog</a></li>
              <li><a href="#" className="hover:text-primary">Forum</a></li>
              <li><a href="#" className="hover:text-primary">Volunteer</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary">Support</a></li>
              <li><a href="#" className="hover:text-primary">Feedback</a></li>
              <li><a href="#" className="hover:text-primary">Newsletter</a></li>
              <li><a href="#" className="hover:text-primary">Press Inquiries</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-muted-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold text-primary mb-2">Stay Connected</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  <Youtube className="h-6 w-6" />
                  <span className="sr-only">YouTube</span>
                </a>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <h3 className="text-lg font-semibold text-primary mb-2">Subscribe to Our Newsletter</h3>
              <form className="flex">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="mr-2 bg-background"
                />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-muted-foreground/20 pt-8 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2023 Research Organization. All rights reserved.</p>
            <nav className="mt-4 md:mt-0">
              <ul className="flex space-x-4">
                <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-primary">Accessibility</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}