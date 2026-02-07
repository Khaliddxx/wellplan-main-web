import './globals.css';

export const metadata = {
  metadataBase: new URL('https://wellplan.io'),
  title: 'WellPlan | Capture. Nurture. Close.',
  description: 'The all-in-one platform for lead generation.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a]">{children}</body>
    </html>
  );
}
