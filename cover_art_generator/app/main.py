from fastapi import FastAPI
from app.core.config import engine, Base
from app.features.image_generation.routes import router as image_generation_router

app = FastAPI(title="Spotify Replica")
# Base.metadata.drop_all(bind=engine)  # Drop old tables
# Base.metadata.create_all(bind=engine)  # Recreate with updated schema


# Include routers for different features
app.include_router(image_generation_router, prefix="/api/v1/image-generation")

@app.get("/")
def root():
    return {"message": "Welcome to the Spotify Replica API"}