import React from 'react'

export const Bottom = () => {
    const toggle = document.getElementById("toggle");
    const main = document.getElementById('main');
    toggle.addEventListener('change', () => {
        main.classList.toggle('dark');
    })

  return (
    <div id="main">
        <label class="container">
            <input type="checkbox" id="toggle"/>
            <span class="slider round">
            <div class="background"></div>
            <div class="star"></div>
            <div class="star"></div>
            </span>
        </label>
    </div>
)
}
 
export default Bottom
