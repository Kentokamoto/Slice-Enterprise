<script>
  let {eventDate, eventLocation, children} = $props();
</script>

<div class="mt-4 flex flex-col place-content-center sm:flex-row">
  <section class=" flex flex-3 basis-full flex-col place-content-center">
    <h1 class="text-red-sauce text-center text-2xl font-bold">Race Details</h1>
    <div class="basis-full text-xl text-black">
      <h2 class=" text-left text-xl font-extrabold">Date</h2>
      <p class="text-ltext-left text-black">{eventDate.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })}</p>
      <h2 class="text-left text-xl font-extrabold">Start Time</h2>
      <p class="text-ltext-left text-black">{eventDate.toLocaleString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit', 
        hour12: true, 
        timeZoneName: 'short' 
      })}</p>
      <h2 class="text-left text-xl font-extrabold">Location</h2>
      <p class="text-l text-left text-black">{eventLocation}</p>
    </div>
  </section>

  <section
    class="flex flex-3 basis-full flex-col place-content-center p-4 sm:p-0"
  >
    <h1 class="text-red-sauce text-center text-2xl font-bold">Course Route</h1>
    {@render children()}
    <script src="https://strava-embeds.com/embed.js"></script>
  </section>
</div>
