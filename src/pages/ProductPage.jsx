import { Link } from 'react-router-dom'
import { ArrowLeft, Users, User, Heart, Check, ExternalLink } from 'lucide-react'

function ProductPage() {
  const products = [
    {
      id: 'veterans',
      name: 'Veterans Edition',
      description: 'Special pricing for military veterans who have served our country.',
      price: '$19.99',
      originalPrice: '$29.99',
      icon: Users,
      color: 'from-amber-500 to-orange-600',
      checkoutUrl: 'https://the4blockstojoy.samcart.com/products/veterans',
      features: [
        'Full digital copy of The 4 Blocks',
        'Veterans-focused discussion guide',
        'Access to private veterans community',
        'Bonus chapter: PTSD & Emotional Regulation',
        'Lifetime updates'
      ],
      badge: 'Veteran Discount'
    },
    {
      id: 'individual',
      name: 'Individual',
      description: 'Perfect for personal growth and emotional mastery.',
      price: '$29.99',
      originalPrice: null,
      icon: User,
      color: 'from-sky-500 to-indigo-600',
      checkoutUrl: 'https://the4blockstojoy.samcart.com/products/individual',
      features: [
        'Full digital copy of The 4 Blocks',
        'Interactive workbook PDF',
        'Guided meditation audio files',
        'Email support for 30 days',
        'Lifetime updates'
      ],
      badge: 'Most Popular',
      popular: true
    },
    {
      id: 'family',
      name: 'Family Package',
      description: 'Share the transformation with your loved ones.',
      price: '$49.99',
      originalPrice: '$89.97',
      icon: Heart,
      color: 'from-emerald-500 to-teal-600',
      checkoutUrl: 'https://the4blockstojoy.samcart.com/products/family',
      features: [
        '3 digital copies of The 4 Blocks',
        'Family discussion guide',
        'Parent\'s guide to teaching children',
        'Group coaching session (1 hour)',
        'Private family community access',
        'Lifetime updates'
      ],
      badge: 'Best Value'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-indigo-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">4</span>
              </div>
              <span className="font-semibold text-white">The 4 Blocks</span>
            </Link>
            <Link 
              to="/"
              className="text-slate-300 hover:text-white transition-colors flex items-center gap-2 text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-sky-400 text-sm tracking-widest uppercase mb-4">
            Choose Your Path
          </p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
            Select Your Package
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Each package includes the complete The 4 Blocks system with resources tailored to your needs.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id}
                className={`relative group ${product.popular ? 'md:-mt-4 md:mb-4' : ''}`}
              >
                {/* Popular Badge */}
                {product.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Card */}
                <div className={`h-full glass rounded-2xl p-8 border transition-all duration-300 hover:scale-[1.02] ${
                  product.popular 
                    ? 'border-sky-500/50 shadow-lg shadow-sky-500/10' 
                    : 'border-slate-700/50 hover:border-slate-600'
                }`}>
                  {/* Header */}
                  <div className="text-center mb-8">
                    {/* Badge (non-popular) */}
                    {!product.popular && product.badge && (
                      <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 bg-gradient-to-r ${product.color} text-white`}>
                        {product.badge}
                      </span>
                    )}

                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${product.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                      <product.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Name */}
                    <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                    <p className="text-slate-400 text-sm">{product.description}</p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-3">
                      <span className="text-4xl font-bold text-white">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-slate-500 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                    {product.originalPrice && (
                      <p className="text-emerald-400 text-sm mt-1">
                        Save {Math.round((1 - parseFloat(product.price.replace('$', '')) / parseFloat(product.originalPrice.replace('$', ''))) * 100)}%
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm">
                        <Check className={`w-5 h-5 flex-shrink-0 ${
                          product.popular ? 'text-sky-400' : 'text-slate-400'
                        }`} />
                        <span className="text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a
                    href={product.checkoutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold transition-all ${
                      product.popular
                        ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white hover:shadow-lg hover:shadow-sky-500/25'
                        : 'bg-slate-800 text-white hover:bg-slate-700'
                    }`}
                  >
                    Click to Buy
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-6 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-semibold text-white mb-8">Secure Checkout</h3>
          <div className="flex flex-wrap items-center justify-center gap-8 text-slate-500">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
              </svg>
              <span className="text-sm">256-bit SSL Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
              </svg>
              <span className="text-sm">All Major Cards Accepted</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span className="text-sm">30-Day Money Back Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-slate-900/30">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-white text-center mb-12">Frequently Asked Questions</h3>
          <div className="space-y-6">
            <div className="glass rounded-xl p-6">
              <h4 className="font-semibold text-white mb-2">What's included in the digital copy?</h4>
              <p className="text-slate-400 text-sm">You'll receive immediate access to the complete PDF of The 4 Blocks, readable on any device. The Individual and Family packages include additional audio and workbook materials.</p>
            </div>
            <div className="glass rounded-xl p-6">
              <h4 className="font-semibold text-white mb-2">How do I access my purchase?</h4>
              <p className="text-slate-400 text-sm">After checkout, you'll receive an email with download instructions and immediate access to your materials through your account dashboard.</p>
            </div>
            <div className="glass rounded-xl p-6">
              <h4 className="font-semibold text-white mb-2">Is there a money-back guarantee?</h4>
              <p className="text-slate-400 text-sm">Yes! All purchases come with a 30-day money-back guarantee. If The 4 Blocks doesn't meet your expectations, contact us for a full refund.</p>
            </div>
          </div>
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

export default ProductPage
