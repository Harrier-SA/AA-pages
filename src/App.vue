<template>

    <nav class="navbar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#venue">Venue</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#save-the-date">Save the Date</a></li>
      </ul>
    </nav>
    <div class="container">
      <div class="container1">
        <header>
          <h1>Welcome to Our Wedding</h1>
          <p>We're getting married! Join us on <strong>November 14, 2026</strong></p>
        </header>
        <section class="details">
          <h2>Wedding Details</h2>
          <p>📍 Location: Lake of Mentieth, Stirling</p>
          <p>🕒 Time: 4:00 PM - 10:00 PM</p>
        </section>
        <section class="rsvp">
          <h2>RSVP</h2>
          <p>Let us know if you can make it!</p>
          <button @click="showAlert">RSVP Now</button>
        </section>
        <section class="container2">
          <img src="@/assets/iStock-807739144.jpg" alt="Wedding couple" class="wedding-image">
        </section>
      </div>
    <footer>
      <p>© 2026 Our Wedding. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    showAlert() {
      alert("RSVP feature coming soon!");
    }
  }
}
</script>

<style scoped>

.navbar {
  grid-column: 1/3;
  width: 100%;
  background-color: #b16767;
  padding: 10px;
  text-align: center;
}

.navbar ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.navbar li {
  display: inline;
  margin: 0 15px;
}

.navbar a {
  color: white;
  text-decoration: none;
  font-size: 18px;
}

.navbar a:hover {
  text-decoration: underline;
}

.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two equal columns */
  grid-row: auto auto auto;
  gap: 20px;
  width: 100%;
  grid-column: 1/3;
  margin: 0 auto;
  padding: 20px;
  background-color: #d81c1c;
  align-items: center; /* Keeps items aligned */
}

.container1 {
  grid-column: 1/2;
  grid-row: 1/3;
  width: 100%;
  background-color: #f9f9f9;
  border-radius: 10px;
}
 .container2 {
  grid-column: 3;
  grid-row: 1/3;
  width: 100%;
  background-color: #f9f9f9;
  border-radius: 10px;
}


header {
  background-color: #b16767;
  padding: 20px;
  border-radius: 10px;
}

.details, .rsvp {
  background-color: #993030;
  padding: 20px;
  border-radius: 10px;
}

button {
  background-color: #ff6699;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
}

.wedding-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-top: 15px;
}


</style>
