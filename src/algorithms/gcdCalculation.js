export default function calculategcd(a, b) {
    if (b) {
      return calculategcd(b, a % b);
    } else {
      return Math.abs(a);
    }
  }