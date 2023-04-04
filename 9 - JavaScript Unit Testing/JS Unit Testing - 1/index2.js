//&  problem 2

const createArray = (number) => {
    const myArray = Array.from(Array(number).keys());
    return myArray;
  };
  
  //* createArray(3)>>>>>[0,1,2]
  //* createArray(5)>>>[0,1,2,3,4]
  //*  input number 3 ==> output should be [0,1,2]
  
  //! test that the return value of type array
  //! test if we pass 3 it will return array of length 3 and test it's include 1
  //! try to delay the testing process 5 seconds 
  //! try to use different styles (expect , should , assert)
  //! make pending test case

  module.exports={createArray}