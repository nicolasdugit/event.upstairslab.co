---
layout: archive
title: Vientiane Tech Talks Archives
permalink: 
---

<!-- Header -->
<header class="archivehead" id="page-top">
	<div class="container">
		<div class="intro-text">
			<h1 style="color: ;" class="intro-lead-in">Vientiane Tech Talks</h1>
			<div style="color: ;" class="intro-heading text-uppercase">Previous Events</div>
			<div style="color: ;" class="intro-lead-in">by UpstairsLab</div>
		</div>
	</div>
</header>
<!-- Navigation -->
<nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
	<div class="container">
		<a class="navbar-brand js-scroll-trigger" href="#page-top">Vientiane Tech Talks</a>
		<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu<i class="fa fa-bars"></i></button>
		<div class="collapse navbar-collapse" id="navbarResponsive">
			<ul class="navbar-nav text-uppercase ml-auto">
				<li class="nav-item nav-archive">
					<a class="nav-link js-scroll-trigger" href="#first">First Event</a>
				</li>
				<li class="nav-item nav-archive">
					<a class="nav-link js-scroll-trigger" href="index.html">Home</a>
				</li>
			</ul>
		</div>
	</div>
</nav>
{% include event/event_1.md %}
<!-- Portfolio Modals -->
{% for speaker in site.data.speakers %}
	{% if speaker.title == "first event" %}
<div class="portfolio-modal modal fade" id="portfolioModal{{ speaker.number }}" tabindex="-1" role="dialog" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="close-modal" data-dismiss="modal">
				<div class="lr">
					<div class="rl"></div>
				</div>
			</div>
			<div class="container">
				<div class="row">
					<div class="col-lg-8 mx-auto">
						<div class="modal-body">
						<!-- Project Details Go Here -->
							<h3 class="text-uppercase">{{ speaker.topic }}</h3>
							<p class="item-intro text-muted">{{ speaker.name }}</p>
							<!-- <img class="img-fluid d-block mx-auto" style="max-height: 300px;" src="assets/img/speakers/{{ speaker.img }}" alt="assets/img/speakers/{{ speaker.alt }}"> -->
							<p>{{ speaker.description }}</p>
							<div class="col-md-12">CONTACT</div>
							<div class="col-md-6 offset-md-3">
		{% if speaker.website %}
								<span class="col-md-6"><a href="{{ speaker.website }}"><i class="fa fa-globe fa-2x"></i></a></span>
		{% endif %}
		{% if speaker.facebook %}
								<span class="col-md-6"><a href="{{ speaker.facebook }}"><i class="fa fa-facebook fa-2x"></i></a></span>
		{% endif %}
							</div>
							<hr>
							<button class="btn btn-primary" data-dismiss="modal" type="button"><i class="fa fa-times"></i>Close Project</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
	{% endif %}
{% endfor %}