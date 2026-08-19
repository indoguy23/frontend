import { Link } from "react-router-dom";
import { ROUTES } from "../../app/route";

const NotFoundPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-950 px-6 text-white">
      <div className="max-w-lg text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
          Error 404
        </p>

        <h1 className="mt-4 text-5xl font-bold">Page not found</h1>

        <p className="mt-4 leading-7 text-gray-300">
          The page you requested does not exist or may have been moved.
        </p>

        <Link
          to={ROUTES.HOME}
          className="mt-8 inline-flex rounded-xl bg-green-500 px-6 py-3 font-semibold text-gray-950 transition hover:bg-green-400"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
