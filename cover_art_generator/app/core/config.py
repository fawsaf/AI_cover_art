from dotenv import load_dotenv
import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

# Load the .env file
dotenv_path = 'app/.env'
load_dotenv(dotenv_path)
class Config:
    # Model configuration
    MODEL_NAME = os.getenv("MODEL_NAME")
    VAE_NAME = os.getenv("VAE_NAME")

    # Database configuration from environment variables
    DB_NAME = os.getenv("DB_NAME")
    DB_USER = os.getenv("DB_USER")
    DB_PASSWORD = os.getenv("DB_PASSWORD")
    DB_HOST = os.getenv("DB_HOST")
    DB_PORT = os.getenv("DB_PORT")

    @staticmethod
    def get_database_url():
        return f"postgresql://{Config.DB_USER}:{Config.DB_PASSWORD}@{Config.DB_HOST}:{Config.DB_PORT}/{Config.DB_NAME}"

# Initialize the database connection
DATABASE_URL = Config.get_database_url()
engine = create_engine(DATABASE_URL, echo=True)
SessionLocal = sessionmaker(bind=engine)
Base = declarative_base()

