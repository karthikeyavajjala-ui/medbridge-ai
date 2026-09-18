from typing import List, Optional

from pydantic import BaseModel


class PatientOut(BaseModel):
    id: str
    name: str
    age: int
    gender: str
    patient_id: str
    dob: str
    doctor: str
    hospital: str
    department: str
    summary: str


class MedicalEventOut(BaseModel):
    id: str
    patient_id: str
    date: str
    event_type: str
    title: str
    description: str
    source_document: str
    source_page: int
    confidence: float
    verification_status: str


class EvidenceOut(BaseModel):
    id: str
    fact: str
    source_document: str
    source_page: int
    status: str


class ChatQuery(BaseModel):
    patient_id: str
    query: str
    language: str = "en"


class ChatResponse(BaseModel):
    answer: str
    references: List[str]
    language: str


class TranslationRequest(BaseModel):
    text: str
    target_language: str = "te"


class DemoLoadResponse(BaseModel):
    patient_id: str
    status: str
    message: str
