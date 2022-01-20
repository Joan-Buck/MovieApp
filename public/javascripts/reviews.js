// window.addEventListener('load', e => {
//     const submitReview = document.querySelector('.reviewSubmitButton')

//     submitReview.addEventListener('click', async(e) => {
//         e.preventDefault();

//         const movieId = e.target.id;
//         const reviewForm = document.querySelector('#formReview')

//         const formData = new FormData(reviewForm);
//         const title = formData.get('title');
//         const content = formData.get('content');
//         const res = await fetch(`/movies/${movieId}`, {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: json.stringify({ title })
//         })
//         const data = await res.json()
//             .then(data => {
//                 if (data.message === 'Success') {

//                 }
//         //     })
//     })
// });
