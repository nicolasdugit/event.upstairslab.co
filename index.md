---
layout: home
title: Vientiane Tech Talks
---
<!-- Header -->
<header class="masthead" id="page-top">
	<div class="container">
		<div class="intro-text">
			<div style="color: #fed136;" class="intro-lead-in">Vientiane Tech Talks</div>
			<div style="color: #fed136;" class="intro-heading text-uppercase">Second Meet Up</div>
			<div style="color: #fed136;" class="intro-lead-in">by UpstairsLab</div>
			<a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
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
				<li class="nav-item">
					<a class="nav-link js-scroll-trigger" href="#services">Informations</a>
				</li>
				<li class="nav-item">
					<a class="nav-link js-scroll-trigger" href="#portfolio">Speakers</a>
				</li>
				<li class="nav-item">
					<a class="nav-link js-scroll-trigger" href="#map">Map</a>
				</li>
				<li class="nav-item">
					<a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
				</li>
				<li class="nav-item">
					<a class="nav-link js-scroll-trigger" href="/archive.html">Archive</a>
				</li>
			</ul>
		</div>
	</div>
</nav>
<!-- About -->
<section id="services">
	<div class="container">
		<div class="row">
			<div class="col-lg-12 text-center">
				<h2 class="section-heading text-uppercase">Informations</h2>
				<h3 class="section-subheading text-muted">Find here all informations you need to know about the event</h3>
			</div>
		</div>
		<div class="row text-center">
			<div class="col-md-3">
				<span class="fa-stack fa-4x">
					<i class="fa fa-circle fa-stack-2x text-primary"></i>
					<i class="fa fa-calendar fa-stack-1x fa-inverse"></i>
				</span>
				<h4 class="service-heading">When</h4>
				<p class="text-muted">On Wenesday, 10th of October<br>Meet you at 6.00pm</p>
			</div>
			<div class="col-md-3">
				<span class="fa-stack fa-4x">
					<i class="fa fa-circle fa-stack-2x text-primary"></i>
					<i class="fa fa-map fa-stack-1x fa-inverse"></i>
				</span>
				<h4 class="service-heading">Where</h4>
				<p class="text-muted">This second event will take place at Lao IT dev office, Ban Vatnak</p>
			</div>
			<div class="col-md-3">
				<span class="fa-stack fa-4x">
					<i class="fa fa-circle fa-stack-2x text-primary"></i>
					<i class="fa fa-comments fa-stack-1x fa-inverse"></i>
				</span>
				<h4 class="service-heading">What</h4>
				<p class="text-muted">A meetup with talks about tech</p>
			</div>
			<div class="col-md-3">
				<span class="fa-stack fa-4x">
					<i class="fa fa-circle fa-stack-2x text-primary"></i>
					<i class="fa fa-child fa-stack-1x fa-inverse"></i>
				</span>
				<h4 class="service-heading">Who</h4>
				<p class="text-muted">Everyone interested is welcome!</p>
			</div>
		</div>
	</div>
</section>
<!-- Speakers -->
<section class="bg-light" id="portfolio">
	<div class="container">
		<div class="row">
			<div class="col-lg-12 text-center">
				<h2 class="section-heading text-uppercase">Speakers</h2>
				<h3 class="section-subheading text-muted"></h3>
			</div>
		</div>
		<div class="row">
{% for speaker in site.data.speakers %}
	{% if speaker.title == "second event" %}
			<div class="col-md-3 col-sm-6 portfolio-item">
				<a class="portfolio-link" data-toggle="modal" href="#portfolioModal{{ speaker.number }}">
					<div class="portfolio-hover">
						<div class="portfolio-hover-content">
							<i class="fa fa-plus fa-3x"></i>
						</div>
					</div>
					<img class="img-fluid" src="../assets/img/speakers/{{ speaker.img }}" alt="../assets/img/speakers/{{ speaker.alt }}">
				</a>
				<div class="portfolio-caption">
					<h4> {{ speaker.name }} </h4>
					<p class="text-muted">{{ speaker.subtitle }}</p>
				</div>
			</div>
	{% endif %}
{% endfor %}
			<div class="col-lg-12 text-center">
				<h2 style="color: #fed136" class="section-heading text-uppercase">Coming Soon</h2>
			</div>
		</div>
	</div>
</section>
<!-- Map -->
<section id="map">
	<div class="container">
		<div class="row">
			<div class="col-lg-12 text-center">
				<h2 class="section-heading text-uppercase">Find Us</h2>
				<h3 class="section-subheading text-muted">Here is the plan to join us</h3>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-12">
				<div id='map_box' style="width: auto; height: 600px;"></div>
			</div>
		</div>
	</div>
</section>
<!-- Clients -->
<section class="py-5 bg-light">
	<div class="container">
		<div class="row">
			<div class="col-lg-12 text-center">
				<h2 class="section-heading text-uppercase">Sponsors</h2>
				<h3 class="section-subheading text-muted"></h3>
			</div>
		</div>
		<div class="row">
{% for sponsor in site.data.sponsors %}
	{% if sponsor.title == "second event" %}
			<div class="col">
				<a style="text-align: center;" href="{{ sponsor.website }}">
		{% if sponsor.logo %}
					<img class="img-fluid d-block mx-auto" src="../assets/img/logos/{{ sponsor.logo }}" alt="{{ sponsor.alt }}">
		{% else sponsor.logo %}
					<h2 style="font-family: 'Kaushan Script','Helvetica Neue',Helvetica,Arial,cursive">{{ sponsor.name }}</h2>
		{% endif %}
				</a>
			</div>
	{% endif %}
{% endfor %}
		</div>
	</div>
</section>
<!-- Contact -->
<section id="contact">
	<div class="container">
		<div class="row">
			<div class="col-lg-12 text-center">
				<h2 class="section-heading text-uppercase">Contact Us</h2>
				<h3 class="section-subheading text-muted">Any question ?</h3>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-12">
				<form  name="sentMessage" action="https://formspree.io/contact@nicolasduquesne.com" method="POST">
				<!-- formspree -->
					<input type="hidden" name="_next" value="#" />
					<input type="hidden" name="_language" value="en" />
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<input class="form-control" name="name" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." />
								<p class="help-block text-danger"></p>
							</div>
							<div class="form-group">
								<input class="form-control" id="email" name="_replyto" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
								<p class="help-block text-danger"></p>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<textarea class="form-control" id="message" name="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
								<p class="help-block text-danger"></p>
							</div>
						</div>
						<div class="clearfix">
						</div>
						<div class="col-lg-12 text-center">
							<div id="success">
							</div>
							<button  class="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</section>
<!-- Portfolio Modals -->
{% for speaker in site.data.speakers %}
	{% if speaker.title == "second event" %}
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
							<!-- <img class="img-fluid d-block mx-auto" style="max-height: 300px;" src="../assets/img/speakers/{{ speaker.img }}" alt="../assets/img/speakers/{{ speaker.alt }}"> -->
							<p>{{ speaker.description }}</p>
							<div class="col-md-12">CONTACT</div>
							<div class="col-md-6 offset-md-3">
		{% if speaker.website %}
								<span class="col-md-6"><a href="{{ speaker.website }}"><i class="fa fa-internet-explorer fa-2x"></i></a></span>
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
<!-- Footer -->
<footer>
	<div class="container">
		<div class="row">
			<div class="col-md-4">
				<span class="copyright">Copyright &copy; UpstairLab 2018</span>
			</div>
		</div>
	</div>
</footer>