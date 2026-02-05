import React from 'react';
import { Shield, Lock, Trash2, EyeOff } from 'lucide-react';

export const PrivacyPolicy = () => (
  <div className="prose dark:prose-invert prose-lg max-w-none text-gray-700 dark:text-gray-300">
    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Privacy Policy</h1>
    <p className="text-sm text-gray-500 mb-8">Last Updated: January 31, 2026</p>

    {/* SEO Optimized Trust Block */}
    <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-900/30 rounded-2xl p-8 mb-12 not-prose">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-3">
        <Shield className="w-6 h-6 text-[#1AAE82]" />
        Your data stays yours—we analyze it, we don't own it.
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
        We believe privacy shouldn't be complicated. Here is our promise in plain language:
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
              <EyeOff className="w-5 h-5 text-[#1AAE82]" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">No Hidden Collection</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">We never sell your data, share it with third parties, or collect anything without your explicit permission.</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-gray-100 dark:border-slate-700 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
              <Lock className="w-5 h-5 text-[#1AAE82]" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-1">Sample Mode First</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Try our platform with sample data. We don't touch your real account until you choose to connect.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 border-t border-emerald-100 dark:border-emerald-900/30 pt-6">
        <button 
          onClick={() => window.location.href = '/sample/dashboard'}
          className="px-6 py-2.5 bg-[#1AAE82] hover:bg-[#15956F] text-white rounded-lg font-bold shadow-lg shadow-[#1AAE82]/20 transition-all text-sm w-full sm:w-auto text-center"
        >
          Try Sample Without Connecting
        </button>
        <button 
          onClick={() => document.getElementById('security-section')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-6 py-2.5 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700 text-gray-900 dark:text-white rounded-lg font-medium transition-colors text-sm w-full sm:w-auto text-center"
        >
          Read Security Details
        </button>
      </div>
    </div>

    <section className="mb-10">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">1. Introduction</h2>
      <p className="mb-4">
        Welcome to OwlSeer ("Company", "we", "our", "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this policy, or our practices with regards to your personal information, please contact us at <a href="mailto:privacy@owlseer.com" className="text-[#1AAE82] hover:underline">privacy@owlseer.com</a>.
      </p>
      <p>
        When you visit our website and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy policy, we seek to explain to you in the clearest way possible what information we collect, how we use it, and what rights you have in relation to it.
      </p>
    </section>

    <section className="mb-10">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">2. Information We Collect</h2>
      <p className="mb-4">
        We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, when participating in activities on the Services or otherwise contacting us.
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li><strong>Personal Information Provided by You:</strong> We collect names; email addresses; passwords; contact preferences; and other similar information.</li>
        <li><strong>Payment Data:</strong> We collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument. All payment data is stored by our payment processor (Stripe).</li>
        <li><strong>Social Media Login Data:</strong> We provide you with the option to register using social media account details, specifically your TikTok account. We collect the public profile information and analytics data authorized by the platform's API scope.</li>
      </ul>
    </section>

    <section className="mb-10">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">3. How We Use Your Information</h2>
      <p className="mb-4">
        We use personal information collected via our Services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>To facilitate account creation and logon process.</li>
        <li>To send administrative information to you.</li>
        <li>To fulfill and manage your orders.</li>
        <li>To improve our AI models: We may use aggregated, anonymized data to improve the accuracy of our predictive algorithms. We never use your specific strategy or private content drafts for other users.</li>
      </ul>
    </section>

    <section className="mb-10">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">4. Data Sharing</h2>
      <p className="mb-4">
        We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.
      </p>
    </section>

    <section className="mb-10">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">5. Your Privacy Rights</h2>
      <p className="mb-4">
        In some regions (like the European Economic Area), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability.
      </p>
    </section>
  </div>
);
