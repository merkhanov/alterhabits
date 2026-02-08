interface TrustPoint {
  title: string;
  description: string;
}

const trustPoints: TrustPoint[] = [
  {
    title: "Your data stays private",
    description: "What you share is yours. We don't sell your information or share it with third parties.",
  },
  {
    title: "No judgment, ever",
    description: "Slip up? That's part of the process. Your AI coach is here to support, not criticize.",
  },
  {
    title: "You're in control",
    description: "Adjust settings, pause anytime, or delete your data. This is your journey.",
  },
];

export const Trust = () => {
  return (
    <section className="px-6 py-36 md:py-48">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-16 text-center text-3xl font-semibold text-foreground md:text-4xl">
          Built on trust
        </h2>
        
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {trustPoints.map((point) => (
            <div key={point.title} className="space-y-3 text-center">
              <h3 className="text-lg font-medium text-foreground">
                {point.title}
              </h3>
              <p className="text-sm text-muted">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
