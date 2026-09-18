export type Language = 'en' | 'hi' | 'te' | 'ta' | 'kn' | 'ml' | 'bn' | 'mr' | 'gu' | 'pa';

export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: string;
  patientId: string;
  dob: string;
  doctor: string;
  hospital: string;
  department: string;
  summary: string;
}

export interface DocumentRecord {
  id: string;
  name: string;
  category: string;
  date: string;
  pages: number;
  status: string;
  confidence: number;
  patientId: string;
  source: string;
  extracted: Array<{ label: string; value: string; confidence: number; sourcePage: number }>; 
}

export interface MedicalEvent {
  id: string;
  patientId: string;
  date: string;
  type: string;
  title: string;
  description: string;
  sourceDocument: string;
  sourcePage: number;
  confidence: number;
  verification: 'Verified' | 'Needs Review' | 'Conflicting';
}

export interface RelationshipEdge {
  id: string;
  from: string;
  to: string;
  type: string;
  explanation: string;
  strength: number;
}

export interface EvidenceItem {
  id: string;
  fact: string;
  sourceDocument: string;
  sourcePage: number;
  status: 'SOURCE VERIFIED' | 'HIGH CONFIDENCE' | 'NEEDS VERIFICATION';
}

export interface ChatAnswer {
  answer: string;
  references: string[];
  language: Language;
}
