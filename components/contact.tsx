import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import PrivacyPolicy from "@/components/privacy-policy";

export default function Component() {
  return (
    <footer className="w-full pt-12 pb-6 md:pt-24 md:pb-12">
      <div className="w-full mb-8">
        {" "}
        {/* Added bottom margin to create space */}
        <div className="h-0.5 w-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900" />
      </div>
      <div className="container px-4 md:px-6">
        <div className="grid gap-4 md:grid-cols-2 lg:gap-8">
          <div className="space-y-2">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Have a question or feature requests? Email
              witchaudiostudios@gmail.com and we&apos;ll get back to you.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold">Privacy Policy</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Read our{" "}
              <a
                href="/privacy-policy"
                className="text-red-500 hover:underline"
              >
                Privacy Policy
              </a>{" "}
              to learn more.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
