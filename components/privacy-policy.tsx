import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="space-y-6 text-white-600">
        <section>
          <h2 className="text-2xl font-semibold text-white-900 mb-4">
            1. We Do Not Collect Any Information
          </h2>
          <p>
            Flicked is dedicated to providing movie and TV show content by
            leveraging data from the movie database. We do not collect, store,
            or share any personal information from our users.
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-2">
            <li>
              No Personal Information: We do not require or collect any personal
              data from you when using our app.
            </li>
            <li>
              No Profile Information: We do not require or collect any profile
              information from you when using our app.
            </li>
            <li>
              No Content Information: We do not require or collect any content
              information from you when using our app.
            </li>
            <li>
              No Communications Information: We do not require or collect any
              communications information from you when using our app.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white-900 mb-4">
            2. Third-Party Content
          </h2>
          <p>
            Our app solely displays content provided by the movie database API.
            Please review their privacy policy to understand how they handle any
            data on their end.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white-900 mb-4">
            5. Contact Us
          </h2>
          <p>
            If you have any questions about this policy, please contact us at
            witchaudiostudios@gmail.com
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white-900 mb-4">
            7. Changes to This Policy
          </h2>
          <p>
            We may update this privacy policy from time to time. We will notify
            you of any changes by posting the new privacy policy on this page.
          </p>
          <p className="mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
