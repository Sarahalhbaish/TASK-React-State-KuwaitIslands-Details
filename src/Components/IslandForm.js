export default function IslandForm({ island }) {
  return (
    <div className="form">
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <h3>Book a trip to {island.name} island</h3>
      <input type="text" placeholder="Type Full Name" />
      <input type="tel" placeholder="Type Phone Number" />
      <button className="book" onClick={() => {const isConfirmed = window.confirm(
      `Are you sure you want to book a trip to ${island.name} island?`
    );

    if (isConfirmed) {
      alert(`Booking confirmed`);
    } else {
      alert("Booking canceled!");
    }}}>
        Book for today!
      </button>
    </div>
  );
}
