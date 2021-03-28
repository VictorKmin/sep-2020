module.exports = {
  // NFD Normalization Form Canonical Decomposition Characters are decomposed by canonical equivalence,
  // and multiple combining characters are arranged in a specific order.
  nameNormalizator: (name = '') => {
    if (!name) {
      return '';
    }

    name = name.normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // Crème Brulée => Creme Brulee
    name = name.replace(/[.,{}<>?$@%+&'":*-]/g, ' '); // John, Doe => John Doe
    name = name.split(' ').filter((char) => !!char); // John      Doe => [John,Doe]
    name = name.map((string) => string.toLowerCase()); // [john,DOE] => [john,doe]
    name = name.map((string) => string.charAt(0).toUpperCase() + string.slice(1)); // [john,DOE] => [John,Doe]
    name = name.join(' ').trim(); // [John,Doe] => John Doe

    return name;
  }
};
