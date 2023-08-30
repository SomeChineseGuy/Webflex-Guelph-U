import React from "react";
import {render, fireEvent} from '@testing-library/react';
import Game from "../Game";
import "@testing-library/jest-dom/extend-expect";


describe("Tests for the Game Component", () => {
  test("can toggle the cheating state by clicking the robot icon", () => {
    // Jest is going to render a single component and it's going to do it in the background
    // const something = render(<Game />)
    // console.log(something);

    const {getByTestId, container, debug} = render(<Game />);
    // debug();
    
    const robotHead = getByTestId('robot-head-icon');
    
    // $('.robot-head').on("click")

    expect(robotHead).toHaveClass('robot-head');
    fireEvent.click(robotHead);
    expect(robotHead).toHaveClass('cheating'); 
    fireEvent.click(robotHead);
    expect(robotHead).not.toHaveClass('cheating'); 

  });
});