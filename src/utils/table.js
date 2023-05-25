import request from './table-request'
class myTable {
  constructor(opts, data) {
    this.init(opts, data)
  }
  init(opts, data) {
    this.url = opts.url
    this.params = opts.params
    this.columns = opts.columns
    this.tableData = data || []

    // this.requestData()
  }
  async requestData() {
    const data = await request(this.url, this.params)

    this.tableData = data
  }
}

export default myTable
