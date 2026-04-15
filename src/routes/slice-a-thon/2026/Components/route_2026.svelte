<script lang='ts'>
    import {CircleAlert} from '@lucide/svelte';
</script>
<div class="grid grid-cols-1 sm:grid-cols-2 md:gap-8">
    <div class="text-center font-bold sm:p-4">
        <h1 class="text-lg">Half Marathon Route</h1>
        <div class="text-red-sauce flex gap-2">
            <CircleAlert />
            <p>Route subject to change</p>
        </div>
        <div
            class="strava-embed-placeholder"
            data-embed-type="route"
            data-embed-id="3445596670059233086"
            data-full-width="true"
            data-style="standard"
            data-map-hash="11.08/47.6303/-122.3272"
            data-from-embed="true"
        ></div>
    </div>
    <div class="text-center font-bold sm:p-4">
        <h1 class="text-lg">10k Route</h1>
        <div class="text-red-sauce flex gap-2">
            <CircleAlert />
            <p class="text-red-sauce">Route subject to change</p>
        </div>
        <div
            class="strava-embed-placeholder"
            data-embed-type="route"
            data-embed-id="3460125985862464372"
            data-full-width="true"
            data-style="standard"
            data-map-hash="11.3/47.6276/-122.3427"
            data-from-embed="true"
        ></div>
        <script src="https://strava-embeds.com/embed.js"></script>
    </div>
</div>
