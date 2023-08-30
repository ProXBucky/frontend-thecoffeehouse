// components/ImageUpload.js
import React, { useState } from 'react';

function ImageUpload() {
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
        console.log(image)
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('image', image);
        formData.append('title', title);
        formData.append('description', description);
    };

    return (
        <div>
            <h2>Upload Image</h2>
            <input type="file" onChange={handleImageChange} />
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
}

export default ImageUpload;