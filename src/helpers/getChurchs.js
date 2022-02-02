export const getChurchs = async (mision) => {

    const url = `https://obscure-sands-48789.herokuapp.com/getMision/${mision}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
};
