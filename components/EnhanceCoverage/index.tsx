import React, { useState } from "react";
import { useRouter } from "next/router";
import { ContentContainer, QuestionsStack } from "./styles";
import PageBoxLayout from "../PageBoxLayout";
import FlowHeader from "../FlowHeader";
import AssistantCard from "../AssistantCard";
import YesNoBlock from "../YesNoBlock";
import {
  ENHANCE_COVERAGE_CONFIG,
  type EnhanceCoverageQuestion,
} from "../../config/assistantMessages";

type AnswerMap = Record<string, "yes" | "no">;

const DEFAULT_CONFIG = {
  introMessages: [
    "Let's enhance your plan with important coverages.",
    "Just answer a few questions so that I can get the relevant additional coverages for you.",
  ],
  questions: [
    { id: "has-driver", question: "Do you have a driver?" },
    { id: "long-road-trips", question: "Do you go on long road trips often?" },
    { id: "flood-prone-area", question: "Do you live in a flood-prone area?" },
  ] as EnhanceCoverageQuestion[],
};

const EnhanceCoverage: React.FC = () => {
  const router = useRouter();
  const proposalEkey = router.query.proposal_ekey as string | undefined;
  const registrationNumber = router.query.registration_number as
    | string
    | undefined;
  const { introMessages, questions } = ENHANCE_COVERAGE_CONFIG ?? DEFAULT_CONFIG;

  const [answers, setAnswers] = useState<AnswerMap>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showQuestions, setShowQuestions] = useState(false);

  const isLastQuestion = currentIndex === questions.length - 1;

  const handleAnswer = (q: EnhanceCoverageQuestion, value: "yes" | "no", questionIndex: number) => {
    setAnswers((prev) => ({ ...prev, [q.id]: value }));

    // Only advance or navigate when answering the current question (not when editing a previous one)
    if (questionIndex !== currentIndex) return;

    if (isLastQuestion) {
      const query: Record<string, string> = {};
      if (proposalEkey?.trim()) query.proposal_ekey = proposalEkey.trim();
      if (registrationNumber?.trim())
        query.registration_number = registrationNumber.trim();
      router.push({
        pathname: "/fresh-car/addon-selection",
        query: Object.keys(query).length > 0 ? query : undefined,
      });
    } else {
      setCurrentIndex((i) => i + 1);
    }
  };

  return (
    <PageBoxLayout
      header={
        <FlowHeader
          progressPercent={55}
          onBack={() => router.back()}
        />
      }
    >
      <ContentContainer>
        <AssistantCard
          phase="success"
          messages={introMessages}
          onMessagesComplete={() => setShowQuestions(true)}
        />

        {showQuestions && (
          <QuestionsStack>
            {questions.slice(0, currentIndex + 1).map((q, idx) => (
              <YesNoBlock
                key={q.id}
                questionId={q.id}
                question={q.question}
                value={answers[q.id] ?? null}
                onChange={(value) => handleAnswer(q, value, idx)}
              />
            ))}
          </QuestionsStack>
        )}
      </ContentContainer>
    </PageBoxLayout>
  );
};

export default EnhanceCoverage;
