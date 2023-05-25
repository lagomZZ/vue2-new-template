import request from './table-request'
class myTable {
  constructor(opts, data) {
    this.init(opts, data)
  }
  init(opts, data) {
    this.url = opts.url
    this.tableData = data || []

    // this.requestData()
  }
  async requestData() {
    const data = await request(this.url)

    this.tableData = data
  }
}

export default myTable
