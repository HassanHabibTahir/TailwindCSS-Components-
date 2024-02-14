import { FaFacebook ,FaTwitter,FaLinkedin , FaTwitterSquare} from "react-icons/fa";

export default function Home() {
  return (
    <main className="flex flex-wrap items-center justify-center h-screen">
      <div className="max-w-md  bg-black rounded shadow-md">
        <div className="relative mb-6">
         
          <img
            src="https://source.unsplash.com/800x200/?nature,water"
            alt="Header Image"
            className="w-full h-32 object-cover rounded-t-md z-0"
          />

          <div className="flex items-center justify-center absolute top-3/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            
            <img
              src="https://source.unsplash.com/200x200/?person"
              alt="Profile Image"
              className="w-20 h-20 object-cover rounded-full border-4 border-white"
              
            />
          </div>
        </div>
        <div className="mt-6 p-8">
          <h2 className="text-xl font-semibold text-white">Your Name</h2>
          <p className="text-white text-xs ml-1">Web Developer</p>  
          <div className="mt-2">
            <h3 className=" font-semibold text-lg text-white">About Me</h3>
            <p className="text-gray-300 text-xs">
              I am a passionate web developer with expertise in building modern and responsive web applications.
            </p>

            <div className="flex mt-4 space-x-4">
            <a href="https://twitter.com" target="_blank" className="text-white hover:text-blue-300">
            <FaFacebook />
              </a>
            <a href="https://twitter.com" target="_blank" className="text-white hover:text-blue-300">
            <FaTwitter />
     
            </a>

            <a href="https://linkedin.com" target="_blank" className="text-white hover:text-blue-300">
            <FaLinkedin />
            </a>
            <a href="https://linkedin.com" target="_blank" className="text-white hover:text-blue-300">
            <FaTwitterSquare />
            </a>
            
        
          </div>
          </div>
        </div>
      
  </div>
  <div className="max-w-md ml-5  bg-white rounded shadow-md">
        <div className="relative mb-6">
         
          <img
            src="https://source.unsplash.com/800x200/?nature,water"
            alt="Header Image"
            className="w-full h-32 object-cover rounded-t-md z-0"
          />

          <div className="flex items-center justify-center absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            
            <img
              src="https://source.unsplash.com/200x200/?person"
              alt="Profile Image"
              className="w-20 h-20 object-cover rounded-full border-4 border-white"
              
            />
          </div>
        </div>
        <div className="mt-6 p-8">
          <h2 className="text-xl font-semibold text-black">Your Name</h2>
          <p className="text-black text-xs ml-1">Web Developer</p>  
          <div className="mt-2">
            <h3 className=" font-semibold text-lg text-black">About Me</h3>
            <p className="text-black text-xs">
              I am a passionate web developer with expertise in building modern and responsive web applications.
            </p>

            <div className="flex mt-4 space-x-4">
            <a href="https://twitter.com" target="_blank" className="text-black hover:text-blue-300">
            <FaFacebook />
              </a>
            <a href="https://twitter.com" target="_blank" className="text-black hover:text-blue-300">
            <FaTwitter />
     
            </a>

            <a href="https://linkedin.com" target="_blank" className="text-black hover:text-blue-300">
            <FaLinkedin />

           
            </a>

            <a href="https://linkedin.com" target="_blank" className="text-black hover:text-blue-300">
            <FaTwitterSquare />
            </a>
            
          </div>
          </div>
        </div>
      
  </div>
    </main>
  );
}
