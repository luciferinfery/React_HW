import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function AlbumPhotos() {
    const { id } = useParams();
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        async function fetchPhotos() {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
                setPhotos(response.data);
            } catch (error) {
                console.error('Error fetching photos:', error);
            }
        }

        fetchPhotos();
    }, [id]);

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Album Photos</h1>
            <Link to="/" className="btn btn-primary mb-4">Back to Albums</Link>
            <div className="row">
                {photos.map(photo => (
                    <div className="col-md-4 mb-4" key={photo.id}>
                        <div className="card">
                            <img src={photo.thumbnailUrl} className="card-img-top" alt={photo.title} />
                            <div className="card-body">
                                <h5 className="card-title">{photo.title}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AlbumPhotos;