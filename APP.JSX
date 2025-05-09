import React, { useState } from "react";
import "./index.css"; // Assuming Tailwind is set up

const App = () => {
  const [dark, setDark] = useState(false);
  const toggleTheme = () => setDark(!dark);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted (mock)");
  };

  return (
    <div className={dark ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}>
      <div className="max-w-6xl mx-auto px-6 py-10">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold">SoftSell</h1>
          <button onClick={toggleTheme} className="text-sm p-2 border rounded">
            Toggle {dark ? "Light" : "Dark"} Mode
          </button>
        </header>

        {/* Hero Section */}
        <section className="text-center py-10">
          <h2 className="text-4xl font-bold mb-2">Sell Your Unused Software Licenses</h2>
          <p className="text-lg mb-4">Turn idle assets into instant cash with SoftSell</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Get a Quote
          </button>
        </section>

        {/* How It Works */}
        <section className="py-10">
          <h3 className="text-2xl font-semibold text-center mb-6">How It Works</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {["Upload License", "Get Valuation", "Get Paid"].map((step, i) => (
              <div key={i} className="p-6 border rounded shadow">
                <div className="text-3xl mb-2">🔄</div>
                <p className="font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-10">
          <h3 className="text-2xl font-semibold text-center mb-6">Why Choose Us</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              "Instant Quotes",
              "Top Payouts",
              "Secure Transfers",
              "Dedicated Support"
            ].map((point, i) => (
              <div key={i} className="p-4 border rounded shadow">
                <div className="text-3xl mb-2">✅</div>
                <p className="font-medium">{point}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-10">
          <h3 className="text-2xl font-semibold text-center mb-6">What Our Clients Say</h3>
          <div className="space-y-4">
            {[
              { name: "Alice Smith", role: "CTO, TechCo", text: "SoftSell helped us recoup unused software costs—fast and easy!" },
              { name: "John Doe", role: "IT Manager, Solutions Inc.", text: "A simple, smooth experience. Highly recommend!" },
            ].map((t, i) => (
              <div key={i} className="border p-4 rounded shadow">
                <p>"{t.text}"</p>
                <p className="mt-2 font-semibold">{t.name} - <span className="text-sm font-normal">{t.role}</span></p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-10">
          <h3 className="text-2xl font-semibold text-center mb-6">Get in Touch</h3>
          <form onSubmit={handleSubmit} className="grid gap-4 max-w-xl mx-auto">
            <input required type="text" placeholder="Name" className="border p-2 rounded" />
            <input required type="email" placeholder="Email" className="border p-2 rounded" />
            <input required type="text" placeholder="Company" className="border p-2 rounded" />
            <select required className="border p-2 rounded">
              <option value="">Select License Type</option>
              <option value="SaaS">SaaS</option>
              <option value="On-Premise">On-Premise</option>
            </select>
            <textarea required placeholder="Message" className="border p-2 rounded"></textarea>
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
              Submit
            </button>
          </form>
        </section>

        {/* Footer */}
        <footer className="text-center mt-10 text-sm text-gray-500">
          © 2025 SoftSell. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default App;
