function login(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username === 'prime' && password === '@lisp.nanospark') {
        document.querySelector('.login-container').classList.remove('active');
        document.querySelector('.content-container').classList.add('active');
    } else {
        alert('Incorrect username or password');
    }
}

function showSection(sectionId) {
    document.querySelectorAll('.container').forEach(function(container) {
        container.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

function newQuote() {
      var quotes = [
    "\"Act as if what you do makes a difference. It does.\" - William James",
    "\"Success is not final, failure is not fatal: It is the courage to continue that counts.\" - Winston Churchill",
    "\"You have within you right now, everything you need to deal with whatever the world can throw at you.\" - Brian Tracy",
    "\"Believe you can and you're halfway there.\" - Theodore Roosevelt",
    "\"Don't watch the clock; do what it does. Keep going.\" - Sam Levenson",
    "\"The only limit to our realization of tomorrow will be our doubts of today.\" - Franklin D. Roosevelt",
    "\"You are never too old to set another goal or to dream a new dream.\" - C.S. Lewis",
    "\"Success usually comes to those who are too busy to be looking for it.\" - Henry David Thoreau",
    "\"The best way to predict the future is to create it.\" - Abraham Lincoln",
    "\"The future belongs to those who believe in the beauty of their dreams.\" - Eleanor Roosevelt",
    "\"Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.\" - Roy T. Bennett",
    "\"Opportunities don't happen. You create them.\" - Chris Grosser",
    "\"Your life does not get better by chance, it gets better by change.\" - Jim Rohn",
    "\"The only way to do great work is to love what you do.\" - Steve Jobs",
    "\"The way to get started is to quit talking and begin doing.\" - Walt Disney",
    "\"It always seems impossible until it's done.\" - Nelson Mandela"
];

    var randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('motivational-quote').innerText = quotes[randomIndex];
}

function markCompleted(checkbox) {
    if (checkbox.checked) {
        checkbox.closest('tr').classList.add('completed');
    } else {
        checkbox.closest('tr').classList.remove('completed');
    }
    updateProgress();
}

function updateProgress() {
    var totalTasks = document.querySelectorAll('.timeline-table tbody tr').length;
    var completedTasks = document.querySelectorAll('.timeline-table tbody tr.completed').length;
    var progress = Math.floor((completedTasks / totalTasks) * 100);
    document.getElementById('progress-bar').style.width = progress + '%';
    document.getElementById('progress-bar').innerText = progress + '%';
    document.getElementById('progress-circle').style.background = `conic-gradient(#03A9F4 ${progress}%, #444 ${progress}%)`;
    document.getElementById('progress-circle').querySelector('span').innerText = progress + '%';
}

function countdown() {
    var endDate = new Date("Jul 5, 2033 00:00:00").getTime();
    var now = new Date().getTime();
    var timeLeft = endDate - now;

    var years = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 365));
    var months = Math.floor((timeLeft % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    var weeks = Math.floor((timeLeft % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24 * 7));
    var days = Math.floor((timeLeft % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('countdown-timer').innerHTML = `
        <div><span>${years}</span>Years</div>
        <div><span>${months}</span>Months</div>
        <div><span>${weeks}</span>Weeks</div>
        <div><span>${days}</span>Days</div>
        <div><span>${hours}</span>Hours</div>
        <div><span>${minutes}</span>Minutes</div>
        <div><span>${seconds}</span>Seconds</div>
    `;

    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown-timer').innerHTML = "Goal Achieved!";
    }
}

var countdownInterval = setInterval(countdown, 1000);
countdown();
