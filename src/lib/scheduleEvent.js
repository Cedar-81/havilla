// scheduleEvent.js

import { google } from 'googleapis';
import {PUBLIC_CREDENTIALS, PUBLIC_CALENDAR_ID,} from "$env/static/public";


export async function scheduleEvent() {
    const credentials = JSON.parse(PUBLIC_CREDENTIALS)


  // Set up the JWT client using the service account credentials
  const auth = new google.auth.JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: ['https://www.googleapis.com/auth/calendar'],
  });
  

  const calendar = google.calendar({version : "v3"})

  // Create an event
  const event = {
    summary: 'Test Event',
    location: 'Test Location',
    start: {
      dateTime: '2024-01-15T12:00:00Z',
      timeZone: 'UTC+1',
    },
    end: {
      dateTime: '2024-01-15T13:00:00Z',
      timeZone: 'UTC+1',
    },
    attendees: [
      { email: 'cedarvidz@gmail.com' },
      { email: 'cedarcreative123@gmail.com' },
    ],
  };

  return new Promise((resolve, reject) => {
    // Make a request to the Google Calendar API to schedule the event
    auth.authorize(async (err, token) => {
      if (err) {
        reject(err);
        return;
      }

      const apiUrl = `https://www.googleapis.com/calendar/v3/calendars/${PUBLIC_CALENDAR_ID}/events?access_token=${token?.access_token}`;

      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(event),
        });

        const data = await response.json();
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  });
}

