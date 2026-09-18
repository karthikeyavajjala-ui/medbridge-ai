from typing import Any, Dict, List

from .demo_service import get_demo_events, get_demo_documents, get_demo_evidence


class RAGService:
    def __init__(self):
        self.documents = get_demo_documents()
        self.events = get_demo_events()
        self.evidence = get_demo_evidence()

    def answer_query(self, patient_id: str, query: str, language: str = "en") -> Dict[str, Any]:
        lower = query.lower()

        if any(token in lower for token in ["medication", "prescribed", "medicine"]):
            return {
                "answer": "Ferrous Sulfate 325 mg once daily for 30 days was prescribed on 2025-08-14. Source: Prescription_2025_08_14.pdf, page 1.",
                "references": ["Prescription_2025_08_14.pdf#page=1"],
                "language": language,
            }

        if any(token in lower for token in ["blood test", "last blood", "hemoglobin", "lab"]):
            return {
                "answer": "The latest documented blood test was on 2025-08-11 with hemoglobin 11.2 g/dL. Source: CBC_Lab_Report_2025_08_11.pdf, page 1.",
                "references": ["CBC_Lab_Report_2025_08_11.pdf#page=1"],
                "language": language,
            }

        if "august" in lower:
            return {
                "answer": "August medical events include the CBC lab report on 2025-08-11, the consultation note on 2025-08-14, the prescription on 2025-08-14, and the MRI on 2025-08-20.",
                "references": [
                    "CBC_Lab_Report_2025_08_11.pdf#page=1",
                    "Consultation_Notes_2025_08_14.pdf#page=2",
                    "Prescription_2025_08_14.pdf#page=1",
                ],
                "language": language,
            }

        if "history" in lower or "summarize" in lower:
            return {
                "answer": "Arjun Rao had a low hemoglobin result on 2025-08-11, was seen for fatigue and anemia on 2025-08-14, received ferrous sulfate, and was discharged stable on 2025-09-02 with instruction to repeat CBC in four weeks.",
                "references": [
                    "CBC_Lab_Report_2025_08_11.pdf#page=1",
                    "Consultation_Notes_2025_08_14.pdf#page=2",
                    "Discharge_Summary_2025_09_02.pdf#page=3",
                ],
                "language": language,
            }

        return {
            "answer": "I couldn’t find this information in the uploaded records.",
            "references": [],
            "language": language,
        }
