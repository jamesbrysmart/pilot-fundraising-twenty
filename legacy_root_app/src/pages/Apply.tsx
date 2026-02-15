import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Apply = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <div className="container py-20 md:py-28">
          <div className="max-w-lg">
            {submitted ? (
              <div className="space-y-4">
                <h1 className="text-2xl font-semibold tracking-tight">Thanks for applying.</h1>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We'll review your application and follow up within a few days.
                </p>
                <Button asChild variant="outline" size="sm" className="mt-4">
                  <Link to="/">Back to home</Link>
                </Button>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="space-y-2">
                  <h1 className="text-2xl font-semibold tracking-tight">
                    Apply for Cohort 1
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Tell us a bit about your organization. We'll follow up within a few days.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your name</Label>
                    <Input id="name" required placeholder="Jane Smith" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required placeholder="jane@nonprofit.org" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="org">Organization</Label>
                    <Input id="org" required placeholder="Community Foundation of…" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role">Your role</Label>
                    <Input id="role" placeholder="Director of Development" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="crm">Current CRM (if any)</Label>
                    <Input id="crm" placeholder="Bloomerang, Salesforce, spreadsheets…" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="why">
                      Why are you interested in this pilot?
                    </Label>
                    <Textarea
                      id="why"
                      rows={4}
                      placeholder="A sentence or two is fine."
                    />
                  </div>

                  <Button type="submit" size="default">
                    Submit application
                  </Button>
                </form>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Apply;
