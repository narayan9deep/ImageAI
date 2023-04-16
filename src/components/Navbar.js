export default function Navbar() 
{
  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="h-8 w-8 font-semibold text-xl"> PhotoGPT </h1>
          </div>
          <div className="md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#"
                className="text-xl md:text-2xl lg:text-xl hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-xl md:text-2xl lg:text-xl  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
              <a
                href="#"
                className="text-xl md:text-2xl lg:text-xl  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};