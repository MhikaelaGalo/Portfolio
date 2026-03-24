# PawLax Pet Grooming System

Welcome to the **PawLax** repository. This project is a web-based management system for a premium pet grooming center. It allows customers to view services, read blogs, and manage their grooming appointments, while providing an administrative-style interface for viewing and updating the full schedule.

---

## ## Project Overview

PawLax is designed to provide a "posh and cozy" experience for pet owners. The system handles the front-end user experience and integrates with a PHP/MySQL backend (assumed based on the form actions) to manage real-time booking data.

### ### Key Features
* **User Authentication**: Dedicated login and signup forms for pet owners.
* **Appointment Management**: 
    * **Create**: Book new sessions with date, time, and multi-service selection.
    * **View**: Personal dashboard to see scheduled services.
    * **Update/Delete**: Modify or cancel existing appointments dynamically.
* **Dynamic Services**: Fetch available grooming services from the database via AJAX/Select2.
* **Information Hub**: About Us section and detailed "Tail-Wagging" blog posts.

---

## ## File Structure

### 1. Authentication & Info
* `login.html`: Animated login form using Remix Icons.
* `about.html`: Information about the team and services (Grooming, Wellness, Pet Hotel).
* `bloglist.html` / `blogpost2.html`: Educational content for pet owners.

### 2. Customer Dashboard
* `View_Customer_Schedule.html`: The main interface for a logged-in user to see their specific bookings.
* `add_Service_Schedule.html`: Form for customers to add a new appointment to their account.
* `Update_Service_Schedule.html`: Allows users to modify their specific appointment details.

### 3. Administrative / Full View
* `Booking_New_Schedule.html`: A comprehensive list of all scheduled services across all customers.
* `Update_Schedule.html`: A generalized update form for administrative schedule management.

---

## ## Technical Stack

* **Frontend**: HTML5, CSS3 (Flexbox/Grid), JavaScript (ES6).
* **Libraries**:
    * **jQuery & jQuery UI**: For DOM manipulation and date constraints.
    * **Select2**: For searchable, multi-select service dropdowns.
    * **Boxicons / Remix Icon**: For modern UI iconography.
* **Backend Integration**: 
    * Uses `fetch` API and `XMLHttpRequest` to communicate with PHP scripts (e.g., `Get_Services_List.php`, `delete_record.php`).
    * Communicates with a local server at `http://localhost/contacts/`.

---

## ## Setup Instructions

1.  **Local Server**: Ensure you have a local PHP environment running (like XAMPP, WAMP, or MAMP).
2.  **Directory Structure**: Place all files in a folder named `contacts` within your server's root directory (`htdocs` or `www`).
3.  **Database**:
    * Create a MySQL database.
    * Ensure you have a `service_info` table to populate the dropdowns.
    * Ensure you have a table for schedules that includes fields: `first_name`, `last_name`, `email_add`, `services_availed`, `date`, and `time`.
4.  **Assets**: Ensure images (`logo.png`, `login.jpg`, `blog2.jpg`, etc.) are present in the root folder for correct rendering.

---

## ## Usage Flow


1.  **Login**: Users enter via `login.html`.
2.  **View**: Upon logging in, users are redirected to `View_Customer_Schedule.html?paramName=user@email.com`.
3.  **Manage**: Users can click the ✎ (edit) or 🗑 (delete) icons to manage their records, which triggers AJAX calls to the backend to update the database without refreshing the entire page.

---

**Would you like me to generate the CSS files or the PHP backend scripts to make this system fully functional?**
