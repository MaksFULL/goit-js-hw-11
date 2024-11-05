const API_KEY = '46880083-7fe8124655458a4103858b250';
const Url = 'https://pixabay.com/api/';

export const backEndData = text => {
    const options = new URLSearchParams({
        key: API_KEY,
        q: text,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });

    return fetch(`${Url}?${options}`).then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    });
};