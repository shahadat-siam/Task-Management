const  Footer = () => {
    return (
      <footer className="bg-[#304463] text-white">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center md:justify-start mb-4 md:mb-0">
              <p className="text-lg font-bold">Task MNG</p>
            </div>
            <div className="mt-4 md:mt-0 flex items-center justify-center md:justify-end space-x-8">
              <div className="space-x-4">
                <a href="#" className="text-sm hover:text-gray-400">Home</a>
                <a href="#" className="text-sm hover:text-gray-400">About Us</a>
                <a href="#" className="text-sm hover:text-gray-400">Services</a>
                <a href="#" className="text-sm hover:text-gray-400">Contact</a>
              </div>
              <div className="flex items-center space-x-4">
                <a href="#" className="text-sm hover:text-gray-400">Privacy Policy</a>
                <a href="#" className="text-sm hover:text-gray-400">Terms of Service</a>
              </div>
            </div>
          </div>
          <div className="border-t border-[#eeedebab] mt-8 pt-8 md:flex md:items-center md:justify-between">
            <p className="text-sm">© 2024 Task MNG. All rights reserved.</p>
            <div className="flex mt-4 md:mt-0 space-x-4">
              <a href="#" className="text-sm hover:text-gray-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 1a9 9 0 110 18 9 9 0 010-18zm1.31 14.71a.67.67 0 01-.67.68h-2.2a.68.68 0 01-.68-.68v-7.1H5.69a.69.69 0 01-.48-1.18l3.32-3.43a.68.68 0 01.97 0l3.32 3.43a.69.69 0 01-.49 1.18h-1.67v7.1z"/>
                </svg>
              </a>
              <a href="#" className="text-sm hover:text-gray-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.36 2a1.57 1.57 0 011.57 1.57v2.91h-1.48V5.63a.62.62 0 00-.62-.62H8.25a.62.62 0 00-.62.62v1.88H6.14V3.57A1.57 1.57 0 017.71 2zm-1.48 6.31h3V17.7h-3zm-5.34-.77a1.57 1.57 0 01-1.57-1.57V3.57A1.57 1.57 0 016.54 2h6.91a1.57 1.57 0 011.57 1.57v2.97h-3.08V5.63a.62.62 0 00-.62-.62H8.25a.62.62 0 00-.62.62v1.88H6.14v-.78zm6.22 10.98h3V11.52h-3v6zm-5.34 0h3V11.52h-3v6z"/>
                </svg>
              </a>
              <a href="#" className="text-sm hover:text-gray-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM7.67 12.28h1.91v-5.6H7.67v5.6zm.96-6.33c.5 0 .9.4.9.9 0 .5-.4.9-.9.9-.5 0-.9-.4-.9-.9 0-.5.4-.9.9-.9zM6.77 14h2.72v-1.17h-2.72V14z" clipRule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default  Footer;
  