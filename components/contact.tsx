import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <footer className="w-full pt-12 pb-6 md:pt-24 md:pb-12">
      <div className="w-full mb-8"> {/* Added bottom margin to create space */}
        <div className="h-0.5 w-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900" />
      </div>
      <div className="container px-4 md:px-6">
        <div className="grid gap-4 md:grid-cols-2 lg:gap-8">
          <div className="space-y-2">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Have a question or feature requests? Fill email witchaudiostudios@gmail.com and we&apos;ll get back to you as soon as possible.
            </p>
          </div>
          {/* <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" />
            </div>
            <Button className="bg-white text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300">Send Message</Button>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
