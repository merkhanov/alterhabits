"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PricingPage() {
  const handleGetStarted = () => {
    console.log("Get started clicked");
  };

  return (
    <div className="min-h-screen">
      <Header onGetStarted={handleGetStarted} />
      <main className="pt-16">
        <section className="px-6 py-20 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h1 className="mb-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                Simple, transparent pricing
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-muted">
                Choose the plan that works best for you. All plans include full access to our AI coach.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Free Plan */}
              <div className="rounded-2xl border border-stone-200 p-8">
                <div className="mb-6">
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Free</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-semibold text-foreground">$0</span>
                    <span className="text-muted">/month</span>
                  </div>
                  <p className="text-sm text-muted">Perfect for getting started</p>
                </div>

                <ul className="mb-8 space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-muted">5 AI conversations per day</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-muted">Basic habit tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-muted">Daily check-ins</span>
                  </li>
                </ul>

                <button
                  onClick={handleGetStarted}
                  className="w-full rounded-full border border-stone-200 bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-stone-50"
                >
                  Get started
                </button>
              </div>

              {/* Pro Plan */}
              <div className="relative rounded-2xl border-2 border-accent p-8 shadow-lg">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-accent px-4 py-1 text-xs font-medium text-white">
                    Most Popular
                  </span>
                </div>

                <div className="mb-6">
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Pro</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-semibold text-foreground">$8</span>
                    <span className="text-muted">/month</span>
                  </div>
                  <p className="text-sm text-muted">For serious habit breakers</p>
                </div>

                <ul className="mb-8 space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-muted">Unlimited AI conversations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-muted">Advanced habit tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-muted">Personalized insights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-muted">Progress analytics</span>
                  </li>
                </ul>

                <button
                  onClick={handleGetStarted}
                  className="w-full rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/90"
                >
                  Get started
                </button>
              </div>

              {/* Pro+ Plan */}
              <div className="rounded-2xl border border-stone-200 p-8">
                <div className="mb-6">
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Pro+</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-semibold text-foreground">$19</span>
                    <span className="text-muted">/month</span>
                  </div>
                  <p className="text-sm text-muted">Everything you need to succeed</p>
                </div>

                <ul className="mb-8 space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-muted">Everything in Pro</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-muted">Priority support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-muted">Advanced analytics & reports</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-muted">Custom reminders & notifications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-muted">Early access to new features</span>
                  </li>
                </ul>

                <button
                  onClick={handleGetStarted}
                  className="w-full rounded-full border border-stone-200 bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-stone-50"
                >
                  Get started
                </button>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-20">
              <h2 className="mb-12 text-center text-3xl font-semibold text-foreground">
                Frequently asked questions
              </h2>
              <div className="mx-auto max-w-3xl space-y-8">
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    Can I change plans later?
                  </h3>
                  <p className="text-muted">
                    Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    Is there a free trial?
                  </h3>
                  <p className="text-muted">
                    Our Free plan lets you try the core features without a credit card. Upgrade anytime to unlock more.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    What payment methods do you accept?
                  </h3>
                  <p className="text-muted">
                    We accept all major credit cards, debit cards, and PayPal.
                  </p>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    Can I get a refund?
                  </h3>
                  <p className="text-muted">
                    Yes, we offer a 30-day money-back guarantee. If you're not satisfied, contact us for a full refund.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}