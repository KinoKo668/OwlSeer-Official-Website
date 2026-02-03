import React from 'react';

export const CookiePolicy = () => (
  <div className="prose dark:prose-invert prose-lg max-w-none text-gray-700 dark:text-gray-300">
    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Cookie Policy</h1>
    <p className="text-sm text-gray-500 mb-8">Last Updated: January 31, 2026</p>

    <section className="mb-10">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">1. What Are Cookies</h2>
      <p className="mb-4">
        Cookies are small text files that are placed on your computer or mobile device by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
      </p>
    </section>

    <section className="mb-10">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">2. How We Use Cookies</h2>
      <p className="mb-4">
        We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.
      </p>
    </section>

    <section className="mb-10">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">3. The Cookies We Set</h2>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>
          <strong>Account related cookies:</strong> If you create an account with us then we will use cookies for the management of the signup process and general administration.
        </li>
        <li>
          <strong>Login related cookies:</strong> We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page.
        </li>
        <li>
          <strong>Site preferences cookies:</strong> In order to provide you with a great experience on this site we provide the functionality to set your preferences for how this site runs when you use it (e.g., Dark Mode preference).
        </li>
      </ul>
    </section>

    <section className="mb-10">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">4. Third Party Cookies</h2>
      <p className="mb-4">
        In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li>
          <strong>Google Analytics:</strong> This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience.
        </li>
        <li>
          <strong>Stripe:</strong> We use Stripe for payment processing, which may set cookies to prevent fraud and process payments securely.
        </li>
      </ul>
    </section>

    <section className="mb-10">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">5. Managing Cookies</h2>
      <p className="mb-4">
        You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Therefore it is recommended that you do not disable cookies.
      </p>
    </section>
  </div>
);
