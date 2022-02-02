const addDoctor = (names = []) => {
    return names.map((element) => 'Dr. ' + element);
}

 test('addDoctor', () => {
    expect(addDoctor(['Jojo', 'Naruto', 'Piccolo'])).toEqual(['Dr. Jojo', 'Dr. Naruto', 'Dr. Piccolo']);
    expect(addDoctor(['Jesse', 'Henrique'])).toEqual(['Dr. Jesse', 'Dr. Henrique']);
});
