import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Sparkles, Brain, Heart, Shield, ChevronDown, ArrowRight } from 'lucide-react'

function LandingPage() {
  const heroRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const scrollToContent = () => {
    document.getElementById('discovery')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-indigo-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">4</span>
              </div>
              <span className="font-semibold text-white">The 4 Blocks</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#discovery" className="text-slate-300 hover:text-white transition-colors text-sm">Discovery</a>
              <a href="#blocks" className="text-slate-300 hover:text-white transition-colors text-sm">The Blocks</a>
              <a href="#foundation" className="text-slate-300 hover:text-white transition-colors text-sm">Foundation</a>
              <Link 
                to="/products" 
                className="bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-full text-sm font-medium transition-all"
              >
                Get the Book
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="reveal opacity-0">
            <p className="text-sky-400 text-sm tracking-widest uppercase mb-4">
              Dr. Vincent E. Parr, Ph.D. · Psychologist · REBT Practitioner
            </p>
          </div>

          <div className="reveal opacity-0 delay-100">
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-2 tracking-tight">
              The 4
            </h1>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold gradient-text mb-8">
              Blocks
            </h2>
          </div>

          <div className="reveal opacity-0 delay-200">
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-4 leading-relaxed">
              Your emotions aren't random. They follow an exact algorithm — and now you can use it.
            </p>
            <p className="text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              After decades in clinical practice, Dr. Parr discovered that anger, anxiety, guilt, and depression are not mysteries. They are formulas. And what can be built can be dismantled.
            </p>
          </div>

          <div className="reveal opacity-0 delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link 
              to="/products"
              className="group bg-white text-slate-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-sky-50 transition-all flex items-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              Get the Book
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button 
              onClick={scrollToContent}
              className="text-slate-300 hover:text-white px-8 py-4 font-medium transition-colors flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Explore the Chapters
            </button>
          </div>

          <div className="reveal opacity-0 delay-400">
            <button 
              onClick={scrollToContent}
              className="text-slate-500 hover:text-slate-300 transition-colors animate-bounce"
            >
              <ChevronDown className="w-8 h-8" />
              <span className="text-xs uppercase tracking-widest block mt-2">Scroll</span>
            </button>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section id="discovery" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center reveal opacity-0">
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
            A groundbreaking system blending{' '}
            <span className="text-sky-400 font-semibold">REBT psychology</span>
            {' '}and{' '}
            <span className="text-indigo-400 font-semibold">Zen mindfulness</span>
            {' '}— four formulas that change everything
          </p>
        </div>
      </section>

      {/* Discovery Section */}
      <section className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="reveal opacity-0">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
                The Discovery
              </h2>
              <p className="text-2xl md:text-3xl text-sky-400 font-light mb-6">
                You've been fighting your emotions.
              </p>
              <p className="text-xl text-slate-300 font-light mb-8">
                What if you understood them instead?
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                Most people believe their emotions just happen to them — that anger, anxiety, guilt, and depression are forces beyond their control. Dr. Parr spent his career proving otherwise.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                Every difficult emotion you experience follows a precise, predictable pattern. A formula. Once you see the formula, you can change it. The 4 Blocks gives you exactly that — four simple equations, one for each emotion, that put you back in control of your own mind.
              </p>
              <div className="p-6 bg-gradient-to-r from-sky-500/10 to-indigo-500/10 rounded-xl border border-sky-500/20">
                <p className="text-white font-medium">
                  This isn't meditation. This isn't positive thinking. This is the actual mechanism.
                </p>
              </div>
            </div>
            <div className="reveal opacity-0 delay-200">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500 to-indigo-600 rounded-2xl blur-2xl opacity-30"></div>
                <div className="relative glass rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 p-6 rounded-xl text-center">
                      <Brain className="w-10 h-10 text-sky-400 mx-auto mb-3" />
                      <p className="text-white font-semibold">REBT</p>
                      <p className="text-slate-400 text-sm">Psychology</p>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-xl text-center">
                      <Heart className="w-10 h-10 text-indigo-400 mx-auto mb-3" />
                      <p className="text-white font-semibold">Zen</p>
                      <p className="text-slate-400 text-sm">Mindfulness</p>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-xl text-center">
                      <Shield className="w-10 h-10 text-violet-400 mx-auto mb-3" />
                      <p className="text-white font-semibold">Evidence</p>
                      <p className="text-slate-400 text-sm">Based</p>
                    </div>
                    <div className="bg-slate-800/50 p-6 rounded-xl text-center">
                      <Sparkles className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                      <p className="text-white font-semibold">Practical</p>
                      <p className="text-slate-400 text-sm">Tools</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inside the Book */}
      <section id="blocks" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal opacity-0">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              Inside the Book
            </h2>
            <p className="text-xl text-slate-400">
              Four Blocks. Four Formulas. One System.
            </p>
            <p className="text-slate-500 mt-2">
              Each chapter isolates one emotion, shows you how your mind builds it, and gives you the tools to dismantle it.
            </p>
          </div>

          {/* Block 1 - Anger */}
          <div className="reveal opacity-0 mb-12">
            <div className="glass rounded-2xl p-8 md:p-12 border-l-4 border-red-500">
              <div className="flex items-start gap-6">
                <div className="text-6xl font-serif font-bold text-red-500/30">01</div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Block One</h3>
                  <h4 className="text-xl text-red-400 font-semibold mb-4">Anger</h4>
                  <p className="text-lg text-slate-300 mb-4 font-mono bg-slate-800/50 p-4 rounded-lg inline-block">
                    Trigger + Belief that a rule was violated = Anger
                  </p>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    Anger isn't about what happened. It's about a belief that something shouldn't have happened — that someone broke a rule you hold. Dr. Parr reveals how every angry reaction follows this exact sequence, and why attacking the trigger never solves the real problem.
                  </p>
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                    <p className="text-red-300 text-sm font-semibold mb-1">What you'll learn</p>
                    <p className="text-slate-400 text-sm">
                      How to identify the hidden "rules" driving your anger — and whether those rules are actually serving you. Most aren't.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Block 2 - Anxiety */}
          <div className="reveal opacity-0 mb-12">
            <div className="glass rounded-2xl p-8 md:p-12 border-l-4 border-amber-500">
              <div className="flex items-start gap-6">
                <div className="text-6xl font-serif font-bold text-amber-500/30">02</div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Block Two</h3>
                  <h4 className="text-xl text-amber-400 font-semibold mb-4">Anxiety</h4>
                  <p className="text-lg text-slate-300 mb-4 font-mono bg-slate-800/50 p-4 rounded-lg inline-block">
                    Perceived threat + Belief you can't handle it = Anxiety
                  </p>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    Anxiety is your mind predicting a future it believes you're powerless against. The threat may be real or imaginary — it doesn't matter. What drives the anxiety is the belief that you won't be able to cope. That belief can be changed.
                  </p>
                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
                    <p className="text-amber-300 text-sm font-semibold mb-1">What you'll learn</p>
                    <p className="text-slate-400 text-sm">
                      How to interrupt the anxiety loop at the belief level — not by avoiding what you fear, but by upgrading your estimate of your own resilience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Block 3 - Guilt */}
          <div className="reveal opacity-0 mb-12">
            <div className="glass rounded-2xl p-8 md:p-12 border-l-4 border-emerald-500">
              <div className="flex items-start gap-6">
                <div className="text-6xl font-serif font-bold text-emerald-500/30">03</div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Block Three</h3>
                  <h4 className="text-xl text-emerald-400 font-semibold mb-4">Guilt</h4>
                  <p className="text-lg text-slate-300 mb-4 font-mono bg-slate-800/50 p-4 rounded-lg inline-block">
                    Action + Belief you violated your own standard = Guilt
                  </p>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    Guilt is self-directed anger. You broke a rule — your own this time — and now you're prosecuting yourself. Dr. Parr draws a critical distinction between healthy remorse that leads to growth and toxic guilt that only leads to punishment.
                  </p>
                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
                    <p className="text-emerald-300 text-sm font-semibold mb-1">What you'll learn</p>
                    <p className="text-slate-400 text-sm">
                      The difference between guilt that helps you grow and guilt that keeps you trapped — and a practical process to move from one to the other.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Block 4 - Depression */}
          <div className="reveal opacity-0 mb-12">
            <div className="glass rounded-2xl p-8 md:p-12 border-l-4 border-indigo-500">
              <div className="flex items-start gap-6">
                <div className="text-6xl font-serif font-bold text-indigo-500/30">04</div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Block Four</h3>
                  <h4 className="text-xl text-indigo-400 font-semibold mb-4">Depression</h4>
                  <p className="text-lg text-slate-300 mb-4 font-mono bg-slate-800/50 p-4 rounded-lg inline-block">
                    Loss + Belief things will never improve = Depression
                  </p>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    Depression is what happens when the mind concludes that a loss — of a relationship, identity, hope, or possibility — is permanent. That conclusion is almost always wrong. Dr. Parr shows how depression is built from a specific story, and how that story can be rewritten.
                  </p>
                  <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-4">
                    <p className="text-indigo-300 text-sm font-semibold mb-1">What you'll learn</p>
                    <p className="text-slate-400 text-sm">
                      Why depression feels like a fact about the world when it's actually a belief about the future — and the concrete steps to test and change that belief.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation Section */}
      <section id="foundation" className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal opacity-0">
            <p className="text-sky-400 text-sm tracking-widest uppercase mb-4">The Foundation</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              Not another self-help book.
            </h2>
            <h3 className="text-3xl md:text-4xl gradient-text font-bold">A system.</h3>
          </div>

          <p className="text-center text-slate-400 max-w-3xl mx-auto mb-16 reveal opacity-0">
            The 4 Blocks is grounded in Rational Emotive Behavior Therapy — one of the most evidence-based approaches in psychology — combined with the clarity of Zen mindfulness practice.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="reveal opacity-0 glass rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-sky-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-sky-400 text-2xl font-serif font-bold">I</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Evidence-Based</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Built on REBT, developed by Dr. Albert Ellis and validated across decades of clinical research.
              </p>
            </div>

            <div className="reveal opacity-0 delay-100 glass rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-indigo-400 text-2xl font-serif font-bold">II</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Universal</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                The same algorithm runs in every human brain. The formulas work because they describe how emotions are actually built.
              </p>
            </div>

            <div className="reveal opacity-0 delay-200 glass rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-violet-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-violet-400 text-2xl font-serif font-bold">III</span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Practical</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Not theory. Each chapter gives you a clear process you can apply the same day you read it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center reveal opacity-0">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Get Started
          </h2>
          <p className="text-2xl text-slate-300 mb-4">
            Stop fighting your emotions.
          </p>
          <p className="text-2xl gradient-text font-bold mb-8">
            Start understanding them.
          </p>
          <p className="text-slate-400 max-w-2xl mx-auto mb-10">
            The 4 Blocks gives you the exact formulas behind your most difficult emotions — and a clear path through each one.
          </p>
          <Link 
            to="/products"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-sky-500 to-indigo-600 text-white px-10 py-5 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-sky-500/25 transition-all"
          >
            <BookOpen className="w-6 h-6" />
            Order Your Copy Today
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-slate-500 text-sm mt-6">
            Available in print and digital · Free shipping on orders over $35
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-indigo-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">4</span>
              </div>
              <span className="font-semibold text-white">The 4 Blocks</span>
            </div>
            <p className="text-slate-500 text-sm">
              © 2025 Four Blocks LLC · Dr. Vincent E. Parr, Ph.D. · All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
