import { IMAGES } from '../constants/index';

const loadImage = () => ({
    type: IMAGES.LOAD,
});
const setImage = images => ({
    type: IMAGES.LOAD_SUCCESS,
    images,
});
const setError = error => ({
    type: IMAGES.LOAD_FAIL,
    error,
});

export { loadImage, setImage, setError };
