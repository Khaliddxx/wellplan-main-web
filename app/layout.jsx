import './globals.css';

export const metadata = {
  metadataBase: new URL('https://wellplan.io'),
  title: {
    default: 'WellPlan | Capture. Nurture. Close.',
    template: '%s | WellPlan'
  },
  description: 'The all-in-one platform that turns visitors into leads, leads into customers, and customers into raving fans.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#0a0a0a]">{children}</body>
    </html>
  );
}
