export function bufferToImage(buffer, contentType){
    if(!buffer || !contentType){
        return undefined
    }
    const imageBase64 = buffer.toString('base64');
    return `data:image/${contentType};base64, ${imageBase64}`
}