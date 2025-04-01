export default function FeatureCards(): JSX.Element {
  return (
    <div className="bg-black/80 text-white py-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Flicked 🍿</h2>
          <p className="text-lg text-gray-300">
            Discover a new way to explore movies and TV shows.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300 hover:bg-white/20 hover:scale-[1.02]">
            <h3 className="text-xl font-semibold mb-3">Discover 🎥</h3>
            <p className="text-sm text-gray-300">
              Effortlessly recommend films and shows to your friends and family
              with our similar movies and TV shows engine.
            </p>
          </div>
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300 hover:bg-white/20 hover:scale-[1.02]">
            <h3 className="text-xl font-semibold mb-3">Create Playlists 📋</h3>
            <p className="text-sm text-gray-300">
              Just like music playlists but for your favorite movies and series.
            </p>
          </div>
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300 hover:bg-white/20 hover:scale-[1.02]">
            <h3 className="text-xl font-semibold mb-3">Endless scrolling ❌</h3>
            <p className="text-sm text-gray-300">
              Unsure of what to watch? We&apos;ll recommend the best with our
              Roulette feature.
            </p>
          </div>
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-6 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-300 hover:bg-white/20 hover:scale-[1.02]">
            <h3 className="text-xl font-semibold mb-3">Streaming Guide 📺</h3>
            <p className="text-sm text-gray-300">
              Find out where to stream, rent, or buy your favorite movies and
              series.
            </p>
          </div>
          {/* <div className="bg-[#1a1a1a] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Apple Watch App</h3>
            <p className="text-sm">
            Take your playlists on the go with Apple Watch. Browse through all of your playlists and even add your favorite upcoming film as a complication on your watch face.
            </p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Widget</h3>
            <p className="text-sm">
            Add a widget of your favorite upcoming film so every time you launch your iPhone, you&apos;ll see how many days are left.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
