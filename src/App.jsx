import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-white">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/40 dark:bg-slate-900/40 border-b border-slate-200/60 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-bold tracking-tight text-xl">Divorcio</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-blue-600">Služby</a>
            <a href="#pricing" className="hover:text-blue-600">Ceník</a>
            <a href="#contact" className="hover:text-blue-600">Kontakt</a>
            <a href="/test" className="inline-flex items-center justify-center px-3 py-1.5 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700">Test připojení</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Pricing />
        <Contact />
      </main>

      <footer className="py-10">
        <div className="max-w-6xl mx-auto px-6 text-sm text-slate-600 dark:text-slate-400">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Divorcio. Všechna práva vyhrazena.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-600">Obchodní podmínky</a>
              <a href="#" className="hover:text-blue-600">Ochrana osobních údajů</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
