window.addEventListener('load', e => {
    const reviewForm = document.querySelector('.formReview');
    // const deleteForm = document.querySelector('.deleteForm');
    const deleteButton = document.querySelector('.deleteReviewButton')

    reviewForm.addEventListener('submit', async(e) => {
        e.preventDefault();
        e.stopPropagation();

        const movieId = e.target.id;


        const formData = new FormData(reviewForm);
        const title = formData.get('title');
        const content = formData.get('content');

        const res = await fetch(`/movies/${movieId}/addReview`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({title, content})
        })
        const data = await res.json()
            .then(data => {

                if (data.message === 'Success') {
                    reviewForm.style.display = 'none';

                    const reviewsDiv = document.querySelector('.reviews');
                    const reviewCard = document.createElement('div');
                    reviewCard.setAttribute('id', `reviewCard_${data.review}`)
                    reviewCard.setAttribute('class', 'reviewCard');

                    const reviewUsername = document.createElement('p');
                    reviewUsername.innerText = data.username;
                    const reviewTitle = document.createElement('p');
                    reviewTitle.innerText = title;
                    const reviewContent = document.createElement('p');
                    reviewContent.innerText = content;

                    // creating delete button
                    let deleteDiv = document.createElement('div');
                    let deleteForm = document.createElement('form');
                    deleteForm.setAttribute('action', `/movies/reviews/${data.review}/delete`)
                    deleteForm.setAttribute('method', 'POST')
                    let deleteButton = document.createElement('button');
                    deleteButton.innerText = 'Delete'
                    deleteForm.setAttribute('class', 'deleteForm');
                    deleteForm.setAttribute('id', `review_${data.review}`);


                    reviewCard.append(reviewUsername, reviewTitle, reviewContent, deleteDiv);
                    deleteDiv.appendChild(deleteForm);
                    deleteForm.appendChild(deleteButton);
                    reviewsDiv.appendChild(reviewCard);
                }
            })
    });
    // deleteForm eventListener
    // deleteForm.addEventListener('submit', async(e) => {
    //     e.preventDefault();
    //     e.stopPropagation();

    //     // review_${:id}
    //     const reviewId = parseInt(e.target.id.split('_')[1]);
    //     console.log(reviewId)

    //     const res = await fetch(`/movies/reviews/${reviewId}/delete`, {
    //         method: 'DELETE'
    //     })
    //     const data = await res.json()
    //         .then(data => {
    //             if (data.message === 'Success') {
    //                 const review = document.querySelector(`#reviewCard_${reviewId}`);
    //                 review.remove();
    //             }
    //         })
    // });
    deleteButton.addEventListener('click', async(e) => {
        e.preventDefault();
        e.stopPropagation();

        // review_${:id}
        const reviewId = (e.target.value)
        console.log(reviewId)

        const res = await fetch(`/movies/reviews/${reviewId}/delete`, {
            method: 'DELETE'
        })
        const data = await res.json()
            .then(data => {
                if (data.message === 'Success') {
                    const review = document.querySelector(`#reviewCard_${reviewId}`);
                    review.remove();
                }
            })
    });
})
