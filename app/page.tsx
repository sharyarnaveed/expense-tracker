const features = [
  {
    id: "01",
    title: "Auto-Categorized Expenses",
    description:
      "Capture every swipe and transfer with smart categories that keep your spending crystal clear.",
  },
  {
    id: "02",
    title: "Daily Budget Guard",
    description:
      "Get instant nudges when you are close to your spending limits so there are no month-end surprises.",
  },
  {
    id: "03",
    title: "Shared Wallet Spaces",
    description:
      "Track home, travel, or team budgets together while each person keeps personal accounts private.",
  },
  {
    id: "04",
    title: "Insightful Weekly Reports",
    description:
      "Beautiful digest cards explain where your money went and what to improve next week.",
  },
  {
    id: "05",
    title: "Bill & Goal Reminders",
    description:
      "Never miss dues and move toward savings goals with reminders that adapt to your habits.",
  },
  {
    id: "06",
    title: "Bank-Level Security",
    description:
      "Your data is encrypted end-to-end with secure sign-in and full export control.",
  },
];

const steps = [
  {
    title: "Connect your accounts",
    description:
      "Link cards, wallets, and cash flows in under a minute with private, read-only access.",
  },
  {
    title: "Track spending in real time",
    description:
      "Transactions appear instantly with tags, notes, and recurring rules already suggested for you.",
  },
  {
    title: "Grow your savings on autopilot",
    description:
      "Weekly prompts and monthly trends make sure your goals are moving forward every day.",
  },
];

const testimonials = [
  {
    name: "Ariana Chen",
    role: "Freelance Designer",
    quote:
      "I moved from chaotic spreadsheets to clear daily control. The app feels premium and actually keeps me accountable.",
  },
  {
    name: "Marcus Lee",
    role: "Startup Founder",
    quote:
      "The shared wallet feature made team reimbursement tracking painless. We now close monthly books in half the time.",
  },
  {
    name: "Sofia Martinez",
    role: "Marketing Lead",
    quote:
      "The reminders and weekly insights helped me save my first emergency fund without changing my lifestyle.",
  },
];

