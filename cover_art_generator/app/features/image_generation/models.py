from sqlalchemy import Column, LargeBinary, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Image(Base):
    __tablename__ = "images"
    id = Column(String, primary_key=True, index=True)  # Use SQLAlchemy's String type
    data = Column(LargeBinary, nullable=False)
    playlist_id = Column(String, nullable=True, index=True)  # Use String for optional playlist_id
