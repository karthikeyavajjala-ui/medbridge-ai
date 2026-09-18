from sqlalchemy import Boolean, Column, Float, Integer, String, Text, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from .database import Base


class Patient(Base):
    __tablename__ = "patients"

    id = Column(String, primary_key=True, index=True)
    name = Column(String, index=True)
    age = Column(Integer)
    gender = Column(String)
    patient_id = Column(String, unique=True, index=True)
    dob = Column(String)
    doctor = Column(String)
    hospital = Column(String)
    department = Column(String)
    summary = Column(Text)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    documents = relationship("Document", back_populates="patient")
    events = relationship("MedicalEvent", back_populates="patient")


class Document(Base):
    __tablename__ = "documents"

    id = Column(String, primary_key=True, index=True)
    patient_id = Column(String, ForeignKey("patients.id"), index=True)
    name = Column(String)
    category = Column(String)
    file_type = Column(String)
    date = Column(String)
    pages = Column(Integer, default=1)
    status = Column(String)
    confidence = Column(Float, default=0.0)
    source = Column(String)
    uploaded_at = Column(DateTime(timezone=True), server_default=func.now())
    patient = relationship("Patient", back_populates="documents")
    pages_detail = relationship("DocumentPage", back_populates="document")
    extracted_entities = relationship("ExtractedEntity", back_populates="document")
    evidence = relationship("Evidence", back_populates="document")


class DocumentPage(Base):
    __tablename__ = "document_pages"

    id = Column(String, primary_key=True, index=True)
    document_id = Column(String, ForeignKey("documents.id"), index=True)
    page_number = Column(Integer)
    text = Column(Text)
    handwriting_confidence = Column(Float, default=0.0)
    document = relationship("Document", back_populates="pages_detail")


class ExtractedEntity(Base):
    __tablename__ = "extracted_entities"

    id = Column(String, primary_key=True, index=True)
    document_id = Column(String, ForeignKey("documents.id"), index=True)
    label = Column(String)
    value = Column(String)
    confidence = Column(Float)
    source_page = Column(Integer)
    document = relationship("Document", back_populates="extracted_entities")


class MedicalEvent(Base):
    __tablename__ = "medical_events"

    id = Column(String, primary_key=True, index=True)
    patient_id = Column(String, ForeignKey("patients.id"), index=True)
    date = Column(String)
    event_type = Column(String)
    title = Column(String)
    description = Column(Text)
    source_document = Column(String)
    source_page = Column(Integer)
    confidence = Column(Float)
    verification_status = Column(String)
    patient = relationship("Patient", back_populates="events")
    relationships = relationship("EventRelationship", back_populates="event")


class EventRelationship(Base):
    __tablename__ = "event_relationships"

    id = Column(String, primary_key=True, index=True)
    event_id = Column(String, ForeignKey("medical_events.id"), index=True)
    related_event_id = Column(String)
    relationship_type = Column(String)
    explanation = Column(Text)
    strength = Column(Float)
    event = relationship("MedicalEvent", back_populates="relationships")


class Medication(Base):
    __tablename__ = "medications"

    id = Column(String, primary_key=True, index=True)
    patient_id = Column(String, ForeignKey("patients.id"), index=True)
    name = Column(String)
    dosage = Column(String)
    frequency = Column(String)
    duration = Column(String)
    start_date = Column(String)
    source_document = Column(String)


class LabResult(Base):
    __tablename__ = "lab_results"

    id = Column(String, primary_key=True, index=True)
    patient_id = Column(String, ForeignKey("patients.id"), index=True)
    test_name = Column(String)
    value = Column(String)
    unit = Column(String)
    reference_range = Column(String)
    date = Column(String)
    source_document = Column(String)


class Procedure(Base):
    __tablename__ = "procedures"

    id = Column(String, primary_key=True, index=True)
    patient_id = Column(String, ForeignKey("patients.id"), index=True)
    name = Column(String)
    date = Column(String)
    note = Column(Text)
    source_document = Column(String)


class Evidence(Base):
    __tablename__ = "evidence"

    id = Column(String, primary_key=True, index=True)
    document_id = Column(String, ForeignKey("documents.id"), index=True)
    fact = Column(Text)
    source_page = Column(Integer)
    status = Column(String)
    document = relationship("Document", back_populates="evidence")


class Verification(Base):
    __tablename__ = "verifications"

    id = Column(String, primary_key=True, index=True)
    patient_id = Column(String, ForeignKey("patients.id"), index=True)
    entity_label = Column(String)
    entity_value = Column(String)
    action = Column(String)  # accept / edit / reject
    corrected_value = Column(String)
    created_at = Column(DateTime(timezone=True), server_default=func.now())


class ChatSession(Base):
    __tablename__ = "chat_sessions"

    id = Column(String, primary_key=True, index=True)
    patient_id = Column(String, ForeignKey("patients.id"), index=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    messages = relationship("ChatMessage", back_populates="session")


class ChatMessage(Base):
    __tablename__ = "chat_messages"

    id = Column(String, primary_key=True, index=True)
    session_id = Column(String, ForeignKey("chat_sessions.id"), index=True)
    role = Column(String)
    content = Column(Text)
    references = Column(Text)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    session = relationship("ChatSession", back_populates="messages")
