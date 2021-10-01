import React,{useState} from 'react';

import AlbumInput from './AlbumInput';

function AddAlbum() {
    const[albumInfo,setAlbumInfo] = useState({
        artist:"",
        album:""
    });
    const [photo,setPhoto] = useState([]);

   const imageChange= (e) => setPhoto(e.target.files);

    const handleChange = (e) =>{

        const {name,value}=e.target;
        
        setAlbumInfo({...albumInfo, [name]:value});
    } 
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(albumInfo);
    };
    
    return <AlbumInput imageChange={imageChange} handleChange={handleChange} onClick={handleSubmit}/>;
}

export default AddAlbum;
