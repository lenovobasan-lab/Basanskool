// Editorial School Journal app shell: every route shares the same visible mark, navigation, and closing contact page.
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import AboutPage from "@/pages/AboutPage";
import StaffPage from "@/pages/StaffPage";
import GalleryPage from "@/pages/GalleryPage";
import NoticesPage from "@/pages/NoticesPage";
import ContactPage from "@/pages/ContactPage";
import LegalPage from "@/pages/LegalPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/staff" component={StaffPage} />
      <Route path="/gallery" component={GalleryPage} />
      <Route path="/notices" component={NoticesPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/privacy-policy"><LegalPage kind="privacy" /></Route>
      <Route path="/terms-of-service"><LegalPage kind="terms" /></Route>
      <Route><Home /></Route>
    </Switch>
  );
}

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" switchable={false}>
      <TooltipProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <main><Router /></main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </ThemeProvider>
  );
}
