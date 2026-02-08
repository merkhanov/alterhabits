interface Value {
  title: string;
  description: string;
}

const values: Value[] = [
  {
    title: "Support in difficult moments",
    description: "When cravings hit or motivation drops, your AI coach is there with personalized strategies that actually help.",
  },
  {
    title: "Adapts to your life",
    description: "No rigid programs. The AI learns your patterns, understands your triggers, and adjusts to what works for you.",
  },
  {
    title: "Progress at your pace",
    description: "Small steps matter. Track what's working, adjust what isn't, and build momentum without pressure.",
  },
  {
    title: "Always available",
    description: "3am craving? Stressful day? Your coach is ready whenever you need support, not just during office hours.",
  },
];

export const Values = () => {
  return (
    <section className="px-6 py-36 md:py-48">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-16 text-center text-3xl font-semibold text-foreground md:text-4xl">
          Real support that helps
        </h2>
        
        <div className="grid gap-10 md:grid-cols-2 md:gap-12">
          {values.map((value) => (
            <div key={value.title} className="space-y-3">
              <h3 className="text-xl font-medium text-foreground">
                {value.title}
              </h3>
              <p className="text-base text-muted">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
