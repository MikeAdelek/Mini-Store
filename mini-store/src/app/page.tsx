"use client";
import Hero from "../components/Hero";
import ProductList from "@/components/ProductList";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <Hero />
      <main>
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}
