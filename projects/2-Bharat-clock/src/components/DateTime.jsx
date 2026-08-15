function DateTime(){
    let Time = new Date();
    return <p>This is the current Time : {Time.toLocaleDateString}-{" "}-{Time.toLocaleTimeString}</p>
}

export default DateTime;