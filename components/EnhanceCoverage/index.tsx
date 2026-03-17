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
  const { introMessages, questions } = ENHANCE_COVERAGE_CONFIG ?? DEFAULT_CONFIG;

  const [answers, setAnswers] = useState<AnswerMap>({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentQuestion = questions[currentIndex];
  const isLastQuestion = currentIndex === questions.length - 1;

  const handleAnswer = (q: EnhanceCoverageQuestion, value: "yes" | "no") => {
    setAnswers((prev) => ({ ...prev, [q.id]: value }));

    if (isLastQuestion) {
      router.push("/fresh-car/addon-selection");
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
        />

        <QuestionsStack>
          {currentQuestion && (
            <YesNoBlock
              key={currentQuestion.id}
              questionId={currentQuestion.id}
              question={currentQuestion.question}
              value={answers[currentQuestion.id] ?? null}
              onChange={(value) => handleAnswer(currentQuestion, value)}
            />
          )}
        </QuestionsStack>
      </ContentContainer>
    </PageBoxLayout>
  );
};

export default EnhanceCoverage;
