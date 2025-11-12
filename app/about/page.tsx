import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "About Us - Cornerstone Constructions",
  description: "Learn about our team, experience, and commitment to excellence in construction.",
}

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">About Cornerstone Constructions</h1>
          <p className="text-xl text-muted-foreground mb-12">
            With over 15 years of experience in construction and architectural consultancy, we've delivered hundreds of
            successful projects across residential, commercial, and industrial sectors.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To deliver exceptional construction and consultancy services that exceed client expectations while
                  maintaining the highest standards of quality, safety, and professionalism.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be the leading construction consultancy partner trusted by architects, developers, and investors
                  for innovative solutions and reliable execution.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>500+</CardTitle>
                <CardDescription>Projects Completed</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>15+</CardTitle>
                <CardDescription>Years Experience</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>98%</CardTitle>
                <CardDescription>Client Satisfaction</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
