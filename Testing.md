TESTING DOCUMENT

Account Detail

Agent Credentials

password : password123
contact : 697949855

Organizer Credentials

contact : 699340820
password : password123

Start Testing

[A] Agent

1. Agent Signup
   After entering the credentials the user is redirected to the signin page.

2. Agent signin
   After entering the account's credentials, the user is expected to be redirected to his profile page.

3. Create Hall

Click on [Accounts] at the top right of the navbar (you may click twice) for a dropdown to show.

Click on [Agent] (you may click twice as well) for another dropdown to show then select [Profile].

On the Halls Managed Section click on the Create Hall button.

You will be redirected to the hall registration signup.

After filling the form with the required information, on submit you are redirected to the profile page. In case of failure you will see a pop up that is asking you to try again.

4. See All Reservation Made (unapproved and confirmed)

Go to your profile page and scroll down after the Halls Managed section.

5. Approve Reservation.

On click on this button the page will reload and your profile page will reflect the latest changes you made. After that scroll down to the Confirmed Reservation section and see the reservations you have validated.

6. Cancel Reservation.

On click on this button the page will reload and your profile page will reflect the latest changes you made.

[B] Organizer

1. Organizer Signup

After entering the credentials the user is redirected to the signin page.

2. Organizer Signup

After entering the account's credentials, the user is expected to be redirected to his profile page.

3. Book Reservation

Use the navbar and click on [Hall].
Choose a Hall and click on Book, you will be redirected to the the hall details page where you will see a reservation form.
on submit, you will be redirected to Organizer's profile page to see the update.

4. Cancel Reservation

Go to your profile and look at the [Reservations] section
The accrodion is a list of the reservations you made
On each accordion there is the status of the reservation: [Confirmed] or [Pending] the cancel button is just next to the status and reservation date.
onclick the page will reload to show the latest update.

### NB

- In case of any problem of image rendering, press f12 (this works on chrome browser).
- Go to the Network tab and Read the Response Header.
- If It shows _304_, clear your browser cache and refresh.

  # [Reason]:

  When your browser stores a resource in the cache, it keeps what’s called the ‘*Last-Modified header*’ information that was sent from the server. If a browser receives a request for a web page it has a saved copy of, but it doesn’t know whether it has the latest version, it sends a ‘*conditional validation*’ request to the server.

The browser communicates to the server the ‘*Last-Modified*’ date and time for the copy of the resource it has, via the ‘If-Modified-Since’ or ‘If-None-Match’ header. The server inspects these headers and also looks at the ETag value. The latter is a unique identifier used to specify the version of a particular resource.

If the values for these files are the same, the server sends the HTTP 304 Not Modified response header and the browser uses the cached copy of the resource.

If the browser copy is outdated, meaning that the file has been modified since the last request, it sends an HTTP 200 code and a new copy is used.

Unfortunately, there are a few issues that might cause an HTTP 304 response when it’s not supposed to occur. The most common causes include:

Server configuration or Domain Name Server (DNS) issues ( which I am not responsible of in this project )
A cached resource that is infected or corrupted (i.e., malware or viruses affecting the browser)
The 304 status code can be due to a problem on either the server-side or the client-side, so it might take some troubleshooting in order to diagnose and resolve it.
