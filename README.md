from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .config import get_settings
from .database import Base, engine
from .services.demo_service import get_demo_documents, get_demo_events, get_demo_evidence, get_demo_patient
from .services.rag_service import RAGService
from .services.translation_service import translate_text

settings = get_settings()

Base.metadata.create_all(bind=engine)

app = FastAPI(title=settings.app_name, version="1.0.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

rag = RAGService()


@app.get("/health")
def health():
    return {"status": "ok", "app": settings.app_name, "demo_mode": settings.demo_mode}


@app.get("/api/demo/patient")
def demo_patient():
    return get_demo_patient()


@app.get("/api/demo/documents")
def demo_documents():
    return get_demo_documents()


@app.get("/api/demo/events")
def demo_events():
    return get_demo_events()


@app.get("/api/demo/evidence")
def demo_evidence():
    return get_demo_evidence()


@app.get("/api/demo/summary")
def demo_summary():
    return {
        "summary": "Arjun Rao has a documented anemia-related care pathway with low hemoglobin, consultation, prescription, and discharge follow-up.",
        "demo": True,
    }


@app.post("/api/demo/load")
def demo_load():
    return {"patient_id": "PT-1001", "status": "loaded", "message": "Demo patient successfully loaded."}


@app.get("/api/patients")
def list_patients():
    return [get_demo_patient()]


@app.get("/api/patients/{patient_id}/timeline")
def patient_timeline(patient_id: str):
    return get_demo_events()


@app.get("/api/patients/{patient_id}/evidence")
def patient_evidence(patient_id: str):
    return get_demo_evidence()


@app.post("/api/chat/query")
def chat_query(payload: dict):
    patient_id = payload.get("patient_id", "PT-1001")
    question = payload.get("query", "")
    language = payload.get("language", "en")
    result = rag.answer_query(patient_id=patient_id, query=question, language=language)
    return result


@app.post("/api/translate")
def translate(payload: dict):
    text = payload.get("text", "")
    target = payload.get("target_language", "te")
    return {"text": translate_text(text, target), "target_language": target}


@app.post("/api/tts")
def tts(payload: dict):
    text = payload.get("text", "")
    return {"status": "ok", "text": text, "engine": "browser-speech-synthesis"}


@app.get("/api/search")
def search_records(q: str = ""):
    query = (q or "").lower()
    results = []
    for event in get_demo_events():
        content = " ".join([event["title"], event["description"], event["event_type"]]).lower()
        if query in content:
            results.append({"type": "event", "id": event["id"], "title": event["title"]})
    return {"query": q, "results": results}


@app.get("/")
def root():
    return {"project": settings.app_name, "status": "ready"}
