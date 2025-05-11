export const nonograms = {
  '5x5': [
    {
      description: 'Snake',
      columnHints: [
        ['3', '1'],
        ['1', '1', '1'],
        ['1', '1', '1'],
        ['1', '1', '1'],
        ['1', '3'],
      ],
      rowHints: [['5'], ['1'], ['5'], ['1'], ['5']],
      answers: [
        [true, true, true, true, true],
        [true, false, false, false, false],
        [true, true, true, true, true],
        [false, false, false, false, true],
        [true, true, true, true, true],
      ],
    },
  ],
}