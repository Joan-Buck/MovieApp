window.addEventListener('load', e => {
    // const submitReview = document.querySelector('.reviewSubmitButton')
    const reviewForm = document.querySelector('.formReview')

    reviewForm.addEventListener('submit', async(e) => {
        e.preventDefault();
        // e.stopPropagation();

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
                    const newReviewDiv = document.createElement('div');
                    newReviewDiv.setAttribute('class', 'reviewCard');

                    const reviewUsername = document.createElement('p');
                    reviewUsername.innerText = data.username;
                    const reviewTitle = document.createElement('p');
                    reviewTitle.innerText = title;
                    const reviewContent = document.createElement('p');
                    reviewContent.innerText = content;

                    newReviewDiv.append(reviewUsername, reviewTitle, reviewContent);
                    reviewsDiv.appendChild(newReviewDiv);
                }
            })
    })
})
