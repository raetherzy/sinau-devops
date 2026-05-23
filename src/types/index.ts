export interface LearningSession {
  phaseId: number;
  sessionId: number;
  title: string;
  description: string;
  duration: string;
  topics: string[];
  contentSections: ContentSection[];
  quiz: Quiz;
}

export interface ContentSection {
  heading: string;
  body: string;
  codeExample?: string;
  tips?: string;
}

export interface Quiz {
  questions: QuizQuestion[];
  passingScore: number;
}

export interface QuizQuestion {
  id: string;
  type: "multiple_choice" | "true_false" | "essay" | "fill_blank" | "troubleshooting";
  question: string;
  options?: string[];
  correctAnswer?: string | string[];
  explanation?: string;
  codeSnippet?: string;
}

export interface PhaseInfo {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  totalSessions: number;
  difficulty: "Dasar" | "Menengah" | "Mahir";
  color: string;
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  passed: boolean;
  feedback: string;
  answers: Record<string, string | string[]>;
}
