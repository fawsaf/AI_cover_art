import base64
import uuid
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from fastapi.responses import Response
from app.core.config import SessionLocal
from app.features.image_generation.schemas import ImageGenerationRequest, ImageGenerationResponse
from app.features.image_generation.models import Image  # Make sure this is your Image model
from app.features.image_generation.service import generate_image  # Your actual image generation function


router = APIRouter()

# Dependency to get the database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/generate", response_model=ImageGenerationResponse)
async def generate(request: ImageGenerationRequest, db: Session = Depends(get_db)):
    try:
        # Generate image based on the request
        image_base64 = generate_image(  # Assuming this function generates the image and returns base64
            prompt=request.prompt,
            num_inference_steps=request.num_inference_steps,
            guidance_scale=request.guidance_scale,
        )

        # Decode the base64 image into binary data
        image_data = base64.b64decode(image_base64)

        # Generate a unique ID for the image
        image_id = str(uuid.uuid4())

        # Create the new image record for the database
        new_image = Image(
            id=image_id,
            data=image_data,
            playlist_id=request.playlist_id if request.playlist_id else None  # Handle None if playlist_id is not provided
        )

        # Add the new image to the session and commit the transaction
        db.add(new_image)
        db.commit()

     

        # Convert image data to Base64 for the response
        image_data_base64 = base64.b64encode(new_image.data).decode('utf-8')

        # Return the generated image data in the response model
        return ImageGenerationResponse(
            id=new_image.id,
            data=image_data_base64,  # Base64 encoded image data
            playlist_id=new_image.playlist_id,
        )

    except Exception as e:
        # If any error occurs, raise a server error with the exception message
        raise HTTPException(status_code=500, detail=f"Error generating image: {str(e)}")

@router.get("/image/{image_id}")
async def get_image(image_id: str, db: Session = Depends(get_db)):
    # Retrieve the image from the database
    image = db.query(Image).filter(Image.id == image_id).first()
    if not image:
        raise HTTPException(status_code=404, detail="Image not found")

    # Return the image data as a PNG response
    return Response(content=image.data, media_type="image/png")