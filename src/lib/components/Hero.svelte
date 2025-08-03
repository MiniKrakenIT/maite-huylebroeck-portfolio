<script lang="ts">
	import profilePic from '$lib/assets/profile-pic.jpg?enhanced';
</script>

<div class="relative flex w-full flex-col items-center px-15">
	<div class="mt-35 flex items-center justify-center">
		<div class="relative mr-15 w-50">
			<span class="absolute -top-7 -left-7 w-63">
				<svg
					id="Layer_1"
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1920 1920"
				>
					<path
						d="M1013.85767,111.92607c226.18708,13.78635,429.0434,114.07828,575.99683,268.30362"
						fill="none"
						stroke="#7c428b"
						stroke-miterlimit="10"
						stroke-width="13.02999"
					/>
					<path
						d="M1659.54375,462.79631c107.26085,144.52945,170.73867,323.75203,170.73867,517.66995,0,480.70435-389.65382,870.35817-870.35817,870.35817-480.55285,0-870.20667-389.65382-870.20667-870.35817,0-462.52454,360.86913-840.66449,816.27325-868.54019"
						fill="none"
						stroke="#7c428b"
						stroke-miterlimit="10"
						stroke-width="13.02999"
					/>
					<path
						d="M1583.24377,368.79333l37.76369,29.64545c.9817.77066,2.23786,1.10212,3.47199.91616l34.0895-5.13675c.21091-.03178.37689.17705.29833.37535l-12.69803,32.05062c-.4597,1.16031-.42029,2.45888.10891,3.58918l20.35743,43.48011c.12351.2638-.19213.51468-.42126.33482l-37.76368-29.64544c-.9817-.77066-2.23786-1.10212-3.47198-.91616l-34.0895,5.13674c-.21091.03178-.37689-.17705-.29833-.37535l12.69799-32.05067c.4597-1.16031.42029-2.45888-.10892-3.58919l-20.3574-43.48005c-.12351-.2638.19213-.51468.42126-.33482Z"
						fill="none"
						stroke="#7c428b"
						stroke-miterlimit="10"
						stroke-width="13.02999"
					/>
					<path
						d="M892.98802,111.65702l46.70498-11.11729c1.21413-.289,2.25523-1.06614,2.87754-2.14798l17.18973-29.88298c.10635-.18488.37311-.18489.47947,0l17.18983,29.88301c.62231,1.08183,1.66341,1.85897,2.87754,2.14798l46.70489,11.11727c.28337.06745.28337.47066,0,.53811l-46.70499,11.11729c-1.21413.289-2.25523,1.06614-2.87754,2.14798l-17.18972,29.88298c-.10635.18488-.37311.18489-.47947,0l-17.18983-29.883c-.62231-1.08184-1.66341-1.85898-2.87755-2.14798l-46.70488-11.11727c-.28337-.06745-.28337-.47066,0-.53811Z"
						fill="none"
						stroke="#7c428b"
						stroke-miterlimit="10"
						stroke-width="13.02999"
					/>
					<circle cx="1725.41006" cy="563.31744" r="25.13377" fill="#7c428b" />
					<circle cx="1775.6776" cy="675.46666" r="25.13377" fill="#7c428b" />
					<circle cx="1192.38805" cy="141.72184" r="25.13377" fill="#7c428b" />
				</svg>
			</span>
			<enhanced:img
				loading="lazy"
				class="rounded-full"
				src={profilePic}
				alt="Profile of Maite Huylebroeck"
			/>
		</div>
		<div class="text-primary">
			<h1 class="font-title text-6xl">Maïté Huylebroeck</h1>
			<h2 class="text-3xl">graphic design and communications</h2>
		</div>
	</div>
	<p class="mx-auto mt-20 w-2/3 text-center text-xl text-primary">
		Hey, I’m Maïté, a graphic designer and communication wizard with a soft spot for unexpected
		color combinations, balanced layouts, and the occasional quirky twist that makes a design unique
		and inspiring.
	</p>

	<a
		href="/about-me"
		role="button"
		class="mt-10 rounded-full bg-primary px-8 py-1.5 font-title text-2xl text-background shadow-xl transition-all hover:bg-background hover:text-primary hover:shadow-none hover:outline-2 hover:outline-primary"
	>
		Read more…
	</a>
</div>
