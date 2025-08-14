function goToOrder(name, price, img) {
  const params = new URLSearchParams();
  params.append("name", name);
  params.append("price", price);
  params.append("img", img);
  window.location.href = `order.html?${params.toString()}`;
}

function validateBooking() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const people = document.getElementById('people').value;
  const date = document.getElementById('date').value;

  const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);

  if (!okEmail) {
    alert('Please enter a valid email address.');
    return false;
  }
  if (!people) {
    alert('Please select number of people.');
    return false;
  }
  if (!date) {
    alert('Please choose a date.');
    return false;
  }
  alert(`Thank you, ${name}! Your table is booked.`);
  return true;
}
