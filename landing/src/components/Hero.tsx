interface HeroProps {
  onGetStarted: () => void;
}

export const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <section className="px-6 py-40 md:py-56">
      <div className="mx-auto max-w-4xl">
        <div className="space-y-8 text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Your personal AI coach for breaking habits
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg text-muted md:text-xl">
            Get support when you need it most. No judgment, no pressure. Just personalized guidance that adapts to you.
          </p>
          
          <div className="flex flex-col items-center gap-4 pt-4">
            <button
              onClick={onGetStarted}
              className="rounded-full bg-accent px-8 py-4 text-base font-medium text-white transition-colors hover:bg-accent/90"
            >
              Get started
            </button>
            
            <p className="text-sm text-muted">
              Join people who are making real progress
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
