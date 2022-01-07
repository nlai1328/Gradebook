export default function calculatesets(array1, array2, operation, newarray) {
  var i = 0;
  var j = 0;
  if (operation === "Set union") {
    while (array1.length > i && array2.length > j) {
      if (array1[i] < array2[j]) {
        newarray.push(array1[i]);
        i++;
      } else if (array1[i] > array2[j]) {
        newarray.push(array2[j]);
        j++;
      } else {
        newarray.push(array2[j]);
        j++;
        i++;
      }
    }

    while (i < array1.length) {
      newarray.push(array1[i]);
      i++;
    }

    while (j < array2.length) {
      newarray.push(array2[j]);
      j++;
    }

    return newarray;
  } else if (operation === "Set intersection") {
    while (array1.length > i && array2.length > j) {
      if (array1[i] === array2[j]) {
        newarray.push(array1[i]);
        i++;
        j++;
      } else if (array1[i] > array2[j]) {
        j++;
      } else {
        i++;
      }
    }

    return newarray;
  } else {
    return array1.filter((x) => !array2.includes(x));
  }
}
