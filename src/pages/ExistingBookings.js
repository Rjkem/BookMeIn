// Create some dummy booking.
const DUMMY_DATA = [
  {
    id: "1",
    session: "General Swimming",
    date: "28 Jul 2021",
    start_time: "1815",
    finish_time: "1900",
    category: "Swimming Pool",
    topcat: "Sports Facilities",
    attending: "4/10",
    image:
      "https://images.unsplash.com/photo-1438029071396-1e831a7fa6d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=992&q=80",
  },
  {
    id: "2",
    session: "General Swimming",
    date: "29 Jul 2021",
    start_time: "1815",
    finish_time: "1900",
    category: "Swimming Pool",
    topcat: "Sports Facilities",
    attending: "7/10",
    image:
      "https://images.unsplash.com/photo-1600965962102-9d260a71890d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
  },
  {
    id: "3",
    session: "Early Dippers Session 1",
    date: "30 Jul 2021",
    start_time: "0630",
    finish_time: "0715",
    category: "Swimming Pool",
    topcat: "Sports Facilities",
    attending: "8/10",
    image:
      "https://images.unsplash.com/photo-1556191034-cbb6aa3cb008?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80",
  },
  {
    id: "4",
    session: "Adult Lengths Training",
    date: "1 Aug 2021",
    start_time: "1200",
    finish_time: "1300",
    category: "Swimming Pool",
    topcat: "Sports Facilities",
    attending: "2/10",
    image:
      "https://images.unsplash.com/photo-1530138948699-6a75eebc9d9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1049&q=80",
  },
  {
    id: "5",
    session: "General Swimming",
    date: "2 Aug 2021",
    start_time: "1815",
    finish_time: "1900",
    category: "Swimming Pool",
    topcat: "Sports Facilities",
    attending: "3/10",
    image:
      "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
  },
];

function ExistingBookings() {
  return (
    <section>
      <h2>Existing Bookings:</h2>
      <ul>
        {DUMMY_DATA.map((booking) => {
          return <li key={booking.id}>{booking.session}</li>;
        })}
      </ul>
    </section>
  );
}

export default ExistingBookings;
