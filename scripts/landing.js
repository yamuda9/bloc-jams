var pointsArray = document.getElementsByClassName('point');

var animatePoints = function(points) {
    var revealPoints = function(pointsIndex) {
        points[pointsIndex].style.opacity = 1;
        points[pointsIndex].style.transform = "scaleX(1) translateY(0)";
        points[pointsIndex].style.msTransform = "scaleX(1) translateY(0)";
        points[pointsIndex].style.WebkitTransform = "scaleX(1) translateY(0)";
    };

    for (var index in points) {
        revealPoints(index);
    };
};

window.onload = function() {
    if (window.innerHeight > 950) {
        animatePoints(pointsArray);
    };
    
    var sellingPoints = document.getElementsByClassName('selling-points')[0];
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
    
    window.addEventListener('scroll', function(event) {
        if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
            animatePoints(pointsArray);
        };
    });
};