const highlights = [
  { label: "Active users", value: "120K+" },
  { label: "Avg. monthly savings", value: "31%" },
  { label: "App rating", value: "4.9/5" },
];

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden pb-14">
      <div className="ambient-orb orb-one" aria-hidden />
      <div className="ambient-orb orb-two" aria-hidden />
      <div className="ambient-orb orb-three" aria-hidden />
      <div className="mesh-overlay" aria-hidden />

      <header className="sticky top-0 z-40">
        <div className="mx-auto max-w-6xl px-4 pt-4 sm:px-6 lg:px-8">
          <div className="glass-nav flex items-center justify-between rounded-full px-4 py-3 sm:px-6">
            <a
              href="#home"
              className="brand-mark text-sm font-semibold tracking-[0.2em] sm:text-base"
            >
              FLOWLEDGER
            </a>

            <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
              <a href="#features" className="nav-link">
                Features
              </a>
              <a href="#how" className="nav-link">
                How It Works
              </a>
              <a href="#reviews" className="nav-link">
                Reviews
              </a>
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </nav>

            <a href="#contact" className="btn-secondary px-4 py-2 text-sm">
              Get Started
            </a>
          </div>
        </div>
      </header>

      <main>
        <section
          id="home"
          className="mx-auto grid max-w-6xl gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:pt-20"
        >
          <div className="animate-rise space-y-8">
            <p className="eyebrow inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm">
              Expense tracker for modern teams and solo builders
            </p>

            <div className="space-y-5">
              <h1 className="hero-title">
                Track every dollar,
                <br />
                grow every goal.
              </h1>
              <p className="max-w-xl text-base leading-8 text-slate-700 sm:text-lg">
                FlowLedger turns daily spending into beautiful, actionable
                insights. Stay on budget, control subscriptions, and build
                savings without friction.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="btn-primary px-6 py-3 text-sm sm:text-base">
                Start Free Trial
              </a>
              <a href="#features" className="btn-secondary px-6 py-3 text-sm sm:text-base">
                Explore Features
              </a>
            </div>

            <div className="grid max-w-xl grid-cols-1 gap-3 pt-1 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className="stat-tile">
                  <p className="text-2xl font-semibold text-slate-900">{item.value}</p>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none">
            <div className="phone-shell animate-float-slow">
              <div className="phone-top" />
              <div className="phone-screen">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    Total Balance
                  </p>
                  <p className="mt-1 text-3xl font-semibold text-slate-900">
                    $24,820
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="chart-row">
                    <span>Food & Dining</span>
                    <strong>$780</strong>
                  </div>
                  <div className="chart-row">
                    <span>Transport</span>
                    <strong>$320</strong>
                  </div>
                  <div className="chart-row">
                    <span>Subscriptions</span>
                    <strong>$147</strong>
                  </div>
                </div>

                <div className="progress-block">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.16em] text-slate-600">
                    <span>Goal progress</span>
                    <span>68%</span>
                  </div>
                  <div className="progress-track">
                    <span className="progress-fill" />
                  </div>
                </div>
              </div>
            </div>

            <article className="floating-card floating-card-a animate-float-fast">
              <p className="text-xs uppercase tracking-[0.16em] text-teal-700">
                Smart Alert
              </p>
              <p className="mt-1 text-sm font-medium text-slate-900">
                You can save $122 by pausing unused subscriptions.
              </p>
            </article>

            <article className="floating-card floating-card-b animate-float-slow">
              <p className="text-xs uppercase tracking-[0.16em] text-orange-700">
                Weekly trend
              </p>
              <p className="mt-1 text-sm font-medium text-slate-900">
                Spending dropped 14% compared to last week.
              </p>
            </article>
          </div>
        </section>

        <section id="features" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="section-kicker">Feature Highlights</p>
              <h2 className="section-title">Built to simplify money decisions fast.</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-600 sm:text-base">
              Every screen is crafted for speed and clarity so you can spend less
              time tracking and more time growing.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <article
                key={feature.id}
                className="feature-card animate-rise"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <span className="feature-id">{feature.id}</span>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="how" className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="process-panel rounded-[2rem] p-6 sm:p-10 lg:p-12">
            <p className="section-kicker">How It Works</p>
            <h2 className="section-title max-w-2xl">
              From setup to savings in three smooth steps.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {steps.map((step, index) => (
                <article key={step.title} className="step-card">
                  <p className="step-number">0{index + 1}</p>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900 sm:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="review-highlight">
              <p className="section-kicker">Loved By Users</p>
              <h2 className="section-title">People stay because it really works.</h2>
              <p className="mt-4 text-sm leading-7 text-slate-700 sm:text-base">
                FlowLedger is designed for daily consistency. Users report better
                spending control within the first 2 weeks.
              </p>
              <div className="mt-7 space-y-3 text-sm text-slate-700 sm:text-base">
                <p>92% report less financial stress</p>
                <p>87% achieve savings goals faster</p>
                <p>2.5x more budget check-ins per week</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {testimonials.map((item) => (
                <article key={item.name} className="testimonial-card">
                  <p className="text-sm leading-7 text-slate-700">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="mt-5 border-t border-slate-200 pt-4">
                    <p className="text-base font-semibold text-slate-900">
                      {item.name}
                    </p>
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
                      {item.role}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-4 pb-10 pt-8 sm:px-6 lg:px-8">
          <div className="contact-panel grid gap-8 rounded-[2rem] p-6 sm:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
            <div>
              <p className="section-kicker">Contact Us</p>
              <h2 className="section-title">Ready to make money management effortless?</h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-slate-700 sm:text-base">
                Tell us about your needs and we will send a setup guide, pricing,
                and a personalized onboarding demo.
              </p>
              <div className="mt-8 space-y-3 text-sm text-slate-700 sm:text-base">
                <p>Email: hello@flowledger.app</p>
                <p>Support: +1 (555) 784-2210</p>
                <p>Office: Austin, Texas</p>
              </div>
            </div>

            <form className="grid gap-4" action="#" method="post">
              <label className="field-label" htmlFor="name">
                Full Name
              </label>
              <input id="name" name="name" type="text" className="field-input" placeholder="Your full name" />

              <label className="field-label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="field-input"
                placeholder="you@company.com"
              />

              <label className="field-label" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="field-input resize-none"
                placeholder="Tell us what you want to track"
              />

              <button type="submit" className="btn-primary mt-2 px-6 py-3 text-sm sm:text-base">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="mx-auto mt-12 max-w-6xl px-4 pb-6 text-center text-xs uppercase tracking-[0.14em] text-slate-500 sm:px-6 lg:px-8">
        2026 FlowLedger. Smarter expenses for modern life.
      </footer>
    </div>
  );
}
