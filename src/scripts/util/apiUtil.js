const fetchData = async function (url){
    let data = await fetch(url);
    return data.json();
}
export default fetchData