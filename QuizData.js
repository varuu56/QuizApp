// Question Types
// 1. MCQs | Multiple Choice | single

export const quiz = {
    topic: 'Islamic Question',
    level: 'Beginner',
    totalQuestions: 4,
    perQuestionScore: 5,
    questions: [
      {
        question: 'How many pages does Quran have?',
        choices: ['604', '607', '640', 'None of the above'],
        type: 'MCQs',
        correctAnswer: '604',
      },
      {
        question: 'How old was khadija (Rc) when she married Muhammad (SAW)?',
        choices: ['30', '40', '50', 'None of the above'],
        type: 'MCQs',
        correctAnswer: '40',
      },
      {
        question:
          'Who was a first cousin of Prophet Muhammad(peace be upon him)?',
        choices: ['Abdullah ibn Al-Abbas (rc)', 'Abdullah ibn Umar (rc)', 'Khalid ibn Waleed (rc)', 'Abu Hurairah (rc)'],
        type: 'MCQs',
        correctAnswer: 'Abdullah ibn Al-Abbas (rc)',
      },
      {
        question: 'How many kids did Prophet Muhammad (PBUH) have?',
        choices: ['3', '6', '9', '7'],
        type: 'MCQs',
        correctAnswer: '7',
      },
    ],
  }