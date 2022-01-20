window.addEventListener('load', e => {
    const submitReview = document.querySelector('.reviewSubmitButton')

    submitReview.addEventListener('click', async(e) => {
        e.preventDefault();
        // e.stopPropagation();

        const movieId = e.target.id;

        const reviewForm = document.querySelector('#formReview')

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
                // console.log('************', data.username.username) // for debugging
                if (data.message === 'Success') {
                    reviewForm.style.display = 'none';
                    // const testingEle = document.querySelector('.testing')
                    // let p = document.createElement('p')
                    // p.innerHTML = 'Review created!';
                    // submitReview.appendChild(p);
                    const reviewsDiv = document.querySelector('.reviews')
                    const newReviewDiv = document.createElement('div');
                    newReviewDiv.setAttribute('class', 'reviewCard');
                   
                    const reviewUsername = document.createElement('p');
                    reviewUsername.innerText = data.username.username;
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
