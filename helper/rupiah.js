module.exports = rupiah => {
    return rupiah.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}