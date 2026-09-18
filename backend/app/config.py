from functools import lru_cache

from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    app_name: str = "MedBridge AI"
    environment: str = "development"
    api_base_url: str = "http://localhost:8000"
    database_url: str = "sqlite:///./medbridge.db"
    max_upload_size_mb: int = 20
    allowed_extensions: str = ".pdf,.png,.jpg,.jpeg"
    demo_mode: bool = True
    use_local_only: bool = True

    class Config:
        env_file = ".env"


@lru_cache
def get_settings() -> Settings:
    return Settings()
