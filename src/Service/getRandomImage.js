
export const getRandomImage = async (firstWord) => {
    const response = await fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
    const data = await response.json()
    const { url } = data;
    return url
}