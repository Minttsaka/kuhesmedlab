import * as React from "react"
import Link from "next/link"
import { Button } from "./ui/button"
import prisma from "@/lib/prisma"

export async function ResearchFirth() {
  const surveyForms = await prisma.surveyForm.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      questions: {
        include: {
          choices: {
            include: {
              user: true,
            },
          },
        },
      },
    },
  })

  return (
    <div id="survey" className="container mx-auto my-20">
      <h2 className="text-3xl font-bold">Your Voice Matters: Participate in these Surveys</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 mx-auto">
        {surveyForms.map((form) => {
          const participantCount = form.questions.reduce((total, question) => {
            return total + question.choices.reduce((choiceTotal, choice) => {
              return choiceTotal + (choice.user ? 1 : 0)
            }, 0)
          }, 0)

          return (
            <div key={form.id} className="shadow-md mx-2 dark:bg-gray-700 rounded-md">
              <div className="card flex flex-row items-center space-x-4 rounded-md py-4 px-8 dark:text-white">
                <img src="/img/mint.png" alt="manu" className="h-12 w-12 rounded-lg object-cover" />
                <div className="card-body text-lg font-semibold flex flex-col">
                  <p className="text-gray-500">{form.description}</p>
                  <h1 className="text-xs">{form.creatorName}</h1>
                  <div className="flex text-xs flex-row space-x-1 items-center text-blue-500">
                    <span className="font-bold">{participantCount}</span>{" "}
                    <span className="text-sm font-light text-black dark:text-white">Participants</span>
                  </div>
                </div>
              </div>
              <div className="w-full rounded-br-md flex items-center rounded-bl-md overflow-hidden">
                <Link className="ml-5 mb-5 hover:underline" href={`/survey/${form.id}`}>
                  Attend
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
