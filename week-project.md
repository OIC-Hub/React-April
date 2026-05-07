# 🎟️ Week Project — Event Ticket Platform
### React + Vite Only (No Backend, No External Libraries)

---

## Project Overview

You will build a fully working **Event Ticket Platform** where users can:
- Browse available events
- View event details
- Select ticket quantity and type
- Fill in their details and "purchase" a ticket
- See a ticket confirmation with a booking reference
- View all their booked tickets

This project uses **everything you have learned** in the past two weeks.

---

## What You Will Practice

| Concept | Where You Use It |
|---|---|
| Components & Props | EventCard, TicketForm, ConfirmationCard |
| useState | Form inputs, ticket count, booking list |
| useEffect + localStorage | Save bookings so they survive refresh |
| React Router | Multiple pages — Home, Event Detail, My Tickets |
| Controlled forms + Validation | Ticket purchase form |
| Conditional rendering | Loading, empty states, success screen |
| Lifting state / Context | Booked tickets accessible across pages |
| Lists + .map() | Displaying events and bookings |
| Props + PropTypes | All reusable components |

---

## Pages & Features

### Page 1 — Home (Event Listings) `/`
- Display a grid of at least **6 events** (use hardcoded data — no API needed)
- Each event card shows:
  - Event name
  - Date and time
  - Location / venue
  - Price (or "Free")
  - Category badge (Music, Tech, Sports, Food, etc.)
  - A "Get Tickets" button that goes to the event detail page
- A **search bar** that filters events by name
- A **category filter** (All, Music, Tech, Sports, etc.) using buttons or a dropdown

### Page 2 — Event Detail `/events/:id`
- Show full details of the selected event:
  - Event image (you can use a placeholder from `https://picsum.photos`)
  - Name, date, time, location, full description
  - Ticket types (e.g. Regular, VIP) with different prices
- **Ticket purchase form:**
  - Select ticket type (Regular / VIP)
  - Choose quantity (1–5)
  - Full name field
  - Email address field
  - Phone number field
  - Total price updates live as quantity/type changes
  - Validation on all fields before booking
- "Book Now" button that saves the booking and goes to confirmation

### Page 3 — Booking Confirmation `/confirmation`
- Show a success screen with:
  - A unique booking reference (you can generate this with `Date.now()`)
  - Event name, date, location
  - Ticket type and quantity
  - Attendee name and email
  - Total amount paid
  - A "View My Tickets" button
  - A "Back to Events" button

### Page 4 — My Tickets `/my-tickets`
- Show a list of all tickets the user has booked
- Each booked ticket card shows:
  - Event name
  - Date and venue
  - Ticket type and quantity
  - Booking reference
  - Total paid
- If no tickets booked yet, show a friendly empty state message with a link to browse events
- A "Cancel Booking" button that removes a ticket from the list

---

## Hardcoded Event Data

Use this as your starting data. Create a file `src/data/events.js`:

```js
// src/data/events.js

export const events = [
  {
    id: 1,
    name: 'Afrobeats Night Lagos',
    category: 'Music',
    date: '2025-08-15',
    time: '7:00 PM',
    location: 'Eko Hotel, Lagos',
    description: 'The biggest Afrobeats concert of the year featuring top artists from across Africa. An unforgettable night of music, dance, and culture.',
    image: 'https://picsum.photos/seed/music1/600/300',
    regularPrice: 5000,
    vipPrice: 15000,
  },
  {
    id: 2,
    name: 'Lagos Tech Summit 2025',
    category: 'Tech',
    date: '2025-08-22',
    time: '9:00 AM',
    location: 'Landmark Centre, Lagos',
    description: 'Connect with developers, designers and founders from across Africa. Talks, workshops, and networking sessions all day.',
    image: 'https://picsum.photos/seed/tech1/600/300',
    regularPrice: 10000,
    vipPrice: 25000,
  },
  {
    id: 3,
    name: 'Naija Food Festival',
    category: 'Food',
    date: '2025-09-05',
    time: '12:00 PM',
    location: 'Victoria Island, Lagos',
    description: 'Celebrate Nigerian cuisine with the best chefs, food vendors, and cooking competitions in town.',
    image: 'https://picsum.photos/seed/food1/600/300',
    regularPrice: 3000,
    vipPrice: 8000,
  },
  {
    id: 4,
    name: 'Super Eagles Watch Party',
    category: 'Sports',
    date: '2025-09-10',
    time: '6:00 PM',
    location: 'Tafawa Balewa Square, Lagos',
    description: 'Watch the Super Eagles live on a giant screen with thousands of fans. Food, drinks and plenty of excitement guaranteed.',
    image: 'https://picsum.photos/seed/sports1/600/300',
    regularPrice: 1500,
    vipPrice: 5000,
  },
  {
    id: 5,
    name: 'Web3 & Blockchain Workshop',
    category: 'Tech',
    date: '2025-09-18',
    time: '10:00 AM',
    location: 'Co-Creation Hub, Lagos',
    description: 'A hands-on workshop for developers looking to break into Web3. Covers smart contracts, wallets, and building on-chain apps.',
    image: 'https://picsum.photos/seed/tech2/600/300',
    regularPrice: 7500,
    vipPrice: 20000,
  },
  {
    id: 6,
    name: 'Comedy Nite with the Gang',
    category: 'Entertainment',
    date: '2025-09-25',
    time: '8:00 PM',
    location: 'Terra Kulture, Lagos',
    description: 'Lagos\'s funniest comedians take the stage for a night of non-stop laughter. Family-friendly and open to all ages.',
    image: 'https://picsum.photos/seed/comedy1/600/300',
    regularPrice: 4000,
    vipPrice: 10000,
  },
];
```

## Validation Rules

Apply these rules to the ticket purchase form:

| Field | Rule |
|---|---|
| Full Name | Required, minimum 2 characters |
| Email | Required, must contain `@` and `.` |
| Phone | Required, minimum 10 digits |
| Quantity | Must be between 1 and 5 |

---



## Rules

1. **React + Vite only** — no other UI libraries (no Bootstrap, no Tailwind, no MUI)
2. All styling must be **inline styles** or plain CSS files
3. No backend — all data is **hardcoded or stored in localStorage**
4. Must use **React Router** for navigation
5. Every component must be in its **own file**
6. **No copying** — write your own code. You can reference your class notes

---

## Hints & Tips

- Start simple. Get the data showing before you worry about styling.
- Use `console.log` often to check what data you have at each step.
- If you get stuck on styling, move on — functionality is more important.
- The `useNavigate` hook can pass data to the next page: `navigate('/confirmation', { state: booking })`. Then read it with `useLocation` on the Confirmation page.
- Test localStorage by opening DevTools → Application tab → Local Storage.
- Your booking reference `TKT-${Date.now()}` will always be unique — don't overthink it.
- Break each page into smaller components first, then connect them.
