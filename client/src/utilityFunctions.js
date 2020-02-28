export default {
  modifyArrayByTheWord: (word = "", arr = []) => {
    if (word === "") return arr;
    let lastWord = "";
    let newArr = [];

    arr.forEach(a => {
      if (
        a
          .trim()
          .toLowerCase()
          .indexOf(word.trim().toLowerCase()) !== -1
      ) {
        if (newArr.length === 0) return newArr.push(a);
        lastWord = newArr.pop();
        const weightOfCurrent = a
          .trim()
          .toLowerCase()
          .indexOf(word.trim().toLowerCase());
        const weightOflast = lastWord
          .trim()
          .toLowerCase()
          .indexOf(word.trim().toLowerCase());
        newArr =
          weightOfCurrent > weightOflast
            ? [...newArr, lastWord, a]
            : [...newArr, a, lastWord];
      }
    });
    return newArr;
  }
};
