import { useEffect } from 'react';

export const PrivacyPolicy = ({ onBack, onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#111111] text-[#e0e0e0] font-sans selection:bg-[#ff4a23] selection:text-white">
      <div className="max-w-3xl mx-auto px-6 py-12 sm:py-16">
        {/* Back Link */}
        <div className="mb-10">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-[#ff4a23] hover:text-[#ff6a47] font-semibold text-sm transition-colors cursor-pointer"
          >
            <span>&larr;</span> Back to SetShow
          </button>
        </div>

        {/* Header */}
        <div className="mb-12">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-gray-400 block mb-3">
            SETSHOW
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-sm">
            Last updated: May 20, 2026
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-12 text-[15px] sm:text-base leading-relaxed text-gray-300">
          {/* Introduction */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Introduction
            </h2>
            <div className="space-y-4 text-gray-300">
              <p>
                SetShow (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) provides production management software for video and film shoots. This Privacy Policy explains how we collect, use, disclose, and protect information when you use our website at setshow.app, our mobile applications, and related services (collectively, the &ldquo;Service&rdquo;).
              </p>
              <p>
                By creating an account or using the Service, you agree to this Privacy Policy. If you do not agree, please do not use the Service.
              </p>
            </div>
          </section>

          {/* Information we collect */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Information we collect
            </h2>
            <div className="space-y-3 text-gray-300">
              <p>
                <strong className="text-white font-semibold">Account information:</strong> When you sign up, we collect your name, email address, password (stored in hashed form), and optional profile photo.
              </p>
              <p>
                <strong className="text-white font-semibold">Production and crew data:</strong> You and your team may upload production details, schedules, scene information, crew assignments, message board posts, notifications, and related content you choose to store in the Service.
              </p>
              <p>
                <strong className="text-white font-semibold">Usage and device data:</strong> We may collect log data such as IP address, browser or device type, app version, and pages or features used to operate and improve the Service.
              </p>
              <p>
                <strong className="text-white font-semibold">Communications:</strong> If you contact support, we keep the content of those messages and our responses.
              </p>
            </div>
          </section>

          {/* How we use information */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              How we use information
            </h2>
            <p className="mb-3 text-gray-300">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Provide, maintain, and secure the Service</li>
              <li>Authenticate users and manage accounts</li>
              <li>Enable production collaboration features (schedules, crew, messaging, notifications)</li>
              <li>Send service-related emails such as invitations and account notices</li>
              <li>Respond to support requests and enforce our Terms</li>
              <li>Monitor usage, fix bugs, and improve performance</li>
            </ul>
          </section>

          {/* How we share information */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              How we share information
            </h2>
            <p className="mb-3 text-gray-300">
              We do not sell your personal information. We may share information in these circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2.5 text-gray-300">
              <li>
                <strong className="text-white font-semibold">Within your production:</strong> Information you add to a production (schedules, crew lists, messages) is visible to other members you invite or who join that production.
              </li>
              <li>
                <strong className="text-white font-semibold">Service providers:</strong> We use trusted vendors for hosting, email delivery, file storage, and analytics who process data on our behalf under contractual obligations.
              </li>
              <li>
                <strong className="text-white font-semibold">Legal requirements:</strong> We may disclose information if required by law or to protect the rights, safety, and security of users and the Service.
              </li>
              <li>
                <strong className="text-white font-semibold">Business transfers:</strong> If we are involved in a merger, acquisition, or sale of assets, your information may transfer as part of that transaction.
              </li>
            </ul>
          </section>

          {/* Data retention */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Data retention
            </h2>
            <p className="text-gray-300">
              We retain your account and production data while your account is active or as needed to provide the Service. You may request deletion of your account by contacting us. Some data may be retained where required for legal, security, or backup purposes.
            </p>
          </section>

          {/* Security */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Security
            </h2>
            <p className="text-gray-300">
              We use reasonable technical and organizational measures to protect your information, including encryption in transit and access controls. No method of transmission or storage is completely secure; we cannot guarantee absolute security.
            </p>
          </section>

          {/* Your choices and rights */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Your choices and rights
            </h2>
            <p className="text-gray-300">
              You may update your profile information in the app. Depending on where you live, you may have rights to access, correct, delete, or export your personal data, or to object to certain processing. To exercise these rights, contact us at{' '}
              <a href="mailto:support@setshow.app" className="text-[#ff4a23] hover:underline font-medium">
                support@setshow.app
              </a>.
            </p>
          </section>

          {/* Children */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Children
            </h2>
            <p className="text-gray-300">
              The Service is not directed to children under 13 (or the minimum age in your jurisdiction). We do not knowingly collect personal information from children. If you believe we have done so, please contact us so we can delete it.
            </p>
          </section>

          {/* International users */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              International users
            </h2>
            <p className="text-gray-300">
              If you access the Service from outside the United States, your information may be processed in the United States or other countries where we or our providers operate. By using the Service, you consent to that transfer.
            </p>
          </section>

          {/* Changes to this policy */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Changes to this policy
            </h2>
            <p className="text-gray-300">
              We may update this Privacy Policy from time to time. We will post the revised version on this page and update the &ldquo;Last updated&rdquo; date. Continued use of the Service after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Contact us */}
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Contact us
            </h2>
            <p className="text-gray-300">
              For privacy questions or requests, email{' '}
              <a href="mailto:support@setshow.app" className="text-[#ff4a23] hover:underline font-medium">
                support@setshow.app
              </a>.
            </p>
          </section>
        </div>

        {/* Footer Area */}
        <div className="mt-20 pt-12 border-t border-white/10 text-sm text-gray-400">
          <p className="mb-4">
            Questions? Contact us at{' '}
            <a href="mailto:support@setshow.app" className="text-[#ff4a23] hover:underline">
              support@setshow.app
            </a>.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-[#ff4a23] font-medium">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:underline cursor-pointer"
            >
              Privacy Policy
            </button>
            {onNavigate && (
              <button
                onClick={() => onNavigate('faq', '/faq')}
                className="hover:underline cursor-pointer"
              >
                FAQ
              </button>
            )}
            <a
              href="https://app.setshow.app/terms"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Terms of Use (EULA)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
