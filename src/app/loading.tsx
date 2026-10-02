const LoadingPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-rose-100 to-red-200 px-4">
            <div className="text-center max-w-lg">
                {/* Animated spinner */}
                <div className="relative w-24 h-24 mx-auto mb-8">
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-red-200"></div>
                    {/* Spinning ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-red-500 border-r-rose-600 animate-spin"></div>
                    {/* Inner pulsing dot */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                    </div>
                </div>

                {/* Divider line */}
                <div className="flex items-center justify-center gap-3 my-4">
                    <span className="h-px w-16 bg-red-400"></span>
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                    <span className="h-px w-16 bg-red-400"></span>
                </div>

                {/* Message */}
                <h2 className="text-2xl sm:text-3xl font-bold text-red-900 mb-3">
                    Loading
                </h2>
                <p className="text-red-700/80 leading-relaxed">
                    Just a moment, were getting things ready for you...
                </p>

                {/* Animated dots */}
                <div className="flex items-center justify-center gap-2 mt-6">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-bounce"></span>
                </div>
            </div>
        </div>
    );
};

export default LoadingPage;