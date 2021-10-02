import React,{useState} from 'react';
import axios from 'axios'
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
    
    const handleSubmit =async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:8000/Albums`,albumInfo)
             .then(res=>console.log(res.data["id"]));
    };
    
    return <AlbumInput imageChange={imageChange} handleChange={handleChange} onClick={handleSubmit}/>;
}

export default AddAlbum;
