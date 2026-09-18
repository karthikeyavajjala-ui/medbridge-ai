import os
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]

# Backend package root
BACKEND_DIR = ROOT / "backend"
APP_DIR = BACKEND_DIR / "app"

os.makedirs(APP_DIR, exist_ok=True)
