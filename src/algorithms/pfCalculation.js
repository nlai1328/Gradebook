export default function Calcpf(n, listofpf) {
  while (n % 2 == 0) {
    listofpf.push(2);
    n = Math.floor(n / 2);
  }

  for (let i = 3; i <= Math.floor(Math.sqrt(n)); i = i + 2) {
    while (n % i == 0) {
      listofpf.push(i);
      n = Math.floor(n / i);
    }
  }

  if (n > 2) {
    listofpf.push(n);
  }

  return listofpf;
}
