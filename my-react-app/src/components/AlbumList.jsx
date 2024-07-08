import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AlbumList() {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        async function fetchAlbums() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
                setAlbums(response.data);
            } catch (error) {
                console.error('Error fetching albums:', error);
            }
        }

        fetchAlbums();
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Albums</h1>
            <div className="list-group">
                {albums.map(album => (
                    <Link to={`/album/${album.id}`} className="list-group-item list-group-item-action" key={album.id}>
                        {album.title}
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default AlbumList;