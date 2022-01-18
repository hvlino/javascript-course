function arithmeticProgression(first, diff, n) {
    const arr = [first];
    for (let i = 0; i < n - 1; i++) arr.push(arr[arr.length - 1] + diff);
    return arr.join(', ');
}

// function arithmeticProgression(first, diff, n) {
//     const arr = [];
//     const last = first + (n - 1) * diff;
//     for (let i = first; diff < 0 ? i >= last : i <= last; i += diff) arr.push(i);
//     return arr.join(', ');
// }



test('removeDups', () => {
   expect(arithmeticProgression(1, 2, 5)).toBe("1, 3, 5, 7, 9");
//    expect(arithmeticProgression(1, 0, 5)).toBe("1, 1, 1, 1, 1");
   expect(arithmeticProgression(1, -3, 10)).toBe("1, -2, -5, -8, -11, -14, -17, -20, -23, -26");
   expect(arithmeticProgression(100, -10, 10)).toBe("100, 90, 80, 70, 60, 50, 40, 30, 20, 10");
    // Mubashir
});
