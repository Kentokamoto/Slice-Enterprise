<script>
	import { base } from '$app/paths';
	import exampleSelfie from '$lib/assets/Example_Selfie.webp?inline';
	import sliceathonLocation from '$lib/assets/Slice-a-Thon_Start_Location.webp?inline';
	import tivoliGarage from '$lib/assets/Tivoli_Garage.webp?inline';
</script>

<div class="my-5">
	<section class="mb-5">
		<h1 class="text-center text-2xl font-bold text-black">Location</h1>
		<article class="mt-5">
			<img src={sliceathonLocation} alt="Slice-a-Thon Start Location" />
			<p class="my-1">
				The race starts and ends at <a
					class="text-red-sauce underline hover:text-red-700"
					href="https://maps.app.goo.gl/hXq7kmrzxygdaSeR7">Gasworks park</a
				>. We will be gathering by the area marked by the red arrow above. We will have a table and
				sign so you know where to look when you arrive.
			</p>
			<h2 class="mt-2 text-center text-xl font-bold text-black">Parking</h2>
			<p class="my-1">
				Parking is widely available. Please pay attention to parking signs as some streets may have
				parking time limits.
			</p>
		</article>
	</section>
	<section class="mb-5">
		<h1 class="text-center text-2xl font-bold text-black">Arrival</h1>
		<article class="mt-5">
			<p class="my-1">
				Check In begins at 3:30PM If you ordered a t-shirt, you can pick up your shirt at this time.
				If you did not order a shirt but would like to purchase one, we bought extra but supply and
				sizes are limited.
			</p>
			<p class="my-1">
				We’ll kick-off festivities with a short opening ceremony at 3:55PM, and start the race
				itself at 4:00PM
			</p>
			<h2 class="mt-2 text-center text-xl font-bold text-black">Gear Check</h2>
			<p class="my-1">
				There will not be a gear check station at the start/finish. Please keep personal belongings
				in your car and carry what you need while you are on your run.
			</p>
		</article>
	</section>
	<section class="mb-5">
		<h1 class="text-center text-2xl font-bold text-black">Route</h1>
		<article class="mt-5">
			<div
				class="strava-embed-placeholder"
				data-embed-type="route"
				data-embed-id="3356103777858949274"
				data-style="standard"
				data-from-embed="false"
			></div>
			<script src="https://strava-embeds.com/embed.js"></script>

			<p class="my-1">
				The route is available on Strava with all the pizza spots marked Strava Route. You can use
				your phone to navigate on Strava or if you’d like to add the route to your watch, follow
				your brand’s instructions to load the GPX file onto your watch. You can download the route
				here: <a
					class="text-red-sauce underline hover:text-red-700"
					href="{base}/Seattle-Slice-a-Thon-2025.gpx">Slice-a-Thon Route</a
				>
			</p>
			<p class="my-1">
				We will also have 3 volunteers running in different pace groups who know the route and will
				be introduced during our opening ceremony. The paces will be 8:00, 9:00, and 10:00 (not
				including pizza order/eating time).
			</p>
			There are no course markings so please make sure you have a way to navigate around. Will will also
			stagger the start of the race to avoid crowding at pizza locations
			<p></p>
			<h2 class="mt-2 text-center text-xl font-bold text-black">Bathroom Stops</h2>
			<p>
				Public restrooms will be available along the route at key points. We’ve mapped out existing
				public facilities that will be open and accessible on race day. Here’s what to keep in mind:
			</p>
			<ul class="list-inside list-disc">
				<li>
					<strong>Locations</strong>: Some restrooms will be available at:
					<ul class="list-inside list-disc indent-8">
						<li>
							<a
								class="text-red-sauce underline hover:text-red-700"
								href="https://maps.app.goo.gl/V7f8FjX3voiR31kq7">Gasworks Park</a
							>
						</li>
						<li>
							In <a
								class="text-red-sauce underline hover:text-red-700"
								href="https://maps.app.goo.gl/pvmsBfGsosFDcVWc9">Seattle Center</a
							>
						</li>
						<li>
							Near <a
								class="text-red-sauce underline hover:text-red-700"
								href="https://maps.app.goo.gl/y8jAdFEifVJKW1et6">Miners Landing</a
							>
						</li>
						<li>
							<a
								class="text-red-sauce underline hover:text-red-700"
								href="https://maps.app.goo.gl/Yb37AXzsdyBjvea68">Pagliacci's (Arboretum)</a
							>
						</li>
						<li>
							<a
								class="text-red-sauce underline hover:text-red-700"
								href="https://maps.app.goo.gl/w81mUyWGTjgyCGb48">Arboretum</a
							>
						</li>
					</ul>
				</li>

				<li>
					<strong>Plan Ahead</strong>: We recommend reviewing the route map beforehand and noting
					the restroom locations in case you need to plan a stop.
				</li>
				<li>
					<strong>Courtesy Reminder</strong> Since these are public facilities, please be respectful
					and leave them clean for others.
				</li>
			</ul>
		</article>
	</section>
	<section class="mb-5">
		<h1 class="text-center text-2xl font-bold text-black">How It Works</h1>
		<article class="mt-5">
			<p class="my-1">
				As you navigate the route, you will stop by 4 pizza spots in the following order:
			</p>

			<ol class="list-inside list-decimal">
				<li class="mb-3">
					<strong>Fremont Pizza</strong>
					<div>
						<a
							class="text-red-sauce underline hover:text-red-700"
							href="https://maps.app.goo.gl/88yVE1wMjQ1xa2zaA"
							>3510 Fremont Ave N, Seattle, WA 98103</a
						>
					</div>
				</li>
				<li class="mb-3">
					<strong>Post Alley Pizza</strong>
					<div>
						<a
							class="text-red-sauce underline hover:text-red-700"
							href="https://maps.app.goo.gl/yuucowwJ1XgYECh3A">1123 Post Ave, Seattle, WA 98101</a
						>
					</div>
				</li>
				<li class="mb-3">
					<strong>Pagliacci (Arboretum)</strong>
					<div>
						<a
							class="text-red-sauce underline hover:text-red-700"
							href="https://maps.app.goo.gl/Yb37AXzsdyBjvea68"
							>3015 E Madison St, Seattle, WA 98112</a
						>
					</div>
				</li>
				<li class="mb-3">
					<strong>Tivoli’s</strong>
					<div>
						<a
							class="text-red-sauce underline hover:text-red-700"
							href="https://maps.app.goo.gl/x3E4uRvceBqbsrTp7">730 N 34th St, Seattle, WA 98103</a
						>
						<p>
							<strong>Note:</strong> Please go to the garage area near the parking lot off to the left
							of the store to buy your pizza
						</p>
						<img src={tivoliGarage} alt="Tivoli Garage" />
						<p class="my-1">
							Please keep in mind that Tivoli’s is the <strong>LAST STOP</strong>. You will be
							running past Tivoli’s at the very beginning of the run, but don’t stop there until the
							end.
						</p>
					</div>
				</li>
			</ol>
			<p class="my-3">
				Once you arrive at each spot, order any pizza at the counter. After you receive your pizza,
				take a selfie with it in front of the shop. Photos are necessary to verify 1st/2nd/3rd place
				prices but optional otherwise.
			</p>
			<!-- TODO: Add example picture -->
			<img src={exampleSelfie} alt="Example pizza selfie" />
		</article>
	</section>
	<section class="mb-5">
		<h1 class="text-center text-2xl font-bold text-black">Finishing The Race</h1>
		<article class="mt-5">
			<p class="my-1">
				After completing the race, all participants will receive a trophy for completing the
				Slice-A-Thon. We will have prizes for 1st, 2nd, and 3rd place finishers.
			</p>
			<p>The prizes will be handed out 2.5 hours after the start of the race.</p>
		</article>
	</section>
	<section class="mb-5">
		<h1 class="text-center text-2xl font-bold text-black">What to Bring</h1>
		<article>
			<p class="my-1">
				There are <strong>no</strong> aid stations on the course so make sure you have a way to stay
				hydrated between pizza locations. Be sure to check the weather and plan clothes accordingly.
			</p>
		</article>
	</section>
	<section class="mb-5">
		<h1 class="text-center text-2xl font-bold text-black">Submitting Results</h1>
		<article>
			<p class="my-1">
				If you would like to share your Strava activity post-race, send us a link to your activity
				at <a
					href="mailto:seattlesliceathon@gmail.com"
					class="text-red-sauce underline hover:text-red-700">seattlesliceathon@gmail.com</a
				>. We’d love to showcase everyone’s activity post-race.
			</p>
		</article>
	</section>
	<section class="mb-5">
		<h1 class="text-center text-2xl font-bold text-black">Important Reminder</h1>
		<article>
			<p class="my-1">
				This is meant to be a fun run, so once it begins, it’s up to you to make the most of it -
				whatever that means to you. We won’t be actively keeping tabs on all participants during the
				run.
			</p>
		</article>
	</section>
	<section class="mb-5">
		<h1 class="text-center text-2xl font-bold text-black">Charity Donation</h1>
		<article>
			<p class="my-1">
				If you enjoyed Slice-A-Thon, please consider spreading the love and making a contribution to
				a local charity. Here are some of our favorites, but please feel free to donate to any
				you’re passionate about.
			</p>
			<ul class="list-inside list-disc">
				<li>
					NAMI Seattle: <a
						class="text-red-sauce underline hover:text-red-700"
						href="https://namiseattle.org/">https://namiseattle.org/</a
					>
				</li>
				<li>
					Mary's Place Seattle: <a
						class="text-red-sauce underline hover:text-red-700"
						href="https://www.marysplaceseattle.org/">https://www.marysplaceseattle.org/</a
					>
				</li>
				<li>
					Boys and Girls Club of King County: <a
						class="text-red-sauce underline hover:text-red-700"
						href="https://positiveplace.org/">https://positiveplace.org/</a
					>
				</li>
			</ul>
		</article>
	</section>
</div>
