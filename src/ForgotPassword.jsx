import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import { useState } from 'react';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault()
      try {
          let response = await fetch("http://localhost:3500/api/user/forgot-password",{
              method:"POST",
              headers: {
                  'Content-Type': 'application/json',
              },
              credentials:"include",
              body: JSON.stringify({email})
          })

          let data = await response.json()
          alert(data.message)
          
      } catch (error) {
          alert("Internal server error")
          console.log(error)
      }
  
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-md">
        {/* Card */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-8">
          {!submitted ? (
            <>
              {/* Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-full mb-4">
                  <Mail className="w-8 h-8 text-blue-400" />
                </div>
                <h1 className="text-3xl font-bold text-white mb-2">Forgot Password?</h1>
                <p className="text-slate-300">No worries, we'll send you reset instructions</p>
              </div>

              {/* Form */}
              <div className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-200 mb-2">
                    Email address
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      name='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 shadow-lg shadow-blue-500/30"
                >
                  Send Reset Link
                </button>
              </div>

              {/* Back to login */}
              <div className="mt-6 text-center">
                <a href="#" className="inline-flex items-center text-sm text-slate-300 hover:text-white transition">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to login
                </a>
              </div>
            </>
          ) : (
            <>
              {/* Success state */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>
                <h1 className="text-3xl font-bold text-white mb-2">Check Your Email</h1>
                <p className="text-slate-300 mb-6">
                  We've sent a password reset link to <span className="text-white font-medium">{email}</span>
                </p>
                
                <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                  <p className="text-sm text-slate-300">
                    Didn't receive the email? Check your spam folder or{' '}
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-blue-400 hover:text-blue-300 font-medium"
                    >
                      try another email address
                    </button>
                  </p>
                </div>

                <a href="#" className="inline-flex items-center text-sm text-slate-300 hover:text-white transition">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to login
                </a>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <p className="text-center text-slate-400 text-sm mt-6">
          Need more help?{' '}
          <a href="#" className="text-blue-400 hover:text-blue-300 font-medium">
            Contact Support
          </a>
        </p>
      </div>
    </div>
  );
}

export default ForgotPassword;