import React from "react";

export default function Meme() {
    
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(memesObj => setAllMemes(memesObj.data.memes))
    }, [])

    function getNewMeme() {
        const index = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[index].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return (
        <main>
            <div className="form--container">
                <input 
                    className="form--input" 
                    type="text" 
                    placeholder="Top text" />
                <input 
                    className="form--input" 
                    type="text" 
                    placeholder="Bottom text" />
                <button 
                    className="form--button" 
                    type="button" 
                    onClick={getNewMeme}
                    >
                    Get a new meme image
                </button>
                <div className="meme">
                    <img src={meme.randomImage} alt="meme image"/>
                </div>
            </div>
        </main>
    )
}