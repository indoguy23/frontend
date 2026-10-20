import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Check, CheckCircle2, Store, ShoppingBag } from "lucide-react";

interface AuthLayoutProps {
  children: ReactNode;
  fitViewport?: boolean;
  noScroll?: boolean;
}

const benefits = [
  "Shop from many stores in one cart",
  "Track every order in one place",
  "Sell with your own storefront",
];

const AuthLayout = ({
  children,
  fitViewport = false,
  noScroll = false,
}: AuthLayoutProps) => {
  return (
    <>
      {" "}
      <main
        className={`${fitViewport ? "h-dvh overflow-hidden" : "min-h-screen"} bg-[#edf3f6] lg:grid lg:grid-cols-[43.5%_56.5%]`}
      >
        <aside
          className={`${fitViewport ? "h-full min-h-0" : "min-h-screen"} relative hidden overflow-hidden bg-linear-to-b from-[#0e2033] via-[#123047] to-[#105054] px-10 py-10 text-white lg:flex lg:flex-col xl:px-14`}
        >
          <div className="pointer-events-none absolute -right-16 -top-20 h-80 w-80 rounded-full border border-orange-400/30" />
          <div className="pointer-events-none absolute right-8 top-16 h-28 w-28 rotate-12 rounded-[28px] bg-teal-700/40" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-teal-700/30" />

          <Link
            to="/"
            className="relative z-10 inline-flex w-fit items-center gap-2.5 text-xl font-bold tracking-tight"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-400 text-[#10273a]">
              <ShoppingBag size={19} strokeWidth={2.5} />
            </span>
            MarketHub
          </Link>

          <div className="relative z-10 my-auto max-w-lg py-14">
            <h1 className="text-4xl font-bold leading-[1.12] tracking-tight xl:text-[42px]">
              One marketplace.
              <br />
              Every vendor.
            </h1>

            <p className="mt-4 max-w-md text-base leading-7 text-slate-300">
              Shop from your favorite stores or grow your business with your own
              storefront on MarketHub.
            </p>

            <ul className="mt-6 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-slate-700/90 text-orange-400">
                    <Check size={17} strokeWidth={2.5} />
                  </span>
                  <span className="text-sm text-slate-300">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 max-w-sm space-y-3">
              <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-400 text-slate-900">
                  <CheckCircle2 size={21} />
                </span>
                <div>
                  <p className="text-sm font-semibold">Order confirmed</p>
                  <p className="mt-0.5 text-xs text-slate-300">
                    Shipping from multiple stores
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-400 text-slate-900">
                  <Store size={19} />
                </span>
                <div>
                  <p className="text-sm font-semibold">Your store is live</p>
                  <p className="mt-0.5 text-xs text-slate-300">
                    Start selling today
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="relative z-10 text-xs text-slate-400">
            © {new Date().getFullYear()} MarketHub
          </p>
        </aside>

        <section
          className={`${fitViewport ? "h-full min-h-0 overflow-hidden py-3" : "min-h-screen py-8"} flex items-center justify-center px-4 sm:px-8 lg:px-10 xl:px-16`}
        >
          <div
            className={`${fitViewport ? `max-h-full ${noScroll ? "overflow-hidden" : "overflow-y-auto"} p-5 sm:p-7 xl:p-8` : "p-6 sm:p-9 xl:p-10"} w-full max-w-115 rounded-3xl bg-white shadow-[0_18px_55px_rgba(15,35,55,0.12)]`}
          >
            <div
              className={`${noScroll ? "hidden" : fitViewport ? "mb-3 lg:hidden" : "mb-5 lg:hidden"}`}
            >
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-lg font-bold text-slate-900"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-400">
                  <ShoppingBag size={19} />
                </span>
                MarketHub
              </Link>
            </div>

            {children}
          </div>
        </section>
      </main>
    </>
  );
};

export default AuthLayout;
