export const base64 = (file) => {
    return new Promise((resolve, reject) =>{
        const fileReader = new FileReader()
        if(file){
            fileReader.readAsDataURL(file)
        }
        fileReader.onload = () => {
            resolve(fileReader.result)
        }
        fileReader.oneerror = (error) => {
            reject(error)
        }
    })
};
