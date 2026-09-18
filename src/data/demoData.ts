import type { Language, Patient, DocumentRecord, MedicalEvent, RelationshipEdge, EvidenceItem } from '../types';

export const availableLanguages: { code: Language; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'te', label: 'తెలుగు' },
  { code: 'ta', label: 'தமிழ்' },
  { code: 'kn', label: 'ಕನ್ನಡ' },
  { code: 'ml', label: 'മലയാളം' },
  { code: 'bn', label: 'বাংলা' },
  { code: 'mr', label: 'मराठी' },
  { code: 'gu', label: 'ગુજરાતી' },
  { code: 'pa', label: 'ਪੰਜਾਬੀ' }
];

export const demoPatient: Patient = {
  id: 'PT-1001',
  name: 'Arjun Rao',
  age: 42,
  gender: 'Male',
  patientId: 'PT-1001',
  dob: '1983-08-02',
  doctor: 'Dr. Asha Nair',
  hospital: 'CityCare Hospitals',
  department: 'Internal Medicine',
  summary: 'Follow-up monitoring for elevated HbA1c, persistent fatigue and post-viral recovery.'
};

export const demoDocuments: DocumentRecord[] = [
  {
    id: 'doc-1',
    name: 'CBC_Lab_Report_2025_08_11.pdf',
    category: 'Laboratory Report',
    date: '2025-08-11',
    pages: 2,
    status: 'OCR Verified',
    confidence: 94,
    patientId: 'PT-1001',
    source: 'CityCare Lab',
    extracted: [
      { label: 'Hemoglobin', value: '11.2 g/dL', confidence: 92, sourcePage: 1 },
      { label: 'WBC', value: '7,800 /uL', confidence: 89, sourcePage: 1 },
      { label: 'Reference Range', value: 'Hb 12-16 g/dL', confidence: 91, sourcePage: 1 },
      { label: 'Doctor', value: 'Dr. Asha Nair', confidence: 96, sourcePage: 1 }
    ]
  },
  {
    id: 'doc-2',
    name: 'Consultation_Notes_2025_08_14.pdf',
    category: 'Clinical Note',
    date: '2025-08-14',
    pages: 3,
    status: 'AI Extracted',
    confidence: 88,
    patientId: 'PT-1001',
    source: 'Internal Medicine',
    extracted: [
      { label: 'Symptoms', value: 'Fatigue, mild dizziness', confidence: 91, sourcePage: 2 },
      { label: 'Diagnosis as documented', value: 'Anemia, fatigue', confidence: 85, sourcePage: 2 },
      { label: 'Follow-up date', value: '2025-08-28', confidence: 93, sourcePage: 2 }
    ]
  },
  {
    id: 'doc-3',
    name: 'Prescription_2025_08_14.pdf',
    category: 'Prescription',
    date: '2025-08-14',
    pages: 1,
    status: 'Human Verified',
    confidence: 96,
    patientId: 'PT-1001',
    source: 'CityCare Pharmacy',
    extracted: [
      { label: 'Medicine', value: 'Ferrous Sulfate', confidence: 98, sourcePage: 1 },
      { label: 'Dosage', value: '325 mg', confidence: 98, sourcePage: 1 },
      { label: 'Frequency', value: 'Once daily', confidence: 97, sourcePage: 1 },
      { label: 'Duration', value: '30 days', confidence: 96, sourcePage: 1 }
    ]
  },
  {
    id: 'doc-4',
    name: 'MR_Abdomen_2025_08_20.jpg',
    category: 'Imaging Report',
    date: '2025-08-20',
    pages: 1,
    status: 'Needs Review',
    confidence: 74,
    patientId: 'PT-1001',
    source: 'Imaging Center',
    extracted: [
      { label: 'Procedure', value: 'MRI abdomen', confidence: 76, sourcePage: 1 },
      { label: 'Observation', value: 'No acute lesion identified', confidence: 71, sourcePage: 1 }
    ]
  },
  {
    id: 'doc-5',
    name: 'Discharge_Summary_2025_09_02.pdf',
    category: 'Discharge Summary',
    date: '2025-09-02',
    pages: 4,
    status: 'OCR Verified',
    confidence: 90,
    patientId: 'PT-1001',
    source: 'CityCare Hospitals',
    extracted: [
      { label: 'Hospitalization', value: 'Admitted for evaluation of fatigue and anemia', confidence: 92, sourcePage: 1 },
      { label: 'Discharge note', value: 'Stable; continue iron supplementation and repeat CBC', confidence: 88, sourcePage: 3 },
      { label: 'Follow-up', value: 'Repeat CBC in 4 weeks', confidence: 94, sourcePage: 4 }
    ]
  }
];

