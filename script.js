function closeAlert() {
    var alert = document.getElementById('saleAlert');
    alert.style.display = 'none';
}

// Show the alert when the page loads (You can customize when to show the alert)
window.onload = function() {
    var alert = document.getElementById('saleAlert');
    alert.style.display = 'block';
};