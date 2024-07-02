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
