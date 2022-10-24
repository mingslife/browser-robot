export default class Core {
  constructor (jobs) {
    this.jobs = jobs
    this.code = ''
  }

  run (config) {
    console.log(config)
  }
}
