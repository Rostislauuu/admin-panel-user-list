// import React, { useState, useEffect } from 'react';
// import '../App.scss';

// const useFetch = url => {
//     const [title, setTitle] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await fetch(url);
//             const data = await response.json();
//             setTitle(data);
//         }

//         fetchData();
//     }, [])

//     return title
// }

// const TitleList = () => {
//     const [isActive, setIsActive] = useState(false);
//     const title = useFetch('https://my-json-server.typicode.com/typicode/demo/posts');
//     const buttonName = isActive ? 'Hide' : 'Show';

//     return (
//         <div className="root-title">
//             {
//                 isActive && <ul className="item-list">
//                     {title.map(item => {
//                         return <li key={item.id} className="item-element">{item.title}</li>
//                     })}
//                 </ul>
//             }
//             <button onClick={ () => setIsActive(!isActive)}>{`${buttonName} Data`}</button>
//         </div>
//     )
// }

// export default TitleList;