from app.core.model_loader import pipeline
from PIL import Image
from io import BytesIO
import base64

def generate_image(prompt: str, num_inference_steps: int, guidance_scale: float) -> str:
    """Generate an image from a text prompt."""
    result = pipeline(
        prompt,
        num_inference_steps=num_inference_steps,
        guidance_scale=guidance_scale,
    )
    image: Image.Image = result.images[0]
    
    # Convert image to base64
    buffered = BytesIO()
    image.save(buffered, format="PNG")
    image_base64 = base64.b64encode(buffered.getvalue()).decode("utf-8")
    
    return image_base64
