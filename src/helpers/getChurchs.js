export const getChurchs = async(msg)=> {
    console.log(msg);
    const url = "https://pure-gorge-01437.herokuapp.com/getChurch";
    const resp = await fetch(url);
    const {data} = await resp.json();
    return data;
};
