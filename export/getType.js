export default function (data) {
    return Object.prototype.toString.call(data).slice(8, 13)
}
// export default 123  // default는 한개만 사용가능