export const demoEvents: MedicalEvent[] = [
  {
    id: 'evt-1',
    patientId: 'PT-1001',
    date: '2025-08-11',
    type: 'Laboratory',
    title: 'CBC Results',
    description: 'Hemoglobin 11.2 g/dL, below reference range for adult male; fatigue noted.',
    sourceDocument: 'CBC_Lab_Report_2025_08_11.pdf',
    sourcePage: 1,
    confidence: 94,
    verification: 'Verified'
  },
  {
    id: 'evt-2',
    patientId: 'PT-1001',
    date: '2025-08-14',
    type: 'Consultation',
    title: 'Internal medicine consult',
    description: 'Symptoms of fatigue and mild dizziness. Diagnosis documented as anemia and fatigue.',
    sourceDocument: 'Consultation_Notes_2025_08_14.pdf',
    sourcePage: 2,
    confidence: 88,
    verification: 'Verified'
  },
  {
    id: 'evt-3',
    patientId: 'PT-1001',
    date: '2025-08-14',
    type: 'Prescription',
    title: 'Ferrous sulfate',
    description: '325 mg once daily for 30 days.',
    sourceDocument: 'Prescription_2025_08_14.pdf',
    sourcePage: 1,
    confidence: 96,
    verification: 'Verified'
  },
  {
    id: 'evt-4',
    patientId: 'PT-1001',
    date: '2025-08-20',
    type: 'Imaging',
    title: 'MRI abdomen',
    description: 'No acute lesion identified.',
    sourceDocument: 'MR_Abdomen_2025_08_20.jpg',
    sourcePage: 1,
    confidence: 74,
    verification: 'Needs Review'
  },
  {
    id: 'evt-5',
    patientId: 'PT-1001',
    date: '2025-09-02',
    type: 'Discharge',
    title: 'Hospital discharge',
    description: 'Stable, continue iron supplementation and repeat CBC in 4 weeks.',
    sourceDocument: 'Discharge_Summary_2025_09_02.pdf',
    sourcePage: 3,
    confidence: 90,
    verification: 'Verified'
  }
];

export const demoRelationships: RelationshipEdge[] = [
  {
    id: 'rel-1',
    from: 'evt-1',
    to: 'evt-2',
    type: 'Symptom linkage',
    explanation: 'Low hemoglobin and fatigue were documented before the consultation note.',
    strength: 92
  },
  {
    id: 'rel-2',
    from: 'evt-2',
    to: 'evt-3',
    type: 'Medication follow-up',
    explanation: 'The consultation led to ferrous sulfate prescription for anemia.',
    strength: 95
  },
  {
    id: 'rel-3',
    from: 'evt-3',
    to: 'evt-5',
    type: 'Care continuity',
    explanation: 'Iron supplementation continued through the discharge summary follow-up check.',
    strength: 88
  }
];

export const demoEvidence: EvidenceItem[] = [
  { id: 'ev-1', fact: 'Hemoglobin 11.2 g/dL', sourceDocument: 'CBC_Lab_Report_2025_08_11.pdf', sourcePage: 1, status: 'SOURCE VERIFIED' },
  { id: 'ev-2', fact: 'Diagnosis documented as anemia and fatigue', sourceDocument: 'Consultation_Notes_2025_08_14.pdf', sourcePage: 2, status: 'HIGH CONFIDENCE' },
  { id: 'ev-3', fact: 'Ferrous Sulfate 325 mg once daily', sourceDocument: 'Prescription_2025_08_14.pdf', sourcePage: 1, status: 'SOURCE VERIFIED' },
  { id: 'ev-4', fact: 'MRI abdomen: no acute lesion identified', sourceDocument: 'MR_Abdomen_2025_08_20.jpg', sourcePage: 1, status: 'NEEDS VERIFICATION' }
];

export const demoSummary = `Arjun Rao has a documented anemia-related care pathway beginning with a low hemoglobin result on 2025-08-11, a clinical consultation on 2025-08-14, and an iron prescription on the same date. Follow-up and discharge documentation show stable recovery and continued supplementation with repeat CBC monitoring.`;

export const demoQuestions = [
  'What medications were prescribed?',
  'When was the last blood test?',
  'What was the hemoglobin value?',
  'Show August medical events.',
  'Which document mentions this prescription?',
  'Summarize the documented patient history.'
];

