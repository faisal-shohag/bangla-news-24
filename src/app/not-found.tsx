import Link from "next/link";

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-rose-100 to-red-200 px-4">
            <div className="text-center max-w-lg">
                {/* Big 404 with glowing effect */}
                <h1 className="text-[10rem] sm:text-[12rem] font-black leading-none bg-gradient-to-b from-red-500 to-red-800 bg-clip-text text-transparent drop-shadow-[0_5px_15px_rgba(220,38,38,0.4)] select-none">
                    404
                </h1>

                {/* Divider line */}
                <div className="flex items-center justify-center gap-3 my-4">
                    <span className="h-px w-16 bg-red-400"></span>
                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                    <span className="h-px w-16 bg-red-400"></span>
                </div>

                {/* Message */}
                <h2 className="text-2xl sm:text-3xl font-bold text-red-900 mb-3">
                    Page Not Found
                </h2>
                <p className="text-red-700/80 mb-8 leading-relaxed">
                    Oops! The page youre looking for doesnt exist or has been moved.
                    Lets get you back on track.
                </p>

                {/* Button */}
                <Link
                    href="/"
                    className="inline-block px-8 py-3 rounded-full font-semibold text-white
                               bg-gradient-to-r from-red-500 to-rose-600
                               shadow-lg shadow-red-500/40
                               hover:from-red-600 hover:to-rose-700
                               hover:shadow-xl hover:shadow-red-600/50
                               hover:-translate-y-0.5
                               active:translate-y-0
                               transition-all duration-300 ease-out"
                >
                    ← Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;