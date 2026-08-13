function Hello() {
    let name = "saif";

    let fullName = () => {
        return "MD Saif"
    }
    return <p> Hello this is {name} my full name is {fullName()} </p>;
}

export default Hello;