export const translationMap: Record<Language, Record<string, string>> = {
  en: {
    timeline: 'Timeline',
    evidence: 'Evidence',
    askRecords: 'Ask Your Records',
    summary: 'Summary',
    timelineSummary: 'Patient timeline summary',
    patient360: 'Patient 360',
    dashboard: 'Dashboard',
    demoData: 'Demo Data'
  },
  hi: {
    timeline: 'समयरेखा',
    evidence: 'साक्ष्य',
    askRecords: 'अपने रिकॉर्ड से पूछें',
    summary: 'सारांश',
    timelineSummary: 'रोगी समयरेखा सारांश',
    patient360: 'रोगी 360',
    dashboard: 'डैशबोर्ड',
    demoData: 'डेमो डेटा'
  },
  te: {
    timeline: 'కాలక్రమం',
    evidence: 'సాక్ష్యాలు',
    askRecords: 'రికార్డులు అడగండి',
    summary: 'సారాంశం',
    timelineSummary: 'రోగి కాలక్రమ సారాంశం',
    patient360: 'పేషెంట్ 360',
    dashboard: 'డాష్‌బోర్డ్',
    demoData: 'డెమో డేటా'
  },
  ta: {
    timeline: 'காலவரிசை',
    evidence: 'சான்றுகள்',
    askRecords: 'தங்களின் பதிவுகளை கேளுங்கள்',
    summary: 'சுருக்கம்',
    timelineSummary: 'மருத்துவ காலவரிசை சுருக்கம்',
    patient360: 'மருத்துவ 360',
    dashboard: 'டாஷ்போர்டு',
    demoData: 'டெமோ தரவு'
  },
  kn: {
    timeline: 'ಕಾಲಗಣನೆ',
    evidence: 'ಸುರಕ್ಷಣೆ',
    askRecords: 'ನಿಮ್ಮ ದಾಖಲೆಗಳ ಬಗ್ಗೆ ಕೇಳಿ',
    summary: 'ಸಾರಾಂಶ',
    timelineSummary: 'ರೋಗಿಯ ಸಮಯಸೂಚಿ ಸಾರಾಂಶ',
    patient360: 'ಪೇಷಂಟ್ 360',
    dashboard: 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್',
    demoData: 'ಡೆಮೊ ಡೇಟಾ'
  },
  ml: {
    timeline: 'കാലരേഖ',
    evidence: 'സാക്ഷ്യങ്ങൾ',
    askRecords: 'നിങ്ങളുടെ രേഖകൾ ചോദിക്കുക',
    summary: 'സംഗ്രഹം',
    timelineSummary: 'രോഗിയുടെ കാലരേഖാ സമഗ്രണം',
    patient360: 'പേഷന്റ് 360',
    dashboard: 'ഡാഷ്ബോർഡ്',
    demoData: 'ഡെമോ ഡാറ്റ'
  },
  bn: {
    timeline: 'সময়রেখা',
    evidence: 'প্রমাণ',
    askRecords: 'আপনার রেকর্ড জিজ্ঞাসা করুন',
    summary: 'সারাংশ',
    timelineSummary: 'রোগীর সময়রেখা সারাংশ',
    patient360: 'পেসেন্ট 360',
    dashboard: 'ড্যাশবোর্ড',
    demoData: 'ডেমো ডেটা'
  },
  mr: {
    timeline: 'कालरेषा',
    evidence: 'पुरावा',
    askRecords: 'तुमच्या रेकॉर्डबद्दल विचारा',
    summary: 'सारांश',
    timelineSummary: 'रुग्ण कालरेषा सारांश',
    patient360: 'रुग्ण 360',
    dashboard: 'डॅशबोर्ड',
    demoData: 'डेमो डेटा'
  },
  gu: {
    timeline: 'સમયરેખા',
    evidence: 'પુષ્ટિ',
    askRecords: 'તમારા રેકોર્ડ વિશે પૂછો',
    summary: 'સંક્ષેપ',
    timelineSummary: 'રોગીની સમયરેખા સારાંશ',
    patient360: 'પેસન્ટ 360',
    dashboard: 'ડેશબોર્ડ',
    demoData: 'ડેમો ડેટા'
  },
  pa: {
    timeline: 'ਸਮਾਂ-ਰਸਤਾ',
    evidence: 'ਸਬੂਤ',
    askRecords: 'ਆਪਣੇ ਰਿਕਾਰਡ ਬਾਰੇ ਪੁੱਛੋ',
    summary: 'ਸਾਰ',
    timelineSummary: 'ਮਰੀਜ਼ ਦੀ ਸਮਾਂ-ਰਸਤਾ ਸਾਰ',
    patient360: 'ਪੇਸ਼ੈਂਟ 360',
    dashboard: 'ਡੈਸ਼ਬੋਰਡ',
    demoData: 'ਡੈਮੋ ਡੇਟਾ'
  }
};

export const labSummary = [
  { label: 'Hb', value: '11.2 g/dL', trend: 'Low' },
  { label: 'WBC', value: '7800', trend: 'Normal' },
  { label: 'Ferritin', value: '18 ng/mL', trend: 'Low' },
  { label: 'Follow-up', value: '4 weeks', trend: 'Planned' }
];

export const medicalPipeline = [
  'Uploaded',
  'Preprocessing',
  'Classification',
  'OCR',
  'Handwriting Analysis',
  'Extraction',
  'Event Detection',
  'Relationship Linking',
  'Timeline Ready'
];

export const patient360Stats = [
  { label: 'Documents', value: '5' },
  { label: 'Events', value: '5' },
  { label: 'Medications', value: '1 active' },
  { label: 'Conflicts', value: '1 flagged' }
];
