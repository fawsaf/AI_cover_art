from diffusers import StableDiffusionPipeline, AutoencoderTiny
from app.core.config import Config
import torch

def load_model():
    """Loads the Stable Diffusion pipeline and VAE."""
    print("Loading Stable Diffusion pipeline...")
    pipeline = StableDiffusionPipeline.from_pretrained(
        Config.MODEL_NAME,
        torch_dtype=torch.float32,  # Use float32 for CPU
        use_safetensors=True,
        safety_checker = None,
        requires_safety_checker = False
    )
    pipeline.vae = AutoencoderTiny.from_pretrained(
        Config.VAE_NAME,
        torch_dtype=torch.float32,  # Use float32 for CPU
        use_safetensors=True,
    )
    pipeline.to("cpu")  # Ensure everything runs on CPU
    print("Pipeline loaded successfully.")
    return pipeline

# Preload the model during app startup
pipeline = load_model()
