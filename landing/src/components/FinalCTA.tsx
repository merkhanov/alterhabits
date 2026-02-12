interface FinalCTAProps {
  onGetStarted: () => void;
}

export const FinalCTA = ({ onGetStarted }: FinalCTAProps) => {
  return (
    <section className="bg-white px-6 py-36 md:py-48">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-center text-3xl font-semibold text-foreground md:text-4xl">
          Frequently asked questions
        </h2>
        
        <div className="space-y-8">
          <div className="rounded-2xl border border-stone-200 p-6 md:p-8">
            <h3 className="mb-3 text-lg font-semibold text-foreground">
              How does the AI coach work?
            </h3>
            <p className="text-muted">
              Our AI coach uses advanced language models to provide personalized support and guidance. It learns from your conversations, understands your triggers, and adapts its approach to what works best for you.
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 p-6 md:p-8">
            <h3 className="mb-3 text-lg font-semibold text-foreground">
              Is my data private and secure?
            </h3>
            <p className="text-muted">
              Yes, absolutely. We take your privacy seriously. All conversations are encrypted, and we never share your personal information with third parties. You can delete your data at any time.
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 p-6 md:p-8">
            <h3 className="mb-3 text-lg font-semibold text-foreground">
              What habits can I work on?
            </h3>
            <p className="text-muted">
              You can work on any habit you want to break, including smoking, drinking, procrastination, nail-biting, excessive screen time, and more. The AI coach adapts to your specific situation.
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 p-6 md:p-8">
            <h3 className="mb-3 text-lg font-semibold text-foreground">
              Can I use this alongside therapy or other support?
            </h3>
            <p className="text-muted">
              Yes! Our AI coach is designed to complement, not replace, professional help. Many users find it helpful to use alongside therapy, support groups, or other resources.
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 p-6 md:p-8">
            <h3 className="mb-3 text-lg font-semibold text-foreground">
              What if I relapse or have a setback?
            </h3>
            <p className="text-muted">
              Setbacks are a normal part of the journey. Our AI coach provides judgment-free support to help you understand what happened, learn from it, and get back on track without shame or guilt.
            </p>
          </div>

          <div className="rounded-2xl border border-stone-200 p-6 md:p-8">
            <h3 className="mb-3 text-lg font-semibold text-foreground">
              How much does it cost?
            </h3>
            <p className="text-muted">
              We offer a free plan to get started, a Pro plan at $8/month for unlimited access, and a Pro+ plan at $19/month with priority support and advanced features. All plans include our AI coach and habit tracking features.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted">
            Can't find what you're looking for? Contact our{" "}
            <a
              href="mailto:support@alterhabits.com"
              className="font-medium text-accent underline transition-colors hover:text-accent/80"
            >
              customer support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
