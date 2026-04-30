# Day 10 — Forms & Controlled Components

---

## 1. Two Ways to Handle Forms in React

There are two approaches to forms in React — **controlled** and **uncontrolled**.

| | Controlled | Uncontrolled |
|---|---|---|
| Who holds the value? | React state | The DOM itself |
| How to read the value? | From state | Using a `ref` |
| React knows the value? | ✅ Always | ❌ Only when you ask |
| Which is recommended? | ✅ Yes | Only for special cases |

We will focus on **controlled components** — the React way.

---

## 2. Controlled Components

A **controlled input** is an input whose value is always driven by React state.

Two things must work together:
1. `value={state}` — React controls what shows in the input
2. `onChange` — updates state every time the user types

```jsx
// ✅ Controlled input
const [name, setName] = useState('');

<input
  value={name}                             // React controls the value
  onChange={e => setName(e.target.value)}  // state updates on every keystroke
/>
```

### Why is this good?

Because React always knows exactly what's in the input. You can:
- Validate while the user types
- Show a live preview (like we did on Day 4)
- Clear the form after submission
- Pre-fill the form with existing data

### Uncontrolled — Just So Students Know It Exists

```jsx
// Uncontrolled — React does NOT track the value
// You have to manually ask the DOM for it using useRef
import { useRef } from 'react';

function App() {
  const nameRef = useRef();

  function handleSubmit() {
    console.log(nameRef.current.value); // read value on demand
  }

  return <input ref={nameRef} />;
}
```

We won't use this pattern — just know it exists.

---

## 3. Managing Form State

When a form has multiple fields, you have two options.

### Option A — One state per field (simple forms)

```jsx
const [name,     setName]     = useState('');
const [email,    setEmail]    = useState('');
const [password, setPassword] = useState('');
```

Clean and easy to read. Fine for small forms.

### Option B — One object for all fields (bigger forms)

```jsx
const [form, setForm] = useState({
  name: '',
  email: '',
  password: '',
});

// Generic updater — works for all fields
function handleChange(e) {
  const { name, value } = e.target;
  setForm(prev => ({ ...prev, [name]: value }));
}
```

Then each input uses the `name` attribute to identify itself:

```jsx
<input name="name"     value={form.name}     onChange={handleChange} />
<input name="email"    value={form.email}    onChange={handleChange} />
<input name="password" value={form.password} onChange={handleChange} />
```

The `[name]: value` part uses the input's `name` attribute as the key. One `handleChange` function handles all fields. Very clean for larger forms.

---

## 4. Form Validation

Validation means checking that the user filled in the form correctly **before** you do anything with the data.

### When to Validate

There are three moments you can validate:
1. **On submit** — check everything when the user clicks Submit
2. **On blur** — check a field when the user leaves it (clicks away)
3. **On change** — check as the user types (most responsive)

We will use **on submit** for simplicity — it's the easiest to understand first.

### The Validation Pattern

```jsx
const [errors, setErrors] = useState({}); // object to hold error messages

function validate() {
  const newErrors = {};

  if (!form.name)   newErrors.name   = 'Name is required';
  if (!form.email)  newErrors.email  = 'Email is required';

  setErrors(newErrors);

  // Return true if no errors (the form is valid)
  return Object.keys(newErrors).length === 0;
}

function handleSubmit(e) {
  e.preventDefault();

  if (!validate()) return; // stop here if there are errors

  // ✅ Safe to proceed — form is valid
  console.log('Form submitted!', form);
}
```

### Showing Errors Under Each Field

```jsx
<input name="email" value={form.email} onChange={handleChange} />
{errors.email && (
  <p style={{ color: 'red', fontSize: '13px', margin: '4px 0 0' }}>
    {errors.email}
  </p>
)}
```

The `&&` means: only show the error paragraph if `errors.email` has a message.

---

## 5. Common Validation Rules

```jsx
function validate() {
  const newErrors = {};

  // Required field
  if (!form.name.trim()) {
    newErrors.name = 'Name is required';
  }

  // Valid email format
  if (!form.email.includes('@')) {
    newErrors.email = 'Please enter a valid email';
  }

  // Minimum length
  if (form.password.length < 6) {
    newErrors.password = 'Password must be at least 6 characters';
  }

  // Passwords match
  if (form.password !== form.confirm) {
    newErrors.confirm = 'Passwords do not match';
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
}
```

---

## 6. Practice — Registration Form with Validation

### What We're Building

A sign-up form with:
- Full name, email, password, confirm password fields
- Validation on submit with clear error messages
- Success screen after valid submission
- Clear button to reset everything

