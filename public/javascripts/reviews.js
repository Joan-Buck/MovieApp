window.addEventListener('load', e => {
    const reviewForm = document.querySelector('.formReview');
    const allTheDeleteButtons = document.querySelectorAll('.deleteReviewButton')

    if (reviewForm) {
        reviewForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            e.stopPropagation();

            const movieId = e.target.id;

            const formData = new FormData(reviewForm);
            const title = formData.get('title');
            const content = formData.get('content');

            const res = await fetch(`/movies/${movieId}/addReview`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title, content })
            })
            const data = await res.json()
                .then(data => {

                    if (data.message === 'Success') {
                        reviewForm.style.display = 'none';

                        const reviewsDiv = document.querySelector('.reviews');
                        const reviewCard = document.createElement('div');
                        reviewCard.setAttribute('id', `reviewCard_${data.review}`)
                        reviewCard.setAttribute('class', 'reviewCard');

                        const usernameDiv = document.createElement('div');
                        usernameDiv.setAttribute('class', 'username');
                        const usernameImage = document.createElement('img');
                        usernameImage.setAttribute('src', 'https://avatarfiles.alphacoders.com/123/thumb-123713.jpg');
                        const reviewUsername = document.createElement('p');
                        reviewUsername.innerText = data.username;
                        const reviewTitle = document.createElement('p');
                        reviewTitle.setAttribute('class', 'title');
                        reviewTitle.innerText = title;
                        const reviewContent = document.createElement('p');
                        reviewContent.innerText = content;



                        let deleteForm = document.createElement('form');
                        deleteForm.setAttribute('action', `/movies/reviews/${data.review}/delete`)
                        deleteForm.setAttribute('method', 'POST')
                        deleteForm.setAttribute('class', 'deleteForm');
                        deleteForm.setAttribute('id', `review_${data.review}`);

                        let deleteButton = document.createElement('button');
                        deleteButton.setAttribute('class', 'deleteReviewButton');
                        deleteButton.innerText = 'Delete';
                        deleteButton.setAttribute('value', `${data.review}`);


                        deleteForm.appendChild(deleteButton);
                        usernameDiv.append(usernameImage, reviewUsername)
                        reviewCard.append(usernameDiv, reviewTitle, reviewContent, deleteForm);
                        reviewsDiv.prepend(reviewCard);


                        deleteButton.addEventListener('click', async (e) => {
                            e.preventDefault();
                            e.stopPropagation();

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
                                        reviewForm.style.display = 'flex';
                                    }
                                })
                        });
                    }
                })

        });
    }

    // add event listener for allTheDeleteButtons on page load
    for (let i = 0; i < allTheDeleteButtons.length; i++) {
        const deleteButton = allTheDeleteButtons[i];

        deleteButton.addEventListener('click', async (e) => {
            e.preventDefault();
            e.stopPropagation();

            const reviewId = (e.target.value)

            const res = await fetch(`/movies/reviews/${reviewId}/delete`, {
                method: 'DELETE'
            })

            const data = await res.json()
                .then(data => {
                    if (data.message === 'Success') {
                        const review = document.querySelector(`#reviewCard_${reviewId}`);
                        review.remove();

                        // when user deletes a review, create a new review form dynamically

                        const dynamicReviewForm = document.createElement('form');
                        dynamicReviewForm.setAttribute('action', `/movies/${data.movieId}/addReview`);
                        dynamicReviewForm.setAttribute('method', 'post');
                        dynamicReviewForm.setAttribute('class', 'formReview');
                        dynamicReviewForm.setAttribute('id', `${data.movieId}`);

                        //get the value of the _csrf token
                        let csrfToken = document.cookie.split('=')[1];
                        //create the input form and set it's attributes
                        let csrfInput = document.createElement('input');
                        csrfInput.setAttribute('type', 'hidden');
                        csrfInput.setAttribute('name', '_csrf');
                        csrfInput.setAttribute('value', csrfToken);

                        //create the label and input for the Title
                        let label = document.createElement('label');
                        label.setAttribute('for', 'title');
                        label.innerText = 'Your Review:';

                        let titleInput = document.createElement('input');
                        titleInput.setAttribute('type', 'text');
                        titleInput.setAttribute('name', 'title');
                        titleInput.setAttribute('placeholder', 'Write your title here');

                        //create text area and set attributes
                        let textarea = document.createElement('textarea');
                        textarea.setAttribute('name', 'content');
                        textarea.setAttribute('placeholder', 'Write your review here');

                        //create button
                        let submitReviewButton = document.createElement('button');
                        submitReviewButton.setAttribute('class', 'reviewSubmitButton');
                        submitReviewButton.innerText = 'Submit Review';

                        dynamicReviewForm.append(csrfInput, label, titleInput, textarea, submitReviewButton)
                        const reviewDiv = document.querySelector('.reviewDiv');
                        reviewDiv.prepend(dynamicReviewForm)


                        //ADD REVIEW: event listener for dynamic review form
                        dynamicReviewForm.addEventListener('submit', async (e) => {
                            e.preventDefault();
                            e.stopPropagation();

                            const movieId = e.target.id;

                            const formData = new FormData(dynamicReviewForm);
                            const title = formData.get('title');
                            const content = formData.get('content');

                            const res = await fetch(`/movies/${movieId}/addReview`, {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ title, content })
                            })

                            const data = await res.json()
                                .then(data => {

                                    if (data.message === 'Success') {
                                        dynamicReviewForm.style.display = 'none';

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

                                        let deleteForm = document.createElement('form');
                                        deleteForm.setAttribute('action', `/movies/reviews/${data.review}/delete`)
                                        deleteForm.setAttribute('method', 'POST')
                                        deleteForm.setAttribute('class', 'deleteForm');
                                        deleteForm.setAttribute('id', `review_${data.review}`);

                                        let deleteButton = document.createElement('button');
                                        deleteButton.innerText = 'Delete';
                                        deleteButton.setAttribute('value', `${data.review}`);


                                        deleteForm.appendChild(deleteButton);
                                        reviewCard.append(reviewUsername, reviewTitle, reviewContent, deleteForm);
                                        reviewsDiv.prepend(reviewCard);


                                        deleteButton.addEventListener('click', async (e) => {
                                            e.preventDefault();
                                            e.stopPropagation();

                                            const reviewId = (e.target.value)

                                            const res = await fetch(`/movies/reviews/${reviewId}/delete`, {
                                                method: 'DELETE'
                                            });

                                            const data = await res.json()
                                                .then(data => {
                                                    if (data.message === 'Success') {
                                                        const review = document.querySelector(`#reviewCard_${reviewId}`);
                                                        review.remove();
                                                        dynamicReviewForm.style.display = 'block';
                                                    }
                                                })
                                        });
                                    }
                                })

                        })
                    }
                })
        })

    }
})
