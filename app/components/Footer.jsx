import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-white font-bold mb-4">WellPlan</h4>
            <p>All-in-one platform for customer communications at scale.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Product</h4>
            <Link href="/features" className="block hover:text-primary transition">Features</Link>
            <Link href="/pricing" className="block hover:text-primary transition">Pricing</Link>
            <Link href="/industries" className="block hover:text-primary transition">Industries</Link>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <Link href="/faq" className="block hover:text-primary transition">FAQ</Link>
            <a href="#" className="block hover:text-primary transition">Blog</a>
            <a href="#" className="block hover:text-primary transition">Documentation</a>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <a href="#" className="block hover:text-primary transition">About</a>
            <a href="#" className="block hover:text-primary transition">Contact</a>
            <a href="#" className="block hover:text-primary transition">Privacy</a>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>&copy; 2026 WellPlan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
