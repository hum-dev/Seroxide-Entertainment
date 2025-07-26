import { useState } from "react";
import { Copy, ExternalLink, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const MarketerLinkGenerator = () => {
  const [marketerId, setMarketerId] = useState("");
  const [eventId, setEventId] = useState("");
  const { toast } = useToast();

  // Generate the referral link
  const generateLink = () => {
    if (!marketerId || !eventId) return "";
    return `${window.location.origin}/events/${eventId}/book?ref=${marketerId}`;
  };

  const referralLink = generateLink();

  // Copy link to clipboard
  const copyToClipboard = async () => {
    if (!referralLink) {
      toast({
        title: "Error",
        description: "Please enter both Marketer ID and Event ID to generate a link",
        variant: "destructive",
      });
      return;
    }

    try {
      await navigator.clipboard.writeText(referralLink);
      toast({
        title: "Link Copied!",
        description: "Referral link has been copied to your clipboard",
      });
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: "Please manually copy the link",
        variant: "destructive",
      });
    }
  };

  // Open link in new tab
  const openLink = () => {
    if (referralLink) {
      window.open(referralLink, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-2">Marketer Link Generator</h1>
            <p className="text-muted-foreground">
              Generate your personalized referral links for event bookings
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Generate Referral Link</CardTitle>
              <CardDescription>
                Enter your marketer ID and the event ID to create your referral link
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="marketerId">Marketer ID</Label>
                  <Input
                    id="marketerId"
                    placeholder="e.g., marketer001"
                    value={marketerId}
                    onChange={(e) => setMarketerId(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">
                    Your unique marketer identifier
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="eventId">Event ID</Label>
                  <Input
                    id="eventId"
                    placeholder="e.g., 1"
                    value={eventId}
                    onChange={(e) => setEventId(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">
                    The ID of the event you want to promote
                  </p>
                </div>
              </div>

              {referralLink && (
                <div className="space-y-3">
                  <Label>Your Referral Link</Label>
                  <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm break-all">{referralLink}</p>
                    </div>
                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={copyToClipboard}
                        className="h-8 w-8"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={openLink}
                        className="h-8 w-8"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex gap-2">
                <Button 
                  onClick={copyToClipboard} 
                  disabled={!referralLink}
                  className="flex-1"
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy Link
                </Button>
                <Button 
                  variant="outline" 
                  onClick={openLink}
                  disabled={!referralLink}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Preview
                </Button>
              </div>

              <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                <h3 className="font-semibold text-sm mb-2">How it works:</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Share your referral link with potential customers</li>
                  <li>• When they book using your link, you'll be credited as the referrer</li>
                  <li>• Their booking will show "Referred by Marketer: {marketerId || 'your-id'}"</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MarketerLinkGenerator;