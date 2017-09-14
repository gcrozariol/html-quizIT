// Pagination

function showPages(id){

    var totalNumberOfPages = 10;

    for(var i=1; i<=totalNumberOfPages; i++){
        if (document.getElementById('question'+i)) {
            document.getElementById('question'+i).style.display='none';
        }
    }
    
    if (document.getElementById('question'+id)) {
        document.getElementById('question'+id).style.display='block';
    }
};

// Swift Q&A

sq1.innerHTML = 'Question 1';
sq1a1.innerHTML = 'Answer 1';
sq1a2.innerHTML = 'Answer 2';
sq1a3.innerHTML = 'Answer 3';
sq1a4.innerHTML = 'Answer 4';

sq2.innerHTML = 'Question 2';
sq2a1.innerHTML = 'Answer 1';
sq2a2.innerHTML = 'Answer 2';
sq2a3.innerHTML = 'Answer 3';
sq2a4.innerHTML = 'Answer 4';

sq3.innerHTML = 'Question 3';
sq3a1.innerHTML = 'Answer 1';
sq3a2.innerHTML = 'Answer 2';
sq3a3.innerHTML = 'Answer 3';
sq3a4.innerHTML = 'Answer 4';

sq4.innerHTML = 'Question 4';
sq4a1.innerHTML = 'Answer 1';
sq4a2.innerHTML = 'Answer 2';
sq4a3.innerHTML = 'Answer 3';
sq4a4.innerHTML = 'Answer 4';

sq5.innerHTML = 'Question 5';
sq5a1.innerHTML = 'Answer 1';
sq5a2.innerHTML = 'Answer 2';
sq5a3.innerHTML = 'Answer 3';
sq5a4.innerHTML = 'Answer 4';

sq6.innerHTML = 'Question 6';
sq6a1.innerHTML = 'Answer 1';
sq6a2.innerHTML = 'Answer 2';
sq6a3.innerHTML = 'Answer 3';
sq6a4.innerHTML = 'Answer 4';

sq7.innerHTML = 'Question 7';
sq7a1.innerHTML = 'Answer 1';
sq7a2.innerHTML = 'Answer 2';
sq7a3.innerHTML = 'Answer 3';
sq7a4.innerHTML = 'Answer 4';

sq8.innerHTML = 'Question 8';
sq8a1.innerHTML = 'Answer 1';
sq8a2.innerHTML = 'Answer 2';
sq8a3.innerHTML = 'Answer 3';
sq8a4.innerHTML = 'Answer 4';

sq9.innerHTML = 'Question 9';
sq9a1.innerHTML = 'Answer 1';
sq9a2.innerHTML = 'Answer 2';
sq9a3.innerHTML = 'Answer 3';
sq9a4.innerHTML = 'Answer 4';

sq10.innerHTML = 'Question 10';
sq10a1.innerHTML = 'Answer 1';
sq10a2.innerHTML = 'Answer 2';
sq10a3.innerHTML = 'Answer 3';
sq10a4.innerHTML = 'Answer 4';