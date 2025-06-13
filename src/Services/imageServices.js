import fs from 'fs';
import pathModule from 'path';

const imageServices = {
    async uploadImage(image, path) {
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path);
        }
        const base64Data = image.replace(/^data:image\/\w+;base64,/, '');
        const buffer = Buffer.from(base64Data, 'base64');
        const filePath = path + '/' + Date.now() + '.png';
        fs.writeFileSync(filePath, buffer);
        return filePath
    },
};

export default imageServices;