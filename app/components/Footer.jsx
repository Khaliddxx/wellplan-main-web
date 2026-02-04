import Link from 'next/link';
import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-[#214CE5] to-[#1a3db8] rounded-xl flex items-center justify-center shadow-lg shadow-[#214CE5]/30">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">wellplan<span className="text-[#214CE5]">®</span></span>
            </Link>
            <p className="text-gray-500 text-sm mb-6 max-w-xs">
              The all-in-one platform to capture leads, nurture relationships, and close deals faster.
            </p>
            <div className="flex gap-3">
              <a href="https://twitter.com/wellplan" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#214CE5]/20 flex items-center justify-center transition group">
                <svg className="w-4 h-4 text-gray-500 group-hover:text-[#6B8EFF]" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://linkedin.com/company/wellplan" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#214CE5]/20 flex items-center justify-center transition group">
                <svg className="w-4 h-4 text-gray-500 group-hover:text-[#6B8EFF]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://www.youtube.com/playlist?list=PLcZ6Hm093rEIL4yidwy2fDCCkImFLcn7K" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#214CE5]/20 flex items-center justify-center transition group">
                <svg className="w-4 h-4 text-gray-500 group-hover:text-[#6B8EFF]" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Features</h4>
            <ul className="space-y-3">
              <li><Link href="/features/capturing" className="text-gray-500 hover:text-white text-sm transition">Capture Leads</Link></li>
              <li><Link href="/features/nurturing" className="text-gray-500 hover:text-white text-sm transition">Nurture Contacts</Link></li>
              <li><Link href="/features/closing" className="text-gray-500 hover:text-white text-sm transition">Close Deals</Link></li>
              <li><Link href="/features/ai-bot" className="text-gray-500 hover:text-white text-sm transition">AI Lead Bot</Link></li>
              <li><Link href="/integrations" className="text-gray-500 hover:text-white text-sm transition">Integrations</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Solutions</h4>
            <ul className="space-y-3">
              <li><Link href="/solutions/agencies" className="text-gray-500 hover:text-white text-sm transition">For Agencies</Link></li>
              <li><Link href="/solutions/coaches" className="text-gray-500 hover:text-white text-sm transition">For Coaches</Link></li>
              <li><Link href="/solutions/sales-teams" className="text-gray-500 hover:text-white text-sm transition">For Sales Teams</Link></li>
              <li><Link href="/industries" className="text-gray-500 hover:text-white text-sm transition">All Industries</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Resources</h4>
            <ul className="space-y-3">
              <li><Link href="/blog" className="text-gray-500 hover:text-white text-sm transition">Blog</Link></li>
              <li><Link href="/case-studies" className="text-gray-500 hover:text-white text-sm transition">Case Studies</Link></li>
              <li><Link href="/roi-calculator" className="text-gray-500 hover:text-white text-sm transition">ROI Calculator</Link></li>
              <li><a href="https://knowledge.wellplan.io/kb" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white text-sm transition">Documentation</a></li>
              <li><a href="https://www.youtube.com/playlist?list=PLcZ6Hm093rEIL4yidwy2fDCCkImFLcn7K" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white text-sm transition">Video Tutorials</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/pricing" className="text-gray-500 hover:text-white text-sm transition">Pricing</Link></li>
              <li><Link href="/demo" className="text-gray-500 hover:text-white text-sm transition">Book a Demo</Link></li>
              <li><a href="https://help.leadconnectorhq.com/support/home" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white text-sm transition">Support</a></li>
              <li><a href="https://marketplace.gohighlevel.com/docs/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white text-sm transition">API Docs</a></li>
              <li><Link href="#contact" className="text-gray-500 hover:text-white text-sm transition">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} WellPlan. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-gray-600 hover:text-gray-400 text-sm transition">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-600 hover:text-gray-400 text-sm transition">Terms of Service</Link>
              <Link href="/security" className="text-gray-600 hover:text-gray-400 text-sm transition">Security</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
