/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/Gn1EWSE5kih
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Chivo } from 'next/font/google'
import { IBM_Plex_Sans } from 'next/font/google'

chivo({
  subsets: ['latin'],
  display: 'swap',
})

ibm_plex_sans({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/components/ui/button.jsx"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export function Homepage() {
  return (
    (<div className="flex flex-col min-h-[100dvh]">
      <header
        className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <Link href="#" prefetch={false}>
          <PlayIcon className="h-8 w-auto" />
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            Contact
          </Link>
          <Button variant="secondary" className="hidden md:inline-flex">
            Sign Up
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section
          className="bg-gradient-to-r from-primary to-primary-foreground/90 py-20 md:py-32 lg:py-40">
          <div
            className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl text-center text-primary-foreground">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Elevate Your Sports Betting Experience with PlayPicks
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8">
              Our AI-powered chatbot, trained on sports data, provides personalized insights and recommendations to help
              you make smarter bets and increase your wins.
            </p>
            <div className="flex justify-center gap-4 flex-col md:flex-row">
              <Button>Get Started</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20 lg:py-28">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Personalized Insights</h2>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  Our AI-powered chatbot analyzes vast amounts of sports data to provide you with personalized insights
                  and recommendations tailored to your preferences and betting history.
                </p>
                <Button>Learn More</Button>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Increase Your Wins</h2>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  By leveraging our advanced analytics and machine learning models, you can make more informed decisions
                  and increase your chances of winning big.
                </p>
                <Button>Get Started</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-20 lg:py-28">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Sports Enthusiasts</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Our users love the insights and recommendations they get from PlayPicks. See what they have to say.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
              <div className="bg-background p-6 rounded-lg shadow-md text-left">
                <div className="flex items-center mb-4">
                  <Avatar className="mr-4">
                    <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold">John Doe</h3>
                    <p className="text-muted-foreground text-sm">New York, NY</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                &quot;PlayPicks has been a game-changer for my sports betting\n experience. The insights and
                  recommendations are spot-on and\n have helped me make more informed decisions, leading to\n increased
                  wins.&quot;
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-md text-left">
                <div className="flex items-center mb-4">
                  <Avatar className="mr-4">
                    <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold">Jane Smith</h3>
                    <p className="text-muted-foreground text-sm">Los Angeles, CA</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                &quot;I was skeptical at first, but PlayPicks has completely\n transformed the way I approach sports
                  betting. The\n personalized insights have given me a significant edge, and\n I&apos;ve been able to
                  consistently increase my winnings.&quot;
                </p>
              </div>
              <div className="bg-background p-6 rounded-lg shadow-md text-left">
                <div className="flex items-center mb-4">
                  <Avatar className="mr-4">
                    <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold">Michael Johnson</h3>
                    <p className="text-muted-foreground text-sm">Chicago, IL</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                &quot;As a long-time sports bettor, I&apos;ve tried many different\n tools and services, but none have come
                  close to the value\n that PlayPicks provides. The insights are unparalleled, and\n the user experience
                  is top-notch.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20 lg:py-28">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing That Fits Your Needs</h2>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  Choose from our flexible pricing plans to find the one that best suits your sports betting needs and
                  budget.
                </p>
                <div className="grid gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Basic</CardTitle>
                      <CardDescription>$9/month</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>Access to basic insights</li>
                        <li>Limited data history</li>
                        <li>Basic user support</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button>Get Started</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Pro</CardTitle>
                      <CardDescription>$19/month</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>Access to advanced insights</li>
                        <li>Unlimited data history</li>
                        <li>Priority user support</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button>Get Started</Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Enterprise</CardTitle>
                      <CardDescription>Custom pricing</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>Dedicated account manager</li>
                        <li>Customized data and insights</li>
                        <li>Enterprise-level support</li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button>Contact Sales</Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
              <div>
                <img
                  src="/placeholder.svg"
                  alt="Pricing Image"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg"
                  style={{ aspectRatio: "800/600", objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted text-muted-foreground py-8 px-4 md:px-6 lg:px-8">
        <div
          className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">&copy; 2024 PlayPicks. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm hover:underline" prefetch={false}>
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    </div>)
  );
}

function PlayIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>)
  );
}
