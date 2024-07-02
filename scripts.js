document.addEventListener('DOMContentLoaded', function() {
    const projectList = document.querySelector('.project-list');
    
    projectList.addEventListener('mousedown', function(e) {
        let startX = e.pageX - projectList.offsetLeft;
        let scrollLeft = projectList.scrollLeft;
        
        function mouseMoveHandler(e) {
            const x = e.pageX - projectList.offsetLeft;
            const walk = (x - startX) * 3; // scroll-fast
            projectList.scrollLeft = scrollLeft - walk;
        }
        
        function mouseUpHandler() {
            document.removeEventListener('mousemove', mouseMoveHandler);
            document.removeEventListener('mouseup', mouseUpHandler);
        }
        
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('sendEmailButton').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const subject = `New contact form submission from ${name}`;
        const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
        
        // Construct mailto link
        const mailtoLink = `mailto:analgiere@my.waketech.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        // Open the default email client with the pre-filled email
        window.location.href = mailtoLink;
    });
});