import "../styles/style.scss";
import 'animate.css';

export const metadata = {
    title: "Lok Ly",
    description: "Lok Ly is a modern platform that simplifies business operations through smart tools, inventory tracking, and efficient reporting.",
    icons:{
        icon: "/images/myLogo.jpg"
    }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
