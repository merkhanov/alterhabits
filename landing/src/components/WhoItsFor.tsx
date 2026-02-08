interface Audience {
  title: string;
  description: string;
}

const audiences: Audience[] = [
  {
    title: "Trying to quit smoking",
    description: "Get through cravings with personalized strategies and real-time support.",
  },
  {
    title: "Reducing alcohol intake",
    description: "Navigate social situations and build healthier patterns at your own pace.",
  },
  {
    title: "Overcoming procrastination",
    description: "Break tasks down and build momentum with gentle, consistent guidance.",
  },
  {
    title: "Breaking any habit",
    description: "Whether it's nail biting, late-night snacking, or endless scrolling.",
  },
];

export const WhoItsFor = () => {
  return (
    <section className="bg-white px-6 py-36 md:py-48">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-16 text-center text-3xl font-semibold text-foreground md:text-4xl">
          Who this is for
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          {audiences.map((audience) => (
            <div key={audience.title} className="space-y-2">
              <h3 className="text-lg font-medium text-foreground">
                {audience.title}
              </h3>
              <p className="text-base text-muted">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
