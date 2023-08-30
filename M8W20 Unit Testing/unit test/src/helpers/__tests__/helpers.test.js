import { announceResult, chooseRobotItem, genFeedbackMessage } from '../helpers'

describe('announceResult function', () => {
  let fakeState;

  beforeEach(() => {
    fakeState = {
      compSelection: null,
      playerSelection: null,
      status: 'Waiting',
      cheating: false
    };
  });
  
  test('returns "Won" if player is "Axe" and comp is "Tree"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Tree';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Won');
  });

  test('returns "Tied" if player is "Axe" and comp is "Axe"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Axe';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Tied');
  });

  test('returns "Lost" if player is "Axe" and comp is "Moai"', () => {
    fakeState.playerSelection = 'Axe';
    fakeState.compSelection = 'Moai';
    expect(announceResult(fakeState.playerSelection, fakeState.compSelection)).toBe('Lost');
  });

  test('returns "Waiting" if nothing is passed in', () => {
    expect(announceResult()).toBe('Waiting');
  });
  
});

describe('chooseRobotItem function' , () => {

  // step 0
  // choose an item for the robot player( After the player has chosen something)
  // cheating boolean
  // playerChoice: string
  // return value: 'Moai', 'Axe', 'Tree'

  test('returns the winning option if cheating is true', () => {
    const cheating = true;
    const playerSelection = 'Axe'

    const actual = chooseRobotItem(playerSelection, cheating);

    const expected = 'Moai';

    expect(actual).toBe(expected)
  });

  test('returns a value option if cheating is false', () => {
    const cheating = false;
    const playerSelection = 'Moai';

    const actual = chooseRobotItem(playerSelection, cheating)

    const options = ['Moai', 'Axe', 'Tree'];

    options.includes('Tree');
    // expect(options.includes('Tree')).toBe(true);
    expect(options).toContain(actual);

  });

});

describe('genFeedbackMessage function', () => {

})