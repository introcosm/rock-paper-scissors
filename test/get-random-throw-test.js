import { checkResult } from '../get-random-throw.js';

const test = QUnit.test;

QUnit.module('checkResult');

test('Paper beats rock', assert => {
    //arrange
    const player = 'paper';
    const computer = 'rock';
    const expected = 'win';
    // act
    const result = checkResult(player, computer);
    // assert
    assert.equal(result, expected);

});

test('Player loses', assert => {
    // arrange
    const player = 'paper';
    const computer = 'scissors';
    const expected = 'lose';
    // act
    const result = checkResult(player, computer);
    // assert
    assert.equal(result, expected);

});