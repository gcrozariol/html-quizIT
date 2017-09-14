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

// Java Q&A

jq1.innerHTML = 'Question 1';
jq1a1.innerHTML = 'Answer 1';
jq1a2.innerHTML = 'Answer 2';
jq1a3.innerHTML = 'Answer 3';
jq1a4.innerHTML = 'Answer 4';

jq2.innerHTML = 'Question 2';
jq2a1.innerHTML = 'Answer 1';
jq2a2.innerHTML = 'Answer 2';
jq2a3.innerHTML = 'Answer 3';
jq2a4.innerHTML = 'Answer 4';

jq3.innerHTML = 'Question 3';
jq3a1.innerHTML = 'Answer 1';
jq3a2.innerHTML = 'Answer 2';
jq3a3.innerHTML = 'Answer 3';
jq3a4.innerHTML = 'Answer 4';

jq4.innerHTML = 'Question 4';
jq4a1.innerHTML = 'Answer 1';
jq4a2.innerHTML = 'Answer 2';
jq4a3.innerHTML = 'Answer 3';
jq4a4.innerHTML = 'Answer 4';

jq5.innerHTML = 'Question 5';
jq5a1.innerHTML = 'Answer 1';
jq5a2.innerHTML = 'Answer 2';
jq5a3.innerHTML = 'Answer 3';
jq5a4.innerHTML = 'Answer 4';

jq6.innerHTML = 'Question 6';
jq6a1.innerHTML = 'Answer 1';
jq6a2.innerHTML = 'Answer 2';
jq6a3.innerHTML = 'Answer 3';
jq6a4.innerHTML = 'Answer 4';

jq7.innerHTML = 'Question 7';
jq7a1.innerHTML = 'Answer 1';
jq7a2.innerHTML = 'Answer 2';
jq7a3.innerHTML = 'Answer 3';
jq7a4.innerHTML = 'Answer 4';

jq8.innerHTML = 'Question 8';
jq8a1.innerHTML = 'Answer 1';
jq8a2.innerHTML = 'Answer 2';
jq8a3.innerHTML = 'Answer 3';
jq8a4.innerHTML = 'Answer 4';

jq9.innerHTML = 'Question 9';
jq9a1.innerHTML = 'Answer 1';
jq9a2.innerHTML = 'Answer 2';
jq9a3.innerHTML = 'Answer 3';
jq9a4.innerHTML = 'Answer 4';

jq10.innerHTML = 'Question 10';
jq10a1.innerHTML = 'Answer 1';
jq10a2.innerHTML = 'Answer 2';
jq10a3.innerHTML = 'Answer 3';
jq10a4.innerHTML = 'Answer 4';