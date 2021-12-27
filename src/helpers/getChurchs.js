export const getChurchs = async (mision) => {
    console.log(mision);
    const url = `https://obscure-sands-48789.herokuapp.com//getMision/${mision}`;

    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    return data;
};