from typing import Optional
from pydantic import BaseModel
from datetime import datetime

class ImageGenerationRequest(BaseModel):
    prompt: str
    num_inference_steps: int
    guidance_scale: float
    playlist_id: Optional[str] = None  # Optional field


class ImageGenerationResponse(BaseModel):
    id: str  # Image ID
    data: str  # Base64 encoded image data
    playlist_id: Optional[str] = None  # Playlist ID (optional)
