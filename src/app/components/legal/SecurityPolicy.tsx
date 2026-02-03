import React from 'react';

export const SecurityPolicy = () => (
  <div className="prose dark:prose-invert prose-lg max-w-none text-gray-700 dark:text-gray-300">
    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Security Statement</h1>
    <p className="text-sm text-gray-500 mb-8">Last Updated: January 31, 2026</p>

    <section className="mb-10">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">1. Security Overview</h2>
      <p className="mb-4">
        Security is the foundation of the OwlSeer platform. We are committed to protecting your data with enterprise-grade security measures. Our security program is designed to protect your data's confidentiality, integrity, and availability.
      </p>
    </section>

    <section className="mb-10">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">2. Data Encryption</h2>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li><strong>Encryption in Transit:</strong> All data transmitted between your device and our servers is encrypted using TLS 1.2 or higher. We employ HSTS to ensure browsers interact with OwlSeer only over HTTPS.</li>
        <li><strong>Encryption at Rest:</strong> Customer data is encrypted at rest using AES-256 standards. Encryption keys are managed via AWS Key Management Service (KMS).</li>
      </ul>
    </section>

    <section className="mb-10">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">3. Infrastructure Security</h2>
      <p className="mb-4">
        OwlSeer is hosted on Amazon Web Services (AWS), a top-tier cloud provider.
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li><strong>Data Centers:</strong> AWS data centers are ISO 27001, PCI DSS Level 1, and FISMA compliant.</li>
        <li><strong>Network Security:</strong> We use Virtual Private Clouds (VPCs) and strictly configured Security Groups to isolate our infrastructure.</li>
        <li><strong>DDoS Protection:</strong> We utilize AWS Shield to protect against Distributed Denial of Service attacks.</li>
      </ul>
    </section>

    <section className="mb-10">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">4. Access Control</h2>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li><strong>Authentication:</strong> We support Single Sign-On (SSO) for Enterprise plans (Okta, Google Workspace).</li>
        <li><strong>MFA:</strong> Multi-Factor Authentication is enforced for all administrative access to our production environment.</li>
        <li><strong>Least Privilege:</strong> Access to production data is restricted to a small group of authorized engineers based on the principle of least privilege.</li>
      </ul>
    </section>

    <section className="mb-10">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">5. Compliance</h2>
      <p className="mb-4">
        We are committed to complying with applicable laws and regulations.
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4">
        <li><strong>SOC 2 Type II:</strong> We undergo annual independent audits.</li>
        <li><strong>GDPR:</strong> We are fully compliant with the General Data Protection Regulation.</li>
        <li><strong>CCPA:</strong> We comply with the California Consumer Privacy Act.</li>
      </ul>
    </section>

    <section className="mb-10">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">6. Responsible Disclosure</h2>
      <p className="mb-4">
        If you believe you have found a security vulnerability in OwlSeer, please let us know right away. You can submit a report to <a href="mailto:security@owlseer.com" className="text-[#1AAE82] hover:underline">security@owlseer.com</a>. We do not offer a bug bounty program at this time, but we appreciate your help in keeping our community safe.
      </p>
    </section>
  </div>
);
