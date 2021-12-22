const { getTopCors, getBottomCors, isPaddle1MissBall, isPaddle2MissBall, isLoseGame } = require('./utils')

const ballMock = {
    left: 5,
    top: 1,
    bottom: 2,
    right: 7
}

const boardMock = {
    left: 4,
    top: 3,
    bottom: 1,
    right: 2
}

test('test1', () => {
    expect(getTopCors(1, 2)).toBe(1);
});

test('test2', () => {
    expect(getTopCors(2, 1)).toBe(undefined);
});

test('test3', () => {
    expect(getBottomCors(1, 2)).toBe(undefined);
});

test('test4', () => {
    expect(getBottomCors(2, 1)).toBe(0);
});

test('test5', () => {
    expect(isPaddle1MissBall(ballMock, boardMock)).toBe(false);
});

test('test6', () => {
    expect(isPaddle2MissBall(ballMock, boardMock)).toBe(false);
});

test('test7', () => {
    expect(isLoseGame(ballMock, boardMock)).toBe(true);
});
