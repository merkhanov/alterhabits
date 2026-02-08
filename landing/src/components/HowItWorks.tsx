interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "1",
    title: "Share your goal",
    description: "Tell us what habit you want to change. No details required, just what matters to you.",
  },
  {
    number: "2",
    title: "Get personalized support",
    description: "Your AI coach learns your patterns and adapts to your needs.",
  },
  {
    number: "3",
    title: "Receive help when you need it",
    description: "Smart reminders and guidance in difficult moments, tailored to your schedule.",
  },
  {
    number: "4",
    title: "Track your progress",
    description: "See how far you've come. Celebrate small wins along the way.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="bg-white px-6 py-36 md:py-48">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-16 text-center text-3xl font-semibold text-foreground md:text-4xl">
          How it works
        </h2>
        
        <div className="grid gap-12 md:grid-cols-2">
          {steps.map((step) => (
            <div key={step.number} className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-light text-lg font-semibold text-accent">
                  {step.number}
                </span>
                <h3 className="text-xl font-medium text-foreground">
                  {step.title}
                </h3>
              </div>
              <p className="pl-13 text-base text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
