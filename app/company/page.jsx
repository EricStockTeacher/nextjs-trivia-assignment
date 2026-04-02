import Navbar from "@/components/Navbar";
import News from "@/components/News.jsx";

export default function CompanyPage() {
  return (
      <main>
      <Navbar />
      <header>
          <h1>Bicycle Newfoundland and Labrador</h1>
      </header>
      <News />
      <footer>
        <p>Footer content (same as Home page)</p>
      </footer>
    </main>
  );
}