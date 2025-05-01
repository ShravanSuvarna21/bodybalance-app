export default function Home(){
    return(
        <div className="w-screen h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg"
        alt="workkout"
        className="absolute inset-0 w-full h-full object-cover"
      />

      
      <div className="absolute inset-0 bg-opacity-60 flex flex-col items-center justify-center text-white z-10 text-center px-4">
        <h1 className="text-5xl font-bold text-blue-400 mb-4">Welcome to Body Balance</h1>
        <h3 className="text-2xl mb-2">Track your workouts, set goals, and achieve your fitness dreams</h3>
        <p className="max-w-2xl text-lg">
          Whether you're a dedicated athlete, casual gym-goer, or a personal coach, Body Balance helps you manage fitness, nutrition, and client progress—all in one simple app.
        </p>
      </div>
    </div>
    )
}