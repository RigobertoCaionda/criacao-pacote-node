function formatCep(value) {
     return String(value)
    .replace(/\D/g, "")
    .slice(0, 8)
    .replace(/(\d{5})(\d)/, "$1-$2");
}
console.log(formatCep(323544565675342));

module.exports = {
    formatCep
}