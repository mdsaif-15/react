function ItemOne() {
  let itemName = "Buy Milk"
  let itemDate = "4/10/2023"
  return <div className="row kg-row">
    <div className="col-6">
      {itemName}
    </div>
    <div className="col-4">
      {itemDate}
    </div>
    <div className="col-2">
      <button type="button" className="btn btn-danger kg-button">Delete</button>
    </div>
  </div>
}
export default ItemOne;