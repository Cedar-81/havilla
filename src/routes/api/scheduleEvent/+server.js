import { google } from 'googleapis';
import {PUBLIC_CREDENTIALS, PUBLIC_CALENDAR_ID,} from "$env/static/public";



export async function POST(event) {
    // const data = await event.request.formData()
    // const email = data.get('email')
  
    // subscribe the user to the newsletter
    // console.log(event.request.body)

    const credentials = JSON.parse(PUBLIC_CREDENTIALS)


    // Set up the JWT client using the service account credentials
    const auth = new google.auth.JWT({
        email: credentials.client_email,
        key: credentials.private_key,
        scopes: ['https://www.googleapis.com/auth/calendar'],
        // subject: "cedarwudnovels@gmail.com",
        // keyId: credentials.client_id
    });
  
// console.log(credentials)

  const calendar = google.calendar({version : "v3"})

    // Create an event
    const event_det = {
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

  auth.authorize(async (err, token) => {

    console.log("in here")
    if (err) {
        console.log("err: ", err)
        return new Response(JSON.stringify({ success: false, err }), {
            headers: {
              'Content-Type': 'application/json'
            }
          })
    }

    const apiUrl = `https://www.googleapis.com/calendar/v3/calendars/${PUBLIC_CALENDAR_ID}/events?access_token=${token?.access_token}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event_det),
      });

      const data = await response.json();
      console.log("data: ", data)
      return new Response(JSON.stringify({ success: true, data }), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
        console.log("error: ", error)
        return new Response(JSON.stringify({ success: false, error }), {
            headers: {
              'Content-Type': 'application/json'
            }
          })
    }
  });
  
    // return success
    return new Response(JSON.stringify({ success: true }), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  
    // it's common to return JSON, so SvelteKit has a helper
    // return json({ success: true })
  }