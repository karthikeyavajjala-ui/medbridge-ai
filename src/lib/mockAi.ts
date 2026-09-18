import type { ChatAnswer, EvidenceItem, Language, MedicalEvent } from '../types';

export const translateText = (text: string, language: Language) => {
  if (language === 'en') return text;
  const shortened = text.substring(0, 120);
  return `${shortened} [${language.toUpperCase()} translation preview]`;
};

export const getTimelineSummary = (events: MedicalEvent[], language: Language) => {
  const text = `Patient timeline shows ${events.length} medical events from lab work to follow-up. Key milestone: CBC low hemoglobin on 2025-08-11, consultation and iron prescription on 2025-08-14, and discharge guidance on 2025-09-02.`;
  return translateText(text, language);
};

export const getEvidenceSummary = (evidence: EvidenceItem[], language: Language) => {
  const text = `Evidence is linked back to source documents and pages with verification labels: ${evidence.map((item) => item.fact).join('; ')}`;
  return translateText(text, language);
};

export const answerQuestion = (query: string, language: Language): ChatAnswer => {
  const q = query.toLowerCase();

  if (q.includes('medication') || q.includes('prescribed')) {
    return {
      answer: `Ferrous Sulfate 325 mg once daily for 30 days was prescribed on 2025-08-14. Source: Prescription_2025_08_14.pdf, page 1.`,
      references: ['Prescription_2025_08_14.pdf#page=1'],
      language
    };
  }

  if (q.includes('blood test') || q.includes('last blood') || q.includes('hemoglobin')) {
    return {
      answer: `The latest documented blood test was on 2025-08-11 with hemoglobin 11.2 g/dL. Source: CBC_Lab_Report_2025_08_11.pdf, page 1.`,
      references: ['CBC_Lab_Report_2025_08_11.pdf#page=1'],
      language
    };
  }

  if (q.includes('august')) {
    return {
      answer: `August medical events include the CBC lab report on 2025-08-11, the consultation note on 2025-08-14, the prescription on 2025-08-14, and the MRI on 2025-08-20.`,
      references: ['CBC_Lab_Report_2025_08_11.pdf#page=1', 'Consultation_Notes_2025_08_14.pdf#page=2', 'Prescription_2025_08_14.pdf#page=1'],
      language
    };
  }

  if (q.includes('document mentions') || q.includes('prescription')) {
    return {
      answer: `The prescription is mentioned in Prescription_2025_08_14.pdf and linked to the 2025-08-14 consultation note.`,
      references: ['Prescription_2025_08_14.pdf#page=1', 'Consultation_Notes_2025_08_14.pdf#page=2'],
      language
    };
  }

  if (q.includes('summarize') || q.includes('history')) {
    return {
      answer: `Arjun Rao had a low hemoglobin result on 2025-08-11, was seen for fatigue and anemia on 2025-08-14, received ferrous sulfate, and was discharged stable on 2025-09-02 with instruction to repeat CBC in four weeks.`,
      references: ['CBC_Lab_Report_2025_08_11.pdf#page=1', 'Consultation_Notes_2025_08_14.pdf#page=2', 'Discharge_Summary_2025_09_02.pdf#page=3'],
      language
    };
  }

  return {
    answer: `I couldn’t find this information in the uploaded records.`,
    references: [],
    language
  };
};

export const detectConflict = () => [{
  field: 'Hemoglobin',
  values: ['11.2 g/dL', '12.4 g/dL'],
  sources: ['CBC_Lab_Report_2025_08_11.pdf#page=1', 'Follow-up note reviewed by intake team'],
  warning: 'Conflicting value documented across records; verification needed.'
}];
