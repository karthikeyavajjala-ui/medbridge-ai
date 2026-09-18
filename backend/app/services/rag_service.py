from typing import Any, Dict, List


DEMO_PATIENT: Dict[str, Any] = {
    "id": "PT-1001",
    "name": "Arjun Rao",
    "age": 42,
    "gender": "Male",
    "patient_id": "PT-1001",
    "dob": "1983-08-02",
    "doctor": "Dr. Asha Nair",
    "hospital": "CityCare Hospitals",
    "department": "Internal Medicine",
    "summary": "Follow-up monitoring for elevated HbA1c, persistent fatigue and post-viral recovery.",
}

DEMO_DOCUMENTS: List[Dict[str, Any]] = [
    {
        "id": "doc-1",
        "name": "CBC_Lab_Report_2025_08_11.pdf",
        "category": "Laboratory Report",
        "date": "2025-08-11",
        "pages": 2,
        "status": "OCR Verified",
        "confidence": 94,
        "patient_id": "PT-1001",
        "source": "CityCare Lab",
    },
    {
        "id": "doc-2",
        "name": "Consultation_Notes_2025_08_14.pdf",
        "category": "Clinical Note",
        "date": "2025-08-14",
        "pages": 3,
        "status": "AI Extracted",
        "confidence": 88,
        "patient_id": "PT-1001",
        "source": "Internal Medicine",
    },
    {
        "id": "doc-3",
        "name": "Prescription_2025_08_14.pdf",
        "category": "Prescription",
        "date": "2025-08-14",
        "pages": 1,
        "status": "Human Verified",
        "confidence": 96,
        "patient_id": "PT-1001",
        "source": "CityCare Pharmacy",
    },
    {
        "id": "doc-4",
        "name": "MR_Abdomen_2025_08_20.jpg",
        "category": "Imaging Report",
        "date": "2025-08-20",
        "pages": 1,
        "status": "Needs Review",
        "confidence": 74,
        "patient_id": "PT-1001",
        "source": "Imaging Center",
    },
    {
        "id": "doc-5",
        "name": "Discharge_Summary_2025_09_02.pdf",
        "category": "Discharge Summary",
        "date": "2025-09-02",
        "pages": 4,
        "status": "OCR Verified",
        "confidence": 90,
        "patient_id": "PT-1001",
        "source": "CityCare Hospitals",
    },
]

DEMO_EVENTS: List[Dict[str, Any]] = [
    {
        "id": "evt-1",
        "patient_id": "PT-1001",
        "date": "2025-08-11",
        "event_type": "Laboratory",
        "title": "CBC Results",
        "description": "Hemoglobin 11.2 g/dL, below reference range for adult male; fatigue noted.",
        "source_document": "CBC_Lab_Report_2025_08_11.pdf",
        "source_page": 1,
        "confidence": 94,
        "verification_status": "Verified",
    },
    {
        "id": "evt-2",
        "patient_id": "PT-1001",
        "date": "2025-08-14",
        "event_type": "Consultation",
        "title": "Internal medicine consult",
        "description": "Symptoms of fatigue and mild dizziness. Diagnosis documented as anemia and fatigue.",
        "source_document": "Consultation_Notes_2025_08_14.pdf",
        "source_page": 2,
        "confidence": 88,
        "verification_status": "Verified",
    },
    {
        "id": "evt-3",
        "patient_id": "PT-1001",
        "date": "2025-08-14",
        "event_type": "Prescription",
        "title": "Ferrous sulfate",
        "description": "325 mg once daily for 30 days.",
        "source_document": "Prescription_2025_08_14.pdf",
        "source_page": 1,
        "confidence": 96,
        "verification_status": "Verified",
    },
    {
        "id": "evt-4",
        "patient_id": "PT-1001",
        "date": "2025-08-20",
        "event_type": "Imaging",
        "title": "MRI abdomen",
        "description": "No acute lesion identified.",
        "source_document": "MR_Abdomen_2025_08_20.jpg",
        "source_page": 1,
        "confidence": 74,
        "verification_status": "Needs Review",
    },
    {
        "id": "evt-5",
        "patient_id": "PT-1001",
        "date": "2025-09-02",
        "event_type": "Discharge",
        "title": "Hospital discharge",
        "description": "Stable, continue iron supplementation and repeat CBC in 4 weeks.",
        "source_document": "Discharge_Summary_2025_09_02.pdf",
        "source_page": 3,
        "confidence": 90,
        "verification_status": "Verified",
    },
]

DEMO_EVIDENCE: List[Dict[str, Any]] = [
    {
        "id": "ev-1",
        "fact": "Hemoglobin 11.2 g/dL",
        "source_document": "CBC_Lab_Report_2025_08_11.pdf",
        "source_page": 1,
        "status": "SOURCE VERIFIED",
    },
    {
        "id": "ev-2",
        "fact": "Diagnosis documented as anemia and fatigue",
        "source_document": "Consultation_Notes_2025_08_14.pdf",
        "source_page": 2,
        "status": "HIGH CONFIDENCE",
    },
    {
        "id": "ev-3",
        "fact": "Ferrous Sulfate 325 mg once daily",
        "source_document": "Prescription_2025_08_14.pdf",
        "source_page": 1,
        "status": "SOURCE VERIFIED",
    },
    {
        "id": "ev-4",
        "fact": "MRI abdomen: no acute lesion identified",
        "source_document": "MR_Abdomen_2025_08_20.jpg",
        "source_page": 1,
        "status": "NEEDS VERIFICATION",
    },
]


def get_demo_patient() -> Dict[str, Any]:
    return DEMO_PATIENT


def get_demo_documents() -> List[Dict[str, Any]]:
    return DEMO_DOCUMENTS


def get_demo_events() -> List[Dict[str, Any]]:
    return DEMO_EVENTS


def get_demo_evidence() -> List[Dict[str, Any]]:
    return DEMO_EVIDENCE
