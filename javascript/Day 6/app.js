// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue';
//                     setTimeout(() => {
//                         document.body.style.backgroundColor = 'indigo';
//                         setTimeout(() => {
//                             document.body.style.backgroundColor = 'violet';
//                         }, 1000);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// });

// const delayColorChange = (color, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = color;
//         doNext && doNext();
//     }, delay);
// };

// delayColorChange('red', 1000, () => {
//     delayColorChange('orange', 1000, () => {
//         delayColorChange('yellow', 1000, () => {
//             delayColorChange('green', 1000, () => {
//                 delayColorChange('blue', 1000, () => {
//                     delayColorChange('indigo', 1000, () => {
//                         delayColorChange('violet', 1000);
//                     });
//                 });
//             });
//         });
//     });
// });


const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    });
};

delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('indigo', 1000))
    .then(() => delayedColorChange('violet', 1000));