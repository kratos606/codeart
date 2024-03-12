import React, { useEffect, useRef, useState } from 'react'
import Hint from '../components/hint'

const Test = () => {
  return (
    <div className='prompt' style={{overflow:'auto'}}>
        <div className='header'>
            <div>
                <span>Difficulty: </span>
                <span className='dif-icon'></span>
            </div>
            <div>
                <span>Category: </span>
                <p style={{fontWeight:300}}>Arrays</p>
            </div>
        </div>
        <h1 className='heading'>Validate Subsequence</h1><div style={{display:'inline-block',height:'20px',width:'20px',borderRadius:'50%',background:'linear-gradient(#04ff00, #369536)'}}></div>
        <p>Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
        You may assume that each input would have exactly one solution, and you may not use the same element twice.
        You can return the answer in any order.</p>
        <p>&nbsp;</p>
        <h3>Sample Input</h3>
        <pre><span>array</span> = [5, 1, 22, 25, 6, -1, 8, 10]
        <br/>
        <span>sequence</span> = [1, 6, -1, 10]</pre>
        <h3>Sample Output</h3>
        <pre>true</pre>
        <h3 style={{fontSize:'20px'}}>Hints</h3>
        <Hint title='Hint 1' info='You can solve this question by iterating through the main input array once.' />
        <Hint title='Hint 2' info='Iterate through the main array, and look for the first integer in the potential subsequence. If you find that integer, keep on iterating through the main array, but now look for the second integer in the potential subsequence. Continue this process until you either find every integer in the potential subsequence or you reach the end of the main array.' />
        <Hint title='Hint 3' info="To actually implement what Hint #2 describes, you'll have to declare a variable holding your position in the potential subsequence. At first, this position will be the 0th index in the sequence; as you find the sequence's integers in the main array, you'll increment the position variable until you reach the end of the sequence." />
        <Hint title='Optimal Space & Time Complexity' info='O(n) time | O(1) space - where n is the length of the array' />
    </div>
  )
}

export default Test