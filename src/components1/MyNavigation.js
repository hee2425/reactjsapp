import React from 'react';

export function MyNavigation(props) {
    console.log("MyNavigation.js.....컴포넌트");
    return (
        <div>
            <nav>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                </ul>
            </nav>
            <hr/>
        </div>
    );
}

export const myscore=100;
export function MyNavigation2(){
    return (<div>
        <p>
            MyNavigation.js파일의 MyNavigation2메서드
        </p>
    </div>);
}

 