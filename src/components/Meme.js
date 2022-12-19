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

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main class="container">
            <div className="form--container">
                <input 
                    className="form--input" 
                    type="text" 
                    placeholder="Top text" 
                    onChange={handleChange}
                    name="topText"
                    value={meme.topText}
                />
                <input 
                    className="form--input" 
                    type="text" 
                    placeholder="Bottom text" 
                    onChange={handleChange}
                    name="bottomText"
                    value={meme.bottomText}
                />
                <button 
                    className="form--button" 
                    type="button" 
                    onClick={getNewMeme}
                    >
                    Get a new meme image
                </button>
            </div>
            <div class="meme">
                <img className="meme--image" src={meme.randomImage} />
                <h2 class="meme--text-top">{meme.topText}</h2>
                <h2 class="meme--text-bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}