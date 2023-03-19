import fs from 'fs';

function getRandomName() {
    fs.readFile('./mk-names.json', 'utf-8', (err, data) => {
        if (err) {
            console.error('Unable to read file', err);
            return;
        }

        try {
            const names = JSON.parse(data);
            const randomName = names[Math.floor(Math.random() * names.length)];
            console.log(randomName);
        } catch (error) {
            console.error('Unable to parse file', error);
        }
    });
}

// eslint-disable-next-line no-undef
export default getRandomName;