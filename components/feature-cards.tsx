
export default function FeatureCards(): JSX.Element {
  return (
    <div className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Your new home of entertainment 🍿</h2>
          <p className="text-lg">
          Discover a new way to explore a world of movies and series with Kernel.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#1a1a1a] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Recommendations</h3>
            <p className="text-sm">
            Effortlessly recommend films and shows to your friends and family.
            </p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Create Playlists</h3>
            <p className="text-sm">Just like music playlists but for movies and series.</p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Stay Up-to-Date & Explore</h3>
            <p className="text-sm">
            Don&apos;t miss out on the latest releases! Kernel sends you timely notifications as your playlist item release dates draw near. Dive into detailed information. Watch trailers, discover cast and crew details. 
            </p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Streaming Guide</h3>
            <p className="text-sm">
            Find out where the movie or series you want to watch is streaming. Apple TV+, Netflix, Hulu, Prime Video, Disney+, HBO, and more.
            </p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-lg">
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
          </div>
        </div>
      </div>
    </div>
  )
}
