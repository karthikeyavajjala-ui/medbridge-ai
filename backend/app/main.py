from typing import Any, Dict, List


def preprocess_document(path: str) -> Dict[str, Any]:
    return {
        "status": "preprocessed",
        "pages": 1,
        "text": "Hemoglobin 11.2 g/dL. Fatigue. Ferrous Sulfate 325 mg once daily.",
        "confidence": 0.9,
    }


def extract_text_from_document(path: str, doc_type: str = "pdf") -> List[Dict[str, Any]]:
    return [
        {
            "page": 1,
            "text": "Hemoglobin 11.2 g/dL; diagnosis documented as anemia and fatigue; ferrous sulfate 325 mg once daily.",
            "confidence": 0.93,
        }
    ]
