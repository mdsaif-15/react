function ItemOne(){
    let itemName = "Buy Milk"
    let itemDate = "4/10/2023"
    return <div class="row">
          <div class="col-6">
            {itemName}
          </div>
          <div class="col-4">
            {itemDate}
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">Delete</button>
          </div>
        </div>
}
export default ItemOne;