// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

//     Terrible: tip 0%
//     Poor: tip 5%
//     Good: tip 10%
//     Great: tip 15%
//     Excellent: tip 20%


function calculateTip(amount, rating) {
    rating = rating.toLowerCase();
    let rate;

    switch(rating) {
        case 'excellent':
            rate = 0.20;
            break;
        case 'great':
            rate = 0.15;
            break;
        case 'good':
            rate = 0.10;
            break;
        case 'poor':
            rate = 0.05;
            break;
        case 'terrible':
            rate = 0.00;
            break;
        default:
            return "Rating not recognised";
    }

    return Math.ceil(amount * rate);
}
