SUPPORTED_LANGUAGES = {
    "en": "English",
    "hi": "Hindi",
    "te": "Telugu",
    "ta": "Tamil",
    "kn": "Kannada",
    "ml": "Malayalam",
    "bn": "Bengali",
    "mr": "Marathi",
    "gu": "Gujarati",
    "pa": "Punjabi",
}


def translate_text(text: str, target_language: str = "en") -> str:
    if target_language == "en" or not target_language:
        return text
    return f"{text} [translated to {SUPPORTED_LANGUAGES.get(target_language, target_language)}]"
