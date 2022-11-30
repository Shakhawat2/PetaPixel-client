const { useEffect } = require("react")

export const useTitle = title =>{
    useEffect(() =>{
        document.title = `${title} - PetaPixel`;
    }, [title])
}