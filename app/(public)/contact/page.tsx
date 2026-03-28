export default function ContactPage() {
  return (
    <section className="flex flex-1 items-center justify-center py-12">
      <div className="w-full max-w-4xl px-6">
        
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Get in touch
          </h1>
          <p className="text-xl text-gray-600">
            Have questions? We're here to help!
          </p>
        </div>

       
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          
          <div className="group bg-white rounded-xl border border-gray-100 p-8 hover:shadow-lg hover:border-blue-200 transition transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-xl mb-4">
              ✉️
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 text-sm">hello@app.dev</p>
            <a href="mailto:hello@app.dev" className="text-blue-600 text-sm font-medium hover:text-blue-700 mt-3 inline-block">
              Send email →
            </a>
          </div>

          
          <div className="group bg-white rounded-xl border border-gray-100 p-8 hover:shadow-lg hover:border-purple-200 transition transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-xl mb-4">
              📍
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-600 text-sm">Tbilisi, Georgia</p>
            <p className="text-gray-500 text-xs mt-3">Caucasus Region</p>
          </div>

          
          <div className="group bg-white rounded-xl border border-gray-100 p-8 hover:shadow-lg hover:border-green-200 transition transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white text-xl mb-4">
              ⚡
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Response</h3>
            <p className="text-gray-600 text-sm">24-hour reply</p>
            <p className="text-gray-500 text-xs mt-3">Usually faster</p>
          </div>
        </div>

        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-100 p-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to start?</h2>
          <p className="text-gray-600 mb-6">Drop us a line and we'll get back to you as soon as possible.</p>
          <a href="mailto:hello@app.dev" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition transform hover:scale-105">
            Send us a message
          </a>
        </div>
      </div>
    </section>
  );
}
