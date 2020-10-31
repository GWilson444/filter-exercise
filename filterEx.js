const validUserNames = arr => {
    const newArr = arr.filter(n => n.length < 10);
    return newArr;
}