"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function BlogPage() {
  const handleGetStarted = () => {
    console.log("Get started clicked");
  };

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Habit Formation: The Science Behind Change",
      excerpt: "Discover how habits form in your brain and why breaking them requires more than just willpower.",
      date: "Feb 5, 2026",
      readTime: "5 min read",
      category: "Science",
    },
    {
      id: 2,
      title: "5 Strategies to Break Bad Habits That Actually Work",
      excerpt: "Evidence-based techniques that help you overcome unwanted behaviors and build better routines.",
      date: "Feb 1, 2026",
      readTime: "7 min read",
      category: "Tips",
    },
    {
      id: 3,
      title: "How AI Can Support Your Journey to Better Habits",
      excerpt: "Learn how artificial intelligence provides personalized support and accountability in habit change.",
      date: "Jan 28, 2026",
      readTime: "6 min read",
      category: "Technology",
    },
    {
      id: 4,
      title: "The Role of Self-Compassion in Breaking Habits",
      excerpt: "Why being kind to yourself is crucial for lasting change and how to practice self-compassion.",
      date: "Jan 25, 2026",
      readTime: "4 min read",
      category: "Psychology",
    },
    {
      id: 5,
      title: "Creating an Environment That Supports Your Goals",
      excerpt: "How to design your surroundings to make good habits easier and bad habits harder.",
      date: "Jan 22, 2026",
      readTime: "5 min read",
      category: "Lifestyle",
    },
    {
      id: 6,
      title: "Success Stories: Real People Breaking Real Habits",
      excerpt: "Inspiring stories from people who've successfully overcome smoking, drinking, and other challenges.",
      date: "Jan 18, 2026",
      readTime: "8 min read",
      category: "Stories",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header onGetStarted={handleGetStarted} />
      <main className="pt-16">
        <section className="px-6 py-20 md:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <h1 className="mb-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                Blog
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-muted">
                Insights, tips, and stories about breaking habits and building better ones.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="group cursor-pointer rounded-2xl border border-stone-200 p-6 transition-all hover:border-accent hover:shadow-lg"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-muted">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted">{post.readTime}</span>
                  </div>

                  <h2 className="mb-3 text-xl font-semibold text-foreground transition-colors group-hover:text-accent">
                    {post.title}
                  </h2>

                  <p className="mb-4 text-sm text-muted">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted">{post.date}</span>
                    <span className="text-sm font-medium text-accent transition-transform group-hover:translate-x-1">
                      Read more →
                    </span>
                  </div>
                </article>
              ))}
            </div>

            {/* Newsletter Section */}
            <div className="mt-20 rounded-2xl border border-stone-200 bg-stone-50 p-8 text-center md:p-12">
              <h2 className="mb-4 text-2xl font-semibold text-foreground md:text-3xl">
                Stay updated
              </h2>
              <p className="mx-auto mb-6 max-w-2xl text-muted">
                Get the latest articles and tips delivered to your inbox. No spam, unsubscribe anytime.
              </p>
              <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-full border border-stone-200 bg-background px-6 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
                />
                <button className="rounded-full bg-accent px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/90">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
