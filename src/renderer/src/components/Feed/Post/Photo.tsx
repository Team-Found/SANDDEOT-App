import React, { useState } from "react";

interface PhotoCollageProps {
  photos: string[];
}

const PhotoCollage: React.FC<PhotoCollageProps> = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [showExtraPhotosModal, setShowExtraPhotosModal] =
    useState<boolean>(false);

  const handleExtraPhotosClick = () => {
    setShowExtraPhotosModal(true);
  };

  const renderPhotos = () => {
    const photoCount = photos.length;

    if (photoCount === 1) {
      return (
        <div className="w-full h-60 rounded-lg overflow-hidden">
          <img
            src={photos[0]}
            alt="1"
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => setSelectedPhoto(photos[0])}
          />
        </div>
      );
    }

    if (photoCount === 2) {
      return (
        <div className="flex gap-2 w-full h-60">
          {photos.slice(0, 2).map((photo, index) => (
            <div key={index} className="w-1/2 rounded-lg overflow-hidden">
              <img
                src={photo}
                alt={`Photo ${index + 1}`}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => setSelectedPhoto(photo)}
              />
            </div>
          ))}
        </div>
      );
    }

    if (photoCount === 3) {
      return (
        <div className="flex w-full h-60 gap-2 box-border">
          <div className="flex-1 h-full rounded-lg overflow-hidden">
            <img
              src={photos[0]}
              alt="Photo 1"
              className="h-full w-full object-cover cursor-pointer"
              onClick={() => setSelectedPhoto(photos[0])}
            />
          </div>
          <div className="flex-1 flex flex-col gap-2 h-60">
            {photos.slice(1).map((photo, index) => (
              <div
                className="flex-1 w-full h-1/2 rounded-lg overflow-hidden"
                key={index}
              >
                <img
                  src={photo}
                  alt={`Photo ${index + 2}`}
                  className="h-full w-full object-cover cursor-pointer"
                  onClick={() => setSelectedPhoto(photo)}
                />
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (photoCount > 3) {
      return (
        <div className="flex w-full h-60 gap-2 box-border">
          <div className="flex-1 h-full rounded-lg overflow-hidden">
            <img
              src={photos[0]}
              alt="Photo 1"
              className="h-full w-full object-cover cursor-pointer"
              onClick={() => setSelectedPhoto(photos[0])}
            />
          </div>
          <div className="flex-1 flex flex-col gap-2 h-60">
            <div className="flex-1 w-full h-1/2 rounded-lg overflow-hidden">
              <img
                src={photos[1]}
                alt="Photo 2"
                className="h-full w-full object-cover cursor-pointer"
                onClick={() => setSelectedPhoto(photos[1])}
              />
            </div>
            <div className="relative flex-1 w-full h-1/2 rounded-lg overflow-hidden">
              <img
                src={photos[2]}
                alt="Photo 3"
                className="h-full w-full object-cover cursor-pointer"
                onClick={() => setSelectedPhoto(photos[2])}
              />
              <div
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl cursor-pointer"
                onClick={handleExtraPhotosClick}
              >
                +{photoCount - 3}
              </div>
            </div>
          </div>
        </div>
      );
    }

    return <></>;
  };

  return (
    <div className="w-full">
      <div className="photo-collage">{renderPhotos()}</div>
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedPhoto(null)}
        >
          <img
            src={selectedPhoto}
            alt="Selected"
            className="max-w-full max-h-full"
          />
        </div>
      )}
      {showExtraPhotosModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setShowExtraPhotosModal(false)}
        >
          <div className="bg-black p-4 rounded-lg overflow-auto max-w-lg max-h-screen">
            <h2 className="text-xl font-bold mb-2">More Photos</h2>
            <div className="flex flex-wrap flex-row gap-2">
              {photos.slice(2).map((photo, index) => (
                // <div key={index} className="rounded-lg overflow-hidden">
                <img
                  src={photo}
                  alt={`Extra Photo ${index + 1}`}
                  className="w-[calc(50%-0.25rem)] h-full object-cover cursor-pointer rounded-lg"
                  onClick={() => setSelectedPhoto(photo)}
                  key={index}
                />
                // </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoCollage;
