import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Research } from '@prisma/client'

export default function PublicationContent({research}:{research:Research}) {
  return (
    <div className="container max-w-5xl mx-auto p-4 space-y-4">
    <header className="space-y-2">
      <h1 className="text-3xl font-bold max-w-xl">{research.title}</h1>
      <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
        <span>{research.creatorName}, PhD</span>
        <span>•</span>
        <span>Jane Smith, MSc</span>
        <span>•</span>
        <span>{research.affiliation}</span>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <span className="font-semibold">Published:</span>
        <span>{research.createdAt.toDateString()}</span>
        <span className="font-semibold ml-4">DOI:</span>
        <a href="#" className="text-blue-600 hover:underline">{research.doi}</a>
      </div>
    </header>

    <Card>
      <CardHeader>
        <CardTitle>Abstract</CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col md:flex-row items-start gap-2'>
        <p>
          {research.abstract}
        </p>
        <img alt='' className='h-80 w-80' src={research.image!} />
      </CardContent>
    </Card>

    <div className="grid md:grid-cols-[3fr,1fr] gap-4">
      <ScrollArea className="h-[calc(100vh-12rem)]">
        <div className="pr-4 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="mb-2">
              Climate change has emerged as one of the most pressing global challenges of the 21st century, with
              far-reaching consequences for ecosystems and biodiversity worldwide. As temperatures rise and weather
              patterns shift, species and ecosystems are facing unprecedented pressures to adapt or risk extinction.
            </p>
            <p>
              This paper aims to provide a comprehensive review of the current scientific understanding of how
              climate change is impacting biodiversity across different ecosystems and regions. By synthesizing
              findings from a wide range of studies, we seek to offer insights into the complex interactions between
              climate change and biodiversity, and to inform conservation strategies and policy decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Methodology</h2>
            <p className="mb-2">
              Our review methodology involved a systematic search of peer-reviewed literature published between
              2000 and 2023. We used major scientific databases including Web of Science, Scopus, and Google Scholar.
              Search terms included combinations of climate change, global warming, biodiversity, species
              distribution, phenology, and ecosystem dynamics.
            </p>
            <p>
              Studies were included based on relevance, methodological rigor, and geographical representation to
              ensure a comprehensive global perspective. We also incorporated data from long-term ecological
              studies and global biodiversity monitoring programs to capture trends over time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Results</h2>
            <p className="mb-2">
              Our analysis revealed several key trends in the impact of climate change on biodiversity:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Species range shifts: Numerous species are moving poleward or to higher elevations in response to warming temperatures.</li>
              <li>Phenological changes: Many plants and animals are altering the timing of key life cycle events, such as flowering, migration, and breeding.</li>
              <li>Ecosystem disruptions: Climate change is altering species interactions and ecosystem functions, leading to cascading effects through food webs.</li>
              <li>Increased extinction risk: Many species, especially those with limited dispersal abilities or specific habitat requirements, face an elevated risk of extinction.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Discussion</h2>
            <p className="mb-2">
              The results of our review highlight the pervasive and complex impacts of climate change on global
              biodiversity. The observed and projected changes in species distributions, phenology, and ecosystem
              dynamics underscore the urgent need for adaptive conservation strategies.
            </p>
            <p>
              While some species may benefit from climate change, many more are likely to face increased threats.
              The rapid pace of climate change may exceed the adaptive capacity of many species, particularly those
              with long generation times or limited dispersal abilities. This emphasizes the importance of
              maintaining and restoring habitat connectivity to facilitate species movement and adaptation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Conclusion</h2>
            <p className="mb-2">
              Climate change is having profound and wide-ranging impacts on global biodiversity. Our review
              underscores the urgency of addressing climate change to preserve the planets biological diversity
              and the ecosystem services it provides.
            </p>
            <p>
              Future research should focus on improving our understanding of species adaptive capacities,
              developing more accurate predictive models, and evaluating the effectiveness of various conservation
              strategies in the face of ongoing climate change. Policy makers and conservation practitioners must
              work together to implement adaptive management strategies that can respond to the dynamic challenges
              posed by climate change.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">References</h2>
            <ul className="space-y-2">
              <li>Smith, J. et al. (2020). Global patterns of biodiversity change in the face of climate change. Nature Climate Change, 10(6), 503-509.</li>
              <li>Johnson, A. & Brown, B. (2021). Phenological shifts in plant communities: a meta-analysis. Ecology Letters, 24(4), 612-625.</li>
              <li>Garcia, R. et al. (2022). Climate change and species range dynamics: a global synthesis. Science, 375(6582), 784-790.</li>
              <li>Lee, S. & Park, Y. (2023). Ecosystem resilience under climate change: a review. Annual Review of Ecology, Evolution, and Systematics, 54, 201-225.</li>
            </ul>
          </section>
        </div>
      </ScrollArea>

      <Card className="h-fit">
        <CardHeader>
          <CardTitle>Article Info</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div>
              <span className="font-semibold">Journal:</span> {research.journal}
            </div>
            <div>
              <span className="font-semibold">Volume:</span> 15
            </div>
            <div>
              <span className="font-semibold">Issue:</span> 3
            </div>
            <div>
              <span className="font-semibold">Pages:</span> 245-267
            </div>
            <Separator />
            <div>
              <span className="font-semibold">Citations:</span> 42
            </div>
            <div>
              <span className="font-semibold">Downloads:</span> 1,523
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Button className="w-full">Download PDF</Button>
          <Button variant="outline" className="w-full">Cite This Paper</Button>
        </CardFooter>
      </Card>
    </div>
  </div>
  )
}
